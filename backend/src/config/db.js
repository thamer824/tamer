module.exports = {
    development: {
      username: process.env.PG_USERNAME || "mindfitness-pf",
      password: process.env.PG_PASSWORD || "mindfitness-pf",
      database: process.env.PG_DATABASE || "mindfitness-pf",
      host: process.env.PG_HOST || "127.0.0.1",
      port: process.env.PG_PORT || undefined,
      dialect: "postgres",
    },
  
    test: {
      username: process.env.PG_USERNAME || "mindfitness-pf",
      password: process.env.PG_PASSWORD || "mindfitness-pf",
      database: process.env.PG_DATABASE || "mindfitness-pf",
      host: process.env.PG_HOST || "127.0.0.1",
      port: process.env.PG_PORT || undefined,
      dialect: "postgres",
    },
  
    production: {
      username: process.env.PG_USERNAME || "mindfitness-pf",
      password: process.env.PG_PASSWORD || "mindfitness-pf",
      database: process.env.PG_DATABASE || "mindfitness-pf",
      host: process.env.PG_HOST || "127.0.0.1",
      port: process.env.PG_PORT || undefined,
      dialect: "postgres",
    },
  };
  