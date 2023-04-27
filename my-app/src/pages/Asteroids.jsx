import {Header} from "../components/header/Header";
import {Card} from "../components/card/Card";

const asteroids = [
    {name: "2021 FQ", date: "12 сентября 2021", grade:"опасен", size:5, distance:9331775},
    {name: "2021 ER", date:"11 ноября 2022", grade:"не опасен", size:10, distance:7235024},
    {name: "2022 QQ", date:"3 марта 2022", grade:"не опасен", size:10, distance:2866012}
]

export const Asteroids = () => {
    return (
        <div>
            <Header/>
            Asteroids Page
            {asteroids.map((asteroid) => (
                <div>
                    <Card name={asteroid.name} grade={asteroid.grade} date={asteroid.date}
                              distance={asteroid.distance} size={asteroid.size} />
                </div>
            ))}
        </div>
    );
}
