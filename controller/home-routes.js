const router = require('express').Router();
const sequelize = require('../config/connection');
const { Continent, Country, City, Attraction } = require('../models');

//get all continents for homepage
router.get('/', async (req, res) => {
    try {
        const dbContinents = await Continent.findAll({
            include: [
                {
                    model: Country,
                    attributes: ['id', 'name'],
                },
            ],
        });

        const allContinents = dbContinents.map((continents) =>
            continents.get({ plain: true })
        );
        res.render('homepage', {
            allContinents,
            loggedIn: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get one continent
router.get('/continent/:id', async (req, res) => {
    try {
        const dbContinents = await Continent.findByPk(req.params.id, {

            include: [
                {
                    model: Country,
                    attributes: ['id', 'name'],
                },
            ],
        });
        const continents = dbContinents?.get({ plain: true });
        res.render('continents', { continents, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//get all countries for homepage // WORKS 
router.get('/country/', async (req, res) => {
    try {
        const dbCountry = await Country.findAll({
            include: [
                {
                    model: City,
                    attributes: ['id', 'name'],
                },
            ],
        });

        const allCountries = dbCountry.map((countries) =>
            countries.get({ plain: true })
        );
        res.render('city', {
            allCountries,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Get one country for homepage
router.get('/country/:id', async (req, res) => {
    try {
        const dbCountries = await Country.findByPk(req.params.id, {
            include: [
                {
                    model: City,
                    attributes: ['id', 'name'],
                },
            ],
        });
        const country = dbCountries.get({ plain: true });
        res.render('city', { country, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//get all cities for homepage 
router.get('/cities/', async (req, res) => {
    try {
        const dbCities = await City.findAll({
            include: [
                {
                    model: Attraction,
                    attributes: ['id', 'name', 'filename'],
                },
            ],
        });
        const allCities = dbCities.map((cities) =>
            cities.get({ plain: true })
        );
        res.render('city', {
            allCities,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get one city // MAYBE WORKS - FIX GET ERROR
router.get('/city/:id', async (req, res) => {
    try {
        const dbCities = await City.findByPk(req.params.id, {
            include: [
                {
                    model: Attraction,
                    attributes: [
                        'id',
                        'name',
                        'filename'


                    ],
                },
            ],
        });
        const cities = dbCities.get({ plain: true });
        res.render('attractions', { cities, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//get all attractions for homepage 
router.get('/attractions', async (req, res) => {
    try {
        const dbAttractions = await Attraction.findAll();

        const allAttractions = dbAttractions.map((attractions) =>
            attractions.get({ plain: true })
        );
        res.render('attractions', {
            allAttractions,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get one attraction 
router.get('/attraction/:id', async (req, res) => {
    try {
        const dbAttractions = await Attraction.findByPk(req.params.id,{
             include: [
            {
                model: City,
                attributes: [
                    'name',
                ],
            },
        ],
    });
        const attractions = dbAttractions.get({ plain: true });
        res.render('oneAttraction', { attractions, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//
router.get('/attractions/add', async (req, res)=>{
    try {
        const dbCities= await City.findAll();
        const cities = dbCities.map(city=>city.get({plain:true}));
        const dbAttractions = await Attraction.findAll({attributes: ['location_type'], group:"location_type"});
        const attractions = dbAttractions.map(attraction=>attraction.get({plain:true}));
        res.render('addAttraction',{cities, attractions} );
    } catch(err){
        console.log(err);
        res.render('error', {err});
    }
   
})
// Login route
router.get('/login', (req, res) => {
    console.log(req.session.loggedIn);
    if (req.session.loggedIn == undefined) {
        req.session.loggedIn = false;
    }
    else if (req.session.loggedIn == true) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;
