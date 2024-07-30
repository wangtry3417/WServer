from flask import send_file,Flask,render_template,redirect
from wcloud import createServer

app = Flask(__name__)

@app.route("/")
def index():
  return render_template("index.html")

@app.route("/stop")
def stop():
  server.stop_container()
  return redirect("/")

@app.route("/files")
def get_files():
  file_list = server.get_file_list()
  return render_template("files.html",files=file_list)

if __name__ == "__main__":
  app.run(host="0.0.0.0",port=5000)
  # 創建wcloud服務器
  server = createServer(host="0.0.0.0", port=3550)
