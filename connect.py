from flask import Flask, render_template, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/run_detect', methods=['POST'])
def run_detect():
    if request.method == 'POST':
        print("Button clicked")
        # Jalankan skrip detect.py menggunakan subprocess
        result = subprocess.run(
            ['python', 'detect.py'],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        if result.returncode == 0:
            return jsonify({"output": result.stdout})
        else:
            return jsonify({"error": result.stderr}), 500

if __name__ == '__main__':
    app.run()