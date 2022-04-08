import Image from 'next/image'
import Layout from '../components/Layout'
import { useEffect, useState } from "react";
import styles from '../styles/Carrito.module.css'

const Carrito = ({carrito, actualizarCarrito, eliminarProducto}) => {

    const [total, setTotal] = useState(0)

    useEffect( () =>{
        const calcularTotal = carrito.reduce(
            (total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calcularTotal)
    }, [carrito])
    
  return (
    <Layout
        pagina={'Carrito de compras'}
    >
        <h1 className='heading' >Carrito</h1>
        <main className={`contenedor ${styles.contenido}`}>
            <div className={styles.carrito} >
                {carrito.length === 0 ? 'Carrito Vacio' : (
                    carrito.map( producto => (
                        <div key={producto.id} className={styles.producto} >
                            <div>
                                <Image layout='responsive' width={250} height={500} src={producto.imagen} alt={producto.nombre} ></Image>
                            </div>

                            <div>
                                <p className={styles.nombre} >{producto.nombre}</p>

                                <div className={styles.cantidad} >
                                    <p> Cantidad: {producto.cantidad} </p>
                                    <select
                                        value={producto.cantidad}
                                        className={styles.select }
                                        onChange={ e => actualizarCarrito(
                                            {
                                                cantidad: e.target.value,
                                                id: producto.id,
                                            }
                                        ) }
                                    >
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                        <option value='6'>6</option>
                                        <option value='7'>7</option>
                                    </select>
                                </div>

                                <p className={styles.precio}>
                                    $ <span> {producto.precio} </span> 
                                </p>
                                <p className={styles.subtotal} >
                                    Subtotal: $ <span> {producto.precio * producto.cantidad } </span>
                                </p>
                            </div>
                            <button
                                type='button'
                                className={styles.eliminar}
                                onClick={ () => eliminarProducto(producto.id) }
                            >
                                X
                            </button>
                        </div>
                    ) )
                )}
            </div>
            <div className={styles.resumen}>
                {
                    total > 0 ? (
                        <>
                            <h3>Resumen del pedido</h3>
                            <p>Total a pagar: {total} </p>
                        </>
                    ) :
                    <p>No hay productos</p>
                    
                }
            </div>
        </main>
    </Layout>
  )
}

export default Carrito