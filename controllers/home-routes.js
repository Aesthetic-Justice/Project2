const router = require('express').Router();
const { Attractions, Continents, Country, City} = require('../models');
//get all continents for homepage
router.get('/', async (req, res) => {
    try {
        const dbContinents = await Continents.findAll ({
            include: [
                {
                    model:Continents,
              attributes: ['filename', 'description'],   
                },
            ],
        });

        const allContinents = dbContinents.map((continents) =>
        continents.get({ plain: true})
        );
        res.render('homepage', {
            allContinents,
            loggedIn: req.session.loggedIn,
        });   
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});