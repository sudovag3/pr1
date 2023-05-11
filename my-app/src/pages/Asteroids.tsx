import React, { useEffect, useState } from "react";
import { Header } from "../components/header/Header";
import { Card } from "../components/card/Card";

type Asteroid = {
    name: string;
    date: string;
    size: number;
    distance: string;
    isDangerous: boolean;
    id: string;
};

export const Asteroids: React.FC = () => {
    const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
    const [onlyDangerous, setOnlyDangerous] = useState<boolean>(false);
    const [displayTip, setDisplayTip] = useState<boolean>(true);

    useEffect(() => {
        try {
            fetch("https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY")
                .then((res) => res.json())
                .then((response) => {
                    let rawAsteroids: any[] = [];
                    for (const data in response.near_earth_objects) {
                        rawAsteroids = rawAsteroids.concat(
                            response.near_earth_objects[data]
                        );
                    }
                    const asteroids: Asteroid[] = rawAsteroids.map((item) => {
                        const size = Math.trunc(
                            (item.estimated_diameter.meters.estimated_diameter_max +
                                item.estimated_diameter.meters.estimated_diameter_min) /
                                2
                        );
                        const close = item.close_approach_data[0];
                        return {
                            name: item.name,
                            date: close.close_approach_date,
                            size,
                            distance: close.miss_distance.kilometers,
                            isDangerous: item.is_potentially_hazardous_asteroid,
                            id: item.id,
                        };
                    });
                    setAsteroids(asteroids);
                });
        } catch (err) {
            console.log(err);
            setAsteroids(generateAsteroids());
        }
    }, []);

    return (
        <div>
            <Header />
            Asteroids Page
            <div>
                <input
                    type="checkbox"
                    name={"onlyDanger"}
                    onChange={() => setOnlyDangerous(!onlyDangerous)}
                />
                <label htmlFor={"onlyDanger"}>Показывать только опасные</label>
            </div>
            <div>
                Расстояние
                <button
                    className={`DistanceChoose${displayTip}`}
                    onClick={() => {
                        setDisplayTip(true);
                    }}
                >
                    в километрах
                </button>
                ,
                <button
                    className={`DistanceChoose${!displayTip}`}
                    onClick={() => {
                        setDisplayTip(false);
                    }}
                >
                    {" "}
                    расстояний до луны
                </button>
            </div>
            <div>
                {onlyDangerous
                    ? asteroids
                          .filter((item) => item.isDangerous)
                          .map((item) => <Card {...item} displayTip={displayTip} />)
                    : asteroids.map((item) => (
                          <Card {...item} displayTip={displayTip} />
                      ))}
            </div>
        </div>
    );
};

const generateAsteroids = (): Asteroid[] => {
    const months = [
        `января`,
        `февраля`,
        `марта`,
        `апреля`,
        `мая`,
        `июня`,
        `июля`,
        `августа`,
        `сентября`,
        `октября`,
        `ноября`,
        `декабря`,
    ];
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const result: Asteroid[] = [];

    for (let i = 0; i < 10; i++) {
        const name =
            characters[(Math.random() * 25).toFixed(0)] +
            characters[(Math.random() * 25).toFixed(0)] +
            characters[(Math.random() * 25).toFixed(0)] +
            characters[(Math.random() * 25).toFixed(0)] +
            "-" +
            characters[(Math.random() * 25).toFixed(0)] +
            characters[(Math.random() * 25).toFixed(0)];
        const date = `${(Math.random() * 27 + 1).toFixed(
            0
        )} ${months[(Math.random() * 11).toFixed(0)]} 2023`;
        const size = +(Math.random() * 1000 + 10).toFixed(0);
        const distance = (Math.random() * 90000000).toString();
        let isDangerous = false;
        if (+distance <= 19220000) isDangerous = true;
        result.push({
            name,
            date,
            size,
            distance,
            isDangerous,
            id: (i + 1).toString(),
        });
    }
    return result;
};
