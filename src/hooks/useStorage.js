import { useState, useEffect } from "react"
import { projectStorage, projectFirestore, timestamp } from "../firebase/config"

export default function useStorage(file) {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection("images")

        // upload file to projectStorage.ref(file.name)
        storageRef.put(file).on(
            "state_changed",
            (snapshot) => {
                let percentage =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(percentage)
            },
            (error) => {
                setError(error)
            },
            async () => {
                const url = await storageRef.getDownloadURL()
                const createdAt = timestamp()
                collectionRef.add({
                    url,
                    createdAt,
                })
                setUrl(url)
            }
        )
    }, [file])

    // so we can use these values in other components
    return { progress, url, error }
}
