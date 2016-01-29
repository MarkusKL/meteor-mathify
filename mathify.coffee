
/// string -> string -> boolean ///
check = (expr1, expr2) ->
    t1 = makeTree(expr1)
    t2 = makeTree(expr2)
    compareTrees(t1,t2)


/// string -> tree ///
makeTree = (str) -> {}


/// tree -> tree -> boolean ///
compareTrees = (t1, t2) ->
    true


/// Exported functions ///
Mathify.check = check
