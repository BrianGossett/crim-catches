import { useEffect, useState }  from "react";

function Home() {
  const [backend, setBackend] = useState({})

  useEffect(() => {
    fetch("/fish").then(
      response => response.json()
    ).then(
      data => {
        setBackend(data)
        console.log(data)
      }
    )
  },[])

  return (
    <div>
      <h1>Home</h1>
      {backend["users"]}
    </div>
  );
}

export default Home;
