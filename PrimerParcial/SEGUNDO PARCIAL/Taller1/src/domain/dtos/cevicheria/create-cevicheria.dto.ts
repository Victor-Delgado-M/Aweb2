import { CreateEmpleadoDto } from "../empleado/create-empleado.dto";
import { CreatePlatoDto } from "../plato/create-plato.dto";

export class CreateCevicheriaDto {
    private constructor(
      public readonly nombre: string,
      public readonly direccion: string,
      public readonly ruc: string,
      public readonly slogan: string,
      public readonly horario: string,
      public readonly platos?: CreatePlatoDto[],
      public readonly empleados?: CreateEmpleadoDto[],
    ){}
  
    static create( props: {[key:string]: any} ): [string?, CreateCevicheriaDto?]  {
      const { nombre, direccion, ruc, slogan, horario, platos, empleados } = props;
      if ( !nombre ) return ['Nombre property is required', undefined];
      if ( !direccion ) return ['Direccion property is required', undefined];
      if ( !ruc ) return ['Ruc property is required', undefined];
      if ( !slogan ) return ['Slogan property is required', undefined];
      if ( !horario ) return ['Horario property is required', undefined];
      return [undefined, new CreateCevicheriaDto(nombre,direccion,ruc,slogan,horario,platos,empleados)];
    }
  }