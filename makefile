TTSC=node_modules/.bin/ttsc
TALIAS=node_modules/.bin/tsc-alias
TMP_INDEX=src/index.ts
DIST=dist
EGREP=egrep

ifeq ($(OS),Windows_NT)
	echo 'try changing EGREP to grep'
else
  UNAME_S := $(shell uname -s)
	ifeq ($(UNAME_S),Linux)
		EGREP=grep --extended-regexp
	endif
	ifeq ($(UNAME_S),Darwin)
		EGREP=grep -E
  endif
endif


all: build postbuild

build: index.ts
	$(TTSC)

index.ts:
	(cd src && find . -type f -name *.ts | sed 's/\.[^.]*$$//' | $(EGREP) -v "\./index|(spec|test|mock)s?" | awk -f ../export.awk > index.ts)

postbuild:
	rm $(TMP_INDEX)
	$(TALIAS) -p tsconfig.json

clean:
ifneq ("$(wildcard $(DIST))","")
	rm -rd ./dist
endif
ifneq ("$(wildcard $(TMP_INDEX))","")
	rm $(TMP_INDEX)
endif