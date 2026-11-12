var mySqrt = function(x) {
    if(x<2) return x;
    let l=1, r=Math.floor(x/2);
    while(l<=r){
        let mid = Math.floor(l+(r-l)/2);
        let square = mid*mid;
        if(square===x) return mid;
        if(square<x) {l=mid+1;}
        else{ r=mid-1;}
    }
    return Math.floor(r);
};