-- AlterTable
ALTER TABLE "powerHours" ADD COLUMN     "privateStatus" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "publishStatus" BOOLEAN NOT NULL DEFAULT false;
