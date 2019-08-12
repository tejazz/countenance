import React from 'react';
import { Helmet } from 'react-helmet';

export const TitleHelmet = (props) => (
    <Helmet>
        <title>{props.title}</title>
    </Helmet>
);