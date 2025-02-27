/*
  Warnings:

  - You are about to drop the column `videoExternalLink` on the `Video` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[externalLink]` on the table `Video` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `externalLink` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Video_videoExternalLink_key` ON `Video`;

-- AlterTable
ALTER TABLE `Video` DROP COLUMN `videoExternalLink`,
    ADD COLUMN `externalLink` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Video_externalLink_key` ON `Video`(`externalLink`);
