module.exports = (_request, response) => 
  response.status(404).send("Route does not exists.");