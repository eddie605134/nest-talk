import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      // 從 request header bearer 中取得 token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 對過期做驗證
      ignoreExpiration: false,
      // 從 config 中取得 secret
      secretOrKey: configService.get<string>('secrets.jwt'),
    });
  }
  async validate(payload: Record<string, string>) {
    const { id, username } = payload;
    return { id, username, role: 'staff' };
  }
}
