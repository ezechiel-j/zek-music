/*
  Warnings:

  - You are about to drop the column `isSoftware` on the `SetupItem` table. All the data in the column will be lost.
  - Added the required column `setupItemTypeId` to the `SetupItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `SetupItem` DROP COLUMN `isSoftware`,
    ADD COLUMN `setupItemTypeId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `SetupItemType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SetupItemType_name_key`(`name`),
    UNIQUE INDEX `SetupItemType_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SetupItem` ADD CONSTRAINT `SetupItem_setupItemTypeId_fkey` FOREIGN KEY (`setupItemTypeId`) REFERENCES `SetupItemType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
