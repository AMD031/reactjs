import {of, range, asyncScheduler} from 'rxjs';






//const obs$ = of(1,2,3,4,5);
const obs1$ = range(1,5, asyncScheduler);

console.log('inicio')
obs1$.subscribe(console.log);
console.log('fin')


