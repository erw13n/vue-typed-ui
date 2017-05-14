/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
import {
    Prop,
    Virtual,
    Mixin
} from "vue-typed"
import * as Vue from "vue"
export abstract class _FieldsGroupBase extends Virtual < Vue > () {

    /**
     * Field label text
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    label: string

    /**
     * Size of field
     * 
     * @type {number}
     */
    @Prop({
        type: Number
    })
    wide: number

}