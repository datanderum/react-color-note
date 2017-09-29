// function hexToRgbA(hex){
//   var c;
//   if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
//     c= hex.substring(1).split('');
//     if(c.length== 3){
//       c= [c[0], c[0], c[1], c[1], c[2], c[2]];
//     }
//     c= '0x'+c.join('');
//     return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
//   }
//   throw new Error('Bad Hex');
// }
//
// hexToRgbA('#fbafff')

export function hexStringToRgbObj(hexString) {
  hexString = hexString.replace('#', '');

  console.log(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexString));
  console.log(hexString);

  var c;

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexString)) {
    c= hexString.substring(1).split('');

    if (c.length== 3) {
      c= [c[0], c[0], c[1], c[1], c[2], c[2]];
    }

    c= '0x'+c.join('');
    return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
  }
}