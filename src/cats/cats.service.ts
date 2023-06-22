import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getDetailCat(id: any) {
    return {
      status: 200,
      idCat: id,
      catCategory: 'Pumba',
    };
  }
}
