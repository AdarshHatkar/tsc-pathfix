import { injectable } from 'tsyringe';
import { Service88 } from '@services/Service88';
import { Model88 } from '@models/Model88';
import { PrismaClient } from '@prisma/client.js';

@injectable()
export class Controller88 {
  constructor(private service: Service88, private prisma: PrismaClient) {}

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
