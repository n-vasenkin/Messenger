import React, {Component} from 'react';
import './style.css';

/** Module **/

/** Components **/
import Filter from '../Static_Components/Filter';
import ContactList from './ContactList';

/** IMG **/
import ContactImg from '../../Static/img/main/contact_img.png';
import FriendImg from '../../Static/img/main/friend_ava.png';

/** Store **/


const contactList = [
    {id: 0,name: "Nikolay", surname: "Petrov", lastMessage: "Hello!", dataMessage: "25 April"},
    {id: 1,name: "Max", surname: "Molin", lastMessage: "Bye!", dataMessage: "10 September"},
    {id: 2,name: "Bob", surname: "Sidorov", lastMessage: "How are you?", dataMessage: "20 October"},
    {id: 3,name: "Sten", surname: "Ivanov", lastMessage: "Price: 24$!", dataMessage: "6 December"},
];

const Main = class extends Component {

    componentWillMount() {
        // mainStore.changeOpenPage("main");
    }

    render(){
        return(
            <main>
                <Filter/>
                <article className="content">
                    <section className="contact_list">
                        <ContactList arrayContact={contactList}/>
                    </section>
                    <section className="chat">
                        <ol className="chat_list">
                            <li className="row_message contact_message">
                                <div>
                                    <img src={FriendImg} alt="ava_1" className="user_avatar"/>
                                </div>
                                <div>
                                    <p className="message">Hello!</p>
                                    <i className="date_message">4 April 2016, 5:32 PM</i>
                                </div>
                            </li>
                            <li className="row_message my_message">
                                <div>
                                    <img src={FriendImg} alt="ava_1" className="user_avatar"/>
                                </div>
                                <div>
                                    <p className="message">Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris</p>
                                    <i className="date_message">4 April 2016, 5:32 PM</i>
                                </div>
                            </li>
                        </ol>
                        <textarea id="textarea" placeholder="Write a message" rows="1"/>
                    </section>

                    <section id="user_box">
                        <div>
                            <div className="contact_img">
                                <img src={ContactImg} alt="contact_img"/>
                                <div className="contact_ball"></div>
                            </div>
                            <h2 className="white_text">Name Surname</h2>
                            <p className="info_contact">Lorem ipsum dolor sit amet, consectetur adipis</p>
                            <div className="info_box">
                                <h3>Email</h3>
                                <i>Answer</i>
                            </div>
                            <div className="info_box">
                                <h3>Phone</h3>
                                <i>8(912)075-14-67</i>
                            </div>
                            <div className="info_box">
                                <h3>Address</h3>
                                <i>LA. 64 Street</i>
                            </div>
                        </div>
                    </section>
                </article>
            </main>
        )
    }
};

export default Main;