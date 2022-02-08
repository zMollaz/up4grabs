-- CreateTable
CREATE TABLE "Listings" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "img_src" TEXT NOT NULL,
    "start_date" TEXT NOT NULL,
    "end_date" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,

    CONSTRAINT "Listings_pkey" PRIMARY KEY ("id")
);
