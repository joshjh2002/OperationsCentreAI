require("dotenv").config();

module.exports = {
  name: "database",
  description: "Gives random killing floor 2 role",
  execute(message, args, Discord) {
    const pgDatabase = require("pg");

    const pgconnection = new pgDatabase.Client({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: "commongames",
      password: process.env.DB_PASSWORD,
      port: 5432,
    });

    pgconnection.connect();
    const query =
      `
    -- FILTER USING NAME --
    SELECT g.name
    FROM games g
    LEFT JOIN linker gu USING (game_id)
    LEFT JOIN users u USING (user_id)
    WHERE u.name = '` +
      args[0] +
      `' OR u.name = '` +
      args[1] +
      `'
    GROUP BY g.name
    HAVING COUNT(*) >= 2
    ORDER BY g.name ASC;
`;

    pgconnection.query(query, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      let output = "";
      let i = 0;
      while (res.rows[i] != null) {
        output += res.rows[i].name + "\n";
        i++;
      }
      message.channel.send(output);
      pgconnection.end();
    });
  },
};
