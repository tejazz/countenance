import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './app/pages/home/home';
import Expertise from './app/pages/expertise/expertise';
import Projects from './app/pages/projects/projects';
import Contact from './app/pages/contact/contact';
import Resume from './app/pages/resume/resume';
import PDFView from './app/pages/resume/pdf-viewer';

export const Routes = (props) => (
    <Switch>
        <Route exact path="/" render={(routerProps) => <Home {...routerProps} secondaryColor={props.secondaryColor} />} />
        <Route path="/expertise" render={(routerProps) => <Expertise {...routerProps} secondaryColor={props.secondaryColor} />} />
        <Route path="/projects" render={(routerProps) => <Projects {...routerProps} secondaryColor={props.secondaryColor} />} />
        <Route path="/contact" render={(routerProps) => <Contact {...routerProps} secondaryColor={props.secondaryColor} />} />
        <Route path="/resume" render={(routerProps) => <Resume {...routerProps} secondaryColor={props.secondaryColor} />} />
        <Route path="/pdfview" component={PDFView} />
        <Redirect from="/**" to="/" />
    </Switch>
);