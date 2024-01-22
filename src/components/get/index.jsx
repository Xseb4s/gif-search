import { useContext } from "react";
import { GifContext } from "../../context";
import "./get.css"

const GetGif = () => {
    const context = useContext(GifContext)
  return (
    <div className="main-container">
        <h1>Gifs</h1>
        <ul className="container">
            {context.gifData.map((gif) => (
            <li className="item" key={gif.id}>
                <figure>
                    <img src={gif.images.fixed_height.url} alt={gif.title} />
                </figure>
            </li>
            ))}
        </ul>
    </div>
  )
}
export default GetGif