import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { log } from 'console';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { AuthorizationService } from 'src/modules/authorization';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly authorizationService: AuthorizationService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const { method, originalUrl, user } = request;
    const action = this.authorizationService.mappingAction(method);

    if (!user) throw new UnauthorizedException();

    return this.authorizationService.checkPermission(
      `role:${(user as any).role}`,
      originalUrl,
      action,
    );
  }
}
