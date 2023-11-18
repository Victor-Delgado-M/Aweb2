export class UpdatePedidoDto {
  private constructor(
    public readonly id: number,
    public readonly detallesorden?: string,
    public readonly fecha?: string,
    public readonly hora?: string,
    public readonly observacion?: string,
    public readonly clienteId?: number,
    public readonly platoId?: number,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.detallesorden ) returnObj.detallesorden = this.detallesorden;
    if ( this.fecha ) returnObj.fecha = this.fecha;
    if ( this.hora ) returnObj.hora = this.hora;
    if ( this.observacion ) returnObj.observacion = this.observacion;
    if ( this.clienteId ) returnObj.clienteId = this.clienteId;
    if ( this.platoId ) returnObj.platoId = this.platoId;

    return returnObj;
  }

  static create( props: {[key:string]: any} ): [string?, UpdatePedidoDto?]  {
    const { id, detallesorden, fecha, hora, observacion, clienteId, platoId } = props;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if ( !detallesorden && !fecha && !hora && !observacion && !clienteId && !platoId) {
      return ['At least one property must be provided'];
    }

    return [undefined, new UpdatePedidoDto(id, detallesorden, fecha, hora, observacion, clienteId, platoId)];
  }
}
