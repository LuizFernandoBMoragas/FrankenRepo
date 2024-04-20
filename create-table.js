import { sql } from "./db.js";

sql`
    CREATE TABlE videos (
        title       TEXT,
        description TEXT,
        duration    INTEGER
    );
`.then(() => {
    console.log('Tabela criada')
})