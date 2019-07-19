import React from 'react';
import { Route } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Copyright by Biszczak</p>
            <Route path="/" exact render={(props) => (
                <p>Actual page:  Homepage</p>
            )
            } />

            <Route path="/:page" render={(props) => (
                <>
                    <p>Actual page:  <span style={{ textTransform: 'capitalize' }}>{props.match.params.page}</span></p>
                    {/* <p>Jesteś na stronie <span>{props.match.url}</span></p>
                    <p>Jesteś na stronie <span>{props.match.path}</span></p> */}
                </>
            )
            } />
        </div>
    );
}

export default Footer;