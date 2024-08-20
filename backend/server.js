const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/emissionen', (req, res) => {
  const { land, unternehmen, sortby, order } = req.query;

  let query = "SELECT * FROM emissionen WHERE 1=1";
  const params = [];

  if (land) {
    query += " AND LOWER(land) = LOWER(?)";
    params.push(land);
  }

  if (unternehmen) {
    query += " AND LOWER(unternehmen) = LOWER(?)";
    params.push(unternehmen);
  }

  const validSortColumns = ['land', 'unternehmen'];
  const sortOrder = order && order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

  if (sortby && validSortColumns.includes(sortby)) {
    query += ` ORDER BY ${sortby} ${sortOrder}`;
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
