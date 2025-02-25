/*
  Warnings:

  - You are about to alter the column `startDate` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `endDate` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `caption` on the `GalleryImage` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnailAlt` on the `GalleryImage` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnailSrc` on the `GalleryImage` table. All the data in the column will be lost.
  - Added the required column `description` to the `GalleryImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgAlt` to the `GalleryImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgSrc` to the `GalleryImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Event` MODIFY `startDate` DATETIME NOT NULL,
    MODIFY `endDate` DATETIME NULL;

-- AlterTable
ALTER TABLE `GalleryImage` DROP COLUMN `caption`,
    DROP COLUMN `thumbnailAlt`,
    DROP COLUMN `thumbnailSrc`,
    ADD COLUMN `description` LONGTEXT NOT NULL,
    ADD COLUMN `imgAlt` VARCHAR(191) NOT NULL,
    ADD COLUMN `imgSrc` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `GalleryImageOnCollaboration` (
    `galleryImageId` INTEGER NOT NULL,
    `collaboratorId` INTEGER NOT NULL,

    PRIMARY KEY (`galleryImageId`, `collaboratorId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Collaborator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `eternalLink` VARCHAR(191) NOT NULL,
    `pictureSrc` VARCHAR(191) NOT NULL,
    `pictureAlt` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,

    UNIQUE INDEX `Collaborator_name_key`(`name`),
    UNIQUE INDEX `Collaborator_eternalLink_key`(`eternalLink`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Collaboration` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `place` TINYTEXT NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,

    UNIQUE INDEX `Collaboration_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CollaboratorsOnCollaborations` (
    `collaboratorId` INTEGER NOT NULL,
    `collaborationId` INTEGER NOT NULL,

    PRIMARY KEY (`collaboratorId`, `collaborationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GalleryImageOnCollaboration` ADD CONSTRAINT `GalleryImageOnCollaboration_galleryImageId_fkey` FOREIGN KEY (`galleryImageId`) REFERENCES `GalleryImage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GalleryImageOnCollaboration` ADD CONSTRAINT `GalleryImageOnCollaboration_collaboratorId_fkey` FOREIGN KEY (`collaboratorId`) REFERENCES `Collaborator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CollaboratorsOnCollaborations` ADD CONSTRAINT `CollaboratorsOnCollaborations_collaboratorId_fkey` FOREIGN KEY (`collaboratorId`) REFERENCES `Collaborator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CollaboratorsOnCollaborations` ADD CONSTRAINT `CollaboratorsOnCollaborations_collaborationId_fkey` FOREIGN KEY (`collaborationId`) REFERENCES `Collaboration`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
