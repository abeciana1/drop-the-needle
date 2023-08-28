/*
  Warnings:

  - You are about to drop the column `album` on the `powerHours` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `powerHours` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PowerHourSong" ADD COLUMN     "album" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "year" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "powerHours" DROP COLUMN "album",
DROP COLUMN "year";
