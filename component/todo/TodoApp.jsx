import React, {Component} from "react";
import "./TodoApp.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import withNavigation from './WithNavigation.jsx';
import withParams from "./withParams.jsx";
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodosComponent";
import HeaderComponent from "./HeaderComponent";
import ErrorComponent from "./ErrorComponent";
import LogoutComponent from "./LogoutComponent";
import FooterComponent from "./FooterComponent";
import WelcomeComponent from "./WelcomeComponent";


class TodoApp extends Component{
    render () {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);//trả về props = component ...
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        return(            
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation />
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation/>}/>
                        <Route path="/login" element={<LoginComponentWithNavigation/>}/>
                        <Route path="/welcome/:name" element={
                            <AuthenticatedRoute>
                            <WelcomeComponentWithParams />
                            </AuthenticatedRoute>
                            } /> 
                        <Route path="/todos" element={
                            <AuthenticatedRoute>
                                <ListTodosComponent/>
                            </AuthenticatedRoute>
                            }/>
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        }/>
                        <Route path="*" element={<ErrorComponent/>}/>
                    
                    </Routes>
                    <FooterComponent />
                </Router>
            </div>
        );
    }
}

export default TodoApp