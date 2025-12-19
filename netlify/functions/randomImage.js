import images from "./images.json" with { type: "json" };

export async function handler() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const image = images[randomIndex];

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ imageUrl: image })
    };
}