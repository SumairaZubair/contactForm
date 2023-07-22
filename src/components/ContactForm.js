import React from 'react'
// import img from './image-2/humaaans-undraw-alternative.png'
function ContactForm() {
  return (
    <div className='container'>
        <div className='form'>
            <button className='form_btn'>Via Support Chat</button>
            <button className='form_btn'>Via Call</button>
            <div className='form_detail'>
            <button className='form_email'>Via Email Form</button>
            <label htmlFor='Name'>Name</label>
            <input type='text' name='name'/>
            {/* <label htmlFor='Name'>mail</label> */}
            </div>
            <div className='form_details'>
            <label htmlFor='Name'>Email</label>
            <input type='text' name='email'/>
            
            </div>
            <div className='form_text'>
            <label htmlFor='Name'>TextArea</label>
            <textarea rows={4}></textarea>
            
            </div>
            {/* <button className='form_email'>Via Email Form</button> */}
           
        </div>
       <div className='form-Img'>
        {/* <img src= alt='pic'/> */}
       </div>
    </div> 
  )
}

export default ContactForm