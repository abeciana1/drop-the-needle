/*
  Warnings:

  - A unique constraint covering the columns `[inviteToken]` on the table `powerHours` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "powerHours_inviteToken_key" ON "powerHours"("inviteToken");
