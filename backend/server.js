require('dotenv').config()
const express = require('express');
const assert = require('assert')
const http = require('http');
const socketIo = require('socket.io');

const port = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const MongoClient = require('mongodb').MongoClient
const atlasURL = process.env.ATLAS_URI

const client = new MongoClient(atlasURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

client.connect(err => {
  assert.strictEqual(null, err)
  if (err) {
    console.log(`Error connecting to MongoDB`)
  } else {
    console.log('Connected successfully to MongoDB')
  }
  const db = client.db('cg4002')
  const datacollection = db.collection('users')
  // const usercollection = db.collection('testdata')
  const dancecollection = db.collection('dancemoves')

  const pipeline = {
    $match: {
      operationType: {
        $in: ['insert', 'delete']
      }
    }
  }

  io.on('connection', socket => {
    console.log('connected')
    socket.on('disconnect', () => {
      console.log('socket client disconnected')
    })
  });

  (() => {
    //graph
    console.log(`startStream`)
    const changeStream = datacollection.watch([pipeline], {
      fullDocument: 'updateLookup' })
      changeStream.on('change', document => {
      const packet = []
      packet[0] = document.fullDocument.ax // could parse from object:_id
      packet[1] = document.fullDocument.ay
      packet[2] = document.fullDocument.az
      packet[3] = document.fullDocument.gx
      packet[4] = document.fullDocument.gy
      packet[5] = document.fullDocument.gz
      packet[6] = document.fullDocument.TimeStamp
      io.emit('incoming data', packet)
      console.log(`packet emitted: ${packet}`)
    })
    //predicted dancemove
    const dancechangeStream = dancecollection.watch([pipeline], {
      fullDocument: 'updateLookup' })
      dancechangeStream.on('change', document => {
      let dancemove = 'pending...'
      dancemove = document.fullDocument.dance // could parse from object:_id
      io.emit('dance move', dancemove)
      console.log(`dancemove emitted: ${dancemove}`)
    })
  // // user
  //   const userChangeStream = usercollection.watch()
  //     userChangeStream.on('change', () => {
  //       var count = 0;
  //       count = usercollection.count().then((count) => { 
  //         if (count < '4')
  //           io.emit('active users', count)
  //         console.log(`number of users: ${count}`)
  //       });
  //     })
    }

  )()
});

server.listen(port, ()=> console.log(`listening on port ${port}`));