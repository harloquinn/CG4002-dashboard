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
  const datacollection1 = db.collection('dancer1')
  const datacollection2 = db.collection('dancer2')
  const datacollection3 = db.collection('dancer3')
  const positioncollection = db.collection('danceposition')
  const dancecollection = db.collection('dancemoves')
  const logincollection = db.collection('connections')

  const pipeline = {
    $match: {
      operationType: {
        $in: ['insert', 'delete']
      }
    }
  }

  io.on('connection', socket => {
    // console.log('connected')
    socket.on('disconnect', () => {
      // console.log('socket client disconnected')
    })
  });

  (() => {
    //graph
    console.log(`startStream`)
    const changeStream1 = datacollection1.watch([pipeline], {
      fullDocument: 'updateLookup' })
      changeStream1.on('change', document => {
      const packet = []
      packet[0] = document.fullDocument.ax // could parse from object:_id
      packet[1] = document.fullDocument.ay
      packet[2] = document.fullDocument.az
      packet[3] = document.fullDocument.gx
      packet[4] = document.fullDocument.gy
      packet[5] = document.fullDocument.gz
      packet[6] = document.fullDocument.time
      io.emit('incoming data1', packet)
    })

    const changeStream2 = datacollection2.watch([pipeline], {
      fullDocument: 'updateLookup' })
      changeStream2.on('change', document => {
      const packet = []
      packet[0] = document.fullDocument.ax // could parse from object:_id
      packet[1] = document.fullDocument.ay
      packet[2] = document.fullDocument.az
      packet[3] = document.fullDocument.gx
      packet[4] = document.fullDocument.gy
      packet[5] = document.fullDocument.gz
      packet[6] = document.fullDocument.time
      io.emit('incoming data2', packet)
    })

    const changeStream3 = datacollection3.watch([pipeline], {
      fullDocument: 'updateLookup' })
      changeStream3.on('change', document => {
      const packet = []
      packet[0] = document.fullDocument.ax // could parse from object:_id
      packet[1] = document.fullDocument.ay
      packet[2] = document.fullDocument.az
      packet[3] = document.fullDocument.gx
      packet[4] = document.fullDocument.gy
      packet[5] = document.fullDocument.gz
      packet[6] = document.fullDocument.time
      io.emit('incoming data3', packet)
    })
    //predicted dancemove
    const dancechangeStream = dancecollection.watch([pipeline], {
      fullDocument: 'updateLookup' })
      dancechangeStream.on('change', document => {
      let dancemoves = ''
      dancemoves = document.fullDocument.predicted_dance // could parse from object:_id
      io.emit('dance move', dancemoves)
      console.log(`dancemove emitted: ${dancemoves}`)
    })
    //predicted dancemove
    const scorechangeStream = dancecollection.watch([pipeline], {
      fullDocument: 'updateLookup' })
      dancechangeStream.on('change', document => {
      let score = 100
      score = document.fullDocument.confidence_score // could parse from object:_id
      io.emit('confidence', score)
      console.log(`confidence score emitted: ${score}`)
    })

    const positionchangeStream = positioncollection.watch([pipeline], {
      fullDocument: 'updateLookup' })
      positionchangeStream.on('change', document => {
      let positionData = []
      positionData = document.fullDocument.dance_position // could parse from object:_id
      io.emit('change position', positionData)
      console.log(`position emitted: ${positionData}`)
    })

  // user
    const userChangeStream = logincollection.watch([pipeline], {
      fullDocument: 'updateLookup' })
      userChangeStream.on('change', document => {
      var count = 0;
      count = document.fullDocument.count
      io.emit('active users', count)
      console.log(`number of users: ${count}`)
      })
    }

  )()
});

server.listen(port, ()=> console.log(`listening on port ${port}`));