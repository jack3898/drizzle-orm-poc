import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { fileURLToPath,  } from 'url'
import {dirname, resolve} from 'path'

// for query purposes
// const queryClient = postgres("postgres://postgres:password@localhost:5432/postgres");
// const db = drizzle(queryClient);

const self = dirname(fileURLToPath(import.meta.url));

export const MIGRATIONS_DIR = resolve(self, 'migrations');
export const SCHEMA_FILE = resolve(self, 'schema.ts')