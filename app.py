import os
from flask import Flask, request, jsonify, render_template
# from flask import render_template
import uuid


app = Flask(__name__,static_folder='static')

APP_ROOT = os.path.dirname(os.path.abspath(__file__))
UPLOAD_FOLDER = os.path.join(APP_ROOT, 'uploads')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER 

@app.route('/api/upload', methods=['POST'])
def upload_file_api():
    if request.method == 'POST':
        file = request.files['file']
        if file:
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], f'{uuid.uuid4()}_{file.filename}'))
            return jsonify({'message': 'File uploaded successfully'})
    
    return jsonify({'error': 'Missing file'})

@app.route('/upload', methods=['GET'])
def upload_file():
    # if request.method == 'POST':
    #     file = request.files['file']
    #     if file:
    #         file.save(os.path.join(app.config['UPLOAD_FOLDER'], f'{uuid.uuid4()}_{file.filename}'))
    #         return jsonify({'message': 'File uploaded successfully'})
    #     return jsonify({'error': 'Missing file'})

    # Render the HTML form for GET requests
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=8000, host='0.0.0.0')
