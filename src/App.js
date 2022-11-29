import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";
  console.log("url", url);
  const fetchData = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    setData(data.slice(0, 20));
  };
  const getRandomColor = () => {
    let random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return random;
  };
  useEffect(() => {
    // let randomData = getRandomColor();
    // const correctData = ` ${randomData}${url}`;
    fetchData(url);
  }, []);
  return (
    <div className="App">
      {data.map((info) => {
        const { id } = info;
        return (
          <div key={id}>
            <p style={{ color: `${getRandomColor()}` }}> {id} </p>
          </div>
        );
      })}
    </div>
  );
}
