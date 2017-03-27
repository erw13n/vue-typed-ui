/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
import {
    Prop,
    Virtual,
    Mixin
} from "vue-typed"
import * as Vue from "vue"
export abstract class _AccordionItemBase extends Virtual < Vue > () {

    /**
     * Accordion title
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    title: string

    /**
     * Set accordion to active
     * 
     * @type {boolean}
     */
    @Prop({
        type: Boolean
    })
    active: boolean

}