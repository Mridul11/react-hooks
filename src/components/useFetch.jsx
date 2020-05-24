import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [state, setState] = useState({data: null, loading: true}) ; 

    useEffect( () => { 
        setState({ data: null, loading: true }) ;
        // setState( state => ({ data: state.data, loading: false }));

        fetch(url)
                .then(x => x.text())
                .then(data => {
                    setState({ data, loading: false });
                });
    }, [url]); 
    return state ; 
}