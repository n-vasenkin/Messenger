import React, {Component} from 'react';
import './style.css';

/** IMG **/
import UserImg from '../../Static/img/sign_in/user.svg';
import PasswordImg from '../../Static/img/sign_in/password.svg';

/** Store **/
import {observer} from 'mobx-react';
import mainStore from '../../Lib/Store/mainStore';

const SignIn = observer (class extends Component {

    componentWillMount() {
        mainStore.changeOpenPage('sign_in');
    }

    render(){
        return(
            <main className="sign_in_container">
                <section className="form_sign">
                    <div className="title_form">
                        <h3>Вход</h3>
                        <span className="swap_sign">Регистрация</span>
                    </div>
                    <div className="sign_input">
                        <div className="input_box">
                            <label className="label_input">
                                <img src={UserImg} alt=""/>
                            </label>
                            <input type="text" placeholder="Логин"/>
                        </div>
                        <div className="input_box">
                            <label className="label_input">
                                <img src={PasswordImg} alt=""/>
                            </label>
                            <input type="text" placeholder="Пароль"/>
                        </div>
                    </div>
                    <a href="#/"><button className="sign_btn">Войти</button></a>
                    <div className="bottom_form">

                        <div className="check_remember">
                            <input className="styled_checkbox" id="checkbox_remember" type="checkbox" value="value1"/>
                            <label htmlFor="checkbox_remember">Запомнить</label>
                        </div>


                        <span className="restore_password">Забыли пароль?</span>
                    </div>
                </section>
            </main>

        )
    }
});

export default SignIn;