const { User } = require('../models');
const connection = require('../config/connection');
const { db } = require('../models/User');

db.dropCollection('users');
console.log('users collection dropped.');

const usersData = [
    {
        username: "BigJoe12",
        email: "joe@aol.com",
        password: "password"
    },
    {
        username: "BigTony21",
        email: "Toe@aol.com",
        password: "password"
    },
    {
        username: "Joeyboy123456789",
        email: "joeyboy@aol.com",
        password: "password"
    },
    {
        username: "Tonyboy987654321",
        email: "Tonyboy@aol.com",
        password: "password"
    },
    {
        username: "Sarah5577",
        email: "sarah@aol.com",
        password: "password"
    },
    {
        username: "rickyticky1",
        email: "rickster@aol.com",
        password: "password"
    },
    {
        username: "Danielleo",
        email: "yello@aol.com",
        password: "password"
    },
    {
        username: "Spaghetti2",
        email: "spaghet@aol.com",
        password: "password"
    },
    {
        username: "Emily25",
        email: "emily@aol.com",
        password: "password"
    },
    {
        username: "taylor33",
        email: "taylor@aol.com",
        password: "password"
    }
];

async function seedUsers() {
    await User.create(usersData);
    console.log('Users seeded.');
}

seedUsers();