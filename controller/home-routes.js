const router = require('express').Router();
const sequelize = require('../config/connection');
const { Attraction, Continent: Attraction, Country, City} = require('../models');

//get all continents for homepage
router.get('/', async (req, res) => {
    try {
        const dbContinents = await Attraction.findAll ({
            include: [
                {
                    model:Attraction,
              attributes: ['id', 'name', 'filename'],   
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

// Get one continent
router.get('/continents/:id', async (req, res) => {
    try{
        const dbContinents = await Attraction.findByPk(req.params.id,{
            include: [
                {
                    model: continents,
                    attributes: [
                        'id',
                        'name',
                        'filename'
                    ],
                },
            ],
        });
    const continents = dbContinents.get({ plain: true});
    res.render('continents', { continents, loggedIn: req.session.loggedIn });
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//get all countries for homepage
router.get('/', async (req, res) => {
    try {
        const dbCountry = await Country.findAll ({
            include: [
                {
                    model:Country,
              attributes: ['id', 'name', 'filename'],   
                },
            ],
        });

        const allCountries = dbCountry.map((countries) =>
        countries.get({ plain: true})
        );
        res.render('homepage', {
            allCountries: allContinents,
            loggedIn: req.session.loggedIn,
        });   
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Get one country for homepage
router.get('/countries/id:', async (req, res) => {
    try{
        const dbCountries = await Country.findByPk(req.params.id,{
            include: [
                {
                    model: country,
                    attributes: [
                        'id',
                        'name',
                        'filename'
                    ],
                },
            ],
        });
    const country = dbCountries.get({ plain: true});
    res.render('country', { country: country, loggedIn: req.session.loggedIn });
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//get all cities for homepage
router.get('/', async (req, res) => {
    try {
        const dbCities = await City.findAll ({
            include: [
                {
                    model:City,
              attributes: ['id', 'name', 'filename'],   
                },
            ],
        });

        const allCities = dbCities.map((cities) =>
        cities.get({ plain: true})
        );
        res.render('homepage', {
            allCities: allCities,
            loggedIn: req.session.loggedIn,
        });   
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get one city
router.get('/cities/id:', async (req, res) => {
    try{
        const dbCities = await City.findByPk(req.params.id,{
            include: [
                {
                    model: City,
                    attributes: [
                        'id',
                        'name',
                        'filename'
                    ],
                },
            ],
        });
    const cities = dbCities.get({ plain: true});
    res.render('citiess', { cities: cities, loggedIn: req.session.loggedIn });
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//get all attractions for homepage
router.get('/', async (req, res) => {
    try {
        const dbAttractions = await Attraction.findAll ({
            include: [
                {
                    model:Attraction,
              attributes: ['id', 'name', 'filename'],   
                },
            ],
        });

        const allAttractions = dbAttractions.map((attractions) =>
        attractions.get({ plain: true})
        );
        res.render('homepage', {
            allAttractions: allAttractions,
            loggedIn: req.session.loggedIn,
        });   
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get one attraction
router.get('/attractions/:id', async (req, res) => {
    try{
        const dbAttractions = await Attraction.findByPk(req.params.id,{
            include: [
                {
                    model: attractions,
                    attributes: [
                        'id',
                        'name',
                        'filename'
                    ],
                },
            ],
        });
    const attractions = dbAttractions.get({ plain: true});
    res.render('attractions', { attractions: attractions, loggedIn: req.session.loggedIn });
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// //get all countries
// router.get('/countries/', async (req, res) => {
//     try {
//         const countryData = await Country.findAll({
//             include: [{ model: Continent }, { model: City }],
//             attributes: {
//               include: [
//                 [
                  
//                   sequelize.literal(
//                     '(SELECT (*) FROM country INNER JOIN continent ON country.continent_id=continent.id)'
//                   ),
//                 //   'homecontinent',
//                 ],
//               ],
//             },
//           });
//     } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
// }
// });

// //get one country
// router.get('/countries/:id', async (req, res)=> {
//     try{
//         const dbCountry = await Country.findByPk(req.params.id, {
//             include: [{model: Continent}]
//         });

//         const country = dbCountry.get ({ plain: true });
//         res.render('country', { painting, loggedIn: req.session.loggedIn});
//     }catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// //get all cities
// router.get('/cities/:id', async (req, res) => {
//     try{
//         const cityData  = await City.findByPk(req.params.id,{
//             include: [{model: City}, {model: Attractions}],
//             attributes: {
//                 include: [ 
//                     [
//                         sequelize.literal(
//                             '(SELECT (*) FROM attraction WHERE city.id=city_id)'
//                         ),
//                         'numAttraction',
//                     ],
//                 ],
//             },
//         });
//     } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     });




// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
  module.exports = router;