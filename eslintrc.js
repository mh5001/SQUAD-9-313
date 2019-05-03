module.exports = {
	extends: [
		'airbnb-base',
		// Import {} syntax plugin https://www.npmjs.com/package/eslint-plugin-import
		'plugin:import/errors',
		'plugin:import/warnings',
	],

	env: {
		node: true,
		mocha: true,
	},

	plugins: [
		'filenames',
		'mocha',
	],

	rules: {
		// Filenames should be camelCase, possible suffix: .test
		'filenames/match-regex': [2, '^([a-z0-9]+)([A-Z][a-z0-9]+)*(\\.test)*$', true],
		// Match the file name against the default exported value in the module
		'filenames/match-exported': 2,
		// Having a bunch of index.js files can have negative influence on developer experience, e.g. when opening files by name. When enabling this rule. index.js files will always be considered a problem.
		'filenames/no-index': 2,
		// Use tabs, not spaces, and in switch statements the case statement should indent again (the default is to be level with the switch)
		indent: ['error', 'tab', { SwitchCase: 1 }],
		// If you want to put a blank line at the beginning or end of a block, knock yourself out
		'padded-blocks': ['off'],
		// We set indent to require tabse
		'no-tabs': ['off'],
		// Seriously, who cares if there's a blank line at the end of the file or not?
		'eol-last': ['off'],
		// Sometimes having a long single line makes sense, this also seems buggy and inconsistent, so we ignore it
		'max-len': ['off'],
		// Webstorm repeatedly tries to add it for us. it's easier not to fight it, even if it's not required.
		strict: ['off'],
		// When setting the property of an object, you can specify the name even if it's unnecessary (ie: { foo: foo })
		'object-shorthand': ['off'],
		// Unused vars are an error, except for function arguments. Particularly with callbacks we may not use all the args, but we still like knowing they're available
		'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
		// You don't have to use operator assignment if you don't want to
		'operator-assignment': ['warn'],
		// We want else to be on the same line as the closing } of an if statement
		'brace-style': ['error', '1tbs'],
		// Warn about overly complex code that you may want to refactor
		complexity: ['warn', 15],
		// It's possible that implicit coercion is not what you intended. webstorm warns about it, so should we
		'no-implicit-coercion': ['warn'],
		// If you're using 'this' somewhere that isn't a class you're probably doing something wrong
		'no-invalid-this': ['error'],
		// If you're not modifying the variable used in a loop condition, you've probably done something wrong...
		'no-unmodified-loop-condition': ['warn'],
		// Don't use .call or .apply when you don't need to
		'no-useless-call': ['warn'],
		// We want to slap you if you don't update your jsdoc, but not necessarily break one of your fingers
		'valid-jsdoc': ['warn'],
		// Forgetting to return after calling a callback is an easy mistake to make, so we'll warn you if you are
		'callback-return': ['warn'],
		// Nested dependencies via scaffold are not in project package.json
		'import/no-extraneous-dependencies': ['off'],
		// We want to enforce consistency but give freedom in how we wrap our function calls
		'function-paren-newline': ['error', 'consistent'],
		// Allow param prop reassign
		'no-param-reassign': ['error', { props: false }],
	},
};