install:
	cd backend && npm ci
	cd client && npm ci

build:
	cd backend && npm run build
	cd client && npm run build

test:
	cd client && npm test

test-ci:
	cd client && CI=true npm test

.PHONY: test
