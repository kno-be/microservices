const express = require ('express')
const bodyParser = require('body-parser')
const {randomBytes} = require('crypto')
const app = express();
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

const commentByPostId = {}
// Retrieve all comments
app.get('/post/:id/comments', (req, res) => {
    res.send(commentByPostId[req.params.id] || [])

})

// Saves a new comment to a referenced post
app.post('/post/:id//comments',(req,res) => {
    const commentId = randomBytes(4).toString('hex')
    const {content} = req.body;

    const comments = commentByPostId[req.params.id] || []
    comments.push({id: commentId, content})
    commentByPostId[req.params.id] = comments
    res.status(201).send(comments)
})

app.listen(4001, () => {
    console.log('Listening on 4001...')
})