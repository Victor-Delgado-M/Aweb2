import { UpdatePlatoDto } from "../plato/update-plato.dto";
import { UpdateEmpleadoDto } from "../empleado/update-empleado.dto";


export class UpdateCevicheriaDto {

    private constructor(
      public readonly id: number,
      public readonly nombre?: string,
      public readonly direccion?: string,
      public readonly ruc?: string,
      public readonly slogan?: string,
      public readonly horario?: string,
      public readonly platos?: UpdatePlatoDto[],
      public readonly empleados?: UpdateEmpleadoDto[],
      
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.nombre ) returnObj.nombre = this.nombre;
      if ( this.direccion ) returnObj.direccion = this.direccion;
      if ( this.ruc ) returnObj.ruc = this.ruc;
      if ( this.slogan ) returnObj.slogan = this.slogan;
      if ( this.horario ) returnObj.horario = this.horario;
      if ( this.platos ) returnObj.platos = this.platos;
      if ( this.empleados ) returnObj.empleados = this.empleados;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateCevicheriaDto?]  {
  
      const { id, nombre, direccion, ruc, slogan, horario, platos, empleados } = props;
      
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !nombre && !direccion && !ruc && !slogan && horario  && !platos && !empleados) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateCevicheriaDto(id, nombre, direccion, ruc, slogan,horario, platos,empleados)];
    }
  
  
  }