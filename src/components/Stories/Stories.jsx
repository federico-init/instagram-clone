import { useState } from "react";

import "./Stories.css";

// import components
import Story from "../Story";

const Stories = ({ user, stories }) => {
    return (
        <div className="Stories">
            <ul className="Stories__List">
                <li className="Stories__item">
                    <Story story={user} />
                </li>
               {stories && stories.map((story) => (
                <li className="Stories__item" key={story.id}>
                    <Story story={story} />
                </li>
               ))}
            </ul>
        </div>
    );
}

export default Stories;