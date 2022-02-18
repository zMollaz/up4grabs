/*
  Warnings:

  - The `start_date` column on the `Listings` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `end_date` column on the `Listings` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Likes` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Listings" ALTER COLUMN "category_id" DROP NOT NULL,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "img_src" DROP NOT NULL,
DROP COLUMN "start_date",
ADD COLUMN     "start_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "end_date",
ADD COLUMN     "end_date" TIMESTAMP(3),
ALTER COLUMN "postal_code" DROP NOT NULL;

-- DropTable
DROP TABLE "Likes";

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
