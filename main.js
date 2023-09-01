const submit = document.getElementById('submit');

submit.addEventListener('click', function(){
    let probleem = document.getElementById('probleem').value
    let probleemuit = document.getElementById('probleemuit').value
    let email = document.getElementById('email').value

    if (probleem == '') {
      window.alert('U moet nog het probleem invullen.')
    } else if (probleemuit == '') {
      window.alert('U moet nog het probleem uitlegen.')
    } else if (email == '') {
      window.alert('U moet uw email nog invullen.')
    } else {
      window.alert('Dank u voor uw bericht we zullen u zo snel mogelijk beantwoorden.')
    }
})
