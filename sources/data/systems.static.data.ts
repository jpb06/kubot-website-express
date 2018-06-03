import { Region } from './../types/region.type';

let data: Region[] = [
    {
        name: 'Kusari',
        systems: [
            'Nagano', 'Rishiri', 'Chugoku', 'Tohoku',
            'Tottori', 'Hokkaido', 'Hiroshima', 'Okinawa',
            'Kyushu', 'New Tokyo', 'Honshu', 'Shikoku',
            'Planet Tomioka'
        ]
    },
    {
        name: 'Bretonia',
        systems: [
            'Edinburgh', 'Leeds', 'Newcastle', 'Manchester',
            'New London', 'Dublin', 'Cambridge', 'Poole', 'Planet Darlington'
        ]
    },
    {
        name: 'Rheinland',
        systems: [
            'Bremen', 'Hamburg', 'Frankfurt', 'Koeln',
            'Stuttgart', 'New Berlin', 'Munich', 'Dresden',
        ]
    },
    {
        name: 'Liberty',
        systems: [
            'Alberta', 'Colorado', 'Alaska', 'Ontario',
            'New York', 'Virginia', 'New Hampshire', 'California',
            'Pennsylvania', 'Texas', 'Puerto Rico', 'Vespucci', 'Kansas'
        ]
    },
    {
        name: 'Gallia',
        systems: [
            'Picardy', 'Champagne', 'Lorraine',
            'Orleanais', 'Ile-de-France', 'Burgundy', 'Lyonnais',
            'Auvergne', 'Dauphine', 'Languedoc', 'Provence',
        ]
    },
    {
        name: 'Taus',
        systems: [
            'Tau-37', 'Tau-44', 'Orkney', 'Tau-23',
            'Roussillon', 'Tau-29', 'Tau-31', 'Baffin',
        ]
    },
    {
        name: 'Sigmas',
        systems: [
            'Sigma-19', 'Sigma-59', 'Sigma-13',
            'Sigma-17', 'Sigma-21', 'Sigma-15',
        ]
    },
    {
        name: 'Omegas',
        systems: [
            'Omega-3', 'Omega-7', 'Omega-54',
            'Omega-52', 'Omega-5', 'Omega-11', 'Omega-55',
            'Omega-49', 'Omega-58', 'Omega-47', 'Omega-41', 'Cayman'
        ]
    },
    {
        name: 'Omicrons',
        systems: [
            'Omicron Tau', 'Omicron Alpha', 'Omicron Phi',
            'Omicron Beta', 'Omicron Psi', 'Omicron Epsilon',
            'Omicron Mu', 'Omicron Iota', 'Omicron Sigma',
            'Omicron Minor', 'Omicron Major', 'Omicron Rho',
            'Omicron Lost', 'Omicron Delta', 'Omicron Xi',
            'Omicron Chi', 'Omicron Kappa', 'Omicron Theta',
            'Omicron Gamma', 'Omicron Omega',
        ]
    },
    {
        name: 'Uncharted',
        systems: [
            'Uncharted I', 'Uncharted II', 
            'Uncharted Bretonia', 'Uncharted Gallia', 'Uncharted Kusari', 'Uncharted Liberty', 'Uncharted Omega',
            'Uncharted Omicron', 'Uncharted Rheinland', 'Uncharted Sigma', 'Uncharted Tau',
        ]
    },
    {
        name: 'Kusari/Liberty border',
        systems: [
            'Kepler', 'Galileo', 'Cassini',
        ]
    },
    {
        name: 'Bretonia/Liberty border',
        systems: [
            'Drake', 'Inverness', 'Coronado', 'Cortez', 'Magellan',
        ]
    },
    {
        name: 'Rheinland/Liberty border',
        systems: [
            'Bering', 'Hudson',  
        ]
    },
    {
        name: 'Pvp/Training',
        systems: [
            'Connecticut',
        ]
    },
    {
        name: 'Unknown',
        systems: [
            'Unknown'
        ]
    }
];

export default data;