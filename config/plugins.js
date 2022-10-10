const crypto = require("crypto");

module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        film: {
          field: "slug",
          references: "title",
        },
      },
      jwtSecret: crypto.randomBytes(16).toString("base64"),
    },
  },
});
