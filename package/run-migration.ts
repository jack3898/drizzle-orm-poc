import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { dirname, resolve } from "path";
import postgres from "postgres";
import { fileURLToPath } from "url";

const self = dirname(fileURLToPath(import.meta.url));
export const MIGRATIONS_DIR = resolve(self, 'migrations');


export async function runMigration(){
    // for migrations
    const migrationClient = postgres("postgres://postgres:password@localhost:5432/postgres", { max: 1 });
    
    await migrate(drizzle(migrationClient), {
        migrationsFolder: MIGRATIONS_DIR
    })
    
    await migrationClient.end()
}

