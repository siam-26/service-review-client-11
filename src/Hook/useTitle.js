import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}- HMAS-Food`;
    }, [title])
}

export default useTitle;