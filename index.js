// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      {/* Exibir os dados da API aqui */}
      {data && <Text>{data.message}</Text>}
    </View>
  );
};

export default App;