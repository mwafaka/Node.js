if (process.env.NODE_ENV === "test") {
  module.exports = {
    JWT_SECRET: "mwafak",
    oauth: {
      google: {
        clientID:
          "1080786384826-0t8qviq7l7c4mtc37kpi5a1r9hbsr52q.apps.googleusercontent.com",
        clientSecret: "ymDRbzkoRTfTA2q5ruboEYt8"
      },
      facebook: {
        clientID: "number",
        clientSecret: "string"
      }
    }
  };
} else {
  module.exports = {
    JWT_SECRET: "mwafak",
    oauth: {
      google: {
        clientID: "number",
        clientSecret: "string"
      },
      facebook: {
        clientID: "number",
        clientSecret: "string"
      }
    }
  };
}
