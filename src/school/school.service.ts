import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from '../../src/prisma/prisma.service';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}
  async create(createSchoolDto: CreateSchoolDto) {
    const school = await this.prisma.schools.create({
      data: createSchoolDto,
    });
    return {
      statusCode: HttpStatus.OK,
      data: school,
    };
  }

  async findAll() {
    const schools = await this.prisma.schools.findMany();
    return {
      statusCode: HttpStatus.OK,
      data: schools,
    };
  }

  async findOne(id: number) {
    const school = await this.prisma.schools.findUnique({ where: { id: id } });
    return {
      statusCode: HttpStatus.OK,
      data: school,
    };
  }

  async update(id: number, updateSchoolDto: UpdateSchoolDto) {
    const school = await this.prisma.schools.update({
      where: { id: id },
      data: updateSchoolDto,
    });
    return {
      statusCode: HttpStatus.OK,
      message: 'School updated successfully',
      data: school,
    };
  }

  async remove(id: number) {
    const school = await this.prisma.schools.delete({ where: { id: id } });
    if (school) {
      return {
        statusCode: HttpStatus.OK,
        data: 'School deleted successfully',
      };
    }

    return {
      statusCode: HttpStatus.NOT_FOUND,
      message: 'Task not found',
    };
  }
}
