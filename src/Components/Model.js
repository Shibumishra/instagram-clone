import React, { useContext, useState } from 'react';
import { ContextProvider } from '../Global/Context';

const Models = () => {
    const { model, closeModel, register, login } = useContext(ContextProvider);
    const [state, setStare] = useState({
        register: true,
        login: false
    })
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: ''
    });
    const haldleInpus = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }
    const formToggle = () => {
        setStare({
            ...state,
            register: !state.register,
            login: !state.login
        });
        ;
    }

    const closeForms = (e) => {
        const className = e.target.getAttribute("class");
        if (className === "model") {
            closeModel();
        }
    }

    const registerUsers = (e) => {
        e.preventDefault();
        console.log(inputs);
        register(inputs);
        setInputs({ username: "", email: "", password: "" })
    }
    const userLogin = (e) => {
        e.preventDefault()
        console.log(inputs)
        login(inputs);
    }
    return (<>

        {model ? <div className="model" onClick={closeForms}>
            <div className="model_container">
                {state.register ? <div className="model_model__form">
                    <form onSubmit={registerUsers}>
                        <div className="model_group">
                            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                                alt="instagram.png"
                            />
                        </div>
                        <div className="model_group">
                            <input type="text"
                                name="username"
                                className="model_input"
                                placeholder="username..."
                                onChange={haldleInpus}
                                value={inputs.username}
                                required
                            />
                        </div>
                        <div className="model_group">
                            <input type="email"
                                name="email"
                                className="model_input"
                                placeholder="Email..."
                                onChange={haldleInpus}
                                value={inputs.email}
                                required
                            />
                        </div>
                        <div className="model_group">
                            <input type="password"
                                name="password"
                                className="model_input"
                                placeholder="Password..."
                                onChange={haldleInpus}
                                value={inputs.password}
                                required
                            />
                        </div>
                        <div className="model_group">
                            <input type="submit"
                                value="Register"
                                className="btn btn_smart"
                            />
                        </div>
                        <div className="model_group">
                            <span
                                onClick={formToggle}>
                                Already have an account ?
                            </span>
                        </div>
                    </form>
                </div> : <div className="model_model__form">
                    <form onSubmit={userLogin}>
                        <div className="model_group">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
                                alt="instagram.png"
                            />
                        </div>
                        <div className="model_group">
                            <input type="email"
                                name="email"
                                className="model_input"
                                placeholder="Email..."
                                onChange={haldleInpus}
                                value={inputs.email}
                                required 
                                />
                        </div>
                        <div className="model_group">
                            <input type="password"
                                name="password"
                                className="model_input"
                                placeholder="Password..."
                                onChange={haldleInpus}
                                value={inputs.password}
                                required
                            />
                        </div>
                        <div className="model_group">
                            <input type="submit"
                                value="Login"
                                className="btn btn_smart"
                            />
                        </div>
                        <div className="model_group">
                            <span
                                onClick={formToggle}>
                                Create a new account ?
                            </span>
                        </div>
                    </form>
                </div>}

            </div>
        </div> : ""}

    </>);
}

export default Models;