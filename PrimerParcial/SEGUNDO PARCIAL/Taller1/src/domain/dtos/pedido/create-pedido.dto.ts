export class CreatePedidoDto {
  private constructor(
    public readonly detallesorden: string,
    public readonly fecha: string,
    public readonly hora: string,
    public readonly observacion: string,
    public readonly clienteId: number,
    public readonly platoId: number,
  ){}

  static create( props: {[key:string]: any} ): [string?, CreatePedidoDto?]  {
    const { detallesorden, fecha, hora, observacion, clienteId, platoId } = props;
    if ( !detallesorden ) return ['Detalles de la orden property is required', undefined];
    if ( !fecha ) return ['Fecha property is required', undefined];
    if ( !hora ) return ['Hora property is required', undefined];
    if ( !clienteId || isNaN( Number(clienteId) )) return ['Cliente ID property is required', undefined];
    if ( !platoId || isNaN( Number(platoId) )) return ['Plato ID property is required', undefined];

    return [undefined, new CreatePedidoDto(detallesorden, fecha, hora, observacion, clienteId, platoId)];
  }
}
