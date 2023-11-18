import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatePlatoDto, UpdatePlatoDto } from '../../domain/dtos';

export class PlatoController {
  constructor() { }

  public getPlatos = async (req: Request, res: Response) => {
    const platos = await prisma.plato.findMany();
    return res.json(platos);
  };

  public getPlatoById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' });

    const plato = await prisma.plato.findFirst({
      where: { id }
    });

    (plato)
      ? res.json(plato)
      : res.status(404).json({ error: `Plato with id ${id} not found` });
  };

  public createPlato = async (req: Request, res: Response) => {
    const [error, createPlatoDto] = CreatePlatoDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const { cevicheriaId, pedidos, ...rest } = createPlatoDto!;
    const plato = await prisma.plato.create({
      data: { ...rest, cevicheriaId: +cevicheriaId , pedidos: { create: pedidos }}
    });

    res.json(plato);
  };

  public updatePlato = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updatePlatoDto] = UpdatePlatoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const plato = await prisma.plato.findFirst({
      where: { id }
    });

    if (!plato) return res.status(404).json({ error: `Plato with id ${id} not found` });

    const updatedPlato = await prisma.plato.update({
      where: { id },
      data: updatePlatoDto!.values
    });

    res.json(updatedPlato);
  }

  public deletePlato = async (req: Request, res: Response) => {
    const id = +req.params.id;

    const plato = await prisma.plato.findFirst({
      where: { id }
    });

    if (!plato) return res.status(404).json({ error: `Plato with id ${id} not found` });

    const deleted = await prisma.plato.delete({
      where: { id }
    });

    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `Plato with id ${id} not found` });
  }
}
