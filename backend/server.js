const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = 3001;

//Anfragen von anderen Domains erlauben
app.use(cors());

//Route definieren
app.get('/emissionen', (req, res) => {
  const { land, unternehmen, sortby, order } = req.query;

  //Basis-SQL-Abfrage
  let query = "SELECT * FROM emissionen WHERE 1=1";
  const params = [];

  //Abfrage verändern, falls Filterung gewünscht
  if (land) {
    query += " AND LOWER(land) = LOWER(?)";
    params.push(land);
  }

  if (unternehmen) {
    query += " AND LOWER(unternehmen) = LOWER(?)";
    params.push(unternehmen);
  }

  //Sortierung
  const validSortColumns = ['land', 'unternehmen'];
  const sortOrder = order && order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

  if (sortby && validSortColumns.includes(sortby)) {
    query += ` ORDER BY ${sortby} ${sortOrder}`;
  }

  //Abfrage ausführen
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
