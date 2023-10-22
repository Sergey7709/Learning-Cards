import { Navigate } from 'react-router-dom'

import { SignIn } from '@/components/auth/sign-in'
import { Loader } from '@/components/ui/loader/loader.tsx'
import { useGetAuthUserMeDataQuery, useSignInUserMutation } from '@/service'

export const Login = () => {
  const [signInUser] = useSignInUserMutation()

  const { isSuccess: isAuthenticated, isLoading } = useGetAuthUserMeDataQuery()

  if (isLoading) return <Loader />

  if (isAuthenticated) return <Navigate to={'/'} replace={true} />

  return (
    <div>
      <SignIn onHandleSubmit={signInUser} />
    </div>
  )
}
