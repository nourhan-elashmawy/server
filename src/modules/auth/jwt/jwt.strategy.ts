import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_SECRET')!,
    });
  }

  validate(payload: any) {
    const user = {
      id: (payload as { sub: string }).sub,
      name: (payload as { name: string }).name,
      email: (payload as { email: string }).email,
    };
    console.log('JWT Strategy returning:', user); // Debug log
    return user;
  }
}
