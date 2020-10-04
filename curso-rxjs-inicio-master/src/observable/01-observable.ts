import {Observable, Observer} from 'rxjs';


const observer:Observer<any> ={
    next: value =>console.log('siguuiente [next] ',value ),
    error:value =>console.warn('error [obs] ',value),
    complete:()=>console.info("Completado [obs]")

}




//const obs$ = Observable.create();
const obs$ = new Observable<string>(
    subs=>{

        subs.next('Texo');
        subs.next('Texo2');

        //forzar error
        const a = undefined;
        a.nombre =" texto5";
        
        subs.complete();
        
        subs.next('Texo3');
        subs.next('Texo4');
    }

);

obs$.subscribe(observer);


// obs$.subscribe(
//     valor =>console.log('next', valor ),
//     error =>console.warn('error', error ),
//     ()=>console.info('Completado')
// );


