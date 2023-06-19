const btn = document.querySelector('.btn')

const pickColor = async () => {

    const eyeDropper = new EyeDropper();
    const  {sRGBHex} = await eyeDropper.open()
    document.body.style.backgroundColor = sRGBHex
    console.log(sRGBHex);
}

btn.addEventListener("click", pickColor)