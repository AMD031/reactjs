import {timer, interval, Observer} from 'rxjs'




const observer:Observer<any> = {
    next: valor=> console.log(valor),
    error: error =>console.log(error),
    complete:()=>console.log('completado')
}
const hoy = new Date();

hoy.setSeconds(hoy.getSeconds()+5);

//const interval$ = interval(1000);
//const timer$ = timer(2000);
//const timer$ = timer(2000,1000);
const timer$ = timer(hoy);

console.log('inicio');
//interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');
