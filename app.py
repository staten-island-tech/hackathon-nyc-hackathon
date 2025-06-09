from flask import Flask, render_template
import requests

app = Flask(__name__)

@app.route("/")
def index():

    return render_template("index.html")
search = requests("search")
url = f"http://www.rotaryspin.com/mc/api/beatles.php?query={search}"
response =requests.get(url)
response.raise_for_status()
data = response.json()

if __name__ == "__main__":
    app.run(debug=True)
