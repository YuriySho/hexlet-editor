install:
	npm install

start:
	npx nodos server

build:
	npm run build

lint:
	npx eslint .

test:
	npm test

heroku-deploy:
	git push heroku

heroku-logs:
	heroku logs
