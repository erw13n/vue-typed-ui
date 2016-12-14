/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
import {
    Prop
} from "vue-typed"
import * as Vue from "vue"

export abstract class _MenuItemBase extends Vue {

    /**
     * Name of icon to be displayed
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    icon: string

    /**
     * Target URL when menu item clicked. If you are using vue-router then this attribute represents `to` attribute of `router-link` tag.
     * 
     * @type {string | Object}
     */
    @Prop()
    to: string | Object

    /**
     * If set to `true` then `to` attribute will always represents `href` attribute of `a` tag.
     * 
     * @type {boolean}
     */
    @Prop({
        type: Boolean
    })
    preventRouter: boolean

    /**
     * Replace slot with this content
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    content: string

}