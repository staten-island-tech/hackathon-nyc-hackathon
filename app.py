from flask import Flask, render_template
import requests

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        return render_template("index.html")
    
    elif request.method == "POST":
        search = request.form.get("search")
        url = f"http://www.rotaryspin.com/mc/api/beatles.php?query={search}"
        response =requests.get(url)
        response.raise_for_status()
        data = response.json()