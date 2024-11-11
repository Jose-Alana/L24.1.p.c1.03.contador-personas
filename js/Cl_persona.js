export default class Cl_Persona {
    constructor(nombre, sexo) {
        this.nombre = nombre;
        this.sexo = sexo;
    }
    setnombre(n){
        this._nombre = n;
    }
    getnombre(){
        return this._nombre;
    }
    setsexo(s){
        this._sexo = s;
    }
    getsexo(){
        return this._sexo;
    }
}