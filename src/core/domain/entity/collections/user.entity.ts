

export class User{
    _id:string;
    nombre: string;
    apellidos: string;
    activo:boolean;

    static create(nombre: string, apellidos:string){
        const user = new User();
        user.nombre=nombre;
        user.apellidos=apellidos;
        user.activo=true;
        
        return user;
    }
}