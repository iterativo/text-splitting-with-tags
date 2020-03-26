// Split the provided text into chunks of length `l` with appended `(x/n)` tag
// signifying the current page `x` of a total of `n` pages.

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis accumsan quam, eget venenatis purus. Curabitur ac massa quis sem porta imperdiet vitae eget ipsum. Pellentesque dapibus lacus non viverra fermentum. Cras sodales metus vel quam dictum, ac luctus mauris sollicitudin. Aenean at dolor lobortis, condimentum sapien id, bibendum velit. Nunc in nunc erat. Integer ligula nisi, porttitor mattis venenatis vitae, facilisis vitae justo. Donec tristique sem vel diam tristique, eget venenatis enim faucibus. Fusce urna quam, bibendum vel turpis quis, porta eleifend diam. Cras arcu ex, sagittis ac hendrerit a, venenatis non sapien. Mauris vehicula semper ligula. Fusce vulputate tempus nisi, sit amet rutrum est commodo eu. Ut semper sodales sapien vel maximus. Nulla lacinia convallis ex, eu mollis nibh dapibus eu."

const chunkify = (text, l, segCount) => {
    const tagLength = getTagLength(segCount);
    const segLength = l - tagLength + 1;
    const regex = '.{1,' + segLength + '}';
    const chunks = text.match(new RegExp(regex, 'g'));
    return chunks.map((c, i) => c + tag(i, segCount));
}
    
const tag = (i, segCount) => `(${i}/${segCount})`;

const getTagLength = (segCount) => {
    const defaultCharCountPerTag = 3; // '(' + '/' + ')'
    const dynamicCharCountPerTag = (segCount + '').length * 2; // for curPage + totalPage
    const tagLength = defaultCharCountPerTag + dynamicCharCountPerTag;
    return tagLength;
}

const countExtraChunkTagChars = (segCount) => {
    const extraChunkTagChars = getTagLength() * segCount;
    return extraChunkTagChars;
}

const getSegCount = (textLength, l) => {
    let segCount = Math.ceil(text.length / l);
    const extraChunkTagChars = countExtraChunkTagChars(segCount);
    segCount = Math.ceil((text.length + extraChunkTagChars)/l);   
    return segCount;  
}

const solve = (text, l) => {
    const segCount = getSegCount(text.length, l);
    const chunks = chunkify(text, l, segCount);
    console.log('chunks', chunks);
}

solve(text, 25);
