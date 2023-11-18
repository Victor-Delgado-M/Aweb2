import { Router } from 'express';
import { CevicheriaController } from './controller';

export class CevicheriaRoutes {
  static get routes(): Router {
    const router = Router();
    const cevicheriaController = new CevicheriaController();

    router.get('/', cevicheriaController.getCevicherias);
    router.get('/:id', cevicheriaController.getCevicheriaById);

    router.post('/', cevicheriaController.createCevicheria);
    router.put('/:id', cevicheriaController.updateCevicheria);
    router.delete('/:id', cevicheriaController.deleteCevicheria);

    return router;
  }
}
