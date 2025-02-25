/*
  Warnings:

  - You are about to drop the column `name` on the `Event` table. All the data in the column will be lost.
  - You are about to alter the column `startDate` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `endDate` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[title]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `boxOfficeLink` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `placeMapLink` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `programLink` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Event_name_key` ON `Event`;

-- AlterTable
ALTER TABLE `Event` DROP COLUMN `name`,
    ADD COLUMN `boxOfficeLink` VARCHAR(191) NOT NULL,
    ADD COLUMN `hasProgram` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `placeMapLink` VARCHAR(191) NOT NULL,
    ADD COLUMN `programLink` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL,
    MODIFY `description` LONGTEXT NOT NULL,
    MODIFY `startDate` DATETIME NOT NULL,
    MODIFY `endDate` DATETIME NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Event_title_key` ON `Event`(`title`);
