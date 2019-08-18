import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import './nav-drawer.scss';

function NavDrawer(props) {
    return (
        <SwipeableDrawer
            open={props.navBarState}
            onClose={props.toggleDrawer('navBarState', false)}
            onOpen={props.toggleDrawer('navBarState', true)}
        >
            <div
                role="presentation"
                onClick={props.toggleDrawer('navBarState', false)}
                onKeyDown={props.toggleDrawer('navBarState', false)}
                style={{
                    width: 200
                }}
            >
                <p className="app-nav-link" onClick={() => props.history.push('/')}>Home</p>
                <p className="app-nav-link" onClick={() => props.history.push('/expertise')}>Expertise</p>
                <p className="app-nav-link" onClick={() => props.history.push('/projects')}>Projects</p>
                <p className="app-nav-link" onClick={() => props.history.push('/contact')}>Contact</p>
                <p className="app-nav-link" onClick={() => props.history.push('/resume')}>Resume</p>
                <p className="app-nav-link" onClick={() => props.history.push('/resumevariation')}>Templates</p>
            </div>
        </SwipeableDrawer>

    );
}

export default NavDrawer;