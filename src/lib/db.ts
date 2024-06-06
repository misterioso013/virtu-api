import { sql } from "drizzle-orm";
import {
  text,
  integer,
  sqliteTable,
  numeric,
  real,
} from "drizzle-orm/sqlite-core";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
const sqlite = new Database("sqlite.db", { create: true });
const db = drizzle(sqlite);

export { db };
