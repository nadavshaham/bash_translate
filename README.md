# bash_translate
translate english to hebrew and vise versa from bash with a simple command  
## prerequisites
1. supported OS's: MacOS , Linux
2. node installed
3. npm or yarn
## usage examples (in terminal)
`tra harpoon` <br />
`tra שבשבת`<br />
`tra a wise man` <br />
`tra אני אוהב שוואמרה`
## steps
- clone repository
- cd into repository directory and run the next command in terminal: `npm i`
- in file ~/.bashrc add function:
`
function tra(){
	node **local_path_to_repo**/bash_translate/translate.js "$1"
}
function תרגם(){
	tra "$@"
}

`
- thats it, open new terminal and try it
