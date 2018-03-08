export default {
    data : {
        port: 8081,
        api : '/api',
        auth: {
            jwtSecret : process.env.JWT_SECRET || 'secret'
        }
    }
}