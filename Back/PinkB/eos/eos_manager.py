#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Created by huwenting


from eospy import WalletApi,ChainApi

import json


api_endpoint = 'https://jungle4.cryptolions.io:443'
chain_api= ChainApi(api_endpoint)



contract_account = '19c77449b46f2bf1617874e7b95157ca1fea0129175beec764d92fcc7934dcf7'
account_name = 'pinktestacnt'

data = {
    'user':'world',
}


def create_nft():
     eos_tool('mint',data)

def cat_transfer():
    eos_tool('transfer',data)

def eos_burn_nft():
    eos_tool('burn',data)

def eos_seturi_nft():
    eos_tool('seturi',data)


def eos_tool(contract_method,data):
    action = {
        'account': contract_account,
        'name': contract_method,
        'authorization': [{
            'actor': account_name,
            'permission': 'active',
        }],
        'data': data
    }
    response = chain_api.push_transaction(action)
    print(response)






