/*
  Warnings:

  - You are about to drop the column `Date` on the `OrderSummary` table. All the data in the column will be lost.
  - You are about to drop the column `Location` on the `OrderSummary` table. All the data in the column will be lost.
  - You are about to drop the column `Mode` on the `OrderSummary` table. All the data in the column will be lost.
  - You are about to drop the column `Order` on the `OrderSummary` table. All the data in the column will be lost.
  - You are about to drop the column `Time` on the `OrderSummary` table. All the data in the column will be lost.
  - Added the required column `date` to the `OrderSummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `OrderSummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mode` to the `OrderSummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `OrderSummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `OrderSummary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderSummary" DROP COLUMN "Date",
DROP COLUMN "Location",
DROP COLUMN "Mode",
DROP COLUMN "Order",
DROP COLUMN "Time",
ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "mode" TEXT NOT NULL,
ADD COLUMN     "order" TEXT NOT NULL,
ADD COLUMN     "time" TEXT NOT NULL;
