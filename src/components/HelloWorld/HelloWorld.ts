/**
 * HelloWorld
 */

import Vue from 'components/base'
import { Component, Prop } from 'vue-property-decorator'
import template from './HelloWorld.vue'

import { State } from 'store/modules/demo'

@Component({
    name: 'HelloWorld',
    mixins: [template]
})
export default class HelloWorld extends Vue {
    //#region datas ******************************/
    //#endregion datas ***************************/

    //#region props ******************************/
    @Prop({ default: 'World' })
    protected name: string
    //#endregion props ***************************/

    //#region vuex *******************************/
    @State('name') protected nameFromStore: string
    //#endregion vuex ****************************/

    //#region computed ***************************/
    //#endregion computed ************************/

    //#region watchers ***************************/
    //#endregion watchers ************************/

    //#region life cycle *************************/
    protected created() {}
    //#endregion life cycle **********************/

    //#region hooks ******************************/
    //#endregion hooks ***************************/

    //#region event handler **********************/
    //#endregion event handler *******************/

    //#region methods ****************************/
    //#endregion methods *************************/
}
