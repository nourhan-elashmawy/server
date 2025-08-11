import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

export class ApiTokenCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request Headers: ', req.headers);

    // if (req.headers['api-token'] !== 'my-token') {
    //   throw new BadRequestException('The token does not match -- middleware');
    // }

    next();
  }
}
