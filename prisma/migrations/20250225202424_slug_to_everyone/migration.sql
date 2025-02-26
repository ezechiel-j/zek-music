/*
  Warnings:

  - You are about to alter the column `startDate` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `endDate` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[slug]` on the table `BlogPostCategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `ServiceCategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `ServiceRole` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `SetupItemPlace` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `SetupItemRole` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `BlogPostCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `ServiceCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `ServiceRole` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `SetupItemPlace` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `SetupItemRole` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BlogPostCategory` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Event` MODIFY `startDate` DATETIME NOT NULL,
    MODIFY `endDate` DATETIME NULL;

-- AlterTable
ALTER TABLE `NewsPostCategory` ADD COLUMN `slug` VARCHAR(191) NOT NULL DEFAULT 'Bobobo';

-- AlterTable
ALTER TABLE `ServiceCategory` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ServiceRole` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `SetupItemPlace` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `SetupItemRole` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `BlogPostCategory_slug_key` ON `BlogPostCategory`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `ServiceCategory_slug_key` ON `ServiceCategory`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `ServiceRole_slug_key` ON `ServiceRole`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `SetupItemPlace_slug_key` ON `SetupItemPlace`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `SetupItemRole_slug_key` ON `SetupItemRole`(`slug`);
