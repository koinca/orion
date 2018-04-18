import React from "react";
import App from "./App.js";

const Welcome = ({user, onSignOut})=> {
  // This is a dumb "stateless" component
  return (
    <div>
      Welcome <strong>{user.username}</strong>!
      <button className='btn btn-primary pull-right' style={{display: 'none',float: 'right',margin: '5px'}} onClick={onSignOut}>
  Sign out
</button>
      <a style={{display: 'none'}}    href="javascript:;" onClick={onSignOut}>Sign out</a>
    </div>
  )
}

class LoginForm extends React.Component {

  // Using a class based component here because we're accessing DOM refs

  handleSignIn(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(username, password)
  }

  render() {
    return (
      <form onSubmit={this.handleSignIn.bind(this)}>
        <div className="col-md-1 offset-md-1">Sign in</div>
        <div className="col-md-3 form-group">
            <input className='form-control' type="text" ref="username" placeholder="enter you username" />
        </div>
         <div className="col-md-3 form-group">
            <input  className='form-control' type="password" ref="password" placeholder="enter password" />
        </div>
        <input className="col-md-1 offset-md-1 form-control btn btn-primary" type="submit" value="Login" />
      </form>
    )
  }

}


class LoginApp extends React.Component {

  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
  }

  // App "actions" (functions that modify state)
  signIn(username, password) {
    // This is where you would call Firebase, an API etc...
    // calling setState will re-render the entire app (efficiently!)
    this.setState({
      user: {
        username,
        password,
      }
    })
  }

  signOut() {
    // clear out user from state
    this.setState({user: null})
  }

  render() {
    // Here we pass relevant state to our child components
    // as props. Note that functions are passed using `bind` to
    // make sure we keep our scope to App
    return (
      <div>
        <h1>My Sample App</h1>
        {
          (this.state.user) ?
            <div>
              <Welcome
               user={this.state.user}
               onSignOut={this.signOut.bind(this)}
              />
              <App logout={this.signOut.bind(this)}/>
            </div>
          :
            <LoginForm
             onSignIn={this.signIn.bind(this)}
            />
        }
      </div>
    )

  }

}

export default LoginApp;
