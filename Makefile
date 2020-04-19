install:
	cd backend && npm ci
	cd frontend && npm ci

build:
	cd backend && npm run build
	cd frontend && npm run build

lint-frontend:
	cd frontend && npm run lint

.PHONY: test
