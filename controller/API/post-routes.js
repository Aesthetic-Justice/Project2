const router = require('express').Router();
const { Attraction } = require('../../models')

router.post('/addAttraction', async (req, res) => {
    try {
        const dbPostData = await Attraction.create({
            city_id: req.body.city_id,
            name: req.body.name,
            description: req.body.description,
            location_type: req.body.location_type,
        });
        res.status(200).json(dbPostData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const dbPostData = await Attraction.destroy({
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