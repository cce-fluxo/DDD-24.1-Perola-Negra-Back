-- CreateTable
CREATE TABLE "Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "favoritado" BOOLEAN NOT NULL,
    "img_principal" TEXT NOT NULL,
    "qtd_estoque" INTEGER NOT NULL,
    "id_categoria" INTEGER,
    CONSTRAINT "Produto_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Categoria" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Desconto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pr_desconto" REAL NOT NULL,
    "dt_final" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Registro_produto_desconto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_produto" INTEGER NOT NULL,
    "id_desconto" INTEGER NOT NULL,
    CONSTRAINT "Registro_produto_desconto_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Registro_produto_desconto_id_desconto_fkey" FOREIGN KEY ("id_desconto") REFERENCES "Desconto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
