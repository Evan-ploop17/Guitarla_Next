import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog'


const Blog = ({entradas}) => {
  
  return (
    <Layout
        pagina='Blog'
    >
        <main className='contenedor'>
          <ListadoBlog
            entradas={entradas}
          />
        </main>
    </Layout>
  )
}


// cada que se llama la pagina contruye una respuesta, es decir, va y consulta el api
// getStaticProps solo construye un archivo y lo comparte 
// metodo de next para consumir un api
export async function getServerSideProps(){

  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json() 
  //console.log('entradas', entradas)

  return {
    props: {
      entradas
    }
  }
}

export default Blog