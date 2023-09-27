#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Created by huwenting


from flask import Flask,request,jsonify
from config.settting import app


@app.route('food/list',methods=['POST'])
def foods():
    userid = request.form.get('name')


@app.route('food/info',methods=['POST'])
def food():
    foodid = request.form.get('fid')