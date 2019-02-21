const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    connection: {filename: './dev.sqlite3'},
    useNullAsDefault: true,
}

const db = knex(knexConfig);

const server = express();

server.use(express.json());
server.use(helmet());

// Endpoints Below