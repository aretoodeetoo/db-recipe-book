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

// Get All dishes
server.get('/api/dishes', async (req, res) => {
    try {
        const dishes = await db('dishes');
        res.status(200).json(dishes);
    } catch(error) {
        res.status(500).json(error);
    }
});

// Get all recipes
server.get('/api/recipes', async (req, res) => {
    try {
        const recipes = await db('recipes');
        res.status(200).json(recipes);
    } catch(error) {
        res.status(500).json(error);
    }
})

const port = 3300;
server.listen(port, function() {
    console.log(`Server listening on port 3300`);
})