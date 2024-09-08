-- CreateTable
CREATE TABLE "Filial" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "id_endereco" INTEGER NOT NULL,
    CONSTRAINT "Filial_id_endereco_fkey" FOREIGN KEY ("id_endereco") REFERENCES "Endereco" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "cep" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Registro_produto_filial" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "qtd_produto" INTEGER NOT NULL,
    "id_produto" INTEGER NOT NULL,
    "id_filial" INTEGER NOT NULL,
    CONSTRAINT "Registro_produto_filial_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Registro_produto_filial_id_filial_fkey" FOREIGN KEY ("id_filial") REFERENCES "Filial" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Filial_id_endereco_key" ON "Filial"("id_endereco");
