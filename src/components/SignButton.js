import React from "react";

import Button from "@material-ui/core/Button";
import FaIcon from "components/Fa-icon";

class SignButton extends React.Component {
  
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <Button onClick={this.onSignOutClick} >
          <FaIcon icon="fas fa-sign-in-alt" />
          Sign Out
        </Button>
      );
    } else {
      return (
        <Button onClick={this.onSignInClick} >
          Sign In with Google
          <FaIcon icon="fas fa-sign-in-alt" />
        </Button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default SignButton


  // const SignButton = (props) => {
  //   let auth = null
    
  //   useEffect(() => {
  //     window.gapi.load("client:auth2", () => {
  //       window.gapi.client
  //       .init({
  //         clientId:
  //         "797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com",
  //         scope: "email",
  //       })
  //       .then(() => {
  //           auth = window.gapi.auth2.getAuthInstance();
  //           onAuthChange(auth.isSignedIn.get());
  
  //           auth.isSignedIn.listen(onAuthChange);
  //         });
  //     });
  //   }, []);
  
  //   const onAuthChange = (isSignedIn) => {
  //     if (isSignedIn) {
  //       props.signIn(auth.currentUser.get().getId());
  //     } else {
  //       props.signOut();
  //     }
  //   };
  
  //   const onSignInClick = () => {
  //     auth.signIn();
  //   };
  
  //   const onSignOutClick = () => {
  //     auth.signOut();
  //   };
  
  //   const renderAuthButton = () => {
  //     if (props.isSignedIn === null) {
  //       return null;
  //     } else if (props.isSignedIn) {
  //       return (
  //         <Button onClick={() => onSignOutClick()}>
  //           <FaIcon icon="fas fa-sign-in-alt" />
  //           Sign Out
  //         </Button>
  //       );
  //     } else {
  //       return (
  //         <Button onClick={() => onSignInClick()}>
  //           Sign In with Google
  //           <FaIcon icon="fas fa-sign-in-alt" />
  //         </Button>
  //       );
  //     }
  //   };
  
  //   return (
  //     <div>
  //       {renderAuthButton()}
  //     </div>
  //   )
  // };
  
  // export default SignButton; 