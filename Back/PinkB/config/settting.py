#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Created by huwenting

import os
from flask import Flask,request,jsonify
# from flask_sqlalchemy import SQLAlchemy

import mysql.connector

import pymysql


# 服务端口配置
SERVER_PORT = 9999

# MySQL配置
MYSQL_HOST = "127.0.0.1"
MYSQL_PORT = 3306
MYSQL_USER = "root"
MYSQL_PASSWD = ""
MYSQL_DB = "flask_demo"

# Redis配置
REDIS_HOST = "192.168.89.128"
REDIS_PORT = 6379
REDIS_PASSWD = "123456"
# token过期时间(单位：秒)
EXPIRE_TIME = 600

# MD5加密盐值
MD5_SALT = "test2020#%*"



# brew services start mysql
# mysql -u root -p -e "SHOW DATABASES";

app = Flask(__name__)

# SQLALCHEMY_DATABASE_URI: 'mysql://root:password@127.0.0.1:3307/testdb?charset=utf8mb4'

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root@localhost/pinkcat_db?charset=utf8mb4'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="pinkcat_db"
)

cursor = mydb.cursor()


# cursor.execute("SELECT * FROM your_table")
# result = cursor.fetchall()
# for row in result:
#     print(row)









