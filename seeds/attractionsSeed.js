const { Attraction } = require(`../models`);

const attractionData = [
    {
        name: 'Parliament Hill and Buildings',
        location_type: 'Historical-Site',
        filename: 'parliament.jpg',
        description: `Three Gothic Revival-style buildings, overlooking the Ottawa River,
        Parliament Hill houses the offices of the members of Parliament, the House of Commons and the Senate. 
        Free guided tours delve into Canadian history and explain the Canadian political system`,
        link: 'https://visit.parl.ca/sites/Visit/default/en_CA',
        city_id: 1

    },
    {
        name: 'The Rideau Canal',
        location_type: 'Landmark',
        filename: 'rideau-canal.jpg',
        description: `The canal is one of the oldest landmarks in Ottawa, 
        in the summer the canal is filled with boats and in winter it becomes the 
        "World's Longest Skating Rink".`,
        link: 'https://www.pc.gc.ca/en/lhn-nhs/on/rideau/',
        city_id: 1

    },
    {
        name: 'Nordik Spa',
        location_type: 'Spa',
        filename: 'nordik-spa-nature.jpg',
        description: `The Nordik Spa is located 20 minutes outside of Ottawa in Chelsea, QC.
        The spa includes many relaxation techniques that are taken from Nordic countries. It 
        encompasses varying baths, saunas, steam rooms and a salt pool. The Nordik is a wonderful
        place to unwind`,
        link: 'https://chelsea.lenordik.com/en/',
        city_id: 1

    },
    {
        name: 'Mount Royal Park',
        location_type: 'Park',
        filename: 'mount-royal.jpg',
        description: `Inaugurated in 1876, the Mount Royal Park was designed by Frederick Law Olmsted, 
        the highly skilled designer behind New York's Central Park. 
        It is an ideal site for admiring a wide variety of plants and birds or for enjoying outdoor activities.`,
        link: 'https://www.mtl.org/en/what-to-do/activities/mount-royal-park',
        city_id: 2

    },
    {
        name: 'Old Montreal',
        location_type: 'Historical-Site',
        filename: 'old-montreal.jpg',
        description: `Stroll, bicycle or take a horse-drawn carriage through the narrow cobblestone streets of Montreal's famous Parisian-style historic district, 
    filled with cultural landmarks, museums, boutiques, sidewalk cafes and restaurants.`,
        link: 'https://www.mtl.org/en/what-to-do/activities/mount-royal-park',
        city_id: 2
    },
    {
        name: 'Montreal Botanical Garden',
        location_type: 'Museum',
        filename: 'montreal-botanical.jpg',
        description: `The Botanical Garden is part of the Montreal Space for Life, 
        Canada's largest natural museum science complex and Montreal's top must see attraction`,
        link: 'https://espacepourlavie.ca/en/botanical-garden',
        city_id: 2
    },
    {
        name: 'Stanley Park',
        location_type: 'Park',
        filename: 'stanley-park.jpg',
        description: `North America's third-largest park draws eight million visitors per year, 
        many of whom may skate or walk past you on the Seawall, a scenic, 5.5-mile path running along the water on the park's perimeter.
        It's just one of many trails among the park's 1,000 acres, which also house an aquarium, nature center and other recreational facilities.`,
        link: 'https://vancouver.ca/parks-recreation-culture/stanley-park.aspx',
        city_id: 3
    },
    {
        name: 'Granville Island',
        location_type: 'Landmark',
        filename: 'granville.jpg',
        description: `Former industrial site has been transformed into an artsy, posh neighborhood with quaint shops, cafes and bookstores.`,
        link: 'https://granvilleisland.com/',
        city_id: 3
    },
    {
        name: 'Vancouver Aquarium',
        location_type: 'Aquarium',
        filename: 'vancouver-aquarium.jpg',
        description: `With over 60,000 amazing aquatic creatures at the Vancouver Aquarium, what will you see today? 
        Stop by and say hi to the adorable sea otters, or come see the mesmerizing jellyfish.`,
        link: 'https://www.vanaqua.org/ ',
        city_id: 3
    },
    {
        name: 'Central Park',
        location_type: 'Park',
        filename: 'central-park-manhattan.jpg',
        description: `For more than 150 years, visitors have flocked to Central Park's 843 green acres in the heart of Manhattan. 
        Since 1980, the Park has been managed by the Central Park Conservancy, in partnership with the public. 
        Central Park is open 6 am to 1 am daily.`,
        link: 'https://www.centralpark.com/',
        city_id: 4
    },
    {
        name: 'The Empire State Building',
        location_type: 'Landmark',
        filename: 'empire-state.jpg',
        description: `The Empire State Building is the World's Most Famous Building. 
        It rises 1,454 ft from ground to antenna & features the only 360 degree open-air vantage point of Midtown. 
        The 86th & 102nd Fl Observatories are open daily, M-Th 10AM-10PM, Fr-Su 9AM-10PM. On a clear day you can see up to 6 states.`,
        link: 'https://www.esbnyc.com/',
        city_id: 4
    },
    {
        name: 'The Museum of Modern Art',
        location_type: 'Museum',
        filename: 'moma.jpg',
        description: `At New York City's most visited museum and attraction, you will experience over 5,000 years of art from around the world.
         The Met is for anyone as a source of inspiration, insight and understanding. You can learn, escape, play, dream, discover, connect.`,
        link: 'https://www.moma.org/',
        city_id: 4
    },
    {
        name: 'Universal Studios Hollywood',
        location_type: 'Theme Park',
        filename: 'universal-studios-hollywood.jpg',
        description: `Get ready for the ultimate Hollywood experience! Find a full day of action-packed entertainment all in one place: 
        thrilling theme park rides and shows, a real working movie studio, and Los Angeles' best shops, restaurants and cinemas at CityWalk. 
        Universal Studios Hollywood is a unique experience that's fun for the whole family`,
        link: 'https://www.universalstudioshollywood.com/web/en/us',
        city_id: 5

    },
    {
        name: 'The Getty Center',
        location_type: 'Museum',
        filename: 'the-getty-center.jpg',
        description: `Spectacular museum boasts a most impressive collection by such luminaries as Van Gogh, Monet and Cezanne,
         along with the architectural triumph of its six buildings and gardens.`,
        link: 'https://www.getty.edu/ ',
        city_id: 5

    },
    {
        name: 'The Griffith Observatory',
        location_type: 'Observatory',
        filename: 'griffith-observatory.jpg',
        description: `A public observatory owned and operated by the City of Los Angeles for the benefit of all. 
        Located in on Mount Hollywood in Griffith Park, the Observatory offers a planetarium, exhibits, public telescopes, cafe, bookstore, and the best views of the Los Angeles basin. 
        Admission is free, and visitors may drive directly to the Observatory and park in its lots and roads.`,
        link: 'https://griffithobservatory.org/',
        city_id: 5

    },
    {
        name: 'Vizcaya Museum and Gardens',
        location_type: 'Museum',
        filename: 'miami-museum.jpg',
        description: `Built in 1916 as a winter retreat, this lavish villa is a tribute to the Italian Renaissance. 
        The museum contains much of the original furnishings and artwork, and is surrounded by lush, formal gardens`,
        link: 'https://vizcaya.org',
        city_id: 6

    },
    {
        name: 'The Wynwood Walls',
        location_type: 'Landmark',
        filename: 'wynwood-walls.jpg',
        description: `Admission to Wynwood Walls Museum includes access to over 35 hand-sprayed murals, two street-art galleries, and retail shops.
         Guests can enjoy complimentary Wi-Fi and interact with the official Wynwood Walls Museum App. `,
        link: 'https://thewynwoodwalls.com/',
        city_id: 6

    },
    {
        name: 'Zoo Miami',
        location_type: 'Zoo',
        filename: 'crocodile-exhibit.jpg',
        description: `Zoo Miami today occupies almost 750 acres, and is home to more than 3,000 animals representing over 500 different species. 
        Of this population, more than 40 species are classified as endangered. The zoo also houses more than 1,000 species of trees, palms and other plants, 
        and over 100 special exhibits showcasing a broad number of species and scientific topics. `,
        link: 'https://www.zoomiami.org/',
        city_id: 6

    },
    {
        name: 'The Eiffel Tower',
        location_type: 'Landmark',
        filename: 'eiffel-tower.jpg',
        description: `For 130 Years, the Eiffel Tower has been a powerful and distinctive symbol of the city of Paris, and by extension, of France. 
        It was built by Gustave Eiffel for the 1889 Exposition Universelle, which was to celebrate the 100th year anniversary of the French Revolution.`,
        link: 'https://www.toureiffel.paris/en',
        city_id: 7

    },
]

module.exports = attractionData;
