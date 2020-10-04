import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `
Tempor voluptate dolor dolore deserunt ea proident ipsum nulla laborum id consectetur mollit nisi. Deserunt eiusmod aliqua officia mollit commodo proident minim dolor laboris occaecat deserunt commodo. Sint ullamco est esse irure ullamco voluptate. Cupidatat fugiat proident ut commodo nisi ex duis fugiat occaecat. Irure ut nisi incididunt exercitation proident amet sint proident exercitation incididunt ea nostrud ex. Dolore incididunt nulla consequat ut duis irure. Eiusmod enim adipisicing nulla anim eiusmod dolor.
</br></br>
Anim laboris ea culpa elit ad do officia cillum anim nostrud ad non minim. Officia officia id exercitation ipsum veniam ullamco amet duis ex anim. Nulla enim laborum ut nulla enim. Cillum amet est cupidatat labore reprehenderit labore officia occaecat est id voluptate irure ut deserunt.
</br></br>
Pariatur Lorem qui minim duis ex incididunt et ullamco esse deserunt proident. Non officia veniam magna id non enim laboris ut cillum sint eu amet id. Adipisicing quis sit anim occaecat nostrud sit in ut.
</br></br>
Esse eiusmod velit voluptate exercitation. Adipisicing do eiusmod id adipisicing nostrud ipsum minim pariatur excepteur proident. Commodo ipsum irure in duis dolore ut commodo sit deserunt. Lorem aliquip velit ad elit quis ea pariatur sint magna. Non irure esse ea quis mollit adipisicing consequat veniam sit. Laboris velit do aute fugiat nisi. Irure excepteur nostrud nulla nisi sit aliquip reprehenderit duis nostrud.
</br></br>
Veniam exercitation ex cillum veniam aliqua. Incididunt veniam aliqua laborum ex in esse elit. Non nisi eu fugiat nisi officia Lorem ea cillum ut voluptate.
</br></br>
`;


const body = document.querySelector('body');
body.append(texto);


const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);


// funcion que haga el calculo
const calcularPorcentajeScroll = (event)=>{
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;


    return (scrollTop/ (scrollHeight-clientHeight))*100;
    //console.log('scrollTop: ',scrollTop, 'scrollHeight:', scrollHeight, ' clientHeight:',clientHeight)
    
}



//Stream
const scroll$ = fromEvent(document,'scroll')
//scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    //map( event => calcularPorcentajeScroll(event) )
    map(calcularPorcentajeScroll),
    tap(console.log)

);


progress$.subscribe( porcentaje =>{
    progressBar.style.width =`${porcentaje}%` 
});

