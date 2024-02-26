// export const showsignupform=()=>{
//     document.querySelector('.overlaycontainer').classList.replace(`opacity-0`,`opacity-1`)
//     document.querySelector('.overlaycontainer').classList.replace(`-z-50`,`z-50`)
//     document.querySelector('.overlaysignupform').classList.replace('-top-[150%]','top-[0%]')
// }
export const closesignupform=()=>{
    document.querySelector('.overlaycontainer').classList.replace(`opacity-1`,`opacity-0`)
    document.querySelector('.overlaycontainer').classList.replace(`z-50`,`-z-50`)
    document.querySelector('.overlaysignupform').classList.replace('top-[0%]','-top-[150%]')		
}
export const closetryfreeform=()=>{
    document.querySelector('.overlaycontainer').classList.replace(`opacity-1`,`opacity-0`)
    document.querySelector('.overlaycontainer').classList.replace(`z-50`,`-z-50`)
    document.querySelector('.overlaytryform').classList.replace('top-[0%]','-top-[150%]')		
}