import React from 'react'

const UseForm = ({data, updateFieldHendler}) => {
  return (
    <div id='userForm'>
        <div className="form-control">
          <label htmlFor="name">Nome:</label>
          <input 
            type="text"
            name='text'
            id='name'
            placeholder='digite o seu nome'
            required
            value={data.name || '' }
            onChange={(e)=> updateFieldHendler('name', e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input 
            type="email"
            name='user-email'
            id='email'
            placeholder='digite o seu email'
            required
            value={data.email || ''}
            onChange={(e)=> updateFieldHendler('email', e.target.value)}
          />
        </div>
    </div>
  )
}

export default UseForm