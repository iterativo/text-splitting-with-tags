// Split the provided text into chunks of length `l` with appended `(x/n)` tag
// signifying the current page `x` of a total of `n` pages.

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis accumsan quam, eget venenatis purus. Curabitur ac massa quis sem porta imperdiet vitae eget ipsum. Pellentesque dapibus lacus non viverra fermentum. Cras sodales metus vel quam dictum, ac luctus mauris sollicitudin. Aenean at dolor lobortis, condimentum sapien id, bibendum velit. Nunc in nunc erat. Integer ligula nisi, porttitor mattis venenatis vitae, facilisis vitae justo. Donec tristique sem vel diam tristique, eget venenatis enim faucibus. Fusce urna quam, bibendum vel turpis quis, porta eleifend diam. Cras arcu ex, sagittis ac hendrerit a, venenatis non sapien. Mauris vehicula semper ligula. Fusce vulputate tempus nisi, sit amet rutrum est commodo eu. Ut semper sodales sapien vel maximus. Nulla lacinia convallis ex, eu mollis nibh dapibus eu."

const chunkify = (text, l) => {
    const chunks = text.match(new RegExp('.{1,' + l + '}', 'g'));
    console.log(chunks);
}

const solve = (text, l) => {
    const segCount = Math.ceil(text.length / l);
    console.log('text.length', text.length);
    console.log('l', l);
    console.log('segCount', segCount);
    chunkify(text, l);
}

solve(text, 25);
// const max = 25;

// "Lorem(1/n)"

// ["", ""]

// const max = 25;
// const ans = [];
// const chars = text.split('');
// let item = '';
// for (var i = 0; i < chars.length; i++) {
//     item += chars[i];
//     if (i > 0 && i % max === 0) {
//         ans.push(item);
//         item = '';
//     } else {
//         if (i === chars.length - 1 && item.length > 0) {
//             ans.push(item);
//             break;
//         }
//     }
// }
// console.log(ans);

// segmentCount = 20 => metadata length = "(01/20)".charCount()
// 7 * 20 = 140 / 25 = + 6
// ans.map(x => console.log(x.length));


// string.length / max => segmentCount

// const calculateSegmentCount = (text, max) => {
//     const fixedCharCount = 3; // "(" + "/" + ")"
//     let segmentCount = text.length / max;
//     console.log('segmentCount', segmentCount);
//     let metadataTagCount = fixedCharCount + (segmentCount + '').length * 2;
//     let extraChars = metadataTagCount * segmentCount;
//     let extraSegments = Math.ceil(extraChars / max);
//     let newTotalSegments = segmentCount + extraSegments;
//     console.log('newTotalSegments', newTotalSegments);
// }

// calculateSegmentCount(text, max);
