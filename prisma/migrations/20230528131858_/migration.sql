/*
  Warnings:

  - You are about to drop the column `orderSummaryId` on the `Bakery` table. All the data in the column will be lost.
  - You are about to drop the column `orderSummaryId` on the `Cake` table. All the data in the column will be lost.
  - You are about to drop the column `orderSummaryId` on the `Cupcake` table. All the data in the column will be lost.
  - Added the required column `amount` to the `OrderSummary` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bakery" DROP CONSTRAINT "Bakery_orderSummaryId_fkey";

-- DropForeignKey
ALTER TABLE "Cake" DROP CONSTRAINT "Cake_orderSummaryId_fkey";

-- DropForeignKey
ALTER TABLE "Cupcake" DROP CONSTRAINT "Cupcake_orderSummaryId_fkey";

-- AlterTable
ALTER TABLE "Bakery" DROP COLUMN "orderSummaryId";

-- AlterTable
ALTER TABLE "Cake" DROP COLUMN "orderSummaryId";

-- AlterTable
ALTER TABLE "Cupcake" DROP COLUMN "orderSummaryId";

-- AlterTable
ALTER TABLE "OrderSummary" ADD COLUMN     "amount" INTEGER NOT NULL;
