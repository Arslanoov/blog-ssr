build:
	cd app && npm run build
up:
	cd app && npm run dev
start:
	cd app && npm run start
lint-js:
	cd app && npm run lint:js
fix-js:
	cd app && npm run lint:js:fix
lint-style:
	cd app && npm run lint:style
fix-style:
	cd app && npm run lint:style:fix

test: test-unit test-e2e
test-unit:
	cd app && npm run test:unit
test-components:
	cd app && npm run test:unit:components
test-mutations:
	cd app && npm run test:unit:store:mutations
test-actions:
	cd app && npm run test:unit:store:actions
test-e2e:
	cd app && npm run test:e2e
