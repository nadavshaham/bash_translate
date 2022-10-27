# bash_translate
translate english to hebrew and vise versa from bash with a simple command  
## prerequisites
1. node
2. npm or yarn
## usage examples (in terminal)
`tra harpoon` <br />
`tra שבשבת
`
## steps
- clone repository
- cd into repository directory
- run command in terminal: `npm i`
- in file ~/.bashrc add function:
`
function tra(){
	node * repository path */bash_translate/translate.js "$1"
}
`
- thats it! , open new terminal and try it
