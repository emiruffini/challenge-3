import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GoSignIn from '../components/GoSignIn'
import GoUpAddress from '../components/GoUpAddress'
import FinishShopping from '../components/FinishShopping'
import usersActions from '../redux/actions/usersActions'
import SignUp from './SignUp'
import Profile from '../components/EditProfile'

const Buy = (props) => {

    const [flag, setFlag] = useState('noLog')

    useEffect(() => {
        data()
    }, [])

    const data = async() => {
        var userLogued = await props.getUser(props.token)
        
        setFlag(userLogued.address === null ? "noAddress" : "ok")
    }

    return (
        <>
            {flag !== "noAddress" && <Header/>}
            {flag === "noLog" 
                ? <GoSignIn/>
                : flag === "noAddress" 
                    ? <Profile/>
                    : <FinishShopping />
            }
            <Footer />
        </>
    )
}


const mapDispatchToProps = {
    getUser: usersActions.getUserAddress
}

const mapStateToProps = (state) => {
  
    return {
      token: state.usersRed.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy)