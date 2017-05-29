const express = require('express');

//Create app
const app = express();

app.get('/', function(request, response){
	const contactId = request.query.contactId;
    response.send('hello ' + contactId);
});

let port = 8080;
if(process.env.PORT){
	port = process.env.PORT;
}
app.listen(port, function() {
    console.log('app started');
});
