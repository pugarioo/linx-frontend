/*
  Warnings:

  - A unique constraint covering the columns `[short_code]` on the table `Link` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Link" ALTER COLUMN "clicks" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Link_short_code_key" ON "Link"("short_code");
