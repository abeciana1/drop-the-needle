-- CreateTable
CREATE TABLE "Invite" (
    "id" SERIAL NOT NULL,
    "rsvpYes" BOOLEAN NOT NULL DEFAULT false,
    "rsvpNo" BOOLEAN NOT NULL DEFAULT false,
    "rsvpMaybe" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "powerHourId" INTEGER NOT NULL,

    CONSTRAINT "Invite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_powerHourId_fkey" FOREIGN KEY ("powerHourId") REFERENCES "powerHours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
