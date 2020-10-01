import React, { useState } from "react"
import { Modal, Title, Uploadform, ImageGrid } from "./comps"

function App() {
    const [selectedImg, setSelectedImg] = useState(null)
    return (
        <div className="App">
            <Title />
            <Uploadform />
            <ImageGrid setSelectedImg={setSelectedImg} />
            {selectedImg && (
                <Modal
                    selectedImg={selectedImg}
                    setSelectedImg={setSelectedImg}
                />
            )}
        </div>
    )
}

export default App
