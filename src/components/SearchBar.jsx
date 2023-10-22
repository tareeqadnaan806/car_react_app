import { models } from "@/constants"
import { useRef, useState } from "react"


export default function SearchBar() {
  const [modelname, setModelname] = useState("")
  const model = useRef()

  const fnClick = () => {
    const modelName = model.current.value
    // console.log(modelName);
    setModelname(modelName)

  }
  return (
    <div className="flex justify-center items-center w-full flex-col">
      <div>
        <label className="mr-5 text-xl mt-10">Search Model: </label>
        <input list="browsers" name="browser" id="browser" ref={model} className=" search-bar mt-3 mb-3 bg-slate-200 w-8/12" placeholder="VolksWagen" />

        <datalist id="browsers">
          {models.map((model) => {
            return <option>{model}</option>
          })}
        </datalist>
        <button type="submit" className="bg-slate-200 search-btn" onClick={fnClick}>Search</button>
      </div>

    </div>
  )
}

