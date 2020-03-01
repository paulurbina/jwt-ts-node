export default {

    jwtSecret: process.env.JWT_SECRET || 'secret',

    DB: {
        URI: process.env.MONGODB || 'mongodb://localhost/pack',
        USER: process.env.MONGODB_USER || '',
        PASSWORD: process.env.MONGODB_USER || ''
    }
}