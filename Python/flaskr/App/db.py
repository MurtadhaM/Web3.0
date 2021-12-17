import sqlite3

import click
from flask import current_app, g
from flask.cli import with_appcontext
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

sqlschema = '''

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS post;

CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  publicAddress TEXT UNIQUE NOT NULL
);

CREATE TABLE post (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  author_id INTEGER NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  FOREIGN KEY (author_id) REFERENCES user (id)
);

'''



def get_db():
    if  not os.path(',/flaskr.sqlite').exists() :
        d.db = db.connect(
           
        )
    else:    
        d = app.init_app()
        

        d = sqlite3.init()
    
        
        d.execute(sqlschema.encode('utf-8'))
        print(d.table())

        return db

db = get_db()


def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()
        
def init_db():
    db = get_db()
    db = db.execute(sqlschema)
    
    return db



@with_appcontext
def init_db_command():
    """Clear the existing data and create new tables."""
    db =     click.echo('Initialized the database.')
    

def init_app(app):
    #app.teardown_appcontext(close_db)
    g = get_db()
    
    
    
    
    
    

db.write('flaskr.sqlite')
