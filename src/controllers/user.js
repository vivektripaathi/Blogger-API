const User = require('../models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv/config')


module.exports = {
    register : async(req, res)=>{
        const {name , email , password} = req.body;
        let user = new User({
            name,
            email,
            passwordHash: bcrypt.hashSync(password, 10)
        })

        user = await user.save();

        if(!user) return res.status(400).send('the user cannot be created!')

        res.send(user);
    },

    login : async(req, res)=>{
        const user = await User.findOne({email: req.body.email})
        const secret = process.env.SECRET;

        if(!user) {
            return res.status(400).send('The user not found');
        }

        if(user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
            const token = jwt.sign(
                {
                    userId: user.id,
                    isAdmin: user.isAdmin
                },
                secret,
                {expiresIn : '1d'}
            )
            res.status(200).send({user: user.email , token: token}) 
        } 
        else {
            res.status(400).send('password is wrong!');
        }
    },
}