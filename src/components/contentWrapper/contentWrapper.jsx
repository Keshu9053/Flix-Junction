import React from "react";
import './syle.scss';  // Importing the external stylesheet

const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
