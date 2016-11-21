import { Component } from 'vue-typed';
import { Base } from '../base'
import * as Vue from 'vue'

@Component({
	template: require('./index.html')
})
export class Checkbox extends Base  {

	checked: boolean = true
	enabledToggle = false;
	checkedVal: string = "yes"
	checkedNames: Array<string> = ['John']

	get checkedStatus() {
		return this.checked ? 'Uncheck me please!' : 'Check me please!'
	}

	get enabledToggleText() {
		return this.enabledToggle ? 'Disable me!' : 'Enable me!'
	} 

	get enabledToggleStatus() {
		return this.enabledToggle ? "I'm enable :)" : "I'm disable :("
	}

	checkAllNames() {
		Vue.set(this, 'checkedNames', ['Jack', 'John', 'Mike'])		 
	}

	clearAllNames() {
		Vue.set(this, 'checkedNames', [])		 
	}
	
}