// Stream data to MongoDB
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = process.env.ATLAS_URI

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

client.connect(err => {
  assert.strict.equal(null, err)
  if (err) {
    console.log(`Error connecting to MongoDB`)
  } else {
    console.log('Connected successfully to MongoDB')
  }

  const db = client.db('CG4002')

  // setInterval(() => {
  //   // var dateVar = new Date();    
  //   const now = new Date().toLocaleTimeString();   
  //   console.log(`Time: ${now}`)
  //   const ax = Math.round(Math.random() * 10)
  //   console.log(`ax: ${ax}`)
  //   const ay = Math.round(Math.random() * 10)
  //   console.log(`ay: ${ay}`)
  //   const az = Math.round(Math.random() * 10)
  //   console.log(`az: ${az}`)
  //   insertData(now, ax, ay, az)
  // }, 5000)

  // setInterval(() => {
  //   const userCount = '1'
  //   updateUser(userCount)
  // },1000)

  setInterval(() => {
    // const moveArr = ['windows','pushback','rocket','elbow_lock','hair','scarcrow','zigzag','shouldershrug']
    const moveArr = ['rocket','windows']
    const A = moveArr[Math.floor(Math.random() * moveArr.length)]
    const B = moveArr[Math.floor(Math.random() * moveArr.length)]
    const C = moveArr[Math.floor(Math.random() * moveArr.length)]
    danceData(A,B,C)
  }, 5000)

  // setInterval(() => {
  //   clearData()
  // }, 15000)

  // const insertData = (now, ax, ay, az) => {
  //   // Set the collection
  //   const collection = db.collection('users')
  //   // Insert data
  //   collection.insertOne({
  //     TimeStamp: now,
  //     ax: ax,
  //     ay: ay,
  //     az: az
  //   }, function (err, result) {
  //     assert.strictEqual(err, null)
  //     assert.strictEqual(1, result.result.n)
  //     assert.strictEqual(1, result.ops.length)
  //   })
  // }

  // const clearData = () => {
  //   const collection = db.collection('dancemove')
  //   collection.drop()
  // }

  const danceData = (A,B,C) => {
    // Set the collection
    const collection = db.collection('dancemove')
    // Insert data
    collection.insertOne({ 
      Amove: A,
      Bmove: B,
      Cmove: C
    }, function (err, result) {
        assert.strictEqual(err, null)
        assert.strictEqual(1, result.result.n)
        assert.strictEqual(1, result.ops.length)
  })
  }

  const updateUser = (userCount) => {
    // Set the collection
    const collection = db.collection('testdata')
    // Insert data
    collection.insertOne({
      user: userCount
    }, function (err, result) {
        assert.strictEqual(err, null)
        assert.strictEqual(1, result.result.n)
        assert.strictEqual(1, result.ops.length)
  })
  }
})