default:
	@echo "No default task"

lint:
	@./node_modules/.bin/xo --env=node --env=mocha

test:
	@./node_modules/.bin/mocha

.PHONY: test lint
