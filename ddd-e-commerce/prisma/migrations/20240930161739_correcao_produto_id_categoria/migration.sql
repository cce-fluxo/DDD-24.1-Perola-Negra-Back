/*
  Warnings:

  - You are about to drop the column `categoriaId` on the `Produto` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_categoriaId_fkey";

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "categoriaId",
ADD COLUMN     "id_categoria" INTEGER;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;
