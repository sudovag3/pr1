import styles from "./Card.module.css"
import {Image} from "./image/Image";

export const Card = (props) =>{
    const {name, date, distance, size} = props;

    return (<div className={styles.card}>
                <div className={styles.adaptSolver}></div>
                    <Image />
                <div className={styles.contentName}>{name}</div>
                <div className={styles.contentWrapper}>
                    <div className={styles.contentDate}>Дата: {date}</div>
                    <div className={styles.contentDistance}>
                        Расстояние: {distance} км
                    </div>
                    <div className={styles.contentSize}>Размер: {size} м</div>
                </div>
            </div>)
}