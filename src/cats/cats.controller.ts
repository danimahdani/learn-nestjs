import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Get()
  findAll(): string {
    return 'Return all cats';
  }

  @Get('detail')
  detailCat(): string {
    return 'detail cats';
  }

  @Get(':id')
  findOne(@Param() params: any) {
    return this.catService.getDetailCat(params.id);
    // return `This action returns a #${params.id} cat`;
  }
}
