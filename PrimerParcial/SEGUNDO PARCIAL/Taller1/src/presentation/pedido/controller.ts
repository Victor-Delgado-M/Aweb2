import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatePedidoDto, UpdatePedidoDto } from '../../domain/dtos';

export class PedidoController {
  constructor() { }

  public getPedidos = async (req: Request, res: Response) => {
    const pedidos = await prisma.pedido.findMany();
    return res.json(pedidos);
  };

  public getPedidoById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' });

    const pedido = await prisma.pedido.findFirst({
      where: { id }
    });

    (pedido)
      ? res.json(pedido)
      : res.status(404).json({ error: `Pedido with id ${id} not found` });
  };

  public createPedido = async (req: Request, res: Response) => {
    const [error, createPedidoDto] = CreatePedidoDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const pedido = await prisma.pedido.create({
      data: createPedidoDto!
    });

    res.json(pedido);
  };

  public updatePedido = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updatePedidoDto] = UpdatePedidoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const pedido = await prisma.pedido.findFirst({
      where: { id }
    });

    if (!pedido) return res.status(404).json({ error: `Pedido with id ${id} not found` });

    const updatedPedido = await prisma.pedido.update({
      where: { id },
      data: updatePedidoDto!.values
    });

    res.json(updatedPedido);
  }

  public deletePedido = async (req: Request, res: Response) => {
    const id = +req.params.id;

    const pedido = await prisma.pedido.findFirst({
      where: { id }
    });

    if (!pedido) return res.status(404).json({ error: `Pedido with id ${id} not found` });

    const deleted = await prisma.pedido.delete({
      where: { id }
    });

    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `Pedido with id ${id} not found` });
  }
}
