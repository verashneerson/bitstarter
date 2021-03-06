var express = require('express')
var fs = require('fs')

var app = express()

console.log("hello world")

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  //response.send('Hello World 2!')
  var fileContents = fs.readFileSync('index.html', 'utf8')
  console.log(fileContents)
  var out = fileContents.toString()
  console.log(out)
  response.send(out)
})

app.get('/styles.css', function(request, response) {
  var fileContents = fs.readFileSync('styles.css', 'utf8')
  var out = fileContents.toString()
  response.send(out)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
