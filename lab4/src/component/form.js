import React,{useRef} from 'react'
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form"
import './form.css'

const RegistrationForm = () => {

    const selectInputRef = useRef()

    const {

        control,
        register,

        handleSubmit,

        formState: { errors },

    } = useForm()



    const onSubmit = (data) => {

        console.log(data)
        alert('Login Succesful!!!')
        document.querySelector('[name="first_name"]').value = '';
        document.querySelector('[name="last_name"]').value = '';
        document.querySelector('[name="email"]').value = '';
        document.querySelector('[name="contact"]').value = null;
        selectInputRef.current.clearValue()
    }


    const options = [
        { value: 'btech', label: 'B-Tech' },
        { value: 'mtech', label: 'M-Tech' },
        { value: 'bca', label: 'BCA' },
    ];


    return (

        <div className='container'>

            <h1>User Registration Form </h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='cont'>

                    <input

                        type="text"

                        name="first_name"

                        placeholder="First Name"

                        {...register("first_name", { required: true })}

                    />

                    {errors.first_name && <span>First Name is Required</span>}

                </div>

                <div className='cont'>

                    <input

                        type="text"

                        placeholder="Last Name"

                        {...register("last_name", { required: true })}

                    />

                    {errors.last_name && <span>Last Name is Required</span>}

                </div>

                <div className='cont'>

                    <input

                        type="email"

                        placeholder="Email"

                        {...register("email", { required: true })}

                    />

                    {errors.email && <span>Email is Required</span>}

                </div>

                <div className='cont'>

                    <input

                        type="number"

                        placeholder="Contact"

                        {...register("contact", { required: true })}

                    />

                    {errors.contact && <span>Contact is Required</span>}

                </div>
                <div className='cont'>
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                            required: true 
                        }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                isMulti
                                options={options}
                                ref={selectInputRef}
                            />
                        )}
                        name="options"  
                    />
                    {errors.options && <span>Select One option</span>}
                </div>
                <div className='cont'>

                    <button type="submit">

                        Submit

                    </button>

                </div>

            </form>



        </div>

    )

}



export default RegistrationForm