/*
  Warnings:

  - You are about to alter the column `startDate` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `endDate` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[slug]` on the table `EventType` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Event` MODIFY `startDate` DATETIME NOT NULL,
    MODIFY `endDate` DATETIME NULL;

-- AlterTable
ALTER TABLE `EventType` ALTER COLUMN `slug` DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX `EventType_slug_key` ON `EventType`(`slug`);
