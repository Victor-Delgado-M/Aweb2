import { UpdatePedidoDto } from "../pedido/update-pedido.dto";

export class UpdatePlatoDto {
  private constructor(
    public readonly id: number,
    public readonly nombre?: string,
    public readonly precio?: string,
    public readonly cevicheriaId?: number,
    public readonly pedidos?: UpdatePedidoDto[],
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.nombre ) returnObj.nombre = this.nombre;
    if ( this.precio ) returnObj.precio = this.precio;
    if ( this.cevicheriaId ) returnObj.cevicheriaId = this.cevicheriaId;
    if ( this.pedidos ) returnObj.pedidos = this.pedidos;

    return returnObj;
  }

  static create( props: {[key:string]: any} ): [string?, UpdatePlatoDto?]  {
    const { id, nombre, precio, cevicheriaId, pedidos } = props;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if ( !nombre && !precio  && !cevicheriaId && !pedidos) {
      return ['At least one property must be provided'];
    }

    return [undefined, new UpdatePlatoDto(id, nombre, precio, cevicheriaId, pedidos)];
  }
}
