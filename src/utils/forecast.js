const request = require('request');
 
const forecast=(location,callback)=>{
    const url = 'http://api.weatherstack.com/forecast?access_key=e263346507bd3644a16a918d21af6400&query='+ location;
    console.log('url forecast',url);

request({url:url},(error,response)=>{
  console.log('res in forecast',response.body);
   callback(response.body);
})
}

module.exports = forecast;