-- AlterTable
ALTER TABLE `jobapplication` ADD COLUMN `city` VARCHAR(191) NULL,
    ADD COLUMN `expectedSalary` INTEGER NULL,
    ADD COLUMN `highestEducation` VARCHAR(191) NULL,
    ADD COLUMN `linkedinUrl` VARCHAR(191) NULL,
    ADD COLUMN `portfolioUrl` VARCHAR(191) NULL,
    ADD COLUMN `yearsOfExperience` INTEGER NULL;
