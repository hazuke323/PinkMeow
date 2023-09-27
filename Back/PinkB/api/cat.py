#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Created by huwenting


from config.settting import app
from flask import request,session,jsonify

@app.route('/cat/info')
def catInfo():
    return 'hello world!'


@app.route('cat/create',methods=['POST'])
def createCat():
    cat_name = request.form.get('name')
    cat_age = request.form.get('age')


@app.route('cat/info', methods=['POST'])
def catinfo():
    # from = LookupError
    cat_name = request.form.get('name')
    cat_age = request.form.get('age')

    # cat = cat_manager()
    # db.session.add(cat);
    # db.session.c

@app.route('cat/list',methods=['POST'])
def getCats():
    userid = request.form.get('userid')

