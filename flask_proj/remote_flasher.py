import subprocess
from subprocess import check_output, CalledProcessError, run
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index3.html')


@app.route('/flash', methods=['POST'])
def flash():
    firmware = request.files['firmware']
    filename = firmware.filename
    firmware.save(fr'../firmwares/{filename}')
    try:
        rv = check_output(['espruino', '-p', '/dev/ttyACM0', '-w', f'{filename}', '-e', 'save()'], shell=True)
        print('#'*10 + '\n', rv, '#'*10 + '\n')
        return render_template('index3.html', rv=rv)
    except CalledProcessError:
        return render_template('index3.html', rv='Что-то пошло не так... Попробуйте еще раз!')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
