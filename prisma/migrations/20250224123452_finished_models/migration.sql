/*
  Warnings:

  - You are about to alter the column `startDate` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `endDate` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `content` on the `NewsPost` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `NewsPost` table. All the data in the column will be lost.
  - You are about to drop the `ServiceNature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServicesOnNatures` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `body` to the `BlogPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `body` to the `NewsPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `readTime` to the `NewsPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailCaption` to the `NewsPost` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ServicesOnNatures` DROP FOREIGN KEY `ServicesOnNatures_serviceId_fkey`;

-- DropForeignKey
ALTER TABLE `ServicesOnNatures` DROP FOREIGN KEY `ServicesOnNatures_serviceNatureId_fkey`;

-- AlterTable
ALTER TABLE `BlogPost` ADD COLUMN `body` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `Event` MODIFY `startDate` DATETIME NOT NULL,
    MODIFY `endDate` DATETIME NULL;

-- AlterTable
ALTER TABLE `NewsPost` DROP COLUMN `content`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `body` LONGTEXT NOT NULL,
    ADD COLUMN `readTime` TINYINT NOT NULL,
    ADD COLUMN `thumbnailCaption` TINYTEXT NOT NULL;

-- DropTable
DROP TABLE `ServiceNature`;

-- DropTable
DROP TABLE `ServicesOnNatures`;

-- CreateTable
CREATE TABLE `ServiceRole` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ServiceRole_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServicesOnRoles` (
    `serviceId` INTEGER NOT NULL,
    `serviceRoleId` INTEGER NOT NULL,

    PRIMARY KEY (`serviceId`, `serviceRoleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ServicesOnRoles` ADD CONSTRAINT `ServicesOnRoles_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServicesOnRoles` ADD CONSTRAINT `ServicesOnRoles_serviceRoleId_fkey` FOREIGN KEY (`serviceRoleId`) REFERENCES `ServiceRole`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
