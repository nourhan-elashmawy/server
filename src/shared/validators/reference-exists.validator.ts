import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { DataSource } from 'typeorm';

export interface ReferenceExistsOptions {
  entity: string; // Entity name
  field?: string; // Field to check --> default is id
}

@ValidatorConstraint({ name: 'ReferenceExists', async: true })
@Injectable()
export class ReferenceExistsValidator implements ValidatorConstraintInterface {
  constructor(private dataSource: DataSource) {}
  async validate(value: number, args: ValidationArguments): Promise<boolean> {
    if (!value) return true;

    const [options] = args.constraints as [ReferenceExistsOptions];
    const { entity, field = 'id' } = options;

    try {
      const repository = this.dataSource.getRepository(entity);

      const exists = await repository.findOne({
        where: { [field]: value },
      });

      return !!exists;
    } catch (error) {
      console.error('Error validating reference existence: ', error);
      return false;
    }
  }
}
