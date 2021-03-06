// These rules relate to variable declarations: http://eslint.org/docs/rules/#variables
module.exports = {
    rules: {
        // disallow deleting variables
        "no-delete-var": "error",
        
        // disallow labels that share a name with a variable
        "no-label-var": "error",

        // disallow variable declarations from shadowing variables declared in the outer scope
        "no-shadow-restricted-names": "error",
        
        // disallow initializing variables to undefined
        "no-undef-init": "error",

        // disallow the use of undeclared variables unless mentioned in /*global */ comments
        "no-undef": "error",

        // disallow the use of undefined as an identifier
        "no-undefined": "error",

        // disallow unused variables
        // TODO: needs to be restored to an error
        "no-unused-vars": ["warn", { vars: "local", args: "after-used" }],

        // disallow the use of variables before they are defined
        // TODO: our existing style goes against this
        "no-use-before-define": "off"
    }
};
