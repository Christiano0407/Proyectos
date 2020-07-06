Array.from(document.querySelectorAll(`.imgBox`)).forEach((e) => {
    const imgs = Array.from(e.querySelectorAll(`img`));
    new hoverEffect({
        parent: e,
        intensity: 0.3,
        image1: img[0].getAttribute(`src`),
        image2: img[1].getAttribute(`src`),
        displacementImage: 'fluid.jpg'
    });
})