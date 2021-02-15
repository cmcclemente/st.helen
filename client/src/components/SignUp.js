import React from 'react';

const SignUp = () => {
    return (
        <form >
            <header className="center">
                <img src="https://freepngimg.com/thumb/web_design/24804-7-sign-up-button-transparent-background.png" alt="Sign Up" width="150" height="55" />
            </header>
            <body id="border">
                <div className="center">
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter email" name="email" required />
                </div>
                <div className="center">
                    <label for="psw"><b>Password</b></label>
                    <input type="text" placeholder="Create a password" name="psw" required />
                </div>
                <div className="center">
                    <label for="psw-confirm"><b>Confirm Password</b></label>
                    <input type="text" placeholder="confirm password" name="psw-confirm" required />
                </div>
                <div className="center">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <button type="submit" className="signupbtn">Sign Up</button>
                </div>
            </body>
        </form>
    )
}

export default SignUp