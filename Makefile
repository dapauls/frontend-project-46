gendiff:
	node bin/gendiff.js

lint:
	npx eslint .
	
install:
	npm ci

test-coverage:
	npm test -- --coverage

test:
	npx -n --experimental-vm-modules jest
