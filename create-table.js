import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS videos`.then(()=>{console.log('Tabela videos foi excluida')})

sql`
    CREATE TABlE videos (
        id          TEXT PRIMARY KEY,
        title       TEXT,
        description TEXT,
        duration    INTEGER
    );
`.then(() => {
    console.log('Tabela criada')
})