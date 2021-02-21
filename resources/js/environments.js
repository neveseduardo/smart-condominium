let domain = 'http://localhost:8000/api'

if (process.env.NODE_ENV === 'production') {
    domain = 'https://condominiumn.herokuapp.com/api'
}

export default {
    domain: domain,
};
