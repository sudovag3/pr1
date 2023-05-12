import styles from "./Card.module.css"
import { Image } from "./image/Image";
const path = require("./dinoo.svg") as string;

export const Card = (props) => {
    const { name, date, distance, size, isDangerous, displayTip } = props;
    return (<div className={`${isDangerous ? styles.cardRed : styles.card}`}>
        <div className={styles.adaptSolver}></div>
        <Image></Image>
        <div className={styles.dinoo}><div> <img src={path} height={`60%`} width={`60%`} /></div></div>
        <div className={styles.info}>
            <div><h2><u>{name}</u></h2>
                {`Дата: ${date}`}<br />
                {`Расстояние: ${distanceDisplay(displayTip, distance)}`}<br />
                {`Размер: ${size} м`}</div>
        </div>
    </div>)
}

const distanceDisplay = (displayTip, distance) => {
    if (displayTip)
        return `${distance} км`
    else
        return `${(distance / 384400).toFixed(2)} расстояний до луны`
}