const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/healthcheck', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: 200 }, null, 3));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})