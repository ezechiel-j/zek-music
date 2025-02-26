/*
  Warnings:

  - Added the required column `startTime` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Event` ADD COLUMN `endTime` TIME NULL,
    ADD COLUMN `startTime` TIME NOT NULL,
    MODIFY `startDate` DATE NOT NULL,
    MODIFY `endDate` DATE NULL;
