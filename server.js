const express = require('express');
const app = express();
const redis = require('ioredis');

const redisCache = new redis({
    host: '127.0.0.1',
    port: '6379'
})

redisCache.set('xyz', "https://abc.com", 'EX', 60);

console.log(redisCache);

app.get('/cached-data', async (req, res)=> {
    const cacheData = await redisCache.get('xyz');
    console.log(cacheData);
})

app.listen(3020, ()=> {
    console.log('App running');
});