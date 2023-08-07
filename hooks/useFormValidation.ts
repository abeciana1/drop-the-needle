import React, { useState } from 'react'
import {omit} from 'lodash'

const useFormValid = (callback: () => void) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const validate = (event : any, name : string, value : string, inputRule: string) => {
        switch(name) {
            default:
                break;
        }
    }

    const handleChange = (event: any) => {
        event.persist();

        let name = event.target.name;
        let val = event.target.value;
        let inputRule = event.target.dataset.inputRule;

        validate(event,name,val,inputRule);

        setValues({
            ...values,
            [name]:val,
        })

    }

    const handleSubmit = (event: any) => {
        if(event) event.preventDefault();

        if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
            callback();

        }else{
            alert("There is an Error!");
        }
    }


    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}

export default useFormValid