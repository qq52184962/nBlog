import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Post from './components/Post';
import NotFound from './components/NotFound';
import DashBoard from './components/DashBoard';
import Setting from './components/Setting';
import SignIn from './components/SignIn';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import ResetPwd from './components/ResetPwdForm';
import AppInput from './components/AppInput';
import PostDetail from './components/PostDetail';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={ props => 
        <Layout>
            <Component {...props} />
        </Layout>
    }/>
);

export const routes = (
    <Switch>
        { AppRoute({ component: SignInForm, layout: SignIn, exact: true, path: '/signin'} ) }
        { AppRoute({ component: SignUpForm, layout: SignIn, exact: true, path: '/signup'} ) }
        { AppRoute({ component: ResetPwd, layout: SignIn, exact: true, path: '/resetpwd'} ) }
        { AppRoute({ component: Post, layout: Layout, exact: true, path: '/'} ) }
        { AppRoute({ component: DashBoard, layout: Layout, exact: true, path: '/:userId/me'} ) }
        { AppRoute({ component: Post, layout: Layout, exact: true, path: '/post/:authorId?'} ) }
        { AppRoute({ component: PostDetail, layout: Layout, exact: true, path: '/:postId/post' } ) }
        { AppRoute({ component: Setting, layout: Layout, exact: true, path: '/account'} ) }
        { AppRoute({ component: NotFound, layout: Layout } ) }
    </Switch>
);

/**
 * Route
 * @prop {object or string} path url
 * @prop {bool} exact whether or not it should match exactly as path specified
 * @prop {bool} sensitive specified if router will match in a case-sensitive way
 * @prop {object} component a react object to be rendered, when use this, router use 
 * createElement to render, so if use inline function, don't use this because every time
 * this will result in undesirable unmount and mount component
 * @prop {func} render use this when you want to use inline function
 * @prop {func} children this works exactly as render does, but this will be executed even if route
 * is not matched, (match: object) => object
 */

/**
 * BrowserRouter
 * @prop {string} basename the baseline of the url, ex: /app ,Link:/user =>/app/user
 * @prop {func} getUserConfirmation confirmation popup and its callback function
 * @prop {bool} forceRefresh for legacy browser doesn't support history api
 */

/**
 * Link
 * @prop {bool} replace while navigate, replace the history instead of add a new one
 * @prop {string} to url
 */

/**
 * NavLink - special version of link, for active styling
 * @prop {string} to url
 * @prop {string} activeClassName
 * @prop {object} activeStyle
 * @prop {bool} exact if true, the location will match exactly
 * @prop {func} isActive (match: bool, location: string) => bool
 */

 /**
  * Prompt
  * @prop {string or func} message if function, (location: string) => string
  * @prop {bool} when true, successfully navigate to another link
  */

  /**
   * Redirect
   * @prop {string or object} to url
   * @prop {bool} push while true, push a new entry to history instead replace it
   * @prop {string or object} from this is used in switch, while match the rule, redirect to the location
   */
