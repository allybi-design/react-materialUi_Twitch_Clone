import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from "react-redux"

import {newStream} from "store/streams/actions"

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const validate = values => {
  const errors = {}
  const requiredFields = [
    'streamTitle',
    'streamDescription',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  
  return errors
}

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

const MaterialUiForm = props => {

  const submit = (values)=> {
    console.log(values)
    props.newStream(values)
  }

  const { handleSubmit, pristine, submitting,} = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Field
          name="streamTitle"
          component={renderTextField}
          label="Stream Title"
        />
      </div>
      <div>
        <Field 
          name="streamDescription" 
          component={renderTextField} 
          label="Stream Description" />
      </div>

      <Button type="submit" disabled={pristine || submitting}>Submit</Button>
      
    </form>
  )
}
const formWrapper = reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate,
})(MaterialUiForm)


export default connect(null, {newStream})(formWrapper)