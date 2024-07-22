import React from 'react'
import './Feedback.css'
const Feedback = () => {
    const handlesubmit = () => {
        alert("" );
    };

    const handlesend = () => {
        const mailtoLink = 'mailto:guna.amypo@gmail.com?subject=Feedback&body=Dear%20Trainer,%0D%0A%0D%0AI%20would%20like%20to%20provide%20the%20following%20feedback:%0D%0A%0D%0A[Your%20Feedback%20Here]%0D%0A%0D%0AThank%20you.%0D%0A%0D%0A[Your%20Name]%0D%0A[Your%20Register%20Number]%0D%0A[Your%20Department';
        window.location.href = mailtoLink;
    };

    const handlereset = () => {
        // Code to clear the form goes here
    };

    return (
        <div class="flex">
            <center>
                <h1>Feedback Form</h1>
                <hr></hr>
            </center>
            <form>
                <center>
                    <table>
                        <tbody>
                            <tr>
                                <td> Name</td>
                                <td><input type="text" placeholder='Enter Your First Name'></input></td>
                                <td><input type="text" placeholder='Enter Your Last Name'></input></td><br></br>
                            </tr>
                            <tr>
                                <td>Register Number</td>
                                <td><input type="text" placeholder='Enter Your Reg No'></input></td><br></br>
                            </tr>
                            <tr>
                                <td>Department</td>
                                <td><input type="text" placeholder='Enter Your Dep'></input></td><br></br>
                            </tr>
                            <tr>
                                <td>Email Id</td>
                                <td><input type="email" placeholder='email@gmail.com'></input></td><br></br>
                            </tr>
                            <tr>
                                <td>Trainer Name</td>
                                <td><input type="text" placeholder='Enter Your First Name'></input></td>
                            </tr>
                        </tbody>
                    </table>
                    <h5>Instructions:Please indicate your level of agreement with the statements listed below</h5>
                    <br></br>
                    <textarea id="feedback" name="feedback" placeholder="Enter your feedback here..."></textarea><br></br>
                    <h3>Rate Our Coaching!</h3>
                    <select>
                        <option>Satisfied</option>
                        <option> Not Satisfied</option>
                    </select><br></br>
                    <button type="button" onClick={handlesubmit}>Submit Feedback</button>
                    <button type="button" onClick={handlereset}>Clear form</button>
                    <button type="button" onClick={handlesend}>Send</button>
                </center>
            </form>
        </div>
    )
};

export default Feedback;