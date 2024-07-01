import { Module, Global } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from './env';

@Global()
@Module({
    imports: [
        JwtModule.register({
            secret: JWT_SECRET,
            signOptions: { expiresIn: '7d' },
        }),
    ],
    exports: [JwtModule],
})
export class JwtConfigModule {}