/*
  Warnings:

  - You are about to drop the column `deadline` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "deadline",
ADD COLUMN     "timeEnd" TIMESTAMP(3),
ADD COLUMN     "timeStart" TIMESTAMP(3);
