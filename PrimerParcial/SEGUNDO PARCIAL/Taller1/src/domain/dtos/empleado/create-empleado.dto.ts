export class CreateEmpleadoDto {
    private constructor(
      public readonly nombre: string,
      public readonly cedula: string,
      public readonly telefono: string,
      public readonly experiencia: string,
      public readonly cevicheriaId: number,
    ){}
  
    static create( props: {[key:string]: any} ): [string?, CreateEmpleadoDto?]  {
      const { nombre, cedula,telefono, experiencia, cevicheriaId } = props;
      if ( !nombre ) return ['Nombre property is required', undefined];
      if ( !cedula ) return ['Cedula property is required', undefined];
      if ( !telefono ) return ['Telefono property is required', undefined];
      if ( !experiencia ) return ['Experiencia property is required', undefined];
      if ( !cevicheriaId ) return ['Id cevicheria property is required', undefined];
      return [undefined, new CreateEmpleadoDto(nombre,cedula, telefono,experiencia, cevicheriaId)];
    }
  }