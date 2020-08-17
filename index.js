'use strict';

const TelegramBot = require('node-telegram-bot-api');

const { groups } = require('./db');
const config = require('./config.json');

const bot = new TelegramBot(config.token, { polling: true });
