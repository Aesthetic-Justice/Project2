const router = require('express').Router();

router.post('/', async (req, res) => {
    try {
        const dbPostData = await Post.create({
            title: req.body.title,
            description: req.body.description,
            location_type: req.body.location_type,
            rating: req.body.rating
        });
        res.status(200).json(dbPostData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const dbPostData = await Post.destroy({
            where: {
                id: req.params.id,
            }
        })
        return res.status(200).json(dbPostData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

module.exports = router