import {Observable, Observer, Subscriber} from 'rxjs';


const observer:Observer<any> ={
    next: value =>console.log('siguuiente [next] ',value ),
    error:value =>console.warn('error [obs] ',value),
    complete:()=>console.info("Completado [obs]")

}


const intervalos$ = new Observable<number>(
    
    subs=>{
        let num =0;
       const interval = setInterval( ()=>{
            num++;
            subs.next(num);
            console.log(num);
        },1000);

        setTimeout(()=>{
            subs.complete();
        },2500);


        return ()=>{
            clearInterval(interval);
            console.log('intervalo destruido');
        }



    });



const subs1 =intervalos$.subscribe(observer /*valor => console.log('Numero: ',valor*)*/);
 const subs2 =intervalos$.subscribe(observer /*valor => console.log('Numero: ',valor*)*/);
 const subs3 =intervalos$.subscribe(observer /*valor => console.log('Numero: ',valor*)*/);


 subs1.add(subs2)
      .add(subs3);


setTimeout(()=>{
       subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log('completado timeout')
},3000);