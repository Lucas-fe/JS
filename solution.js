const readline = require('readline-sync');

console.log('Welcome to the client registration system 🤖. Enter your details: 🕵️‍♀️');
const clients = [];

do {
  const name = readline.question('Enter your full name: ');
  const email = readline.question('Enter your email: ');
  const phone = readline.question('Enter your phone number: ');
  const address = readline.question('Enter your address: ');
  const nationality = readline.question('Enter your nationality: ');
  const birth = readline.question('Enter your birth: ');
  const movie = readline.question('Enter your favorite movie: ');
  const since = readline.question('Enter how long you have been a client: ');

  function createClient(name, email, phone, address, nationality, birth, movie, since) {
    return {
      Name: name,
      Email: email,
      PhoneNumber: phone,
      Address: address,
      Nationality: nationality,
      Birth: birth,
      FavoriteMovie: movie,
      ClientSince: since,
    };
  }

  clients.push(createClient(name, email, phone, address, nationality, birth, movie, since));
  console.log('Client added successfully! 👍');

  const action = readline.question('If you want to add another client (press Enter), edit a client (type edit), delete a client (type delete), or search clients (type search)? Press Enter to continue. To stop, type no: ');

  if (action.toLowerCase() === 'no') {
    break;
  } else if (action.toLowerCase() === 'edit') {
    editClient();
  } else if (action.toLowerCase() === 'delete') {
    deleteClient();
  } else if (action.toLowerCase() === 'search') {
    searchClients();
  }
} while (true);

console.log(clients);

//edit
function editClient() {
  listClients();
  const index = readline.question('Enter the index of the client you want to edit: ');
  if (isValidIndex(index)) {
    const editedClient = clients[index - 1];
    console.log('Editing client:', editedClient);

    const updatedName = readline.question(`Enter new name (current: ${editedClient.Name}): `);
    const updatedEmail = readline.question(`Enter new email (current: ${editedClient.Email}): `);
    const updatedPhone = readline.question(`Enter new phone number (current: ${editedClient.PhoneNumber}): `);
    const updatedAddress = readline.question(`Enter new address (current: ${editedClient.Address}): `);
    const updatedNationality = readline.question(`Enter new nationality (current: ${editedClient.Nationality}): `);

    editedClient.Name = updatedName || editedClient.Name;
    editedClient.Email = updatedEmail || editedClient.Email;
    editedClient.PhoneNumber = updatedPhone || editedClient.PhoneNumber;
    editedClient.Address = updatedAddress || editedClient.Address;
    editedClient.Nationality = updatedNationality || editedClient.Nationality;

    console.log('Client updated successfully! 👍');
    listClients();
  } else {
    console.log('Invalid index. Please try again.');
    editClient();
  }
}

//delete
function deleteClient() {
  listClients();
  const index = readline.question('Enter the index of the client you want to delete: ');
  if (isValidIndex(index)) {
    const deletedClient = clients.splice(index - 1, 1);
    console.log(`Client "${deletedClient[0].Name}" deleted successfully!`);
    listClients();
  } else {
    console.log('Invalid index. Please try again.');
    deleteClient();
  }
}

//search
function searchClients() {
  const searchTerm = readline.question('Enter the name to search for: ').toLowerCase();
  const foundClients = clients.filter(client => client.Name.toLowerCase().includes(searchTerm));
  if (foundClients.length > 0) {
    console.log('\nFound Clients:');
    foundClients.forEach((client, index) => {
      console.log(`${index + 1}. Name: ${client.Name}, Email: ${client.Email}, Phone: ${client.PhoneNumber}, Address: ${client.Address}, Nationality: ${client.Nationality}`);
    });
  } else {
    console.log(`No clients found with the name "${searchTerm}".`);
  }
  listClients();
}

function isValidIndex(index) {
  return Number.isInteger(parseInt(index)) && index > 0 && index <= clients.length;
}

function listClients() {
  console.log('\nList of Clients:');
  clients.forEach((client, index) => {
    console.log(`${index + 1}. Name: ${client.Name}, Email: ${client.Email}, Phone: ${client.PhoneNumber}, Address: ${client.Address}, Nationality: ${nationality}`);
  });
}