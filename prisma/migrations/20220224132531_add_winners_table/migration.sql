-- CreateTable
CREATE TABLE "Winners" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "listing_id" INTEGER NOT NULL,

    CONSTRAINT "Winners_pkey" PRIMARY KEY ("id")
);
