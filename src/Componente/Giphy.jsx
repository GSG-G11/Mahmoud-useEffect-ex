import { useEffect, useState } from "react";

function Giphy() {

  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);
  const url = `https://api.giphy.com/v1/gifs/search?api_key=bvCZWaX4sazKyKLBum69541Pe2b3DZM6&q=${search}&limit=25&offset=0&rating=g&lang=en`

  const setSearchFunc = (e) => {
    e.preventDefault();
    setSearch((value) => value = e.target.value);
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(url, {signal})
      .then(response => response.json())
      .then(data => setGifs((value) => value = data.data));
    return () => controller.abort();
  }, [search]);
  
  return (
    <div>
      <form>
        <input type="text" value={search} onChange={setSearchFunc}/>
      </form>
      {gifs.map((gif, index) => {
        return (
          <div key={index}>
            <img src={gif.images.original.url} alt=""/>
          </div>
        )
      })}
    </div>
  );
}

export default Giphy;