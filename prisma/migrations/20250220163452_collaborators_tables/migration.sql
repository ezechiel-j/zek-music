/*
  Warnings:

  - You are about to drop the column `eternalLink` on the `Collaborator` table. All the data in the column will be lost.
  - You are about to alter the column `startDate` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `endDate` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `publisher` on the `Video` table. All the data in the column will be lost.
  - You are about to drop the column `publisherExternalLink` on the `Video` table. All the data in the column will be lost.
  - You are about to drop the `Collaboration` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CollaboratorsOnCollaborations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GalleryImageOnCollaboration` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[extLink1]` on the table `Collaborator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[extLink2]` on the table `Collaborator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[extLink3]` on the table `Collaborator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[extLink4]` on the table `Collaborator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[extLink5]` on the table `Collaborator` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `CollaboratorsOnCollaborations` DROP FOREIGN KEY `CollaboratorsOnCollaborations_collaborationId_fkey`;

-- DropForeignKey
ALTER TABLE `CollaboratorsOnCollaborations` DROP FOREIGN KEY `CollaboratorsOnCollaborations_collaboratorId_fkey`;

-- DropForeignKey
ALTER TABLE `GalleryImageOnCollaboration` DROP FOREIGN KEY `GalleryImageOnCollaboration_collaboratorId_fkey`;

-- DropForeignKey
ALTER TABLE `GalleryImageOnCollaboration` DROP FOREIGN KEY `GalleryImageOnCollaboration_galleryImageId_fkey`;

-- DropIndex
DROP INDEX `Collaborator_eternalLink_key` ON `Collaborator`;

-- DropIndex
DROP INDEX `Video_publisherExternalLink_key` ON `Video`;

-- AlterTable
ALTER TABLE `Collaborator` DROP COLUMN `eternalLink`,
    ADD COLUMN `extLink1` VARCHAR(191) NULL,
    ADD COLUMN `extLink2` VARCHAR(191) NULL,
    ADD COLUMN `extLink3` VARCHAR(191) NULL,
    ADD COLUMN `extLink4` VARCHAR(191) NULL,
    ADD COLUMN `extLink5` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Event` MODIFY `startDate` DATETIME NOT NULL,
    MODIFY `endDate` DATETIME NULL;

-- AlterTable
ALTER TABLE `Video` DROP COLUMN `publisher`,
    DROP COLUMN `publisherExternalLink`;

-- DropTable
DROP TABLE `Collaboration`;

-- DropTable
DROP TABLE `CollaboratorsOnCollaborations`;

-- DropTable
DROP TABLE `GalleryImageOnCollaboration`;

-- CreateTable
CREATE TABLE `Audio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `thumbnailSrc` VARCHAR(191) NOT NULL,
    `thumbnailAlt` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `isAlbum` BOOLEAN NOT NULL,
    `artist` VARCHAR(191) NOT NULL DEFAULT 'Zek',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CollaboratorsOnVideos` (
    `collaboratorId` INTEGER NOT NULL,
    `videoId` INTEGER NOT NULL,

    PRIMARY KEY (`collaboratorId`, `videoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CollaboratorsOnPhotos` (
    `galleryImageId` INTEGER NOT NULL,
    `collaboratorId` INTEGER NOT NULL,

    PRIMARY KEY (`collaboratorId`, `galleryImageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CollaboratorsOnAudios` (
    `audioId` INTEGER NOT NULL,
    `collaboratorId` INTEGER NOT NULL,

    PRIMARY KEY (`audioId`, `collaboratorId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Collaborator_extLink1_key` ON `Collaborator`(`extLink1`);

-- CreateIndex
CREATE UNIQUE INDEX `Collaborator_extLink2_key` ON `Collaborator`(`extLink2`);

-- CreateIndex
CREATE UNIQUE INDEX `Collaborator_extLink3_key` ON `Collaborator`(`extLink3`);

-- CreateIndex
CREATE UNIQUE INDEX `Collaborator_extLink4_key` ON `Collaborator`(`extLink4`);

-- CreateIndex
CREATE UNIQUE INDEX `Collaborator_extLink5_key` ON `Collaborator`(`extLink5`);

-- AddForeignKey
ALTER TABLE `CollaboratorsOnVideos` ADD CONSTRAINT `CollaboratorsOnVideos_collaboratorId_fkey` FOREIGN KEY (`collaboratorId`) REFERENCES `Collaborator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CollaboratorsOnVideos` ADD CONSTRAINT `CollaboratorsOnVideos_videoId_fkey` FOREIGN KEY (`videoId`) REFERENCES `Video`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CollaboratorsOnPhotos` ADD CONSTRAINT `CollaboratorsOnPhotos_galleryImageId_fkey` FOREIGN KEY (`galleryImageId`) REFERENCES `GalleryImage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CollaboratorsOnPhotos` ADD CONSTRAINT `CollaboratorsOnPhotos_collaboratorId_fkey` FOREIGN KEY (`collaboratorId`) REFERENCES `Collaborator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CollaboratorsOnAudios` ADD CONSTRAINT `CollaboratorsOnAudios_audioId_fkey` FOREIGN KEY (`audioId`) REFERENCES `Audio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CollaboratorsOnAudios` ADD CONSTRAINT `CollaboratorsOnAudios_collaboratorId_fkey` FOREIGN KEY (`collaboratorId`) REFERENCES `Collaborator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
