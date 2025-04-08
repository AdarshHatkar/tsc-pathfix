import { Router } from 'express';
import { container } from 'tsyringe';
import { Controller61 } from '@controllers/Controller61';
import { Service61 } from '@services/Service61';
import { Model61 } from '@models/Model61';
import { PrismaClient } from '@prisma/client.js';
import { schema } from '@prisma/schema.js';

const router = Router();
const controller = container.resolve(Controller61);
const service = container.resolve(Service61);
const model = new Model61();
const prisma = new PrismaClient();

router.get('/', controller.getAll.bind(controller));
router.get('/:id', controller.getById.bind(controller));
router.post('/', controller.create.bind(controller));
router.put('/:id', controller.update.bind(controller));
router.delete('/:id', controller.delete.bind(controller));

export default router;
