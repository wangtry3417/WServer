from flask import send_file,Flask,render_template
from wcloud import createServer

app = Flask(__name__)
# 創建服務器
server = createServer(host="0.0.0.0", port=3550)

@app.route("/")
def index():
  return render_template("index.html")
