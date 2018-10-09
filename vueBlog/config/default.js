module.exports = {
    port: 3000,
    session: {
        secret: 'vueBlog',
        key: 'vueBlog',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/vueBlog'
}