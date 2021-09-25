import os
from flask import Flask, send_file
from flask_mongoengine import MongoEngine
from flask_cors import CORS
from secret import SECRET_KEY

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)
    app.config.from_mapping(
        SECRET_KEY=SECRET_KEY,
    )
    app.config['MONGODB_SETTINGS'] = {
        "db": "crm",
        'host': 'localhost',
        'port': 27017
    }

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    db = MongoEngine()
    db.init_app(app)


    @app.route('/js/<filename>', methods=["GET"])
    def get_js(filename):
        return send_file('./static/dist/js/{0}'.format(filename))

    @app.route('/css/<filename>', methods=["GET"])
    def get_css(filename):
        return send_file('./static/dist/css/{0}'.format(filename))

    @app.route('/img/<filename>', methods=["GET"])
    def get_img(filename):
        return send_file('./static/dist/img/{0}'.format(filename))

    @app.route('/favicon.ico', methods=["GET"])
    def get_ico():
        return send_file('./static/dist/favicon.ico')
    @app.route('/app/<foo>', methods=["GET"])
    def login(foo):
        return send_file('./static/dist/index.html')
    

    from . import auth
    app.register_blueprint(auth.bp)
    from . import dashboard
    app.register_blueprint(dashboard.bp)
    return app
