from flask import send_file,Flask,render_template
from wcloud import createServer

app = Flask(__name__)

@app.route("/")
def index():
  return render_template("index.html")


if __name__ == "__main__":
  app.run(host="0.0.0.0",port=5000)
  # 創建wcloud服務器
  server = createServer(host="0.0.0.0", port=3550)
