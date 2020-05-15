install:
	npm install

start:
	npx nodos server -p 5000

build:
	npm run build

lint:
	npx eslint .

test:
	npm test

.PHONY: test
