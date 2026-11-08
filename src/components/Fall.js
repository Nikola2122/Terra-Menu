import {useMemo} from "react";
import {Snowfall} from "react-snowfall";

const leafSvg = (color) => `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <path fill="${color}" d="M55 7C34 9 17 18 10 34c-5 12 4 23 16 20 17-4 26-23 29-47Z"/>
        <path fill="none" stroke="#6b3f1d" stroke-width="3" stroke-linecap="round" d="M8 58c10-16 22-27 38-39"/>
    </svg>`;

const createLeaf = (color) => {
    const image = new Image();
    image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(leafSvg(color))}`;
    return image;
};

function Fall() {
    const leaves = useMemo(() => [
        createLeaf('#d97706'),
        createLeaf('#dc2626'),
        createLeaf('#eab308'),
        createLeaf('#92400e'),
    ], []);

    return (
        <Snowfall
            images={leaves}
            snowflakeCount={70}
            radius={[8, 18]}
            speed={[0.5, 2]}
            wind={[-1, 2]}
            rotationSpeed={[-2, 2]}
            style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 10,
            }}
        />
    );
}

export default Fall;
