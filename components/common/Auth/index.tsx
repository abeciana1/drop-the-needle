import { signIn } from "next-auth/react"

const SigninBtn = () => (
    <button onClick={() => signIn("google")}>Sign in with Google</button>
  )

export default SigninBtn