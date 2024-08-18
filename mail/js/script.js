/* 

Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.

 */
 const userEmail = prompt('inserisci la tua email:') ;
 console.log('userEmail' , userEmail , typeof userEmail );

 const users = [
   "emailOne" ,
   "emailTwo" , 
   "emailThree"
  ];

 users.push('ciao');
 users.push('email');

 let found = false;

  for (  let i = 0; i < users.length; i++) {
    // i = i + 1 oppure i += 1 oppure i++ 

    if ( users[i] == userEmail){
      console.log('users[i]', users[i] , typeof users[i]);
      // console.log('Si, puoi entrare');
      // i = users.length;
      found = true ; 
     }
        
     }
  
     console.log(found);

     if (found){
       console.log('Si, puoi entrare');
     }
     else{
      console.log('No, non puoi entrare');

     }

  // if ( users.includes(userMail) ){
  //   console.log('questa email fa parte della lista');
  //   // alert('questa email fa parte della lista');
  // }
  // else{
  //   console.log('questa email non fa parte della lista');
  //   alert('questa email non fa parte della lista')

  //  }