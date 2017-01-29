/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
import {
    Prop,
    Virtual
} from "vue-typed"
import {
    Calendar
} from "../calendar"

export abstract class _DatetimeBase extends Calendar {

    /**
     * Date format
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    format: string

}