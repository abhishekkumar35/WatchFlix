import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const WithAuth = (Component: React.ComponentType) => {

    const AuthenticateComponent: any = (props: Props) => {
        const navigate = useNavigate()
        const jwt_token = localStorage.getItem("jwt_token")
        useEffect(() => {
            if (!jwt_token) {
                navigate('/login')
            }
        }, [jwt_token, navigate])

        return jwt_token ? <Component /> : null

    }

    return AuthenticateComponent
}


export default WithAuth