import styles from '../styles/Blog.module.css'
import Entrada from '../components/Entrada'

const ListadoBlog = ({entradas}) => {
  
  return (
    <>
        <h2 className='heading' >Blog</h2>
          <section className={styles.blog}>
            {entradas.map( entrada => (
              <Entrada
                key={entrada.id}
                entrada={entrada}
              /> 
            ) )}
          </section>
    </>
  )
}

export default ListadoBlog