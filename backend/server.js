const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = 3001;

app.use(cors());

// Route zum Abrufen von Emissionsdaten
app.get('/emissionen', (req, res) => {
  const { country, company } = req.query;
  
  let query = "SELECT * FROM emissionen WHERE 1=1";
  const params = [];

  if (country) {
    query += " AND land = ?";
    params.push(country);
  }

  if (company) {
    query += " AND unternehmen = ?";
    params.push(company);
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
