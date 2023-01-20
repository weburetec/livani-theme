const withImages = require('next-images');

module.exports = withImages({
    webpack(config, options) {
        return config
    }
    webpack5: false,
});
