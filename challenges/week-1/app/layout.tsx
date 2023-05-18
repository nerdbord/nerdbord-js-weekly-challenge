import { ReactNode } from 'react'

export default function RootLayout ({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Blinking Stars</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
