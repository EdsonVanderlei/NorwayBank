import React from 'react'

const Head = ({title}) => {
    React.useState(()=>{
        document.title = title
    },[title])
    
}

export default Head