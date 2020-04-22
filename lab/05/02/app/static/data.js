const categories = [{
        name: 'Policier',
        items: [{
            id: 0,
            title: 'Un avion sans elle',
            author: 'Michel Bussi',
            unitPrice: 11.00,
        }, {
            id: 1,
            title: 'Dans le bois',
            author: 'Harlan Coben',
            unitPrice: 9.90,
        }, {
            id: 2,
            title: 'Une mort sans nom',
            author: 'Patricia Cornwell',
            unitPrice: 16.90,
        }, {
            id: 3,
            title: 'La princesse noire',
            author: 'Serge Brussolo',
            unitPrice: 21.00,
        }, {
            id: 4,
            title: 'La nuit du renard',
            author: 'Mary Higgins Clark',
            unitPrice: 8.00,
        }]
    },
    {
        name: 'Littérature',
        items: [{
            id: 10,
            title: 'Chanson douce',
            author: 'Leïla Slimani',
            unitPrice: 9.90,
        }, {
            id: 11,
            title: 'La servante écarlate',
            author: 'Margaret Atwook',
            unitPrice: 12.00,
        }, {
            id: 12,
            title: 'En cas de bonheur',
            author: 'David Foenkinos',
            unitPrice: 8.50,
        }, {
            id: 13,
            title: 'Sauve-moi',
            author: 'Guillaume Musso',
            unitPrice: 14.90,
        }, {
            id: 14,
            title: 'Voyage au centre de la terre',
            author: 'Jules Verne',
            unitPrice: 7.90,
        }, {
            id: 15,
            title: 'Je voudrais que quelqu\'un m\'attende',
            author: 'Anna Gavalda',
            unitPrice: 9.00,
        }, {
            id: 16,
            title: 'Dom Juan',
            author: 'Molière',
            unitPrice: 6.90,
        }]
    },
    {
        name: 'Science-fiction',
        items: [{
            id: 20,
            title: 'Le trône de fer',
            author: 'George RR Martin',
            unitPrice: 9.90,
        }, {
            id: 21,
            title: 'Nuit noire, étoiles mortes',
            author: 'Stephen King',
            unitPrice: 9.90,
        }, {
            id: 22,
            title: 'L\'âge des étoiles',
            author: 'Robert Heinlein',
            unitPrice: 9.90,
        }]
    }
];

const countries = [
    { "code": "AD", "code3": "AND", "name": "Andorra", "number": "020" },
    { "code": "AT", "code3": "AUT", "name": "Austria", "number": "040" },
    { "code": "BE", "code3": "BEL", "name": "Belgium", "number": "056" },
    { "code": "BG", "code3": "BGR", "name": "Bulgaria", "number": "100" },
    { "code": "HR", "code3": "HRV", "name": "Croatia", "number": "191" },
    { "code": "CZ", "code3": "CZE", "name": "Czechia", "number": "203" },
    { "code": "DK", "code3": "DNK", "name": "Denmark", "number": "208" },
    { "code": "FI", "code3": "FIN", "name": "Finland", "number": "246" },
    { "code": "DE", "code3": "DEU", "name": "Germany", "number": "276" },
    { "code": "GR", "code3": "GRC", "name": "Greece", "number": "300" },
    { "code": "GP", "code3": "GLP", "name": "Guadeloupe", "number": "312" },
    { "code": "GG", "code3": "GGY", "name": "Guernsey", "number": "831" },
    { "code": "HU", "code3": "HUN", "name": "Hungary", "number": "348" },
    { "code": "IE", "code3": "IRL", "name": "Ireland", "number": "372" },
    { "code": "IT", "code3": "ITA", "name": "Italy", "number": "380" },
    { "code": "LI", "code3": "LIE", "name": "Liechtenstein", "number": "438" },
    { "code": "LU", "code3": "LUX", "name": "Luxembourg", "number": "442" },
    { "code": "MT", "code3": "MLT", "name": "Malta", "number": "470" },
    { "code": "MQ", "code3": "MTQ", "name": "Martinique", "number": "474" },
    { "code": "YT", "code3": "MYT", "name": "Mayotte", "number": "175" },
    { "code": "MC", "code3": "MCO", "name": "Monaco", "number": "492" },
    { "code": "NL", "code3": "NLD", "name": "Netherlands (the)", "number": "528" },
    { "code": "NO", "code3": "NOR", "name": "Norway", "number": "578" },
    { "code": "PL", "code3": "POL", "name": "Poland", "number": "616" },
    { "code": "PT", "code3": "PRT", "name": "Portugal", "number": "620" },
    { "code": "RO", "code3": "ROU", "name": "Romania", "number": "642" },
    { "code": "RE", "code3": "REU", "name": "Réunion", "number": "638" },
    { "code": "BL", "code3": "BLM", "name": "Saint Barthélemy", "number": "652" },
    { "code": "LC", "code3": "LCA", "name": "Saint Lucia", "number": "662" },
    { "code": "MF", "code3": "MAF", "name": "Saint Martin (French part)", "number": "663" },
    { "code": "PM", "code3": "SPM", "name": "Saint Pierre and Miquelon", "number": "666" },
    { "code": "SM", "code3": "SMR", "name": "San Marino", "number": "674" },
    { "code": "SK", "code3": "SVK", "name": "Slovakia", "number": "703" },
    { "code": "ES", "code3": "ESP", "name": "Spain", "number": "724" },
    { "code": "SE", "code3": "SWE", "name": "Sweden", "number": "752" },
    { "code": "CH", "code3": "CHE", "name": "Switzerland", "number": "756" },
    { "code": "UA", "code3": "UKR", "name": "Ukraine", "number": "804" },
];