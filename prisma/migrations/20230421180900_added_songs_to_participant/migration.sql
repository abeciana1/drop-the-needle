/*
  Warnings:

  - You are about to drop the `PowerHourSongs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PowerHourSongs" DROP CONSTRAINT "PowerHourSongs_powerHourId_fkey";

-- DropTable
DROP TABLE "PowerHourSongs";

-- CreateTable
CREATE TABLE "PowerHourSong" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "youtubeLink" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "powerHourId" INTEGER NOT NULL,
    "orderNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "participantId" INTEGER NOT NULL,

    CONSTRAINT "PowerHourSong_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PowerHourSong" ADD CONSTRAINT "PowerHourSong_powerHourId_fkey" FOREIGN KEY ("powerHourId") REFERENCES "powerHours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PowerHourSong" ADD CONSTRAINT "PowerHourSong_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
