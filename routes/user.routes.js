const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')

router.get('/register', (req, res) => {
    res.render('register');
})

router.post('/register',
    body('email').trim().isEmail(),
    body('password').trim().isLength({min: 5}),
    body('userName').trim().isLength({min: 3}),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({
            errors: errors.array(),
            message: 'Invalid data',
          });
    }

    const {email, userName, password} = req.body;
    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      email,
      userName,
      password: hashpassword
    })

    res.json(newUser)
});
module.exports = router;