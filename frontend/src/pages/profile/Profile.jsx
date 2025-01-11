import styles from './Profile.module.css'
import AuthServices from '../../services/auth.jsx'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from '@mui/material'
import OrderServices from '../../services/order.jsx'
import Loading from '../../components/loading/Loading.jsx'
import MyButton from '../../components/buttons/MyButton.jsx'

export default function Profile() {
    const { logout } = AuthServices()
    const navigate = useNavigate()
    const authData = JSON.parse(localStorage.getItem('auth'))
    const { getUserOrders, orderLoading, refetchOrders, ordersList } = OrderServices()

    useEffect(() => {
        if(!authData) {
            return navigate('/auth')
        } else if(refetchOrders){
            getUserOrders(authData?.user?._id)
        }
    }, [authData, refetchOrders])

    if(orderLoading) {
        return(
            <Loading />
        )
    }
    
    const handleLogout = () => {
        logout()
        return navigate('/')
    }

    return (
        <div className={styles.pageContainer}>
            <div>
                <h1>Olá, {authData?.user?.fullname}</h1>
                <h4>{authData?.user?.email}</h4>
                <MyButton onClick={handleLogout}>Logout<img src="/imgs/icons/log-out.svg" alt="" /></MyButton>
            </div>
        </div>
    )
}