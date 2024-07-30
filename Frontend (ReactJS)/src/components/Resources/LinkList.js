import React from "react";
import {NavLink} from "react-router-dom";
import GoBackButton from "../Utils/GoBackButton";

const LinkList = ({links}) => {

    if (!links || links.length === 0) {
        return <div className="error">No links available for this course.</div>;
    }

    return (
        <ul className="links-list">
            {links.map(link => (
                <li key={link.id} className="resource-item">
                    <NavLink to={`${link.url}`}>
                        <h1>{link.type}</h1>
                        <p>{link.description}</p>
                    </NavLink>
                    <GoBackButton/>
                </li>
            ))}
        </ul>

    );

}

export default LinkList;