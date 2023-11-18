import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCevicheriaDto, UpdateCevicheriaDto } from '../../domain/dtos';

export class CevicheriaController {
  constructor() { }

  public getCevicherias = async (req: Request, res: Response) => {
    const cevicherias = await prisma.cevicheria.findMany();
    return res.json(cevicherias);
  };

  public getCevicheriaById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' });

    const cevicheria = await prisma.cevicheria.findFirst({
      where: { id }
    });

    (cevicheria)
      ? res.json(cevicheria)
      : res.status(404).json({ error: `Cevicheria with id ${id} not found` });
  };

  public createCevicheria = async (req: Request, res: Response) => {
    const [error, createCevicheriaDto] = CreateCevicheriaDto.create(req.body);
    if (error) return res.status(400).json({ error });
  
    const { platos, empleados, ...rest } = createCevicheriaDto!;
    
    const platosData = platos?.map(plato => ({ ...plato, pedidos: { create: plato.pedidos } }));
    const empleadosData = empleados?.map(empleado => ({ ...empleado }));
  
    const cevicheria = await prisma.cevicheria.create({
      data: { ...rest, platos: { create: platosData }, empleados: { create: empleadosData } }
    });
  
    res.json(cevicheria);
  };
  
  public updateCevicheria = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateCevicheriaDto] = UpdateCevicheriaDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const cevicheria = await prisma.cevicheria.findFirst({
      where: { id }
    });

    if (!cevicheria) return res.status(404).json({ error: `Cevicheria with id ${id} not found` });

    const updatedCevicheria = await prisma.cevicheria.update({
      where: { id },
      data: updateCevicheriaDto!.values
    });

    res.json(updatedCevicheria);
  }

  public deleteCevicheria = async (req: Request, res: Response) => {
    const id = +req.params.id;

    const cevicheria = await prisma.cevicheria.findFirst({
      where: { id }
    });

    if (!cevicheria) return res.status(404).json({ error: `Cevicheria with id ${id} not found` });

    const deleted = await prisma.cevicheria.delete({
      where: { id }
    });

    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `Cevicheria with id ${id} not found` });
  }
}
