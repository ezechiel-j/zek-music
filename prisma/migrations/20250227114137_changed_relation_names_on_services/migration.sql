/*
  Warnings:

  - You are about to drop the `ServiceRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServicesOnRoles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ServicesOnRoles` DROP FOREIGN KEY `ServicesOnRoles_serviceId_fkey`;

-- DropForeignKey
ALTER TABLE `ServicesOnRoles` DROP FOREIGN KEY `ServicesOnRoles_serviceRoleId_fkey`;

-- DropTable
DROP TABLE `ServiceRole`;

-- DropTable
DROP TABLE `ServicesOnRoles`;

-- CreateTable
CREATE TABLE `ServiceContext` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ServiceContext_name_key`(`name`),
    UNIQUE INDEX `ServiceContext_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServicesOnContexts` (
    `serviceId` INTEGER NOT NULL,
    `serviceContextId` INTEGER NOT NULL,

    PRIMARY KEY (`serviceId`, `serviceContextId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ServicesOnContexts` ADD CONSTRAINT `ServicesOnContexts_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServicesOnContexts` ADD CONSTRAINT `ServicesOnContexts_serviceContextId_fkey` FOREIGN KEY (`serviceContextId`) REFERENCES `ServiceContext`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
