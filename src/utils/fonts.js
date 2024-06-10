import { Inter, Syne, Roboto_Mono, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })
const roboto = Roboto_Mono({ subsets: ['latin']})
const space = Space_Grotesk({ subsets: ['latin']})

const fonts = {
  inter,
  syne,
  roboto,
  space
}

export default fonts
