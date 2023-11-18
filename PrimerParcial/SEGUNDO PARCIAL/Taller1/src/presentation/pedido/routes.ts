import { Router } from 'express';
import { PedidoController } from './controller';

export class PedidoRoutes {
  static get routes(): Router {
    const router = Router();
    const pedidoController = new PedidoController();

    router.get('/', pedidoController.getPedidos);
    router.get('/:id', pedidoController.getPedidoById);

    router.post('/', pedidoController.createPedido);
    router.put('/:id', pedidoController.updatePedido);
    router.delete('/:id', pedidoController.deletePedido);

    return router;
  }
}
