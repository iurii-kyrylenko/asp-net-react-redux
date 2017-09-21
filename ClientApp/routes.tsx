import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';

// Property 'ssr' is used to distiguish between client (false) and server side rendering. 
export const Routes = ({ ssr }: any) => {
    return <Layout>
        <Route exact path='/' component={ Home } />
        <Route path='/counter' component={ Counter } />
        <Route path='/fetchdata/:startDateIndex?' render={ (props: any) => (<FetchData {...props} ssr={ ssr } />) } />
    </Layout>
}
