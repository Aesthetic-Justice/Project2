const router = require('express').Router();
const sequelize = require('../config/connection');
const { Continent, Country, City, Attraction} = require('../models');

//get all continents for homepage // WORKS
router.get('/', async (req, res) => {
    try {
        const dbContinents = await Continent.findAll ({
            include: [
                {
                    model:Country,
                    attributes: ['id', 'name',],   
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

// Get one continent // MAYBE WORKING - FIX GET ERROR
router.get('/continent/:id', async (req, res) => {
    try{
        const dbContinents = await Continent.findByPk(req.params.id, {
            
            include: [
                {
                    model: Country,
                    attributes: [
                         'id',
                        'name',
                    ],
                },
            ],
        });
     const continents = dbContinents?.get({ plain: true});
     console.log('continents',continents)
     console.log('dbContinents', dbContinents)
    res.render('continents', { continents, loggedIn: req.session.loggedIn });
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//get all countries for homepage // WORKS 
router.get('/country/', async (req, res) => {
    try {
        const dbCountry = await Country.findAll ({
            include: [
                {
                    model: City,
              attributes: ['id', 'name'],   
                },
            ],
        });

        const allCountries = dbCountry.map((countries) =>
        countries.get({ plain: true})
        );
        res.render('country', {
            allCountries,
            loggedIn: req.session.loggedIn,
        });   
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Get one country for homepage // MAYBE WORKS - FIX GET ERROR
router.get('/country/:id', async (req, res) => {
    try{
        const dbCountries = await Country.findByPk(req.params.id,{
            include: [
                {
                    model: City,
                    attributes: [
                        'id',
                        'name',
                    ],
                },
            ],
        });
    const country = dbCountries.get({ plain: true});
    res.render('country', { country, loggedIn: req.session.loggedIn });
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//get all cities for homepage // HANDLEBARS ISSUE - EACH DOESNT MATCH
router.get('/cities/', async (req, res) => {
    try {
        const dbCities = await City.findAll ({
            include: [
                {
                    model:Attraction,
              attributes: ['id', 'name','filename'],   
                },
            ],
        });

        const allCities = dbCities.map((cities) =>
        cities.get({ plain: true})
        );
        res.render('city', {
            allCities,
            loggedIn:true 
            //req.session.loggedIn,
        });   
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get one city // MAYBE WORKS - FIX GET ERROR
router.get('/city/:id', async (req, res) => {
    try{
        const dbCities = await City.findByPk(req.params.id,{
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
    const cities = dbCities.get({ plain: true});
    res.render('city', { cities, loggedIn: req.session.loggedIn });
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//get all attractions for homepage // ATTRACTION TO ATTRACTION ISNT A RELATIONSHIP
router.get('/attractions', async (req, res) => {
    try {
        const dbAttractions = await Attraction.findAll ();

        const allAttractions = dbAttractions.map((attractions) =>
        attractions.get({ plain: true})
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

// Get one attraction // ATTRACTION TO ATTRACTION ISNT A RELATIONSHIP
router.get('/attraction/:id', async (req, res) => {
    try{
        const dbAttractions = await Attraction.findByPk(req.params.id);
        const attractions = dbAttractions.get({ plain: true});
    res.render('attractions', { attractions, loggedIn: req.session.loggedIn });
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});





// Login route
// WORKS BUT DOESNT RENDER LOGIN HANDLEBARS
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
  module.exports = router;

