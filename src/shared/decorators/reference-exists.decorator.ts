import { registerDecorator, ValidationOptions } from 'class-validator';
import {
  ReferenceExistsOptions,
  ReferenceExistsValidator,
} from '../validators/reference-exists.validator';

export function ReferenceExists(
  options: ReferenceExistsOptions,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'ReferenceExists',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [options],
      options: validationOptions,
      validator: ReferenceExistsValidator,
    });
  };
}
