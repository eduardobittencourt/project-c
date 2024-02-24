CREATE TABLE IF NOT EXISTS "user_groups" (
	"id" uuid,
	"user_id" text NOT NULL,
	CONSTRAINT "user_groups_id_user_id_pk" PRIMARY KEY("id","user_id"),
	CONSTRAINT "user_groups_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_groups" ADD CONSTRAINT "user_groups_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
