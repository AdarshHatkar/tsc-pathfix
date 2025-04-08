import { injectable } from 'tsyringe';
import { Service95 } from '@services/Service95';
import { Model95 } from '@models/Model95';
import { PrismaClient } from '@prisma/client.js';

@injectable()
export class Controller95 {
  constructor(private service: Service95, private prisma: PrismaClient) {}

  async getAll() {
    return this.service.findAll();
  }

  async getById(id: string) {
    return this.service.findById(id);
  }

  async create(data: any) {
    return this.service.create(data);
  }

  async update(id: string, data: any) {
    return this.service.update(id, data);
  }

  async delete(id: string) {
    return this.service.delete(id);
  }
}
