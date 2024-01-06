app.post('/analyze', async (req, res) => {
  const { text, lang } = req.body;

  const formdata = new FormData();
  formdata.append("key", "YO645dd7081e8d5216c571a1e6bfb2cf4e");
  formdata.append("txt", text);
  formdata.append("en", lang);

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions);

    if (response.ok) {
      const data = await response.json();
      res.json(data);
    } else {
      res.status(response.status).json({ error: 'API request failed' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});