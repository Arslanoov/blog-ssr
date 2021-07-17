build:
	cd app && npm run build
up:
	cd app && npm run dev
start:
	cd app && npm run start
lint-js:
	cd app && npm run lint:js:fix
lint-style:
	cd app && npm run lint:style

test: test-unit test-e2e
test-unit:
	cd app && npm run test:unit
test-e2e:
	cd app && npm run test:e2e
