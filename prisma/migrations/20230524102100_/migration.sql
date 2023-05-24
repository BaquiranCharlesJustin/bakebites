/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_orderSummaryId_fkey";

-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "Cake" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "orderSummaryId" INTEGER,

    CONSTRAINT "Cake_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cupcake" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "orderSummaryId" INTEGER,

    CONSTRAINT "Cupcake_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bakery" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "orderSummaryId" INTEGER,

    CONSTRAINT "Bakery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "userSession" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "productType" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cake" ADD CONSTRAINT "Cake_orderSummaryId_fkey" FOREIGN KEY ("orderSummaryId") REFERENCES "OrderSummary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cupcake" ADD CONSTRAINT "Cupcake_orderSummaryId_fkey" FOREIGN KEY ("orderSummaryId") REFERENCES "OrderSummary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bakery" ADD CONSTRAINT "Bakery_orderSummaryId_fkey" FOREIGN KEY ("orderSummaryId") REFERENCES "OrderSummary"("id") ON DELETE SET NULL ON UPDATE CASCADE;
