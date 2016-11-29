import * as Vue from 'vue'
import { Component, Prop } from 'vue-typed';
import { Util } from '../../../utils';
import { VueTypedUI } from '../../../index'
import { _TreeBase } from './_base';


@Component()
export class Tree extends _TreeBase {

	render(ch) {

		let self = this
		let content_prop = this.content
		let children_prop = this.children
		let html_content = this.htmlContent
		let is_html = this.html

		function buildContent() {
			if (is_html) {
				let html = self.htmlContent || self.model[content_prop]
				let comp = Vue.compile(html)

				return ch({
					render: comp.render,
					staticRenderFns: comp.staticRenderFns,
					data: function () {
						return { model: self.model }
					}
				}, {
						on: {
							'node-click': function (m) {
								self.$emit('node-click', m)
							}
						}
					});

			} else if (self.content) {
				return self.model[content_prop];
			}
		}

		let children = [buildContent()]
		let events = this['_events']

		if (this.model[this.children]) {
			children.push(ch(this.parentTag, this.model[this.children].map(function (c) {
				return ch(VueTypedUI.prefix + '-tree', {
					attrs: { model: c, content: content_prop, children: children_prop, html: is_html, htmlContent: html_content, parentTag: self.parentTag, childTag: self.childTag },
					on: events
				})
			})))

		}


		return ch(this.childTag, {
			on: {
				click: function (e) {
					if (e.target == e.currentTarget) {
						self.$emit('node-click', self.model)
					}
				}
			}
		}, children)
	}

	mounted() {
		if (this.$el.parentElement.tagName !== this.parentTag.toUpperCase()) {
			$(this.$el).wrap('<' + this.parentTag + '/>')
		}
	}


}