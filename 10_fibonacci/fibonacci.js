const fibonacci = function(a) {
    let intReq = parseInt(a);
    const fibSeq = [0, 1];
    if (intReq < 0){
        return "OOPS"
    } else if (intReq > 0){
        for (let i = 1; i < intReq; i++) {
        fibSeq.push(fibSeq[fibSeq.length-1] + fibSeq[fibSeq.length-2]);
    }
    return fibSeq [fibSeq.length - 1];
    } else {
        return fibSeq[0];
    }
    
    
};

// Do not edit below this line
module.exports = fibonacci;
