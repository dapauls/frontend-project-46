gendiff:
	node bin/gendiff.js

lint:
	npx eslint .
	
install:
	npm ci

test-coverage:
	npm test -- --coverage