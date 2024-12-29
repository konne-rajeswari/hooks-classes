import React, { useEffect, useState } from 'react';


export default function Todos() {
    const data = useFetch("https://jsonplaceholder.typicode.com/todos");


      return (
    <div>
      {
        data && 
        data.map((items) => {
            return <p key={items.id}>{items.title}</p>;
        })
      }
    </div>
  )
}

// "https://jsonplaceholder.typicode.com/todos"
function useFetch(url) {
    const [data,setData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    },[]);
    return data;
}