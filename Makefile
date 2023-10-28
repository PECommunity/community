help:
	@echo "build 	Collect all the markdown files into site"
	@echo "lint 	Run all linter for markdown and typescript files"
	@echo "fmt		Re-format all the markdown and typescript files"

build:
	@echo "Building site"
	@rm -rf site/artwork && cp -rf artwork site/
	@rm -rf articles && cp -rf articles site/pages/articles
	@rm -rf events && cp -rf events site/pages/events
