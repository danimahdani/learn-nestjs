import { Injectable } from '@nestjs/common';

@Injectable()
export class LatihanService {
  getLatihan() {
    return {
      status: 200,
      message: 'latihan',
    };
  }
}
