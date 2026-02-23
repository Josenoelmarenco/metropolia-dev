const apiUrl = 'http://localhost:4000/api/user/signup';

const user = {
  email: 'matti@example.com',
  password: 'R3g5T7#gh',
};

const register = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(user), // JS object → JSON string
      headers: {
        'Content-Type': 'application/json', // tell the server the body format
      },
    });

    if (!response.ok) {
      throw new Error('Failed to add a new user');
    }

    const json = await response.json(); // parse the response body
    console.log('New user added:', json);
    // Server response looks like: { email: "matti@example.com", token: "eyJhbGci..." }
  } catch (error) {
    console.error('Error adding user:', error.message);
  }
};

register();
