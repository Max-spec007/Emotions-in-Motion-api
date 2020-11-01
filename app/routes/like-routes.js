const express = require('express')
const router = express.Router()
const passport = require('passport')
const Comment = require('./../models/comment')
const handle404 = require('../../lib/custom_errors')

const requireToken = passport.authenticate('bearer', { session: false })

router.post('/likes', requireToken, (req, res, next) => {
  // get the review data from the body of the request
  const likeData = {}
  likeData.owner = req.user.id
  // add user to like
  // find the comment
  Comment.findById(req.body.commentId)
    .then(handle404)
    .then(comment => {
      // add the like to the comment
      comment.likes.push(likeData)
      return comment.save()
    })
    // send responsne back to client
    .then(comment => res.status(201).json({comment: comment}))
    .catch(next)
})

// DESTROY
// DELETE /examples/5a7db6c74d55bc51bdf39793
router.delete('/likes/:id', requireToken, (req, res, next) => {
// const likeId = (req.params.id)
  Comment.findById(req.params.id)
    .then(handle404)
    .then(comment => {
      const likeArray = comment.likes
      const thisLike = likeArray.filter(like => {
        if (like.owner.toString() === req.user.id.toString()) {
          return like
        }
      })
      const a = thisLike[0]
      // mongoose like findById
      // const like = comment.likes.find({ owner.id: req.body.user.id })
      // throw an error if current user doesn't own `example`
      // delete the example ONLY IF the above didn't throw
      a.remove()
      comment.save()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
