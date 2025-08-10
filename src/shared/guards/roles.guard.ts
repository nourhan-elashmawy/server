import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Role } from '../constants/role.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Reflector } from '@nestjs/core';
import { User } from '../../modules/user/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true; // if no roles are required, allow access
    }
    const request = context
      .switchToHttp()
      .getRequest<Request & { user?: User }>();
    const user = request.user;

    if (!user) {
      return false; // if no user is present, deny access
    }

    return requiredRoles.includes(user.role);
  }
}
