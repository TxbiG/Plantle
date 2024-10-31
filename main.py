import os
from flask import Flask, render_template, after_this_request

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(128)
app.config['SERVER_NAME'] = 'localhost:5000'

@app.route("/")
def index():
    return render_template('index.html')

# -----------------------------------------------------
#                      Errors
# -----------------------------------------------------
@app.errorhandler(400) # 400 Bad Request.
def error404(error):
    return render_template('Errors.html', Error="400", message="Bad Request")
@app.errorhandler(404) # 404 Page not found.
def error404(error):
    return render_template('Errors.html', Error="404", message="Page not found")
@app.errorhandler(500) # 500 Internal Server Error
def error500(error):
    return render_template('Errors.html', Error="500", message="Internal Server Error")
@app.errorhandler(502) # 502 Bad Gateway.
def error500(error):
    return render_template('Errors.html', Error="502", message="Bad Gateway")
@app.errorhandler(503) # 503 Service Unavailable.
def error500(error):
    return render_template('Errors.html', Error="503", message="Service Unavailable")
@app.errorhandler(504) # 504 Gateway Timeout.
def error504(error):
    return render_template('Errors.html', Error="504", message="Gateway Timeout")

if __name__ == "__main__":
    app.debug = True
    app.run(threaded=True)