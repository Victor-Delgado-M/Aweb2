import { Router } from 'express';


import { CevicheriaRoutes,  } from './cevicheria/routes';
import { EmpleadoRoutes,  } from './empleado/routes';
import { PlatoRoutes,  } from './plato/routes';
import { ClienteRoutes,  } from './cliente/routes';
import { PedidoRoutes,  } from './pedido/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();


    
    router.use('/api/cevicheria', CevicheriaRoutes.routes );
    router.use('/api/empleado', EmpleadoRoutes.routes );
    router.use('/api/plato', PlatoRoutes.routes );
    router.use('/api/cliente', ClienteRoutes.routes );
    router.use('/api/pedido', PedidoRoutes.routes );

    
    return router;
  }


}

