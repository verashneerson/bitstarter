var express = require('express')
var fs = require('fs')

var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  #response.send('Hello World 2!')
  var fileContents = fs.readFileSync('index.html', 'utf8')
  console.log(fileContents)
  var out = fileContents.toString()
  console.log(out)
  response.send(out)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
