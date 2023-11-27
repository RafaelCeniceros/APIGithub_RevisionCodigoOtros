console.log("Estoy conectado con el HTML");

    const baseEndpoint = 'https://api.github.com';
    const usersEndpoint = `${baseEndpoint}/users`; //https://api.github.com/users
    const nameElement = document.getElementById("name"); // se renombró la variable
    const blogElement = document.getElementById("blog");// se renombró la variable
    const locationElement = document.getElementById("location");// se renombró la variable


async function displayUser(username) { //se agregó el async para consumir la promesa
  // Muestra cargando en el elemento de nameElement mientras se realiza la promesa.
  nameElement.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); //https://api.github.com/users/username
  console.log(data);
  nameElement.textContent = data.name; //se ajusto el nombre de la variable.
  blogElement.textContent = data.blog; //se ajusto el nombre de la variable.
  locationElement.textContent = data.location; //se ajusto el nombre de la variable.
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  nameElement.textContent = `Algo salió mal: ${err}` //se ajusto el nombre de la variable.
}

displayUser('stolinski').catch(handleError); 