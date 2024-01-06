const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const FormData = require('form-data');
const path = require('path'); // Added for serving static files

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/analyze', async (req, res) => {
  try {
    const { text, lang } = req.body;

    const formdata = new FormData();
    formdata.append('key', '645dd7081e8d5216c571a1e6bfb2cf4e');
    formdata.append('txt', text);
    formdata.append('lang', lang);

    const requestOptions = {
      method: 'POST',
      body: formdata,
    };

    const response = await fetch('https://api.meaningcloud.com/sentiment-2.1', requestOptions);

    if (response.ok) {
      const data = await response.json();
      res.json(data); // Send the analysis result as a JSON response
    } else {
      res.status(response.status).json({ error: 'API request failed' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'client', 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.status(404).send('Page Not Found');
});

app.get('*', (req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
