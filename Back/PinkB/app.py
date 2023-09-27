#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Created by huwenting


from flask import Flask,request,jsonify
from config.settting import  app
from api import user

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)