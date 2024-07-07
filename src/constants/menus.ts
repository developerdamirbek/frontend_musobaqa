'use client'

import { ROUTES } from '@/constants/routes'

export type MenuItem = {
  title: string
  link: string
}

export const menuList: MenuItem[] = [
  {
    title: 'ALL PRODUCTS',
    link: ROUTES.shop,
  },
  {
    title: 'ABOUT SEEDRA',
    link: ROUTES.about,
  },
  {
    title: 'OUR BLOG',
    link: ROUTES.blog,
  },
  {
    title: 'CONTACTS',
    link: ROUTES.contact,
  },
]
