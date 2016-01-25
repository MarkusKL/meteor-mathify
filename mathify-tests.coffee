
/// Helper function ///
///
Maps the tests given as arrays

standardTest takes a name of type string and an array of type [[string,string,boolean]]
///

standardTest = (name, tests) ->
    Tinytest.add name, (test) ->
        test.equal Mathify.check(t[0],t[1]), t[2] for t in tests


/// Type test ///
///
The function should return false for every other type than string,
even if the parameters given are the same.
///

standardTest 'Type - Boolean', [
    [true, true, false]
    [false, false, false]
    [true, false, false]
]

standardTest 'Type - Number', [
    [1, 1, false]
    [-1.3, -1.3, false]
    [0.0, 0.0, false]
    [1, 2.4, false]
]

standardTest 'Type - Object', [
    [{a:"a"}, {a:"a"}, false]
    [[3,true], [3,true], false]
    [{b:true,c:[1,2]}, {b:true,c:[1,2]}, false]
    [null, null, false]
]

standardTest 'Type - Undefined', [
    [undefined, undefined, false]
]
