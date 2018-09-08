var dotenv = require('dotenv');
dotenv.load();

import restify from 'restify';
import * as builder from 'botbuilder';

import server from './bootstrap/server'
import botConnector from './bootstrap/botConnector';
import Bot from './src';


const connector = botConnector()

// Listen for messages from users
server().post('/api/messages', connector.listen());


Bot(connector); // enty point for bot
