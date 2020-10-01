import React, { useState } from "react"
import ProgressBar from "./ProgressBar"

export default function Uploadform() {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ["image/png", "image/jpeg", "image/jpg"]

    const changeHandler = (e) => {
        let selected = e.target.files[0]

        // set the state after corecct file type is selected - truthy
        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError("")
        } else {
            setFile(null)
            setError("Please select an image file ( png or jpeg )")
        }
    }
    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {
                    // if wrong type, output this
                    error && <div className="error">{error}</div>
                }

                {
                    // out progressbar if correct file type
                    file && <ProgressBar file={file} setFile={setFile} />
                }
            </div>
        </form>
    )
}
