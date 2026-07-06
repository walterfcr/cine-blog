import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { signIn } from '@/services/auth.service'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      await signIn(email, password)

      navigate('/admin')
    } catch {
      alert('Correo o contraseña incorrectos.')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <Card className="w-full max-w-md p-8">
        <h1 className="mb-8 text-center text-3xl font-bold">Cine Blog Admin</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="
              w-full
              rounded-lg
              bg-accent
              py-3
              font-medium
              text-white
              transition-colors
              hover:bg-accent-hover
            "
          >
            Iniciar sesión
          </button>
        </form>
      </Card>
    </div>
  )
}

export default Login
