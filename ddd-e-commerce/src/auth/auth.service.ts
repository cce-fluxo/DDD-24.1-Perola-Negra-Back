import { Injectable} from '@nestjs/common';
import { ClienteService } from 'src/cliente/cliente.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly userService: ClienteService

    ) {}

    validateUser (email, password){
        const user = this.userService.findByEmail(email)
    }
}
