/*
  Warnings:

  - You are about to drop the column `decription` on the `product` table. All the data in the column will be lost.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Product_id_key` ON `product`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `decription`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `price` INTEGER NOT NULL;
