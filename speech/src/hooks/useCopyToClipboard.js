// import {useState, useEffect} from 'react'
// import copy from 'copy-to-clipboard';

// export default function useCopyToClipboard(time = null){
//     const [isCopied, setCopied] = useState(false)

//     function handleCopy(data){
//       if(typeof data ==='string' || typeof data ==='number'){
//           //copy to clipboard
//           copy( data.toString() )
//           setCopied(true);
//       }else{
//         setCopied(false);
//         // show does not support that format of copy
//         console.error(`Cannot copy typeof ${typeof data} to clipboard, must be a string or number.`)
//       }

//     }

//     useEffect(()=>{
//         let id;
//         if(isCopied && time){
//             id = setTimeout(()=>{
//                 setCopied(false);
//             },time)
//         }
//         return ()=>{
//             clearTimeout(id);
//         }
//     },[isCopied])



//     return [isCopied, handleCopy ]
// }
