export default class Cl_persona{
    constructor(){
        this.conthombres = 0;
        this.contmujeres = 0;
        this.contpersona = 0;
    }
    procesarpersona(per){
        if(per.sexo === "M"){ 
            this.conthombres++;
        }
        else
        if(per.sexo === "F"){
            this.contmujeres++;
        }
        this.contpersona++;
    }
    hombres(){
        return this.conthombres;
    }   
    mujeres(){
        return this.contmujeres;
    }
    devolvercontador(){
        return this.contpersona;
    }
}