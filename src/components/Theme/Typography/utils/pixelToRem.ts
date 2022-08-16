function pixelToRemConvertor(size:number,htmlFontSize:number,coefficient){
    return `${(size/htmlFontSize)*coefficient}rem`;
}

export default pixelToRemConvertor;