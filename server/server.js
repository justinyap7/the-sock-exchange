import express, { json } from 'express';
import { promises as fs } from 'fs';

const app = express();
const PORT = 3000;

// Endpoint to read and send JSON file content

app.use(express.json());

app.get('/socks/:color', async (req, res) => {
    try {
        // Get the color parameter from the URL
        const color = req.params.color.toLowerCase();

        // Read the socks data from the file
        const data = await fs.readFile('../data/socks.json', 'utf8');
        const jsonObj = JSON.parse(data);

        // Filter the socks by matching color (assuming color is a property in the JSON objects)
        const matchingSocks = jsonObj.filter(sock => sock.color.toLowerCase() === color);

        // If no matching socks are found, return a 404 status code
        if (matchingSocks.length === 0) {
            return res.status(404).send(`No socks found with the color: ${color}`);
        }

        // Return the matching socks
        res.json(matchingSocks);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No socks for you! ☹");
    }
});

app.post('/socks', async (req, res) => {
    try {
        // Obligatory reference to POST Malone
        console.log("If POST Malone were a sock, he'd be the one with the most colorful pattern.");
        // Simulate creating a user
        const { username, email } = req.body;
        if (!username || !email) {
            // Bad request if username or email is missing
            return res.status(400).send({ error: 'Username and email are required.' });
        }

        // Respond with the created user information and a 201 Created status
        res.status(201).send({
            status: 'success',
            location: 'http://localhost:3000/users/1234', // This URL should point to the newly created user
            message: 'User created successfully.'
        });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No socks for you! ☹");
    }
});


app.delete('/socks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Deleting sock with ID:', id);
        res.status(200).send('Sock deleted successfully');
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Hmm, something doesn\'t smell right... Error deleting sock');
    }
});


app.put('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { email } = req.body;
        console.log('Updating email for user with ID:', id);
        res.status(200).send({
            status: 'success',
            data: email, // This URL should point to the newly created user
            message: 'User updated successfully.'
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Hmm, something doesn\'t smell right... Error deleting sock');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 