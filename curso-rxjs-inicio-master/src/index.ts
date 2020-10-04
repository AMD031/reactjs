import { from, fromEvent, of } from "rxjs";
import { tap, map, mergeMap, pluck, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

//helper
const petticionHttpLogin = (usserPass) => ajax.post('https://reqres.in/api/login?delay=1',usserPass)
.pipe(
    pluck('response','token'),
    catchError( err => of(''))
);





//formulario
const  form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const sumitBtn = document.createElement('button');

// configuracion
inputEmail.type = 'email';
inputEmail.placeholder = 'email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'password';
inputPass.value = 'cityslicka' ;
sumitBtn.innerHTML = 'Ingresar';

form.append(inputEmail,inputPass,  sumitBtn);
const body = document.querySelector('body');
body.append(form);

//stream
const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
    tap(ev => ev.preventDefault()),
    map(ev =>({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    mergeMap(petticionHttpLogin)

)


//

submitForm$.subscribe( 
     token => console.log(token)
     
     )


