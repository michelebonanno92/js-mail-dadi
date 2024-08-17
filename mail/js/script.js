/* 

Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.

 */
 const userMail = prompt('inserisci la tua email:') ;
 console.log('userMail' , userMail , typeof userMail );

 const userListMail = ["emailOne" , "emailTwoo" , "emailThree"] ;

  for ( let i = 0; i < userListMail.length; i++){
   console.log(userListMail[i])
  }


  if ( userListMail.includes(userMail) ){
    alert('questa email fa parte della lista');
  }
  else{
    alert('questa email non fa parte della lista')

  }