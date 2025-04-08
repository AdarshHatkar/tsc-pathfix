import { injectable } from 'tsyringe';
import { Service123 } from '@services/Service123';
import { Model123 } from '@models/Model123';
import { PrismaClient } from '@prisma/client.js';

@injectable()
export class Controller123 {
  constructor(private service: Service123, private prisma: PrismaClient) {}

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
