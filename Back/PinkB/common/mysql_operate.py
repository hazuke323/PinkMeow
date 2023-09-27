#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Created by huwenting

import mysql.connector


class MysqlDb():
    def __init__(self):
        mysql.connector.connect(
            host="localhost",
            user="your_username",
            password="your_password",
            database="your_database"
        )
