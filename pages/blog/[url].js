import Image from 'next/image'
import {useRouter} from 'next/router'
import Layout from '../../components/Layout'
import {formatearFecha}  from '../../helpers/index'
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {

    const {titulo, contenido, imagen, published_at} = entrada[0]

  return ( 
    <Layout
        pagina={titulo}
    >
        <main className='contenedor' >
            <h1 className='heading'>{titulo}</h1>
            <article className={styles.entrada}  >
                <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`imagen entrada de ${titulo}`} />
            </article>
            <section className={styles.contenido}>
                <p className={styles.fecha} >{formatearFecha(published_at) }</p>
                <p className={styles.texto} >{contenido}</p>
            </section>
        </main>
    </Layout>
  )
}

// Es requerido cuando se tienen paginas dinamicas SSG, cuando se usa el routing de next, se necesita el metodo
// cuando se tiene routing dinamico 
export async function getStaticPaths(){
    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
    const paths = entradas.map( entrada => (
        {
            params: {url: entrada.url }
        }
    ))
    return{
        paths,
        fallback: false
    }
}
// 
export async function getStaticProps({params: {url}}){
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
    const respuesta = await fetch(urlBlog)
    const entrada = await respuesta.json()
    console.log('entrada', entrada)
    return{
        props: {
            entrada
        }
    }
}

// export async function getServerSideProps({query: {id}}){
//     const url = `http://localhost:1337/blogs/${id}`
//     const respuesta = await fetch(url)
//     const entrada = await respuesta.json()
//     console.log('entrada', entrada)
//     return{
//         props: {
//             entrada
//         }
//     }
// }

export default EntradaBlog