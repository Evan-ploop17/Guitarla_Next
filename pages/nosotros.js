import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
        pagina='Nosotros'
    >
        <main className='contenedor' >
          <h2 className='heading'>Nosotros</h2>
          <section className={styles.contenido}>

            <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen sobre noosotros' />

            <section>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et congue erat, et rhoncus nisl. Mauris et accumsan elit, sit amet placerat purus. Sed ac dignissim quam. Phasellus neque orci, pulvinar sit amet lacus non, feugiat suscipit sem. Vivamus nibh libero, scelerisque vitae laoreet nec, vulputate vitae tortor. Curabitur ante diam, commodo nec blandit quis, egestas sit amet leo. Maecenas dignissim libero tristique, pulvinar magna vitae, suscipit lorem. Integer sed ante imperdiet, hendrerit lectus non, auctor augue. Sed laoreet nulla ut elit iaculis malesuada. Nulla dictum ex sit amet semper efficitur. Vivamus neque felis, rhoncus sit amet hendrerit sit amet, pharetra vitae risus. Integer in aliquam erat, in tristique nulla. Nulla facilisi. Integer porta commodo lectus, a bibendum odio elementum vel. Duis id mi tincidunt, maximus tellus ut, dictum magna. Duis at ex at risus semper tincidunt et sed risus.
              </p>
              <p>
              Morbi rhoncus quam tortor, vel consectetur velit feugiat pulvinar. Etiam sit amet risus eget est placerat rhoncus in non magna. Duis ex libero, tincidunt vel interdum id, egestas ut erat. Cras auctor, neque eget dictum ornare, velit sapien dapibus diam, et porta nunc nunc eu odio. In sapien velit, lacinia non condimentum at, pharetra non tortor. Donec eget congue justo. Cras vestibulum eros ligula, id tincidunt odio suscipit id.
              </p>
            </section>
          </section>
        </main>
    </Layout>
  )
}  
export default Nosotros