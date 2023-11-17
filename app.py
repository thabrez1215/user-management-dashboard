# app.py
from flask import Flask, send_from_directory, request, jsonify
from flask_cors import CORS
import mysql.connector
import os



app = Flask(__name__)

# MySQL database configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'users',
    'port': 3306,
}

# Create a MySQL connection
db = mysql.connector.connect(**db_config)
cursor = db.cursor()

# Create a table for storing account information
create_table_query = '''
CREATE TABLE IF NOT EXISTS accounts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(15),
    password VARCHAR(255)
)
'''
cursor.execute(create_table_query)
db.commit()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and path != "favicon.ico" and os.path.exists("build/" + path):
        return send_from_directory('build', path)
    else:
        return send_from_directory('build', 'index.html')
    

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('build/static', filename)



@app.route('/create_accounts', methods=['POST'])
def create_accounts():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        phone = request.form['phone']
        password = request.form['password']

        insert_query = '''
        INSERT INTO accounts (username, email, phone, password) 
        VALUES (%s, %s, %s, %s)
        '''
        cursor.execute(insert_query, (username, email, phone, password))
        db.commit()

        return 'Account created successfully!'

# API endpoint to receive data from React and store it in the database
@app.route('/api/create_user', methods=['POST'])
def api_create_user():
    data = request.get_json()

    username = data.get('username')
    email = data.get('email')
    phone = data.get('phone')
    password = data.get('password')

    insert_query = '''
    INSERT INTO accounts (username, email, phone, password) 
    VALUES (%s, %s, %s, %s)
    '''
    cursor.execute(insert_query, (username, email, phone, password))
    db.commit()

    return jsonify({'message': 'User created successfully'})

if __name__ == '__main__':
    app.run(debug=True)
