import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataApiContext = createContext();

const DataApiProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [render, setRender] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/products`)
      .then((res) => setData(res.data));
  }, [render]);

  return (
    <>
      {data ? (
        <DataApiContext.Provider value={{ data, render, setRender}}>
          {children}
        </DataApiContext.Provider>
      ) : (
        'Loading...'
      )}
    </>
  );
};

export default DataApiProvider;
