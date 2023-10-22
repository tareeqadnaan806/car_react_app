import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className="mt-10 p-6 text-sm flex justify-between footer">
        <div className='footer-left'>
          <Image src="../logo.svg" alt='' width={100} height={100} className='mb-5' />
          <p>
            Carhub 2023
          </p>
          <p>
            All rights reserved &copy;
          </p>
        </div>

        <div className='right-footer flex gap-10 footer-link'>
          {footerLinks.map((link) => {
            return <div >
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((items) => {
                return <Link href={items.url} className='flex mt-3 text-slate-500'>
                  {items.title}
                </Link>
              })}
            </div>
          })}
        </div>
      </footer>

      <div className='flex justify-between p-5'>
        <p>@2023 CarHub, All Rights Reserved</p>
        <div>
          <span className='mr-5'>Privacy policy</span>
          <span>Terms of Use</span>
        </div>
      </div>
    </div>
  )
}

export default Footer