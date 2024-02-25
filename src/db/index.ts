import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

import * as accounts from "@/db/schema/accounts";
import * as sessions from "@/db/schema/sessions";
import * as userGroups from "@/db/schema/userGroups";
import * as users from "@/db/schema/users";
import * as verificationTokens from "@/db/schema/verificationTokens";

export const db = drizzle(sql, {
  schema: {
    ...accounts,
    ...sessions,
    ...userGroups,
    ...users,
    ...verificationTokens,
  },
});
