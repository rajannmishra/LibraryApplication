
const hasOwnProperty = Object.prototype.hasOwnProperty;

export const isEmpty =(obj)=>{
    if(obj === undefined) return true;
    if(obj === null) return true;
    if(obj.length > 0) return false;
    if(obj.length ===0 ) return true;

    for(let key in obj){
        if(hasOwnProperty.call(obj,key)) return false;
    }

    return true;
}