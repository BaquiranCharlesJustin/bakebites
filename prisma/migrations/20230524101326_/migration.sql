/*
  Warnings:

  - You are about to drop the column `order` on the `OrderSummary` table. All the data in the column will be lost.
  - You are about to drop the `Bakery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cake` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cupcake` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "OrderSummary" DROP COLUMN "order";

-- DropTable
DROP TABLE "Bakery";

-- DropTable
DROP TABLE "Cake";

-- DropTable
DROP TABLE "Cart";

-- DropTable
DROP TABLE "Cupcake";

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "orderSummaryId" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_orderSummaryId_fkey" FOREIGN KEY ("orderSummaryId") REFERENCES "OrderSummary"("id") ON DELETE SET NULL ON UPDATE CASCADE;
