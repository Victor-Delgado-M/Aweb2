import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateClienteDto, UpdateClienteDto } from '../../domain/dtos';

export class ClienteController {
  constructor() { }

  public getClientes = async (req: Request, res: Response) => {
    const clientes = await prisma.cliente.findMany();
    return res.json(clientes);
  };

  public getClienteById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' });

    const cliente = await prisma.cliente.findFirst({
      where: { id }
    });

    (cliente)
      ? res.json(cliente)
      : res.status(404).json({ error: `Cliente with id ${id} not found` });
  };

  public createCliente = async (req: Request, res: Response) => {
    const [error, createClienteDto] = CreateClienteDto.create(req.body);
    if (error) return res.status(400).json({ error });

   
    const { pedidos,  ...rest } = createClienteDto!;
    const cliente = await prisma.cliente.create({
      data: { ...rest, pedidos: { create: pedidos }}
    });

    res.json(cliente);
  };
  
  public updateCliente = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateClienteDto] = UpdateClienteDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const cliente = await prisma.cliente.findFirst({
      where: { id }
    });

    if (!cliente) return res.status(404).json({ error: `Cliente with id ${id} not found` });

    const updatedCliente = await prisma.cliente.update({
      where: { id },
      data: updateClienteDto!.values
    });

    res.json(updatedCliente);
  }

  public deleteCliente = async (req: Request, res: Response) => {
    const id = +req.params.id;

    const cliente = await prisma.cliente.findFirst({
      where: { id }
    });

    if (!cliente) return res.status(404).json({ error: `Cliente with id ${id} not found` });

    const deleted = await prisma.cliente.delete({
      where: { id }
    });

    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `Cliente with id ${id} not found` });
  }
}
