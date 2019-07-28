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
        <Route exact path="/" component={Home} />
        <Route path="/expertise" component={Expertise} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/pdfview" component={PDFView} />
        <Redirect from="/**" to="/" />
    </Switch>
);