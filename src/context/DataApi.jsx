import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataApiContext = createContext();

const DataApiProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(data)

  useEffect(() => {
    axios
      .get(`http://localhost:4000/products`)
      .then((res) => setData(res.data));
  }, []);

  return (
    <>
      {data ? (
        <DataApiContext.Provider value={{ data }}>
          {children}
        </DataApiContext.Provider>
      ) : (
        'Loading...'
      )}
    </>
  );
};

export default DataApiProvider;
