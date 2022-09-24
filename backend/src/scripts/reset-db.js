const { sequelize } = require("../models");

(async () => {
  const env = process.env.NODE_ENV || "development";
  console.log(`Reset ${env} database`);
  console.log("-----------------------");

  const rows = await sequelize.query(
    "SELECT tablename FROM pg_tables WHERE schemaname = 'public'"
  );
  const tables = rows[0].map((row) => row.tablename);

  for (const table of tables) {
    console.log(`== Drop table '${table}'`);
    await sequelize.query(`DROP TABLE IF EXISTS public."${table}" CASCADE`);
  }

  process.exit();
})();
