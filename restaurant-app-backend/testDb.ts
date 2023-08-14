import pool from './database';

pool.query('SELECT * FROM Food', (err, results) => {
  if (err) {
    console.error('Error retrieving data:', err.message);
    return;
  }
  console.log(results);
  pool.end();  // Close the connection pool
});
