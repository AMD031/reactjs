import { reduce, take, tap } from "rxjs/operators";
import { interval } from "rxjs";


const numeros = [1,2,3,4,5];


const totalReducer = (acumulador:number, valoractual:number ) =>{
    return acumulador +valoractual;
}

const total = numeros.reduce(totalReducer, 0);

console.log('total: ',total);


interval(1000).pipe(
    take(3),
    tap(console.log),
    reduce(totalReducer, 5)
).subscribe({
    next: val =>console.log('next', val),
    complete: ()=>console.log('completado')
})