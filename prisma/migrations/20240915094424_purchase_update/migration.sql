/*
  Warnings:

  - Added the required column `total` to the `purchases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "purchases" ADD COLUMN     "total" DOUBLE PRECISION NOT NULL;
