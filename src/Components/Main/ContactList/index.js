import React, {Component} from 'react';

/** IMG **/
import FriendImg from "../../../Static/img/main/friend_ava.png";

export default class ContactList extends Component {
    render(){
        const {arrayContact} = this.props;
        return(
            <ol>
                {arrayContact.map((el, i) => {
                    return(
                        <li key={i}>
                            <div className="my_contact">
                                <div className="contact_div align_center">
                                    <img src={FriendImg} alt="contact_photo"/>
                                    <p className="contact_name">{el.name} {el.surname}</p>
                                    <p className="contact_date">{el.dataMessage}</p>
                                </div>
                                <p className="last_message text_overflow">{el.lastMessage}</p>
                            </div>
                        </li>
                    )
                })}
            </ol>
        )
    }
}