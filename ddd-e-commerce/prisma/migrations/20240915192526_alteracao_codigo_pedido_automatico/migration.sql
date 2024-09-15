/*
  Warnings:

  - The `codigo` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[codigo]` on the table `Pedido` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "codigo",
ADD COLUMN     "codigo" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_codigo_key" ON "Pedido"("codigo");
