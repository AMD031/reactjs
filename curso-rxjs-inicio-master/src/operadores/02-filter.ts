import { range, from, fromEvent } from 'rxjs'
import {filter, map} from 'rxjs/operators'

//  range(1,10).pipe(
//     filter( (valor,index)=>{
//         console.log('index: ', index)
//         return valor % 2 ===1
//     })
//  ).subscribe(
//      console.log
//  )

interface Personaje {
    
    tipo:string,
    nombre:string
}


const  personajes:Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
    
]


const personajes$ = from(personajes).pipe(
    filter(
        (personaje) => personaje.tipo === 'heroe'
    )
);
personajes$.subscribe(console.log)



const keyUp = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code ),
    filter( code => code === 'Enter')

);



keyUp.subscribe(console.log);














