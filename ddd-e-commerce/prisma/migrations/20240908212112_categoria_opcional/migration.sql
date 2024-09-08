-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "favoritado" BOOLEAN NOT NULL,
    "img_principal" TEXT NOT NULL,
    "qtd_estoque" INTEGER NOT NULL,
    "categoriaId" INTEGER,
    CONSTRAINT "Produto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Produto" ("categoriaId", "cor", "descricao", "favoritado", "id", "img_principal", "nome", "preco", "qtd_estoque", "tamanho") SELECT "categoriaId", "cor", "descricao", "favoritado", "id", "img_principal", "nome", "preco", "qtd_estoque", "tamanho" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
