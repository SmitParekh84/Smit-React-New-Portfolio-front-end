import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('https://smit-react-new-portfolio-backend.vercel.app/')
    .then(response => console.log(response.data))
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>My Portfolio</h1>
    </div>
  );
}

export default App;
