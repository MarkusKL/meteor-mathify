
/// string -> string -> boolean ///
check = function(expr1, expr2) {
    if (typeof expr1 !== "string" || typeof expr2 !== "string")
        return false;
    t1 = makeTree(expr1);
    t2 = makeTree(expr2);
    return compareTrees(t1,t2);
}

/// expression -> tree ///
makeTree = function(str) {
    return {};
}


/// tree -> tree -> boolean ///
compareTrees = function(t1,t2) {
    return true;
}

/// operator -> expression -> {bef: string, aft: string} ///
/// Returns undefined if there is no such operator ///
splitAtOperator = function (op, expr){

}


/// Exported functions ///
Mathify = {};
Mathify.check = check
