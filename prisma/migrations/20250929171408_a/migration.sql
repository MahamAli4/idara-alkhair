-- AlterTable
ALTER TABLE `jobpost` ADD COLUMN `category` VARCHAR(191) NULL,
    ADD COLUMN `deadlineAt` DATETIME(3) NULL,
    ADD COLUMN `department` VARCHAR(191) NULL,
    ADD COLUMN `employmentLevel` VARCHAR(191) NULL,
    ADD COLUMN `meta` JSON NULL,
    ADD COLUMN `qualifications` VARCHAR(191) NULL,
    ADD COLUMN `requirements` VARCHAR(191) NULL,
    ADD COLUMN `responsibilities` VARCHAR(191) NULL;
