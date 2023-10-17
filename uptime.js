app = require('express')();

app.get('/', (req, res) => res.send('Online'));

app.get("/", (request, response) => {
  console.log("GET READY");
  response.sendStatus(200);
});

module.exports = () => {
  app.listen(3000);
}
