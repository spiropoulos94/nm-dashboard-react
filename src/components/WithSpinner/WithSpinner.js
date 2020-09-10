import React from 'react'
import Spinner from "./../Spinner/Spinner"

function WithSpinner(Component) {
    return function WithSpinnerComponent({isLoading, ...props }){
        if(!isLoading) return <Component {...props}/>;
        return <Spinner/>
    }   
}

export default WithSpinner
