import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

//Una vez creado la base de datos y la migracion, se puede hacer uso de los modelos o entidades
//Se pueden hacer las operaciones CRUD(create, read, update y delee)

//Se crea entidad cliente
const createClient= async ()=>{

    const cliente = await prisma.cliente.create({
        data:{
            cedula:'1314030102',
            nombre:'Abram Bruine',
            telefono:'099456412',
            correo:'cliente1@gmail.com',
        }
    })
    console.log(cliente);
     
}

//Se crea entidad Plato
const createPlato= async ()=>{

    const plato = await prisma.plato.create({
        data:{
            nombre:'Ceviche de camaron',
            precio:'$5',
        }
    })
    console.log(plato);
     
}


//Se crea entidad Pedido

const createPedido= async ()=>{

    const pedido = await prisma.pedido.create({
        data:{
            detallesorden:'En proceso de entrega',
            fecha:'5/10/2023',
            hora:'15h00',
            observacion:'Pedido con promocion',
            clienteId:1,
            platoId:1,
        }
    })
    console.log(pedido);
     
}

//Se consulta cliente por su cedula
const queryClient = async ()=>{
    const clients = await prisma.cliente.findMany({
        where:{
            cedula:'1314030102'
        }
    })
    console.log(clients);

}

//Se consulta plato de acuerdo  a su nombre
const queryPlato = async ()=>{
    const platos = await prisma.plato.findMany({
        where:{
            nombre:'Ceviche de camaron'
        }
    })
    console.log(platos);

}

//Se consulta entidad pedido mediante el id
const queryPedido = async ()=>{
    const pedidos = await prisma.pedido.findMany({
        where:{
            id: 1
        }
    })
    console.log(pedidos);

}


//Se actualiza el cliente mediante el id
const updateClient =  async ()=>{
    const cliente = await prisma.cliente.update({
        where:{
            id:1
        },
        data:{
            nombre:'Joao Felix'
        }
    })
    console.log(cliente);
    
}


//Se actualiza el plato mediante el id
const updatePlato =  async ()=>{
    const plato = await prisma.plato.update({
        where:{
            id:1
        },
        data:{
            nombre:'Ceviche de Pescado'
        }
    })
    console.log(plato);
    
}


//Se actualiza el pedido mediante id
const updatePedido =  async ()=>{
    const pedido = await prisma.pedido.update({
        where:{
            id:1
        },
        data:{
            detallesorden:'Entregado'
        }
    })
    console.log(pedido);
    
}

//Se elimina el cliente mediante el id y cedula
const deleteClient= async ()=>{
    const cliente = await prisma.cliente.delete({
        where:{
            id:1,
            cedula:'1314030102'
        }
    })
    console.log(cliente);
    
}

//Se elimina el plato mediante el id
const deletePlato= async ()=>{
    const plato = await prisma.plato.delete({
        where:{
            id:1

        }
    })
    console.log(plato);
    
}

//Se elimina el pedido mediante el id
const deletePedido= async ()=>{
    const pedido = await prisma.pedido.delete({
        where:{
            id:1

        }
    })
    console.log(pedido);
    
}

//Se llama la funcion para probar el Crud
(async ()=>{
     await createClient();
    // await queryClient();
    //await updateClient();
     //await deleteClient();
     await createPlato();
    // await queryPlato();
    //await updatePlato();
     //await deletePlato();
    await createPedido();
    // await queryPedido();
    //await updatePedido();
     //await deletePedido();

})()


