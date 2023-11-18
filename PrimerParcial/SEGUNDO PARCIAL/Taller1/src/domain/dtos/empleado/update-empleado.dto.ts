export class UpdateEmpleadoDto {

    private constructor(
      public readonly id: number,
      public readonly nombre?: string,
      public readonly cedula?: string,
      public readonly telefono?: string,
      public readonly experiencia?: string,
      public readonly cevicheriaId?: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.nombre ) returnObj.nombre = this.nombre;
      if ( this.cedula ) returnObj.cedula = this.cedula;
      if ( this.telefono ) returnObj.telefono = this.telefono;
      if ( this.experiencia ) returnObj.experiencia = this.experiencia;
      if ( this.cevicheriaId ) returnObj.cevicheriaId = this.cevicheriaId;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateEmpleadoDto?]  {
  
      const { id, nombre,cedula,telefono,experiencia, cevicheriaId } = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !nombre && !cedula &&  !telefono && !experiencia && !cevicheriaId) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateEmpleadoDto(id, nombre, cedula, telefono, experiencia,cevicheriaId)];
    }
  
  
  }