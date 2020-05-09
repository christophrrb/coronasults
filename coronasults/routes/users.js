const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Getting all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Creating one user
router.post('/', async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    locationTested: req.body.locationTested
  })

  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Getting one user
router.get('/:id', getUser, (req, res) => {
  res.json(res.user)
})

// Updating one user
router.patch('/:id', getUser, async (req, res) => {
  if (req.body.firstName != null) {
    res.user.firstName = req.body.firstName
  }

  if (req.body.lastName != null) {
    res.user.lastName = req.body.lastName
  }
  if (req.body.birthday != null) {
    res.user.birthday = req.body.birthday
  }
  if (req.body.locationTested != null) {
    res.user.locationTested = req.body.locationTested
  }
  if (req.body.currentResult != null) {
    res.user.currentResult = req.body.currentResult
  }
  
  try {
    const updatedUser = await res.user.save()
    res.json(updatedUser)
  } catch (err){
    res.status(400).json({ message: err.message })
  }

})
// Deleting one user
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove()
    res.json({ message: 'Deleted This User' })
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})


// Middleware function for gettig user object by ID
async function getUser(req, res, next) {
  try {
    user = await User.findById(req.params.id)
    if (user == null) {
      return res.status(404).json({ message: 'Cant find user'})
    }
  } catch(err){
    return res.status(500).json({ message: err.message })
  }
  
  res.user = user
  next()
}

module.exports = router 