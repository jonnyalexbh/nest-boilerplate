import { Injectable } from '@nestjs/common';
import { User } from '../entities/users.entity';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 101,
      name: 'Tankis Alexis',
      age: 30,
      email: 'tankis@gmail.com',
    },
    {
      id: 102,
      name: 'Jerson Lopez',
      age: 26,
      email: 'jersi@gmail.com',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId++;
    const newUser = {
      id: this.counterId++,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: any) {
    const user = this.findOne(id);
    if (user) {
      const index = this.users.findIndex((item) => item.id === id);
      this.users[index] = { ...user, ...payload };
      return this.users[index];
    }
    return null;
  }
}
