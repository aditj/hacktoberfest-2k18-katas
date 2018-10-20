export const camelCase = () => {
  // TO IMPLEMENT IN ANOTHER PR
    var strArr = str.split('');
  
    var stri='';
    for(var i in strArr ){
      var n = i.length;
      stri+=i[0].toUpperCase()+ i.slice(1, n);
    }
  return stri;
};
