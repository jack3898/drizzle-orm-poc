import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

// for migrations
const migrationClient = postgres("postgres://postgres:password@localhost:5432/postgres", { max: 1 });

await migrate(drizzle(migrationClient), {
    migrationsFolder: './migrations'
})

await migrationClient.end()
