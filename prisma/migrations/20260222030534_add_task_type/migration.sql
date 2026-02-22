-- CreateEnum
CREATE TYPE "TaskType" AS ENUM ('DAILY', 'ASSIGNED', 'SPECIFIC');

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "type" "TaskType" NOT NULL DEFAULT 'SPECIFIC';
