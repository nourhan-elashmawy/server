import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Role } from '../auth/enums/role.enum';
import { ROLES_KEY } from '../auth/decorators/roles.decorator';
import { Reflector } from '@nestjs/core';
import { User } from '../user/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true; // If no roles are required, allow access
    }
    const request = context
      .switchToHttp()
      .getRequest<Request & { user?: User }>();
    const user = request.user;

    if (!user) {
      return false; // If no user is present, deny access
    }

    return requiredRoles.includes(user.role);
  }
}
