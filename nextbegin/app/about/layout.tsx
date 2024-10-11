import React from 'react'
import styles from './styles.module.css'
import { Metadata } from 'next';
import Head from './head';

export const metadata: Metadata = {
         
  };

export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
}>){
    return(
        <>
        <Head />
            <nav>About Navbar</nav>
            <main className={styles.main}>
                {children}
            </main>
        
        </>
    )
}
