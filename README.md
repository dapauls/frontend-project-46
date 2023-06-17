# GENERATOR OF DIFFERENCES

### Hexlet tests and linter status:
[![Actions Status](https://github.com/dapauls/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/dapauls/frontend-project-46/actions)

### Maintainability status:
[![Maintainability](https://api.codeclimate.com/v1/badges/faa828029aa1aa74545a/maintainability)](https://codeclimate.com/github/dapauls/frontend-project-46/maintainability)

### Test coverage status:
[![Test Coverage](https://api.codeclimate.com/v1/badges/faa828029aa1aa74545a/test_coverage)](https://codeclimate.com/github/dapauls/frontend-project-46/test_coverage)

### Linter status:
[![Linter](https://github.com/dapauls/frontend-project-46/actions/workflows/linter.yml/badge.svg)](https://github.com/dapauls/frontend-project-46/actions/workflows/linter.yml)

----------------------------------

## Project description
The program allows you to find the differences between two files in JSON and YAML and output it in several formats.
<br/>
<br/>

---

## Installing the programm:
### Requirements: 
`node.js`

<br/>

### Installation
```
git clone git@github.com:dapauls/frontend-project-46.git
cd frontend-project-46
make install
sudo npm link
```

### Run
```
gendiff <file1> <file2> --format <type>
```
----------------------------------

## Help and version flags
`gendiff -h`
<br/>

`gendiff -V`
<br/>
<br/>
[![asciicast](https://asciinema.org/a/iQcxF7CHVtkucUnFlRjxQ3XIc.svg)](https://asciinema.org/a/iQcxF7CHVtkucUnFlRjxQ3XIc)

------------------------------------

## JSON files in stylish format (default)
`gendiff file1.json file2.json`
<br/>
<br/>
[![asciicast](https://asciinema.org/a/2JEODeKuLORj6EOssC2jXwdIZ.svg)](https://asciinema.org/a/2JEODeKuLORj6EOssC2jXwdIZ)

-------------------------------------

## YML files in plain format
`gendiff file1.yml file2.yml --format plain`
<br/>
<br/>
[![asciicast](https://asciinema.org/a/AwSctjJu080QmkMOFWgn3RlcP.svg)](https://asciinema.org/a/AwSctjJu080QmkMOFWgn3RlcP)

---------------------------------------

## YAML files in JSON format
`gendiff file1.yaml file2.yaml --format json`
<br/>
<br/>
[![asciicast](https://asciinema.org/a/0F80vEUUXVeKIYheoWRyWFZR5.svg)](https://asciinema.org/a/0F80vEUUXVeKIYheoWRyWFZR5)

----------------------------------------


