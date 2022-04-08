import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from "../helpers"
import styles from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {
    const {titulo, resumen, imagen, published_at, url} = entrada
    
  return (
    <article>
        {/* // para que funcione se debe hacer una configuracion en next.config.js V209 */}
        <Image  width={800} height={600} src={imagen.url} alt={`Imagen blog ${titulo}`} />
        
        <section className={styles.contenido}>
            <h3> {titulo} </h3>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.resumen} >{resumen}</p>
            <Link href={`/blog/${url}`} >
                <a className={styles.enlace} >Leer entrada</a>
            </Link>
        </section>
    </article>
  )
}

export default Entrada