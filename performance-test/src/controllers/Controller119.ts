import { injectable } from 'tsyringe';
import { Service119 } from '@services/Service119';
import { Model119 } from '@models/Model119';
import { PrismaClient } from '@prisma/client.js';

@injectable()
export class Controller119 {
  constructor(private service: Service119, private prisma: PrismaClient) {}

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
