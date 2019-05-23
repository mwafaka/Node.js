if (process.env.NODE_ENV === "test") {
  module.exports = {
    JWT_SECRET: "mwafak",
    oauth: {
      google: {
        clientID:
          "1080786384826-q7u1amm87g13ri3vqk8cqrih10pgai75.apps.googleusercontent.com",
        clientSecret: "8YexYrRSkDnymoIKpiwejn8w"
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
