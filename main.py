from flask import send_file, Flask, render_template, redirect, send_from_directory
from wcloud import createServer

app = Flask(__name__)

server = None

@app.before_request
def create_server():
    global server
    if server is None:
        server = createServer(host="0.0.0.0", port=3550)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/stop", methods=["GET", "POST"])
def stop():
    server.stop_container()
    return redirect("/")

@app.route("/files")
def get_files():
    file_list = server.get_file_list()
    return render_template("files.html", files=file_list)

@app.route("/download/<filename>")
def download_file(filename):
    if filename:
        return send_from_directory("uploaded_files", filename, as_attachment=True)
    return "檔案名稱不能為空"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
