import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: 'postgresql',
    schema: './schema.ts',
    out:'./migrations',
    dbCredentials: {
        url: 'postgres://postgres:password@localhost:5432/postgres'
    },
    verbose:true,
    strict:true
})