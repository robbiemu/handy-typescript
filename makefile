ttsc=node_modules/.bin/ttsc
tsc-alias=node_modules/.bin/tsc-alias


all: build postbuild

build: index.ts
	$(ttsc)

index.ts:
	(cd src && find -E . -type f -name *.ts -not \( -regex '.*(spec|test|mock).*' \) | sed 's/\.[^.]*$$//' | grep -v './index' | awk -f ../export.awk > index.ts)

postbuild:
	rm src/index.ts
	$(tsc-alias) -p tsconfig.json

clean:
	rm src/index.ts
	rm -rf ./dist