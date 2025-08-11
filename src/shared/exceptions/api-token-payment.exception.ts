import { HttpException, HttpStatus } from '@nestjs/common';

export class ApiTokenPAyment extends HttpException {
  constructor() {
    super('Token suggest payment is required', HttpStatus.PAYMENT_REQUIRED);
  }
}
