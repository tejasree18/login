import React, { Component } from 'react';


export default class Login extends Component {
    render() {
        return (
            <>
                <div className="bgimg">
                    <div className="centerdiv">
                        <img src="https://source.unsplash.com/user/jackie/likes/1600x900" id="profilepic" alt="img" />
                        <h2><b>Welcome back!</b></h2>
                        <br></br>
                        <p>Please login to your account.</p>
                        <br></br>
                        <form>
                            <div>
                                <input type="text" name="" className="inputbox" placeholder="Username" required autoComplete="off"/>
                            </div>
                            <br></br>
                            <div>
                                <input type="Password" name="" className="inputbox" placeholder="Password" required />
                            </div>
                            <br></br>
                            <div className="mb-4 form-check">
                                <label className="form-check-label" for="exampleCheck1">Remember me</label>
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            </div>
                            <br></br>
                            <div className="FORGOT-SECTION">
                                <a href="register">Forgot Password?</a>
                            </div>
                            <br></br>
                            <div className="adjustCenter">
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button class="btn btn-primary" type="button">Login Now</button>
                                </div>
                            </div>
                            <br></br>
                        </form>
                        <br></br>
                        <footer>
                            <p>Terms of use. Privacy Policy</p>
                        </footer>
                    </div>
                </div>
            </>
        )
    }
}
