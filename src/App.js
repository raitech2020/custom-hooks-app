import axios from "axios"
import useLocalStorage from "./useLocalStorage"
import useUpdateLogger from "./useUpdateLogger"
import useQuery from "./useQuery"
import useRandomColor from "./useRandomColor"

function App() {
  const [name, setName] = useLocalStorage("name", "")

  useUpdateLogger(name)

  const [color, changeColor] = useRandomColor()

  const { response } = useQuery(
    axios.get("https://foodish-api.herokuapp.com/api/")
  )

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <img src={response.image} alt="food image" />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#" + color,
        }}
      ></div>
      <p>color: {color}</p>
      <button onClick={changeColor}>Submit</button>
    </div>
  )
}

export default App
