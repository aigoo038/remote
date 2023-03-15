from subprocess import CalledProcessError, run, check_output, STDOUT
from flask import Flask, render_template, request, redirect, url_for
import os
app = Flask(__name__)

FIRMWARE_DIR = '../firmwares'


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/flash', methods=['POST'])
def flash():
    firmware = request.files['firmware']
    filename = firmware.filename
    filepath = os.path.join(FIRMWARE_DIR, filename)
    firmware.save(filepath)
    print("FIRMWARE NAME: ", filename)
    try:
        result = check_output(['espruino', '-p', '/dev/ttyACM0', f'{filepath}', '-e', 'save()'])
    except CalledProcessError as e:
        result = f'Error flashing firmware'
    return render_template('index.html', rv=result)
#    try:
 #       rv = check_output(['espruino', '-p', '/dev/ttyACM0', f'{filepath}', "-e", "save()"], stderr=STDOUT)
  #      #return render_template('index.html', rv=f"OK!")
   # except CalledProcessError as e:
    #    err_msg = e.output.decode('utf-8').strip()
     #   return render_template('index.html', rv=f'Что-то пошло не так... Попробуйте еще раз! {err_msg}')
    #return render_template('index.html', rv=f"OK!")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
