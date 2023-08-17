// import React, { useState, useEffect } from 'react';
// import validate from '@/utils/validate'

// const useForm = (
//     callback?: () => void //,
//     // validateCallback?: ({}) => React.SetStateAction<{}>
// ) => {

//     const [values, setValues] = useState<{[key: string]: any}>({});
//     const [errors, setErrors] = useState<{[key: string]: any | {}}>({});
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitted, setSubmitted] = useState(false)

//     useEffect(() => {
//         if (Object.keys(errors).length === 0 && submitted) {
//             if (callback) callback();
//         }
//     }, [errors]);

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         if (event) event.preventDefault();
//         // if (validateCallback) validateCallback()
//         // setErrors(validateCallback(values, isSubmitting));
//         setSubmitted(true);
//     };

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         event.persist();
//         setValues(values => ({ ...values, [event.target.name]: event.target.value }));
//     };

//     return {
//         handleChange,
//         handleSubmit,
//         values,
//         errors,
//         setErrors,
//         setIsSubmitting,
//         isSubmitting
//     }
// };

// export default useForm;