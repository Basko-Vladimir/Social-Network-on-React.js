import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setUserProfileData} from "../../redux/authReducer";
import * as axios from "axios";

class HeaderContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setUserProfileData(id, email, login);
                }
            })
    }
    render(){
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return ({
        login: state.auth.login,
        isAuth: state.auth.isAuth
    })
};

export default connect(mapStateToProps, {setUserProfileData})(HeaderContainer);