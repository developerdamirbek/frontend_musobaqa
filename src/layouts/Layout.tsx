import React, { ReactNode } from 'react'
import { CenterBlock } from '@/layouts/CenterBlock'
import { Header } from './Header'

type Props = {
  children: ReactNode
  isMain?: boolean
}

export const Layout = ({ children, isMain }: Props) => (
  <div>
    <div>
      <CenterBlock>
        <Header />
      </CenterBlock>
    </div>

    <div>
      <CenterBlock>{children}</CenterBlock>
    </div>
  </div>
)
