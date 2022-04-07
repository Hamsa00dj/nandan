import React, { Component } from 'react'


export class ErrorBoundary extends Component {
    state = {
        hasError : false,
    };

    static getDerivedStateFromError(error){
        console.log('getDerivedStateFromError executed')
        console.log('error, error')
        return{hasError:true};
    }
    componentDidCatch(error, info){
        console.log('componentDidCatch executed')
        console.log('e', error);
        console.log('info', info)
    }
    render() {
        if(this.state.hasError){
            return <p> Oops something went wrong</p>
        }else{
            return this.props.children
        }
    }
}

export default ErrorBoundary
