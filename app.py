from flask import Flask, render_template
import random

app = Flask(__name__)

@app.route('/')
def index():
    role = random.choice(['Police', 'Homeless'])
    return render_template('index.html', role=role)

if __name__ == '__main__':
    app.run(debug=True)