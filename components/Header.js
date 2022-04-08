import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'

const Header = ({guitarra}) => {

  const router = useRouter()

  return (
    <header  className={styles.header} >
        <section className='contenedor'>
            <section className={styles.barra} >
              <Link href='/' >
                <a>
                  <Image priority='true' width={400} height={100} src='/img/logo.svg' alt='Logo de la tienda' />
                </a>
              </Link>

              <nav className={styles.navegacion}>
                  <Link href='/'>Inicio</Link>
                  <Link href='/nosotros'>Nosotros</Link>
                  <Link href='/blog'>Blog</Link>
                  <Link href='/tienda'>Tienda</Link>
                  <Link href='/carrito'>
                    <a>
                      <Image
                        layout='fixed'
                        width={30}
                        height={25}
                        src='/img/carrito.png'
                        alt='Imagen carrito'
                      />
                    </a>
                  </Link>
              </nav>
            </section>
            {
              guitarra && (
                <section className={styles.modelo}>
                  <h2>Modelo {guitarra.nombre}</h2>
                  <p>{guitarra.descripcion}</p>
                  <p className={styles.precio} >$ {guitarra.precio}</p>
                  <Link href={`/guitarras/${guitarra.url}`} >
                    <a className={styles.enlace}>
                      Ver Producto
                    </a>
                  </Link>
                </section>
              )
            }
        </section>

        {router.pathname === '/' && (
          <div className={styles.guitarra} >
            <Image layout='fixed' width={600} height={1200}  src='/img/header_guitarra.png' alt="Imagen header guitarra" />
          </div>
        )}

    </header>
  )
}

export default Header