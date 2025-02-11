/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropTable
DROP TABLE `Post`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `NewsPost` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `teaser` TINYTEXT NOT NULL,
    `thumbnailSrc` VARCHAR(191) NOT NULL,
    `thumbnailAlt` VARCHAR(191) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `categoryId` INTEGER NOT NULL,

    UNIQUE INDEX `NewsPost_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NewsPostCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `NewsPostCategory_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` MEDIUMTEXT NOT NULL,
    `thumbnailSrc` VARCHAR(191) NOT NULL,
    `thumbnailAlt` VARCHAR(191) NOT NULL,
    `startDate` DATETIME NOT NULL,
    `endDate` DATETIME NULL,
    `city` TINYTEXT NOT NULL,
    `state` TINYTEXT NULL,
    `country` TINYTEXT NOT NULL,
    `place` TINYTEXT NOT NULL,
    `isPaid` BOOLEAN NOT NULL DEFAULT false,
    `typeId` INTEGER NOT NULL,

    UNIQUE INDEX `Event_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EventType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `EventType_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BlogPost` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `thumbnailSrc` VARCHAR(191) NOT NULL,
    `thumbnailAlt` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `readTime` TINYINT NOT NULL,
    `categoryId` INTEGER NOT NULL,

    UNIQUE INDEX `BlogPost_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BlogPostCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `BlogPostCategory_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SetupItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `thumbnailSrc` VARCHAR(191) NOT NULL,
    `thumbnailAlt` VARCHAR(191) NOT NULL,
    `constructor` TINYTEXT NOT NULL,
    `series` TINYTEXT NULL,
    `model` VARCHAR(191) NOT NULL,
    `externalLink` VARCHAR(191) NOT NULL,
    `isSoftware` BOOLEAN NOT NULL,

    UNIQUE INDEX `SetupItem_model_key`(`model`),
    UNIQUE INDEX `SetupItem_externalLink_key`(`externalLink`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SetupItemPlace` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SetupItemPlace_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SetupItemsOnPlaces` (
    `setupItemId` INTEGER NOT NULL,
    `setupItemPlaceId` INTEGER NOT NULL,

    PRIMARY KEY (`setupItemId`, `setupItemPlaceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SetupItemRole` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SetupItemRole_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SetupItemsOnRoles` (
    `setupItemId` INTEGER NOT NULL,
    `setupItemRoleId` INTEGER NOT NULL,

    PRIMARY KEY (`setupItemId`, `setupItemRoleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Video` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `thumbnailSrc` VARCHAR(191) NOT NULL,
    `thumbnailAlt` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `videoExternalLink` VARCHAR(191) NOT NULL,
    `publisher` TINYTEXT NOT NULL,
    `publisherExternalLink` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Video_title_key`(`title`),
    UNIQUE INDEX `Video_videoExternalLink_key`(`videoExternalLink`),
    UNIQUE INDEX `Video_publisherExternalLink_key`(`publisherExternalLink`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GalleryImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `thumbnailSrc` VARCHAR(191) NOT NULL,
    `thumbnailAlt` VARCHAR(191) NOT NULL,
    `caption` TINYTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `price` DOUBLE NOT NULL,
    `unit` TINYTEXT NOT NULL,
    `categoryId` INTEGER NOT NULL,

    UNIQUE INDEX `Service_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ServiceCategory_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceNature` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ServiceNature_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServicesOnNatures` (
    `serviceId` INTEGER NOT NULL,
    `serviceNatureId` INTEGER NOT NULL,

    PRIMARY KEY (`serviceId`, `serviceNatureId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `NewsPost` ADD CONSTRAINT `NewsPost_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `NewsPostCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `EventType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BlogPost` ADD CONSTRAINT `BlogPost_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `BlogPostCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SetupItemsOnPlaces` ADD CONSTRAINT `SetupItemsOnPlaces_setupItemId_fkey` FOREIGN KEY (`setupItemId`) REFERENCES `SetupItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SetupItemsOnPlaces` ADD CONSTRAINT `SetupItemsOnPlaces_setupItemPlaceId_fkey` FOREIGN KEY (`setupItemPlaceId`) REFERENCES `SetupItemPlace`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SetupItemsOnRoles` ADD CONSTRAINT `SetupItemsOnRoles_setupItemId_fkey` FOREIGN KEY (`setupItemId`) REFERENCES `SetupItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SetupItemsOnRoles` ADD CONSTRAINT `SetupItemsOnRoles_setupItemRoleId_fkey` FOREIGN KEY (`setupItemRoleId`) REFERENCES `SetupItemRole`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `Service_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `ServiceCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServicesOnNatures` ADD CONSTRAINT `ServicesOnNatures_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServicesOnNatures` ADD CONSTRAINT `ServicesOnNatures_serviceNatureId_fkey` FOREIGN KEY (`serviceNatureId`) REFERENCES `ServiceNature`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
