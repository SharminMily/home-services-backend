/*
  Warnings:

  - You are about to drop the column `providerId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `categoriesId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `locationId` on the `ServiceProvider` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ServiceProvider` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `ServiceProvider` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `provider_id` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_id` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_id` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_id` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_id` to the `ServiceProvider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `ServiceProvider` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Gender" ADD VALUE 'Other';

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_providerId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_userId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_categoriesId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceProvider" DROP CONSTRAINT "ServiceProvider_locationId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceProvider" DROP CONSTRAINT "ServiceProvider_userId_fkey";

-- DropIndex
DROP INDEX "ServiceProvider_userId_key";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "providerId",
DROP COLUMN "serviceId",
DROP COLUMN "userId",
ADD COLUMN     "provider_id" TEXT NOT NULL,
ADD COLUMN     "service_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Categories" ALTER COLUMN "popular" DROP NOT NULL,
ALTER COLUMN "popular" SET DEFAULT false,
ALTER COLUMN "featured" DROP NOT NULL,
ALTER COLUMN "featured" SET DEFAULT false,
ALTER COLUMN "latest" DROP NOT NULL,
ALTER COLUMN "latest" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "serviceId",
DROP COLUMN "userId",
ADD COLUMN     "service_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "categoriesId",
ADD COLUMN     "category_id" TEXT NOT NULL,
ADD COLUMN     "location_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ServiceProvider" DROP COLUMN "locationId",
DROP COLUMN "userId",
ADD COLUMN     "location_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ServiceProvider_user_id_key" ON "ServiceProvider"("user_id");

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "AvailableLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceProvider" ADD CONSTRAINT "ServiceProvider_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceProvider" ADD CONSTRAINT "ServiceProvider_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "AvailableLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "ServiceProvider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
