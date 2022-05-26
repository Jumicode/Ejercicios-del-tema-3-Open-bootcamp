class coche{
    constructor(n,Puertas){
        this.n = 0;
        this.Puertas = Puertas;
    }

puertas(){

alert("Registro de puertas del coche");

do{
this.Puertas = new Number(prompt("Desea agregar una puerta?  1)SI"));
this.n++;

}while(this.Puertas == 1);
}

Mostrar(){
    return`

Numero de puertas del coche : ${this.n-1}<br>
`
}
}

Michoche = new coche();
Michoche.puertas();
document.write(`

${Michoche.Mostrar()}

`)




