import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route, Redirect } from 'react-router-dom';

function Loading({ error }) {
    if (error) {
        return 'Something went wrong';
    } else {
        return <h3 className="loadableText">Loading...</h3>;
    }
}

const Home = Loadable({
    loader: () => import('./app/pages/home/home'),
    loading: Loading
});

const Expertise = Loadable({
    loader: () => import('./app/pages/expertise/expertise'),
    loading: Loading
});

const Projects = Loadable({
    loader: () => import('./app/pages/projects/projects'),
    loading: Loading
});

const Contact = Loadable({
    loader: () => import('./app/pages/contact/contact'),
    loading: Loading
});

const Resume = Loadable({
    loader: () => import('./app/pages/resume/resume'),
    loading: Loading
});

const PDFView = Loadable({
    loader: () => import('./app/pages/resume/pdf-viewer'),
    loading: Loading
});

const JsonEditor = Loadable({
    loader: () => import('./app/pages/json-editor/json-editor'),
    loading: Loading
});

export const Routes = (props) => (
    <Switch>
        <Route exact path="/" render={(routerProps) => <Home {...routerProps} secondaryColor={props.secondaryColor} changeSecondaryColor={props.changeSecondaryColor} mainJsonData={props.mainJsonData} />} />
        <Route path="/expertise" render={(routerProps) => <Expertise {...routerProps} primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} mainJsonData={props.mainJsonData} />} />
        <Route path="/projects" render={(routerProps) => <Projects {...routerProps} secondaryColor={props.secondaryColor} mainJsonData={props.mainJsonData} />} />
        <Route path="/contact" render={(routerProps) => <Contact {...routerProps} secondaryColor={props.secondaryColor} mainJsonData={props.mainJsonData} />} />
        <Route path="/resume" render={(routerProps) => <Resume {...routerProps} secondaryColor={props.secondaryColor} mainJsonData={props.mainJsonData} />} />
        <Route path="/jsonedit" render={(routerProps) => <JsonEditor {...routerProps} secondaryColor={props.secondaryColor} mainJsonData={props.mainJsonData} modifyMainJsonData={props.modifyMainJsonData} />} />
        <Route path="/pdfview" component={PDFView} />
        <Redirect from="/**" to="/" />
    </Switch>
);