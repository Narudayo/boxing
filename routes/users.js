const express = require('express');
const User = require('../schemas/users');

const router = express.Router();

router.route('/')
    .get(async (req, res, next) => {
        try{
            const users = await User.find({});
            res.json(users);
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post(async (req, res, next) => {
        try{
            const user = await User.create({
                name: req.body.name,
                gender: req.body.gender,
            })
            console.log(user);
            res.status(201).json(user);
        }catch (err){
            console.error(err);
            next(err);
        }
    })

router.route('/:id')
    .delete(async (req, res, next) => {
        try{
            const result = await User.remove({_id: req.params.id});
            res.json(result);
        }catch (err) {
            console.error(err);
            next(err);
        }
    })

module.exports = router;