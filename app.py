from flask import Flask, render_template, redirect
from subprocess import run

app = Flask(__name__)
app.template_folder = 'templates'
app.static_folder = 'templates/assets'


@app.route('/')
def index():
    return render_template('index.html', title='home')


@app.route('/detect')
def detect():
    run(["python", "detect.py"])
    return render_template('detect.html', title='detect')


@app.route('/info')
def info():
    return render_template('info.html', title='info')


@app.route('/webcam')
def webcam():
    return render_template('webcam.html', title='webcam')


@app.route('/upload')
def upload():
    return render_template('upload.html', title='upload')
