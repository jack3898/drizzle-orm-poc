import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from 'package/schema.js'
import postgres from 'postgres'

const client = postgres('postgres://postgres:password@localhost:5432/postgres', {max: 1})

const db = drizzle(client, {schema, logger:true })

await db.insert(schema.userSchema).values({
    name: 'wow ok'
})

const users = await db.query.userSchema.findMany()

console.log(users)