import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

interface ListItem {
  id: number;
  name: string;
}

function App() {
  const [data, setData] = useState<ListItem[]>([]);

  useEffect(() => {
    axios.get<ListItem[]>('http://localhost:3000/user').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <div>
      <h1>List from Backend:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
