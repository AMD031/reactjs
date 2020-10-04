import {Observable, Observer,  Subject} from 'rxjs';


const observer:Observer<any> ={
    next: value =>console.log('siguuiente [next] ',value ),
    error:value =>console.warn('error [obs] ',value),
    complete:()=>console.info("Completado [obs]")

}


const intervalo$ = new Observable<number>(

    subs =>{
        const intervalId = setInterval(()=>{
            subs.next(Math.random());
        },1000);
        
      return()=>{
        clearInterval(intervalId);
        console.log("intervalo destruido");
      }

    }
)
/**
 * 1 casteo multiple
 * 2 también es un observer
 * 3 next, error, complete
 */

const subject$ = new Subject(


)
const subjectsuscricion = intervalo$.subscribe(subject$);




//intervalo$.subscribe(rnd =>console.log('sub1', rnd));
//intervalo$.subscribe(rnd =>console.log('sub2', rnd));


subject$.subscribe(observer);
subject$.subscribe(observer);


setTimeout(() => {

    subject$.next(10);
    subject$.complete();
    subjectsuscricion.unsubscribe();
    
}, 3500);