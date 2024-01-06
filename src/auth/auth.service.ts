import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { compare, hash } from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { jwt_config } from 'src/config/jwt_config';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async register(data: RegisterDto) {
    const checkExists = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (checkExists) {
      throw new HttpException('User already exists', HttpStatus.FOUND);
    }

    data.password = await hash(data.password, 12);

    const createUser = await this.prisma.users.create({
      data: data,
    });

    if (createUser) {
      return {
        statusCode: HttpStatus.OK,
        message: 'Registered successfully',
      };
    }
  }

  async login(data: LoginDto) {
    const user = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const checkPassword = await compare(data.password, user.password);

    if (!checkPassword) {
      throw new HttpException(
        'User or password invalid',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const accessToken = this.generateJwt({
      id: user.id,
      name: user.name,
      email: user.email,
    });

    return {
      statusCode: HttpStatus.OK,
      message: 'Logged in successfully',
      token: accessToken,
    };
  }

  async profile(id: number) {
    const user = await this.prisma.users.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        tasks: true,
      },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return {
      statusCode: HttpStatus.OK,
      data: user,
    };
  }

  async uploadAvatar(id: number, avatar: string) {
    const checkUserExists = await this.prisma.users.findFirst({
      where: {
        id: id,
      },
    });
    if (checkUserExists) {
      const updateUser = await this.prisma.users.update({
        where: {
          id: id,
        },
        data: {
          avatar: avatar,
        },
      });

      if (updateUser) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Avatar updated successfully',
          data: updateUser.avatar,
        };
      }
    }

    throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
  }

  generateJwt(payload: any) {
    return this.jwtService.sign(payload, {
      secret: jwt_config.secret,
      expiresIn: jwt_config.expired,
    });
  }
}
