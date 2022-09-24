const pkg = require("../../package.json");

const config = {
  name: process.env.NAME || "Mindfitness",
  version: pkg.version,

  local: {
    host: process.env.HOST || "0.0.0.0",
    port: process.env.PORT || 3000,
  },

  public: {
    host: process.env.PUBLIC_PORT || "localhost",
    port: process.env.PUBLIC_HOST || 3000,
  },

  cors: {
    origin: "*",
  },

  session: {
    secret: process.env.SESSION_SECRET_KEY || "SESSION_SECRET_KEY",
    resave: false,
    saveUninitialized: false,
  },

  jwt: {
    secret: process.env.JWT_SECRET_KEY || "JWT_SECRET_KEY",
    maxAge: process.env.JWT_MAX_AGE || 3 * 24 * 60 * 60 * 1000,
  },
};

config.local.address = `http://${config.local.host}:${config.local.port}`;
config.public.address = `http://${config.public.host}:${config.public.port}`;

module.exports = config;
