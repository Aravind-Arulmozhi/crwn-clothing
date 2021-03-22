import react from "react";
import './SignIn.styles.scss';
import FormInput from '../../pages/FormInput/FormInput.Components';
import CustomButton from '../Custom-Button/custom-button.Components';
import {signInWithGoogle} from '../firebase/firebase.utilis';
class SignIn extends react.Component{
constructor(props){
    super(props);
    this.state ={
        email:" ",
        password:" "
    }

}
handleSubmit =event =>{
    event.preventDefault();
    this.setState({email:' ',password:' '})
};
handleChange= event =>{
    const { value, name } = event.target;

    this.setState({ [name]: value });

};
render(){
    return(
    <div className="sign-in">
        <h2>I  already have an account</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={this.handleSubmit}>
        
            <FormInput name="email" onChange={this.handleChange} type="email" value={this.state.email} label="Email" required />        
          
            <FormInput name="password" type="password" onChange={this.handleChange} value={this.state.password} label="Password" required />        
            <div className="buttons">
        
            <CustomButton type="Submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>

            </div>
            </form>
    </div>
    );
}

}

export default SignIn;