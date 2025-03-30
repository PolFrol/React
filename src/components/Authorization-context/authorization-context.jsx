import { useState } from 'react'
import { AuthorizationContext as AuthorizationContextProvider } from './index'
import { userName } from '../../materials/user';

export const AuthorizationContext = ({ children }) => {
    const [user, setUser] = useState('')

    const toggleUser = () => {
        if (user) {
            setUser('')
        } else {
            setUser(userName)
        }
    }
    return <AuthorizationContextProvider value={{user, toggleUser}}>{children}</AuthorizationContextProvider>
}
