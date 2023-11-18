import { Router } from 'express';
import { EmpleadoController } from './controller';

export class EmpleadoRoutes {
  static get routes(): Router {
    const router = Router();
    const empleadoController = new EmpleadoController();

    router.get('/', empleadoController.getEmpleados);
    router.get('/:id', empleadoController.getEmpleadoById);

    router.post('/', empleadoController.createEmpleado);
    router.put('/:id', empleadoController.updateEmpleado);
    router.delete('/:id', empleadoController.deleteEmpleado);

    return router;
  }
}
