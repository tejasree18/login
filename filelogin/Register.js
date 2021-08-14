import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <>
                <div className="bgimg">
                    <div className="centerdiv">
                        <img src="https://source.unsplash.com/user/jackie/likes/1600x900" id="profilepic" alt="img" />
                        <h2><b>Register</b></h2>
                        <br></br>
                        <p>Please register your account.</p>
                        <br></br>
                        <form className="needs-validation" noValidate>
                            <div>
                                <input type="text" name="Name" className="inputbox" placeholder="Name" id="name" required autoComplete="off" />
                            </div>
                            <br></br>
                            <div className="form-control is-valid">
                                <input type="text" name="mobile" className="inputbox" placeholder="Mobile" id="mobile" required />
                                <div className="valid=feedback">
                                    Looks good!
                                </div>
                            </div>
                            <br></br>
                            <div>
                                <input type="text" name="mail" className="inputbox" placeholder="Enter your email" id="mail" required />
                            </div>
                            <br></br>
                            <div>
                                <input type="password" className="inputbox" placeholder="Suggest a strong passowrd" id="password" required />
                            </div>
                            <br></br>
                            <div className="adjustCenter">
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button class="btn btn-primary" type="button">Register</button>
                                </div>
                            </div>
                            <br></br>
                        </form>
                        <footer>
                            <p>Terms of use. Privacy Policy</p>
                        </footer>
                    </div>
                </div>
            </>
        )
    }
}
