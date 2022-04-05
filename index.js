function receivesAFunction(callback){
    return callback();
};

function returnsANamedFunction(){
    return receivesAFunction;
};

function returnsAnAnonymousFunction(){
    return(()=> console.log("i win"));
};
