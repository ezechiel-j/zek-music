/*
  Warnings:

  - You are about to alter the column `startDate` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `endDate` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `Event` MODIFY `startDate` DATETIME NOT NULL,
    MODIFY `endDate` DATETIME NULL;

-- AlterTable
ALTER TABLE `EventType` ADD COLUMN `slug` VARCHAR(191) NOT NULL DEFAULT 'Bobo';
