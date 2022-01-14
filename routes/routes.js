const express = require('express');
const router = express.Router();

const ProjectCard = require('../models/ProjectCard');
const { request } = require('express');

router.get('/:id', async (req, res) => {
    try {
        const card = await ProjectCard.findById(req.params.id)
        res.status(200).json({
            success: true,
            data: card
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error
        })
    }
})

router.get('/', async (req, res) => {
    try {
        const card = await ProjectCard.find()
        res.status(200).json({
            success: true,
            data: card
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
})

router.post('/', async (req, res) => {
    const card = new ProjectCard({
        title: req.body.title,
        descStr: req.body.descStr,
        linkObj: req.body.linkObj,
        codesArr: req.body.codesArr,
        likes: req.body.likes,
        dislikes: req.body.dislikes
    })
    try {
        const toPost = await card.save();
        res.status(201).json({
            success: true,
            data: toPost
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedCard = await ProjectCard.deleteOne({
            _id: req.params.id
        })
        res.status(200).json({
            success: true,
            data: deletedCard
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const updatedCard = await ProjectCard.updateOne({
            _id: req.params.id
        },
            {
                $set: {
                    title: req.body.title,
                    descStr: req.body.descStr,
                    linkObj: req.body.linkObj,
                    codesArr: req.body.codesArr,
                    likes: req.body.likes,
                    dislikes: req.body.dislikes
                }
            }
        )

        res.status(200).json({
            success: true,
            data: updatedCard
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
})

module.exports = router;