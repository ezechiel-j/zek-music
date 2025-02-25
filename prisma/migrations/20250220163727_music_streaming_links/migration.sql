/*
  Warnings:

  - You are about to alter the column `startDate` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `endDate` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[spotifyLink]` on the table `Audio` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tidalLink]` on the table `Audio` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[deezerLink]` on the table `Audio` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[appleMusicLink]` on the table `Audio` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[amazonMusicLink]` on the table `Audio` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Audio` ADD COLUMN `amazonMusicLink` VARCHAR(191) NULL,
    ADD COLUMN `appleMusicLink` VARCHAR(191) NULL,
    ADD COLUMN `deezerLink` VARCHAR(191) NULL,
    ADD COLUMN `spotifyLink` VARCHAR(191) NULL,
    ADD COLUMN `tidalLink` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Event` MODIFY `startDate` DATETIME NOT NULL,
    MODIFY `endDate` DATETIME NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Audio_spotifyLink_key` ON `Audio`(`spotifyLink`);

-- CreateIndex
CREATE UNIQUE INDEX `Audio_tidalLink_key` ON `Audio`(`tidalLink`);

-- CreateIndex
CREATE UNIQUE INDEX `Audio_deezerLink_key` ON `Audio`(`deezerLink`);

-- CreateIndex
CREATE UNIQUE INDEX `Audio_appleMusicLink_key` ON `Audio`(`appleMusicLink`);

-- CreateIndex
CREATE UNIQUE INDEX `Audio_amazonMusicLink_key` ON `Audio`(`amazonMusicLink`);
