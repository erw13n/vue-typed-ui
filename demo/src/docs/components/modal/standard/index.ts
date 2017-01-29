import { Options, Virtual } from 'vue-typed';
import * as Vue from 'vue'

@Options({
	template: require('./view.pug')()
})
export class Modal extends Virtual<Vue>()  {
	show() {
		this.$ui.modal('#modal').show()
	}

	approved(e) {
		console.log('approved', e, this);

		alert('Yes! Approved!');
	}

	denied(e) {
		console.log('denied', e, this);
		
		alert('Oh no! Don\'t deny me please...');
		
		e.result= false;
		return false;
	}
}