import { CreatePedidoDto } from "../pedido/create-pedido.dto";

export class CreatePlatoDto {
  private constructor(
    public readonly nombre: string,
    public readonly precio: string,
    public readonly cevicheriaId: number,
    public readonly pedidos?: CreatePedidoDto[],
  ){}

  static create( props: {[key:string]: any} ): [string?, CreatePlatoDto?]  {
    const { nombre, precio, cevicheriaId , pedidos} = props;
    if ( !nombre ) return ['Nombre property is required', undefined];
    if ( !precio ) return ['Precio property is required', undefined];
    if ( !cevicheriaId || isNaN( Number(cevicheriaId) )) return ['Cevicheria ID property is required', undefined];

    return [undefined, new CreatePlatoDto(nombre, precio, cevicheriaId, pedidos)];
  }
}
