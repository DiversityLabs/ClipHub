import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Home: React.FC = () => {
  const [data, setData] = useState<any[]>([]); // Tipe data state

  useEffect(() => {
    axios.get('/api/data') // Ganti dengan URL API Anda
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
