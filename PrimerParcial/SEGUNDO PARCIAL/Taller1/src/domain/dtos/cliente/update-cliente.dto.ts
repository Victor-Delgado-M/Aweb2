import { UpdatePedidoDto } from "../pedido/update-pedido.dto"; 

export class UpdateClienteDto {
  private constructor(
    public readonly id: number,
    public readonly cedula?: string,
    public readonly nombre?: string,
    public readonly telefono?: string,
    public readonly correo?: string,
    public readonly pedidos?: UpdatePedidoDto[],
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.cedula ) returnObj.cedula = this.cedula;
    if ( this.nombre ) returnObj.nombre = this.nombre;
    if ( this.telefono ) returnObj.telefono = this.telefono;
    if ( this.correo ) returnObj.correo = this.correo;
    if ( this.pedidos ) returnObj.pedidos = this.pedidos;

    return returnObj;
  }

  static create( props: {[key:string]: any} ): [string?, UpdateClienteDto?]  {
    const { id, cedula, nombre, telefono, correo, pedidos } = props;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if ( !cedula && !nombre && !telefono && !correo && !pedidos) {
      return ['At least one property must be provided'];
    }

    return [undefined, new UpdateClienteDto(id, cedula, nombre, telefono, correo, pedidos)];
  }
}
