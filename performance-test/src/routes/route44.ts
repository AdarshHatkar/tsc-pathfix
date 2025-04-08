import { Router } from 'express';
import { container } from 'tsyringe';
import { Controller44 } from '@controllers/Controller44';
import { Service44 } from '@services/Service44';
import { Model44 } from '@models/Model44';
import { PrismaClient } from '@prisma/client.js';
import { schema } from '@prisma/schema.js';

const router = Router();
const controller = container.resolve(Controller44);
const service = container.resolve(Service44);
const model = new Model44();
const prisma = new PrismaClient();

router.get('/', controller.getAll.bind(controller));
router.get('/:id', controller.getById.bind(controller));
router.post('/', controller.create.bind(controller));
router.put('/:id', controller.update.bind(controller));
router.delete('/:id', controller.delete.bind(controller));

export default router;
