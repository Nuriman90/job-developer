import React from 'react';
import Footers from './Footers';
import Navigation from './Navigation';

export default function UpDown({children}) {
    return (
        <>
            <Navigation />
            {children}
            <Footers />
        </>
    )
}
