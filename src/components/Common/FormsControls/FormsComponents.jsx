import React from 'react'
import a from './FormsComponents.module.css'

let FormsControl = ({input, meta, child, ...props}) => {

    console.log(input, meta, props)
    
    let hasError = meta.touched && meta.error

    return (
        <div className={a.login + " " + (hasError ? a.error :  "")}>
            {props.children}
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export let AddPostInput = (props) => {
    const {input, meta, child, ...restProps} = props
    return(<FormsControl {...props}><input {...restProps} {...input} /></FormsControl>)
}

export let AddMessageInput = (props) => {
    const {input, meta, child, classInput, ...restProps} = props
    return(<FormsControl {...props}><input {...restProps} {...input} /></FormsControl>)
}

export let LoginInput = (props) => {
    const {input, meta, child, classInput, ...restProps} = props
    return(<FormsControl {...props}><input {...restProps} {...input} /></FormsControl>)
}

// ОБНУЛЕНИЕ ФОРМЫ!