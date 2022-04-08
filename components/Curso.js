import styles from '../styles/Curso.module.css'

const Curso = ({curso}) => {

    const {titulo, contenido, imagen} = curso

  return (
    <section className='section' >
        <section className={`contenido ${styles.grid}`}>
            <section className={styles.contenido} >
                <h2 className='heading' >{titulo}</h2>
                <p className={styles.texto} >{contenido}</p>

                <a href='#' className={styles.enlace} >Mas informacion</a>
            </section>
        </section>

        <style jsx>{`
            .section{
                padding: 10rem 0;
                margin-top: 10rem;
                background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.url});
                background-size: cover;
                background-position: center;
            }
        `}</style>

    </section>
  )
}

export default Curso