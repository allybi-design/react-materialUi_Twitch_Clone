import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from 'store/auth/actions';
import SignButton from "components/SignButton";


const SignButtonContainer = (props) => <SignButton {...props} />;

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn
});

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signIn()),
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignButtonContainer);
