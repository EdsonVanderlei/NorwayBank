import React, { useRef } from 'react'
import styles from './Carrousel.module.css'
import arrow from '../Assets/img/arrow-forward-outline.svg'
import arrowback from '../Assets/img/arrow-back-outline.svg'

const Carrousel = ({ slides }) => {


    const [active, setActive] = React.useState(0)
    const [position, setPosition] = React.useState(0);

    const element = useRef()

    React.useEffect(() => {
        const { width } = element.current.getBoundingClientRect()
        setPosition(-(width * active))

    }, [active])


    function handlePrev() {
        if (active > 0) {
            setActive(active - 1)
        }
        
        else{
            setActive(slides.length - 1)
        }
    }

    function handleNext() {
        if (active < slides.length - 1) {
            setActive(active + 1)
        }
        else{
            setActive(0)
        }
    
    }


    return (


        <div className={styles.wrapper}>
            


            <div ref={element} style={{ transform: `translateX(${position}px)` }} className={styles.slider}>
                {slides.map(({ url, id }) => (
                    <div className={styles.item} key={id}>
                        <img src={url} />
                    </div>

                ))}




            </div>





            <button className={styles.next} onClick={handleNext}><img src={arrow} /></button>
            <button className={styles.prev} onClick={handlePrev}><img src={arrowback} /></button>

        </div>

    )
}

export default Carrousel