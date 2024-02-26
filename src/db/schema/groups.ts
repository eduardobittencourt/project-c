import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const groups = pgTable("group", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
});
