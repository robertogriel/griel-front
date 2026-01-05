import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useEncrypt } from './useEncrypt'
import { api } from '../services/api'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { CookiesEnum } from '../database/Cookies'

interface UserProps {
  id: number
  email: string
}

interface LoginProps {
  user: UserProps
  token: string
}

interface AuthContextType {
  login: (email: string, password: string) => Promise<void>
  checkLogin: () => Promise<boolean>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const Encrypt = useEncrypt()
  const Router = useRouter()
  const [userData, setUserData] = useState<UserProps | null>(null)

  useEffect(() => {
    checkLogin()
  }, [Router.pathname])

  async function checkLogin() {
    if (!Router.pathname.startsWith('/dashboard')) return false

    const tokenFromCookies = Cookies.get(CookiesEnum.AUTH_TOKEN)

    const shouldReturnToLogin =
      !tokenFromCookies && Router.pathname.startsWith('/dashboard') && Router.pathname !== '/dashboard/login'

    if (shouldReturnToLogin) {
      Router.push('/dashboard/login')
      return false
    }

    if (tokenFromCookies && !userData) {
      const result = await api.get<UserProps>('/me', {
        headers: {
          Authorization: `Bearer ${tokenFromCookies}`
        }
      })

      setUserData(result.data)

    }
    return true
  }

  async function login(email: string, password: string) {
    const passwordEnc = await Encrypt.encrypt(password)

    const body = {
      email,
      password: passwordEnc
    }

    const response = await api.post<LoginProps>('/login', body)

    Cookies.set(CookiesEnum.AUTH_TOKEN, response.data.token, { expires: 30 })

    const loginSuccess = await checkLogin()
    if (loginSuccess) {
      Router.push('/dashboard')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        checkLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
