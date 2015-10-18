db = new sqlite3.Database('points.db');


// Database initialization
db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='points'",
       function(err, rows) {
  if(err !== null) {
    console.log(err);
  }
  else {
    console.log("SQL Table 'nodes' already initialized.");
  }
});
