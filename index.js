// Split the provided text into chunks of length `chunkLen` with appended `(x/n)` tag.
//
// Where:
//      x = current chunk number 
//      n = total number of chunks

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis accumsan quam, eget venenatis purus. Curabitur ac massa quis sem porta imperdiet vitae eget ipsum. Pellentesque dapibus lacus non viverra fermentum. Cras sodales metus vel quam dictum, ac luctus mauris sollicitudin. Aenean at dolor lobortis, condimentum sapien id, bibendum velit. Nunc in nunc erat. Integer ligula nisi, porttitor mattis venenatis vitae, facilisis vitae justo. Donec tristique sem vel diam tristique, eget venenatis enim faucibus. Fusce urna quam, bibendum vel turpis quis, porta eleifend diam. Cras arcu ex, sagittis ac hendrerit a, venenatis non sapien. Mauris vehicula semper ligula. Fusce vulputate tempus nisi, sit amet rutrum est commodo eu. Ut semper sodales sapien vel maximus. Nulla lacinia convallis ex, eu mollis nibh dapibus eu."

const chunkify = (text, chunkLen, chunkCount) => {
    const tagLength = getTagLength(chunkCount);
    const chunkLength = chunkLen - tagLength;
    const regex = '.{1,' + chunkLength + '}';
    const chunks = text.match(new RegExp(regex, 'g'));
    const maxDigits = (chunks.length + '').length;
    return chunks.map((c, i) => c + tag(i, maxDigits, chunkCount));
}
    
const tag = (i, maxDigits, chunkCount) => `(${format(i+1, maxDigits)}/${chunkCount})`;

const format = (num, len) => {
    let r = '' + num;
    while(r.length < len) {
        r = '0' + r;
    }
    return r;
};

const getTagLength = (chunkCount) => {
    const defaultCharCountPerTag = 3; // '(' + '/' + ')'
    const dynamicCharCountPerTag = (chunkCount + '').length * 2; // for curPage + totalPage
    const tagLength = defaultCharCountPerTag + dynamicCharCountPerTag;
    return tagLength;
}

const getSegCount = (text, chunkLen) => {
    let converged = false;
    let chunkCount, chunkCountLen;
    while(!converged) {
        chunkCount = chunkCount || Math.ceil(text.length / chunkLen);
        chunkCountLen = (chunkCount + '').length;
        chunkCount = Math.ceil((text.length)/(chunkLen-getTagLength(chunkCount)));
        if ((chunkCount + '').length === chunkCountLen) { 
            converged = true;
        }
    }
    return chunkCount;  
}

const solve = (text, chunkLen) => {
    const chunkCount = getSegCount(text, chunkLen);
    const chunks = chunkify(text, chunkLen, chunkCount);
    return chunks;
}

const chunkLen = 25;
const result = solve(text, chunkLen);
console.log(result);
