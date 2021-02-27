let domain = 'https://smartcondominiumn.herokuapp.com/api'

if (process.env.NODE_ENV === 'production') {
    domain = 'https://smartcondominiumn.herokuapp.com/api'
}

export default {
    domain: domain,
};
