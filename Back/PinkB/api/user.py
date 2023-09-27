#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Created by huwenting

from flask import Flask,request,jsonify
from config.settting import app

# app = Flask(__name__)
# app.config["JSON_AS_ASCII"] = False  # jsonify返回的中文正常显示


@app.route('/')
def helloworld():
    return 'hello world!'




