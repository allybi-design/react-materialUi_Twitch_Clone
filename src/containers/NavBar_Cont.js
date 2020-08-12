import React from 'react'
import { connect } from "react-redux";
import NavBar from 'Components/NavBar'
import { signOut, signIn } from "Store/Auth/actions";
import { getAuth } from 'Store/Auth/selectors';

const NavBarContainer = (props) => <NavBar {...props} />

const mapStateToProps = state => ({
  auth: getAuth(state)
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
  signIn: () => dispatch(signIn()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)
