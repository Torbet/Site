module.exports = {
    async rewrites() {
      return [
        {
          source: "/cv",
          destination: "/CV.pdf"
        },
        {
          source: "/cv/",
          destination: "/CV.pdf"
        },
        {
          source: "/feed",
          destination: "/feed.xml"
        },
        {
          source: "/feed/",
          destination: "/feed.xml"
        }
      ]},
      webpack: function(config) {
        config.module.rules.push({
          test: /\.md$/,
          use: 'raw-loader',
        })
        return config
      },
      images: {
        domains: ['drive.google.com'],
      },
  }