import React, { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleChange = (e) => {
        setEmail(e.target.value);
    }
    const handleSubmit = (e) => {
        setPassword(e.target.value);
    }
    return (
        <>
            <div className="LoginBox">
                <form action="">
                    <div>
                        <input type="text" name="email" id="email" placeholder="Email Address" value={handleChange} />
                    </div>
                    <div>
                        <input type="text" name="password" id="password" placeholder="Password" value={handleChange} />
                    </div>
                    <button type="submit" onSubmit={() => { handleSubmit }}>LOG IN NOW</button>
                </form>
            </div>
        </>
    )
}