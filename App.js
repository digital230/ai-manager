var dotenv = require('dotenv');
dotenv.load();

import restify from 'restify';
import * as builder from 'botbuilder';

import server from './bootstrap/server'
import botConnector from './bootstrap/botConnector';
import Bot from './bot';
import db from './bootstrap/db';
import dialogs from './dialogs';



const connector = botConnector();
db();
server().post('/api/messages', connector.listen());
const bot = Bot(connector); // enty point for bot
dialogs(bot);

