TTSC=node_modules/.bin/ttsc
TALIAS=node_modules/.bin/tsc-alias


all: build postbuild

build: index.ts
	$(TTSC)

index.ts:
	(cd src && find  . -type f -name *.ts -not \( -regex '.*(spec|test|mock).*' \) | sed 's/\.[^.]*$$//' | grep -v './index' | awk -f ../export.awk > index.ts)

postbuild:
	rm src/index.ts
	$(TALIAS) -p tsconfig.json

clean:
	rm src/index.ts
	rm -rf ./dist