# bash_translate
translate english to hebrew and vise versa from bash with a simple command  

## usage examples
tra harpoon <br />
tra שבשבת

## steps
- clone repository
- cd into repository directory
- run command in termnial: npm i
- in file ~/.bashrc add function:
`
function tra(){
	node *repository path*/bash_translate/translate.js "$1"
}
`
- thats it! , open new terminal and try it
