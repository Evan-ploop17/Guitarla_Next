import Curso from '../components/Curso'
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({guitarras, curso, entradas}) {
  
  //console.log('entradas desde inicio', entradas)
  
  return (
    <Layout
      pagina='Inicio'
      guitarra={guitarras[3]}
    >
      <main className='contenedor' >
        <h1 className='heading' >Nuentra Coleccion</h1>
        <Listado
          guitarras={guitarras}
        />
      </main>
      <Curso
        curso={curso}
      />

      <ListadoBlog
        entradas={entradas}
      />

    </Layout>
  )
}

export async function getServerSideProps(){
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:desc`
  const urlCurso = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [resGuitarras, resCurso, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso),
    fetch(urlBlog)
  ])
  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
    resBlog.json()
  ])

  return{
    props: {
      guitarras,
      curso,
      entradas
    }
  }
}

