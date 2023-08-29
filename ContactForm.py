import smtplib
import ssl
from email.message import EmailMessage
from tkinter import *
import os.path
from os.path import exists
import socket
import platform
from datetime import datetime
from tkinter import scrolledtext  # For Beta Version the password is always "Pass"
import os
import time
import datetime
import requests
from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import json

#Gmail: PersonalWebpageInquiries@gmail.com

#Password: sdfdsf243524t4dsf23rfafssdfa

#Access Password: onvzmvwmoujzxwjc


#Turn op Flask Server------------------------------------------

#cd C:\Users\Big_T\OneDrive\Desktop\VsCode\Personal Webpage
#set FLASK_APP=ContactForm.py
#set FLASK_ENV=development
#flask run

#Turn op Flask Server------------------------------------------

def Email_Valid(Email):
    email_address = Email
    response = requests.get("https://isitarealemail.com/api/email/validate", params={'email': email_address})
    status = response.json()['status']
    if status == "valid":
        return ("Valid")
    elif status == "invalid":
        return ("Not Valid")
    else:
        return("Does Not Exist")


def Send_Email(Name, Email, Body):

    uname = platform.uname()

    hostname = socket.gethostname()
    IPAddr = socket.gethostbyname(hostname)
    email_sender = "PersonalWebpageInquiries@gmail.com"
    email_password = "onvzmvwmoujzxwjc"
    email_receiver = "lleins237@gmail.com"

    subject = Name + ' / ' + Email

    body = Body

    em = EmailMessage()
    em['From'] = email_sender
    em['To'] = email_receiver
    em['Subject'] = subject
    em.set_content(body)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, email_receiver, em.as_string())

 
#Server Communication ----------------------------------------------------------





app = Flask(__name__)

CORS(app)

@app.route('/process_data', methods=['POST'])
def process_data():
    data = request.get_json()  # Assuming your JavaScript sends data as JSON

    NameData = data['Name']
    EmailData = data['Email']
    BodyData = data['Body']

    Send_Email(NameData, EmailData, BodyData) #Sends Email with JSON Parsed Data from Flask Server 


    result = {'message': 'Data received successfully and processed!'}
    return jsonify(result)

if __name__ == '__main__':
    app.run()




#Server Communication ----------------------------------------------------------
