/*
  Warnings:

  - A unique constraint covering the columns `[link_instagram]` on the table `Collaborator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[link_facebook]` on the table `Collaborator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[link_linkedin]` on the table `Collaborator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[link_bandcamp]` on the table `Collaborator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[link_fiverr]` on the table `Collaborator` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Collaborator` ADD COLUMN `link_bandcamp` VARCHAR(191) NULL,
    ADD COLUMN `link_facebook` VARCHAR(191) NULL,
    ADD COLUMN `link_fiverr` VARCHAR(191) NULL,
    ADD COLUMN `link_instagram` VARCHAR(191) NULL,
    ADD COLUMN `link_linkedin` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Collaborator_link_instagram_key` ON `Collaborator`(`link_instagram`);

-- CreateIndex
CREATE UNIQUE INDEX `Collaborator_link_facebook_key` ON `Collaborator`(`link_facebook`);

-- CreateIndex
CREATE UNIQUE INDEX `Collaborator_link_linkedin_key` ON `Collaborator`(`link_linkedin`);

-- CreateIndex
CREATE UNIQUE INDEX `Collaborator_link_bandcamp_key` ON `Collaborator`(`link_bandcamp`);

-- CreateIndex
CREATE UNIQUE INDEX `Collaborator_link_fiverr_key` ON `Collaborator`(`link_fiverr`);
