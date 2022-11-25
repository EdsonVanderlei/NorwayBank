import React from 'react'

const useForm = () => {

    const types = {
       email: {
            regex:'',
            message:''


        }

    }

    const [value,setValue] = React.useState('')
    const [error,setError] = React.useState(null)

    function Validate(value){
        if(type === null) return true
        if(value.lenght === 0){
            return false
        }
        if(types[type] && !types[type].regex.test(value)){
            setError(types[type].message)
            return false
        }
        else{
            setError(null)
            return true
        }
    }


    function onChange({target}){
        if(error) Validate(target.value)
        setValue(target.value)
    }


    return{ value,setValue,error, onChange, onBlur: ()=> Validate(value), Validate: () => Validate(value)}
}

export default useForm