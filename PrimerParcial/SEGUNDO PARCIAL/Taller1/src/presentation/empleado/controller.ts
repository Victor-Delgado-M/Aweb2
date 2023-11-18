import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateEmpleadoDto, UpdateEmpleadoDto } from '../../domain/dtos';

export class EmpleadoController {
  constructor() { }

  public getEmpleados = async (req: Request, res: Response) => {
    const empleados = await prisma.empleado.findMany();
    return res.json(empleados);
  };

  public getEmpleadoById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' });

    const empleado = await prisma.empleado.findFirst({
      where: { id }
    });

    (empleado)
      ? res.json(empleado)
      : res.status(404).json({ error: `Empleado with id ${id} not found` });
  };

  public createEmpleado = async (req: Request, res: Response) => {
    const [error, createEmpleadoDto] = CreateEmpleadoDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const { ...rest } = createEmpleadoDto!;
    const empleado = await prisma.empleado.create({
      data: rest
    });

    res.json(empleado);
  };

  public updateEmpleado = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateEmpleadoDto] = UpdateEmpleadoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const empleado = await prisma.empleado.findFirst({
      where: { id }
    });

    if (!empleado) return res.status(404).json({ error: `Empleado with id ${id} not found` });

    const updatedEmpleado = await prisma.empleado.update({
      where: { id },
      data: updateEmpleadoDto!.values
    });

    res.json(updatedEmpleado);
  }

  public deleteEmpleado = async (req: Request, res: Response) => {
    const id = +req.params.id;

    const empleado = await prisma.empleado.findFirst({
      where: { id }
    });

    if (!empleado) return res.status(404).json({ error: `Empleado with id ${id} not found` });

    const deleted = await prisma.empleado.delete({
      where: { id }
    });

    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `Empleado with id ${id} not found` });
  }
}
