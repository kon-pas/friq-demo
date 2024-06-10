import Link from 'next/link'
import { AiFillFacebook as IconFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare as IconTwitter } from 'react-icons/ai'
import { AiFillLinkedin as IconLinkedin } from 'react-icons/ai'

import { Content } from '@/layout'

export default function ContactBar() {
  return (
    <div className="hidden w-full py-1 text-xs text-gray-400 bg-zinc-900 sm:block">
      <Content className="flex justify-between">
        <div className="flex gap-4 transition-all sm:gap-10">
          <Link
            href="mailto:kontakt@friqtechnology.com"
            className="transition-colors hover:text-gray-100"
          >
            kontakt@friqtechnology.com
          </Link>
          <Link
            href="tel:+48795787145"
            className="transition-colors hover:text-gray-100"
          >
            +48 795 787 145
          </Link>
        </div>

        <div className="flex gap-6">
          <div className="flex gap-2">
            <span className="cursor-pointer transition-colors hover:text-gray-100">
              PL
            </span>
            <span className="select-none">/</span>
            <span className="cursor-pointer transition-colors hover:text-gray-100">
              ENG
            </span>
          </div>

          <div className="flex flex-row gap-2">
            <Link
              href="https://www.facebook.com/friqtechnology/"
              aria-label="Facebook"
              passHref
            >
              <IconFacebook
                size={16}
                className="transition-colors hover:text-white"
              />
            </Link>
            <IconLinkedin
              size={16}
              className="cursor-pointer transition-colors hover:text-white"
            />
            <IconTwitter
              size={16}
              className="cursor-pointer transition-colors hover:text-white"
            />
          </div>
        </div>
      </Content>
    </div>
  )
}
