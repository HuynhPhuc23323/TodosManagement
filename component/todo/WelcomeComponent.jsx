import React, {Component} from "react";

class WelcomeComponent extends Component{
    render(){
        return(
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.params.name}. You can manage your todos <a href="/todos">here</a>
                </div>
            </>
        );
    }
}

export default WelcomeComponent