import { useRef, useState } from 'react'
import styled from 'styled-components'
import { FiMail, FiLock, FiEye, FiEyeOff, FiLogIn, FiAlertCircle } from 'react-icons/fi'
import { z } from 'zod'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const loginSchema = z.object({
      email: z.email({ error: 'Email inválido' }),
      password: z.string().min(6, { error: 'Senha deve ter no mínimo 6 caracteres' })
    })

    setErrors({})

    const result = loginSchema.safeParse({ email, password })

    if (!result.success) {
      const { fieldErrors } = z.flattenError(result.error) as {
        fieldErrors: Partial<Record<'email' | 'password', string[]>>
      }

      const newErrors = {
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0]
      }

      setErrors(newErrors)

      if (newErrors.email) {
        emailInputRef.current?.focus()
      } else if (newErrors.password) {
        passwordInputRef.current?.focus()
      }

      return
    }

    console.log('Login attempt:', result.data)
  }

  return (
    <Container>
      <LoginCard>
        <Logo>
          <LogoSymbol>&lt;G/&gt;</LogoSymbol>
        </Logo>

        <Title>Bem-vindo de volta</Title>
        <Subtitle>Entre com suas credenciais para acessar o sistema</Subtitle>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <InputWrapper $hasError={!!errors.email}>
              <FiMail />
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                  if (errors.email) {
                    setErrors(prev => ({ ...prev, email: undefined }))
                  }
                }}
                $hasError={!!errors.email}
                ref={emailInputRef}
              />
            </InputWrapper>
            {errors.email && (
              <ErrorMessage>
                <FiAlertCircle />
                <span>{errors.email}</span>
              </ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Senha</Label>
            <InputWrapper $hasError={!!errors.password}>
              <FiLock />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={e => {
                  setPassword(e.target.value)
                  if (errors.password) {
                    setErrors(prev => ({ ...prev, password: undefined }))
                  }
                }}
                $hasError={!!errors.password}
                ref={passwordInputRef}
              />
              <TogglePasswordButton
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </TogglePasswordButton>
            </InputWrapper>
            {errors.password && (
              <ErrorMessage>
                <FiAlertCircle />
                <span>{errors.password}</span>
              </ErrorMessage>
            )}
          </FormGroup>

          <LoginButton type="submit">
            <FiLogIn />
            Entrar
          </LoginButton>
        </Form>
      </LoginCard>
    </Container>
  )
}

const Container = styled.div`
  min-height: calc(100vh - 5rem);
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a2e38 0%, #041620 100%);
  padding: 16px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%);
    top: -250px;
    right: -250px;
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%);
    bottom: -200px;
    left: -200px;
    border-radius: 50%;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`

const LoginCard = styled.div`
  background: rgba(15, 50, 60, 0.8);
  border: 1px solid rgba(14, 165, 233, 0.2);
  border-radius: 16px;
  padding: 48px 40px;
  width: 100%;
  max-width: 440px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);

  flex-direction: column;
`

const Logo = styled.div`
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;

  @media (max-width: 480px) {
    margin-bottom: 24px;
  }

  span {
    color: #14b8a6;
    font-size: 28px;
    font-weight: 700;
    font-family: 'Courier New', monospace;

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
`

const LogoSymbol = styled.div`
  color: #14b8a6;
  font-size: 32px;
  font-weight: 700;
  font-family: 'Courier New', monospace;

  @media (max-width: 480px) {
    font-size: 28px;
  }
`

const Title = styled.h1`
  color: var(--white);
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 8px;
  }
`

const Subtitle = styled.p`
  color: #94a3b8;
  font-size: 15px;
  margin-bottom: 32px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 28px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 24px;
  }
`

const Form = styled.form`
  flex-direction: column;
  width: 100%;
`

const FormGroup = styled.div`
  flex-direction: column;
  margin-bottom: 24px;
`

const Label = styled.label`
  display: block;
  color: var(--white);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`

const InputWrapper = styled.div<{ $hasError?: boolean }>`
  position: relative;

  align-items: center;

  svg {
    position: absolute;
    left: 16px;
    color: ${props => (props.$hasError ? '#ef4444' : '#64748b')};
    width: 20px;
    height: 20px;
    transition: color 0.2s;
  }
`

const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 14px 16px 14px 48px;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid ${props => (props.$hasError ? '#ef4444' : 'rgba(100, 116, 139, 0.3)')};
  border-radius: 8px;
  color: var(--white);
  font-size: 15px;
  outline: none;
  transition: all 0.2s;

  @media (max-width: 480px) {
    padding: 12px 14px 12px 44px;
    font-size: 14px;
  }

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    background: rgba(15, 23, 42, 0.8);
    border-color: ${props => (props.$hasError ? '#ef4444' : '#14b8a6')};
    box-shadow: 0 0 0 3px ${props => (props.$hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(20, 184, 166, 0.1)')};
  }

  &:hover {
    border-color: ${props => (props.$hasError ? '#ef4444' : 'rgba(100, 116, 139, 0.5)')};
  }
`

const TogglePasswordButton = styled.button`
  position: absolute;
  right: 16px;
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 4px;

  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: #14b8a6;
  }

  svg {
    width: 20px;
    height: 20px;
    position: static;
  }
`

const ErrorMessage = styled.div`
  align-items: center;
  gap: 6px;
  color: #ef4444;
  font-size: 13px;
  margin-top: 6px;

  svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
`

const LoginButton = styled.button`
  width: 100%;
  padding: 14px 24px;
  background: #14b8a6;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    padding: 12px 20px;
    font-size: 15px;
    margin-bottom: 20px;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: #0d9488;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(20, 184, 166, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #334155;
    cursor: not-allowed;
    transform: none;
  }
`
