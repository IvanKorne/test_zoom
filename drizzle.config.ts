import { defineConfig } from "drizzle-kit";
import type { Config } from "drizzle-kit";
export default defineConfig({
  schema: "./schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DB_URL!,
  },
  verbose: true,
  strict: true,
  tablesFilter: ["modern_*"],
}) satisfies Config;
