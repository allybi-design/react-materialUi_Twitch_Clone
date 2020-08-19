import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from "react-redux"

import {
  fetchStreams, 
  fetchStreamById, 
  postStream, 
  upDateStreamById, 
  deleteStreamById} from "store/streams/actions"

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const validate = values => {
  const errors = {}
  const requiredFields = [
    'title',
    'description',
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
    props.onPostStream(values)
  }

  const { handleSubmit, pristine, submitting,} = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Field
          name="title"
          component={renderTextField}
          label="Stream Title"
        />
      </div>
      <div>
        <Field 
          name="description" 
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

const mapStateToProps = (state) => ({
  // getStream: getStream(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFetchStreams: () => dispatch(fetchStreams()),
  onFetchStreamById: (id) => dispatch(fetchStreamById(id)),
  onPostStream: (values) => dispatch(postStream(values)),
  onUpDateStreamById: (values, id) => dispatch(upDateStreamById(values, id)),
  onDeleteStreamById: (id) => dispatch(deleteStreamById(id)),  
});


export default connect(mapStateToProps, mapDispatchToProps)(formWrapper)