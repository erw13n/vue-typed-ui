import { Component } from 'vue-typed'
import * as Vue from 'vue'
import { Base } from '../../base'

@Component({ template: require('./index.html') })
export class FormBasic extends Base {
	firstName: string = 'Budi'
	lastName: string = 'Adiono'

	submit() {
		this.$ui.modal('#message').show()
	}
}