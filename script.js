/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri 
che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare 
sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo 
blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

Consigli del giorno:

Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci 
sono in comune tra i due array"
*/

//Visualizzare in pagina 5 numeri casuali

const numeriCasuali = [];

// Genera 5 numeri casuali da 1 a 100
for (let i = 0; i < 5; i++) {
    const numeroCasuale = Math.floor(Math.random() * 100) + 1;
    numeriCasuali.push(numeroCasuale);
}
console.log("Numeri da ricordare:", numeriCasuali);

// Mostra i numeri
const numbers = document.getElementById('numbers');
const input = document.getElementById('input');
const submit = document.getElementById('submit');
const result = document.getElementById('result');

numbers.textContent = numeriCasuali.join(' ');

// Nasconde gli input e il bottone all'inizio
function d_none_element(obj) {
    obj.style.display = 'none';
}
d_none_element(input);
d_none_element(submit);

// Dopo 3 secondi nasconde i numeri e mostra gli input
function dis_appear() {
    numbers.style.display = 'none';
    input.style.display = 'block';
    submit.style.display = 'block';
}
setTimeout(dis_appear, 3000);

const user_numbs = [];

submit.addEventListener('click', () => {
  // Svuota l’array prima di riempirlo di nuovo
  user_numbs.length = 0;

  user_numbs.push(
    Number(document.getElementById('user-n1').value),
    Number(document.getElementById('user-n2').value),
    Number(document.getElementById('user-n3').value),
    Number(document.getElementById('user-n4').value),
    Number(document.getElementById('user-n5').value)
  );

  console.log("Numeri utente:", user_numbs);
});

let numeriIndovinati = 0

for (let i = 0; i < numeriCasuali.length; i++) {
    const elementI = numeriCasuali[i];
    for (let x = 0; x < user_numbs.length; x++) {
        const elementX = user_numbs[x];
        if (elementI === elementX) {
            numeriIndovinati++
        }
    }
}

console.log(numeriIndovinati);

