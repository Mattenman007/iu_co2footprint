const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

//Tabelle erstellen
db.serialize(() => {
  db.run("CREATE TABLE emissionen (id INTEGER PRIMARY KEY, land TEXT, unternehmen TEXT, co2 INTEGER)");

  //fiktive Daten
  const stmt = db.prepare("INSERT INTO emissionen (land, unternehmen, co2) VALUES (?, ?, ?)");
  stmt.run("Deutschland", "Energie BRD", 10500000);
  stmt.run("Deutschland", "Auto400", 7000000);
  stmt.run("Deutschland", "Telomat", 1300000);
  stmt.run("Deutschland", "Kaufmarkt2000", 1200000);
  stmt.run("Japan", "Haschi Raksu", 20500000);
  stmt.run("Japan", "Sushi Mawuschi", 560000);
  stmt.run("USA", "Rocketmaker", 15000000);
  stmt.run("USA", "Oil&Energy", 25000000);
  stmt.run("USA", "BuyHere", 800000);
  stmt.run("USA", "NY Brakes", 9000000);
  stmt.run("China", "Naghi Salooh", 80500000);
  stmt.run("China", "Sam Wani", 300000);
  stmt.finalize();
});

module.exports = db;
