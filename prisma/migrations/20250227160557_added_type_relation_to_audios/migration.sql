/*
  Warnings:

  - You are about to drop the column `isAlbum` on the `Audio` table. All the data in the column will be lost.
  - Added the required column `audioTypeId` to the `Audio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Audio` DROP COLUMN `isAlbum`,
    ADD COLUMN `audioTypeId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `AudioType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AudioType_name_key`(`name`),
    UNIQUE INDEX `AudioType_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Audio` ADD CONSTRAINT `Audio_audioTypeId_fkey` FOREIGN KEY (`audioTypeId`) REFERENCES `AudioType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
