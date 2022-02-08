-- CreateTable
CREATE TABLE "Biddings" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "listing_id" INTEGER NOT NULL,

    CONSTRAINT "Biddings_pkey" PRIMARY KEY ("id")
);
