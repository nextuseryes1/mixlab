import { Body, Button, Container, Head, Heading, Hr, Html, Preview, Section, Text } from '@react-email/components'

interface VerifyEmailProps {
  url: string
}

export default function VerifyEmail({ url }: VerifyEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Confirm your email — Mixlab The Pet Pharmacy</Preview>
      <Body>
        <Container>
          <Section>
            <Text>Mixlab the pet pharmacy</Text>
          </Section>

          <Hr />

          <Heading>Confirm your email</Heading>

          <Text>Thanks for signing up! Click the button below to verify your email address and get started.</Text>

          <Section>
            <Button href={url}>Confirm email</Button>
          </Section>

          <Text>If you didn&#39;t create an account, you can safely ignore this email.</Text>

          <Hr />

          <Text>© {new Date().getFullYear()} Mixlab · The Pet Pharmacy</Text>
        </Container>
      </Body>
    </Html>
  )
}
