-- CreateTable
CREATE TABLE "Likes" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "listing_id" INTEGER NOT NULL,

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("id")
);
