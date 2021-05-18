const express = require("express");
const bodyParser = require("body-Parser");

const app= express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/" , function(request,response) {
  response.sendFile(__dirname+"/index.html");
});


app.post("/" , function(request,response)
{
  var n1 = Number(request.body.num1);
  var n2 = Number(request.body.num2);
  var result = n1/(n2*n2);
  response.send("The answer is "+ result);
});


app.listen(3000, function() {
  console.log("Server has started on port 3000");
});
