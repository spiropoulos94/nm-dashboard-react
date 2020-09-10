import React from 'react'
import Spinner from "/src/components/Spinner/SpinnerS"

function WithSpinner(Component) {
    return function WithSpinnerComponent({isLoading, ...props }){
        if(!isLoading) return <Component {...props}/>;
        return <Spinner/>
    }   
}

export default WithSpinner
