-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "descricao" TEXT NOT NULL,
    "favoritado" BOOLEAN NOT NULL,
    "img_principal" TEXT NOT NULL,
    "qtd_estoque" INTEGER NOT NULL,
    "categoriaId" INTEGER,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registro_produto_desconto" (
    "id" SERIAL NOT NULL,
    "id_produto" INTEGER NOT NULL,
    "id_desconto" INTEGER NOT NULL,

    CONSTRAINT "Registro_produto_desconto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Desconto" (
    "id" SERIAL NOT NULL,
    "pr_desconto" DOUBLE PRECISION NOT NULL,
    "dt_final" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Desconto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "qtd_produtos" INTEGER NOT NULL,
    "DT_entrega" TIMESTAMP(3) NOT NULL,
    "DT_envio" TIMESTAMP(3) NOT NULL,
    "DT_estimada" TIMESTAMP(3) NOT NULL,
    "DT_compra" TIMESTAMP(3) NOT NULL,
    "ST_pagamento" TEXT NOT NULL,
    "ST_entrega" TEXT NOT NULL,
    "VL_frete" DOUBLE PRECISION NOT NULL,
    "VL_total" DOUBLE PRECISION NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "enderecoId" INTEGER NOT NULL,
    "cupomId" INTEGER NOT NULL,
    "pagamentoId" INTEGER NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registro_pedido_produto" (
    "id" SERIAL NOT NULL,
    "qtd_produto" INTEGER NOT NULL,
    "id_pedido" INTEGER NOT NULL,
    "id_produto" INTEGER NOT NULL,

    CONSTRAINT "Registro_pedido_produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "DT_nascimento" TIMESTAMP(3) NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hash_senha" TEXT NOT NULL,
    "id_perfil" INTEGER,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "cep" TEXT NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cupom" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "PR_desconto" DOUBLE PRECISION NOT NULL,
    "DT_validade" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cupom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pagamento" (
    "id" SERIAL NOT NULL,
    "cartao" BOOLEAN NOT NULL,
    "pix" BOOLEAN NOT NULL,
    "boleto" BOOLEAN NOT NULL,

    CONSTRAINT "Pagamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carrinho" (
    "id" SERIAL NOT NULL,
    "clienteId" INTEGER NOT NULL,

    CONSTRAINT "Carrinho_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registro_produto_carrinho" (
    "id" SERIAL NOT NULL,
    "qtd_produto" INTEGER NOT NULL,
    "id_produto" INTEGER NOT NULL,
    "id_carrinho" INTEGER NOT NULL,

    CONSTRAINT "Registro_produto_carrinho_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registro_favoritado" (
    "id" SERIAL NOT NULL,
    "id_produto" INTEGER NOT NULL,
    "id_cliente" INTEGER NOT NULL,

    CONSTRAINT "Registro_favoritado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registro_cliente_endereco" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "id_endereco" INTEGER NOT NULL,

    CONSTRAINT "Registro_cliente_endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Perfil" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Perfil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "estrelas" INTEGER NOT NULL,
    "id_produto" INTEGER NOT NULL,
    "id_cliente" INTEGER NOT NULL,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Filial" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "id_endereco" INTEGER NOT NULL,

    CONSTRAINT "Filial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registro_produto_filial" (
    "id" SERIAL NOT NULL,
    "qtd_produto" INTEGER NOT NULL,
    "id_produto" INTEGER NOT NULL,
    "id_filial" INTEGER NOT NULL,

    CONSTRAINT "Registro_produto_filial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Administrador" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "hash_senha" TEXT NOT NULL,

    CONSTRAINT "Administrador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Banner" (
    "id" SERIAL NOT NULL,
    "img_principal" TEXT NOT NULL,
    "img_2" TEXT NOT NULL,
    "img_3" TEXT NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_id_perfil_key" ON "Cliente"("id_perfil");

-- CreateIndex
CREATE UNIQUE INDEX "Carrinho_clienteId_key" ON "Carrinho"("clienteId");

-- CreateIndex
CREATE UNIQUE INDEX "Filial_id_endereco_key" ON "Filial"("id_endereco");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro_produto_desconto" ADD CONSTRAINT "Registro_produto_desconto_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro_produto_desconto" ADD CONSTRAINT "Registro_produto_desconto_id_desconto_fkey" FOREIGN KEY ("id_desconto") REFERENCES "Desconto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_cupomId_fkey" FOREIGN KEY ("cupomId") REFERENCES "Cupom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_pagamentoId_fkey" FOREIGN KEY ("pagamentoId") REFERENCES "Pagamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro_pedido_produto" ADD CONSTRAINT "Registro_pedido_produto_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro_pedido_produto" ADD CONSTRAINT "Registro_pedido_produto_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_id_perfil_fkey" FOREIGN KEY ("id_perfil") REFERENCES "Perfil"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrinho" ADD CONSTRAINT "Carrinho_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro_produto_carrinho" ADD CONSTRAINT "Registro_produto_carrinho_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro_produto_carrinho" ADD CONSTRAINT "Registro_produto_carrinho_id_carrinho_fkey" FOREIGN KEY ("id_carrinho") REFERENCES "Carrinho"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro_favoritado" ADD CONSTRAINT "Registro_favoritado_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro_favoritado" ADD CONSTRAINT "Registro_favoritado_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro_cliente_endereco" ADD CONSTRAINT "Registro_cliente_endereco_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro_cliente_endereco" ADD CONSTRAINT "Registro_cliente_endereco_id_endereco_fkey" FOREIGN KEY ("id_endereco") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Filial" ADD CONSTRAINT "Filial_id_endereco_fkey" FOREIGN KEY ("id_endereco") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro_produto_filial" ADD CONSTRAINT "Registro_produto_filial_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro_produto_filial" ADD CONSTRAINT "Registro_produto_filial_id_filial_fkey" FOREIGN KEY ("id_filial") REFERENCES "Filial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
