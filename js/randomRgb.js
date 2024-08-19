function changeColor() {
    let randomColor = randomColorGenerate();
    console.log(randomColor);
    // let changeBodyColor = document.getElementsByTagName('body');
    document.body.style.backgroundColor = randomColor;

}

function randomColorGenerate() {

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    // console.log(red, green, blue);
    return `rgb(${red},${green},${blue})`;

    /* let colors = ['red', 'black', 'green', 'yellow', 'cyan', 'gray', 'gold', 'orange'];
    let random = Math.floor(Math.random() * colors.length);
    // console.log(random[colors]);
    // // return random;
    let getRandomColor = colors[random];
    // console.log(getRandomColor);
    return getRandomColor; */
}
// randomColorGenerate();
