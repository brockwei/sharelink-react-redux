//Redis
var redis = require('redis');
var client = redis.createClient({
    host: 'localhost',
    port: 6379
});
client.on('error', function(err:any){
    console.log(err);
});

export default client;