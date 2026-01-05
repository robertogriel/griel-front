import { createContext, ReactNode, useContext } from 'react'

interface EncryptedPayload {
  iv: string
  data: string
}

type EncryptContextType = {
  encrypt: (plain: string) => Promise<EncryptedPayload>
}

const EncryptContext = createContext<EncryptContextType>({} as EncryptContextType)

function base64(bytes: ArrayBuffer | Uint8Array) {
  const u8 = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes)
  let finalString = ''
  u8.forEach(binary => (finalString += String.fromCharCode(binary)))
  return btoa(finalString)
}

function getWebCrypto(): Crypto {
  if (typeof window === 'undefined' || (window && !window.crypto?.subtle)) {
    throw new Error('Houve um erro ao criptografar os seus dados.')
  }
  return window.crypto
}

async function sha256Key(secret: string) {
  const crypted = getWebCrypto()
  const enc = new TextEncoder()
  const hash = await crypted.subtle.digest('SHA-256', enc.encode(secret))
  return crypted.subtle.importKey('raw', hash, { name: 'AES-GCM' }, false, ['encrypt'])
}

export const CryptProvider = ({ children }: { children: ReactNode }) => {
  const secret = process.env.SHARED_SECRET

  const encrypt = async (plain: string): Promise<EncryptedPayload> => {
    if (!secret) throw new Error('SHARED_SECRET não definido.')

    const crypted = getWebCrypto()
    const key = await sha256Key(secret)

    const iv = crypted.getRandomValues(new Uint8Array(12))
    const enc = new TextEncoder()
    const ciphertext = await crypted.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(plain))

    return {
      iv: base64(iv),
      data: base64(ciphertext)
    }
  }

  return <EncryptContext.Provider value={{ encrypt }}>{children}</EncryptContext.Provider>
}

export function useEncrypt() {
  return useContext(EncryptContext)
}
