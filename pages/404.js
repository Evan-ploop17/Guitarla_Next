import React from 'react'
import Link from "next/link";
import styles from '../styles/NoEncontrado.module.css'

const NoEncontrado = () => {
  return (
    <section className={styles.no_encontrado} >
        <h1 className='heading' >Página No Encontrada</h1>
        <Link href='/' >Volver al inicio</Link>
    </section>
  )
}

export default NoEncontrado