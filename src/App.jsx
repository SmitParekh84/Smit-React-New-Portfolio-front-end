import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>My Portfolio</h1>
    </div>
  );
}

export default App;
