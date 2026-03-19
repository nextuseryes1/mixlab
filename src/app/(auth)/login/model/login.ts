'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { LoginSchema, loginSchema } from '../schema/login.schema'
import { errorMessages } from '../types/login.types'

export const useLogin = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  async function onSubmit(data: LoginSchema) {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    })

    if (res.error) {
      toast.error(errorMessages[res.error] ?? 'Something went wrong')
      return
    }

    toast.success('Logged in successfully')
  }

  return { form, onSubmit }
}
