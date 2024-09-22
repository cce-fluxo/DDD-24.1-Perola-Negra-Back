import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BannerModule } from './banner/banner.module';
import { AdministradorModule } from './administrador/administrador.module';
import { PedidoModule } from './pedido/pedido.module';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { DescontoModule } from './desconto/desconto.module';
import { FilialModule } from './filial/filial.module';
import { EnderecoModule } from './endereco/endereco.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { ClienteModule } from './cliente/cliente.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { PerfilModule } from './perfil/perfil.module';
import { RegistroProdutoDescontoModule } from './registro_produto_desconto/registro_produto_desconto.module';
import { RegistroProdutoCarrinhoModule } from './registro_produto_carrinho/registro_produto_carrinho.module';
import { RegistroFavoritadoModule } from './registro_favoritado/registro_favoritado.module';
import { RegistroProdutoFilialModule } from './registro_produto_filial/registro_produto_filial.module';
import { RegistroClienteEnderecoModule } from './registro_cliente_endereco/registro_cliente_endereco.module';
import { RegistroPedidoProdutoModule } from './registro_pedido_produto/registro_pedido_produto.module';
import { CupomModule } from './cupom/cupom.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './auth/strategies/localstrategy';
import { JwtService } from '@nestjs/jwt';
import { ClienteService } from './cliente/cliente.service';
import { JwtStrategy } from './auth/strategies/jwt-strategy';

@Module({
  imports: [BannerModule, AdministradorModule, PedidoModule, ProdutoModule, CategoriaModule, DescontoModule, FilialModule, EnderecoModule, PagamentoModule, ClienteModule, AvaliacaoModule, PerfilModule, RegistroProdutoDescontoModule, RegistroProdutoCarrinhoModule, RegistroFavoritadoModule, RegistroProdutoFilialModule, RegistroClienteEnderecoModule, RegistroPedidoProdutoModule, CupomModule, CarrinhoModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, AuthService, LocalStrategy, JwtService, ClienteService, JwtStrategy]
})
export class AppModule {}
