import { CreatePedidoDto } from "../pedido/create-pedido.dto";

export class CreateClienteDto {
  private constructor(
    public readonly cedula: string,
    public readonly nombre: string,
    public readonly telefono: string,
    public readonly correo: string,
    public readonly pedidos?: CreatePedidoDto[],
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateClienteDto?] {
    const { cedula, nombre, telefono, correo, pedidos } = props;
    if (!cedula) return ['Cedula property is required', undefined];
    if (!nombre) return ['Nombre property is required', undefined];
    if (!telefono) return ['Telefono property is required', undefined];
    if (!correo) return ['Correo property is required', undefined];

    return [undefined, new CreateClienteDto(cedula, nombre, telefono, correo, pedidos)];
  }
}
