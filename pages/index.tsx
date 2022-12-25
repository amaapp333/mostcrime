import Link from 'next/link'

export default function IndexPage() {
  return (
    <head>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />

    </head>
    <div>
     <h1>Hello World.</h1>

    <Link href="/about">About</Link>
    </div>
  )
}
