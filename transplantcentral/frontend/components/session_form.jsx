
import React from 'react';
import {Link, withRouter} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: "",
            password: ""
          };
    
    }

    handleSubmit (event) {
        event.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        console.log(user);

    }


    navLink () {
        if (this.props.formType === 'login') {
            return <Link class={'nav-link'} to="/signup">sign up instead</Link>;
          } else {
            return <Link class={'nav-link'} to="/login">log in instead</Link>;
          }
    }

    update (field) {
       return (event) => {
           this.setState({
                [field]: event.currentTarget.value
            })
       } 
    }

    render () {
        
        return (

            <div class="session-form-container session-form-background">
                <div class="session-form">
                    <h1> {this.props.formType} or {this.navLink()}  </h1>

                    <form onSubmit={ this.handleSubmit.bind(this) }>
                        <label>Username</label>
                        <input type='text' value={this.state.username} onChange={this.update('username')} />

                            <br /><br />


                        <label>Password</label>
                        <input type='text' value={this.state.password} onChange={this.update('password')}/>

                            <br /><br />

                        <input class='session-submit-button' type="submit" value="Submit" />
                    </form>

                </div>
            </div> 
        )
        


    }








}





export default withRouter(SessionForm);