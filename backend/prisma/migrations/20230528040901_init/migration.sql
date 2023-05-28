/*
  Warnings:

  - Added the required column `volume` to the `volumes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `volumes` ADD COLUMN `volume` INTEGER NOT NULL;
