import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'

const Contacts = () => {
    const [ successMessage, setSuccesMessage ] = useState("")
    const { register, handleSubmit, formState: {errors} } = useForm()

    const serviceId = 'service_ID'
    const templateId = 'template_ID'
    const publicKey = 'D1YbY6nAWqyS7d29L'

    const form = useRef()

    const onSubmit = (data, r) => {
        sendEmail(
            serviceId, 
            templateId, 
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            publicKey
            )
            r.target.reset()
    }

    const sendEmail = (serviceId, templateId, variables, publicKey) => {
        emailjs.send(serviceId, templateId, variables, publicKey)
          .then(() => {
              setSuccesMessage("Form sent successfully :)")

          }).catch(err => console.error(`Something went wrong :( ${err}`))
        }

  return (
      <div id='contacts' className='contacts'>
        <div className='text-center'>
            <h1>contact me</h1>
            <p>Please fill out the form and I'll contact
            you as soon as possible.
            </p>
            <span className='success-message'>{successMessage}</span>
        </div>
        <div className='container'>
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
                <div className='col-md-6 col-xs-12'>
                    {/* NAME INPUT */}
                    <div className='text-center'>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Name'
                        name='name'
                        {...register('name', {
                            required: true,
                            maxLength: 20
                        })}
                        />
                        {errors.name && <span className='error-message'>Please enter your name</span>}
                        <div className='line'></div>
                    </div>
                    {/* PHONE INPUT */}
                    <div className='text-center'>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Phone Number'
                        name='phone'
                        {...register('phone', {
                            required: false,
                        })}
                        />
                        {errors.phone && <span className='error-message'>Please add your phone number</span>}
                        <div className='line'></div>
                    </div>
                    {/* EMAIL INPUT */}
                    <div className='text-center'>
                        <input
                        type='email'
                        className='form-control'
                        placeholder='Email'
                        name='email'
                        {...register('email', {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                        />
                        {errors.email && <span className='error-message'>Please add a valid email</span>}
                        <div className='line'></div>
                    </div>
                    {/* SUBJECT INPUT */}
                    <div className='text-center'>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Subject'
                        name='subject'
                        {...register('subject', {
                            required: true,
                        })}
                        />
                        {errors.subject && <span className='error-message'>Please add a subject about your contact</span>}
                        <div className='line'></div>
                    </div>
                </div>
                <div className='col-md-6 col-xs-12'>
                    {/* DESCRIPTION */}
                    <div className='text-center'>
                        <textarea
                        type='text'
                        className='form-control'
                        placeholder='Description'
                        name='description'
                        {...register('description', {
                            required: true,
                        })}
                        />
                        {errors.description && <span className='error-message'>Please enter a description about your contact</span>}
                        <div className='line'></div>
                    </div>
                    <button className='btn-main-offer contact-btn' type='submit'>contact me</button>
                </div>
            </div>
        </form>
        </div>
      </div>
  )
}

export default Contacts
