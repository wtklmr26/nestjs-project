/*
  Warnings:

  - You are about to drop the `Manga` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Volume` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Volume` DROP FOREIGN KEY `Volume_mangaId_fkey`;

-- DropTable
DROP TABLE `Manga`;

-- DropTable
DROP TABLE `Volume`;

-- CreateTable
CREATE TABLE `mangas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `mangas_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `volumes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `manga_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `volumes` ADD CONSTRAINT `volumes_manga_id_fkey` FOREIGN KEY (`manga_id`) REFERENCES `mangas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
