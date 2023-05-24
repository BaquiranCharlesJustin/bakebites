-- CreateTable
CREATE TABLE "OrderSummary" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "Date" TEXT NOT NULL,
    "Time" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "Order" TEXT NOT NULL,
    "Mode" TEXT NOT NULL,
    "userSession" TEXT NOT NULL,

    CONSTRAINT "OrderSummary_pkey" PRIMARY KEY ("id")
);
