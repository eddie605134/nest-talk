import { SetMetadata, applyDecorators, UseGuards } from '@nestjs/common';
import { Roles } from '../roles/roles.decorator';
import { RoleGuard } from '../../guards/role/role.guard';

export const Autoruzation = (...args: string[]) =>
  applyDecorators(Roles(...args), UseGuards(RoleGuard));
