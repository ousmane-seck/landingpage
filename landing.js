const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // récupérer les valeurs des champs du formulaire
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const telephone = document.getElementById('telephone').value;
  const ville = document.getElementById('ville').value;
  
  // validation des champs
  if (!nom || !email || !telephone || !ville) {
    alert('Veuillez remplir tous les champs du formulaire.');
    return;
  }
  
  // envoyer les données du formulaire au serveur
  // code ici pour envoyer les données au serveur
  
  // afficher le message de confirmation
  alert('Merci pour votre demande. Nous vous contacterons sous peu !');
  
  // réinitialiser le formulaire
  form.reset();
});
