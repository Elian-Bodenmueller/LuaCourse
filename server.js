const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/advanced', (req, res) => {
  if (req.query.paid === 'true') {
    res.sendFile(path.join(__dirname, 'public', 'advanced.html'));
  } else {
    res.sendFile(path.join(__dirname, 'public', 'paywall.html'));
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
