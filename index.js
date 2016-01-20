var express = require('express'),
    fs = require('fs')

var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  #response.send('Hello World 2!')
  var file = fs.readFile('index.html', 'utf8').toString()
  response.send(file)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
