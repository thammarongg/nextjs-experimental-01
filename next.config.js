const isProd = process.env.NODE_ENV === 'production'
module.exports = {
    assetPrefix: isProd ? "/test/" : "",
    exportPathMap: () => ({
        "/": { page: "/" },
        "/about/:id": { page: "/about" }
    })
}