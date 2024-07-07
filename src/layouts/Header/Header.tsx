'use client'

import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/icons/logo.svg'
import Link from 'next/link'
import { ROUTES, SocialLinks } from '@/constants/routes'
import { menuList } from '@/constants/menus'
import { Separator } from '@/components/ui/separator'
import InstagramIcon from '@/assets/icons/instagram_icon.svg'
import FacebookIcon from '@/assets/icons/facebook_icon.svg'
import Searchicon from '@/assets/icons/search_icon.svg'
import HeartIcon from '@/assets/icons/heart_icon.svg'
import CartIcon from '@/assets/icons/cart_icon.svg'
import { Input } from '@/components/ui/input'

export const Header = () => {
    return (
        <header className='shadow-headerShadow'>
            <div className='container'>
                <div className='py-[12px] flex justify-between'>
                    <div className='flex gap-[64px] items-center'>
                        <Link href={ROUTES.home}>
                            <Logo />
                        </Link>
                        <ul className='flex gap-4 items-center'>
                            {menuList.map(({ title, link }, index) => (
                                <React.Fragment key={title}>
                                    <li>
                                        <Link className=' text-[14px] whitespace-nowrap text-textSecondary' href={link}>{title}</Link>
                                    </li>
                                    {index < menuList.length - 1 && (
                                        <li>
                                            <Separator className='bg-textSecondary' orientation="vertical" />
                                        </li>
                                    )}
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <ul className='flex items-center gap-2'>
                            <li>
                                <Link className='text-textSecondary' href={SocialLinks.instagram}>
                                    <InstagramIcon />
                                </Link>
                            </li>
                            <li>
                                <Link className='text-textSecondary' href={SocialLinks.facebook}>
                                    <FacebookIcon />
                                </Link>
                            </li>
                        </ul>
                        <div className="flex items-center border border-textSecondary rounded-full px-2 py-[4px] overflow-hidden shadow-sm focus-within:ring-1 focus-within:ring-brand">
                            <Searchicon className="text-textSecondary" />
                            <Input
                                type="text"
                                placeholder="Search"
                                className="border-none focus-visible:ring-0"
                            />
                        </div>
                        <ul className='flex items-center gap-2'>
                            <li>
                                <Link className='text-brand' href={ROUTES.wishlist}>
                                    <HeartIcon />
                                </Link>
                            </li>
                            <li>
                                <Link className='text-brand' href={ROUTES.cart}>
                                    <CartIcon />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
