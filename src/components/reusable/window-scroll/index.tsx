import { useState, useEffect } from "react";

const useWindowScroll = () => {
    const [windowScroll, setWindowScroll] = useState({
        height: 0
    })

    useEffect(() => {
        function handleScroll() {
            setWindowScroll({
                height: window.scrollY
            })
        }

        window.addEventListener('scroll', handleScroll)

        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return windowScroll
}

export default useWindowScroll