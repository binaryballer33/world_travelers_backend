/*
  Warnings:

  - You are about to drop the column `endDate` on the `VacationPackage` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `VacationPackage` table. All the data in the column will be lost.
  - Added the required column `description` to the `VacationPackage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `VacationPackage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "VacationPackage" DROP COLUMN "endDate",
DROP COLUMN "startDate",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL;
