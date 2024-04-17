const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/userSchema');

async function register(req, res) {
    try {
        const { username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new Users({ username, password: hashedPassword });
        await user.save();
        res.json({ message: 'User registred'})
    } catch (error) { 
        console.error("Error adding user: ", error);
        res.status(500).json({ error: 'Registration failed'})

    }
}

async function login(req, res) {
    try {
        const { username, password } = req.body;
        const user = await Users.findOne({ username });
        if(!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid credentials "});
        }
        const token = jwt.sign({ username: user.username }, 'hemlig_nyckel', { expiresIn: '1h' });
        res.json({ token });

    } catch (error) {
        console.error('Login Failed:', error);
        res.status(500).json({ error: 'Login Failed' });
    }
}

module.exports = { register, login };