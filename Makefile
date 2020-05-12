install:
	npm ci
	cd backend && npm ci
	cd frontend && npm ci

start:
	npx babel-node bin/nodos server -h 0.0.0.0

build:
	cd backend && npm run build
	cd frontend && npm run build

lint-frontend:
	cd frontend && npm run lint

.PHONY: test
