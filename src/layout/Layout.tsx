import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { Header } from './Header/Header'

import styles from './Layout.module.scss'

export interface LayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main}>{children}</div>
    </div>
  )
}
