import React from "react";
import { Helmet } from "react-helmet";



const SEO = ({ title, titleTemplate, description }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>
                {title} - {titleTemplate}
            </title>
            <meta name="description" content={description} />
        </Helmet>
    );
};

SEO.defaultProps = {
    title: "The all one place for lend and borrow pools for your DEFI",
    titleTemplate: "A2ZFIN",
    description: "",
};

export default SEO;
