# Mathify #
A meteor package for mathematical expression checking.

Use the `Mathify.check` function to check whether two expressions are the same.
Formally, the function has the type `string -> string -> boolean`,
but as javascript is an untyped language,
the function will just return false given anything other than strings.

## Testing ##
Run tests with
```
meteor test-packages ./
```
Go to `localhost:3000` in a browser
