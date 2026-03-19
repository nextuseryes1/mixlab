'use server'

import { resend } from '@/lib/resend'
import VerifyEmail from '../email/VerifyEmail'

export async function sendVerificationEmail(email: string, url: string) {
  await resend.emails.send({
    from: 'Mixlab <auth@mixlab-five.store>',
    to: email,
    subject: 'Verify your email',
    react: VerifyEmail({ url })
  })
}
