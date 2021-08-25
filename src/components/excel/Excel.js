import {$} from "@core/dom";

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.compnents = options.components || []
    }

    getRoot() {
        const $root = $.create('div','excel')

          this.compnents =  this.compnents.map(Component=>{
            const $el = $.create('div',Component.className)
            const component = new Component($el)
            $el.html(component.toHtml())
            $root.append($el)
              return component
        })

        return $root
    }

    render() {
        this.$el.append(this.getRoot())
        this.compnents.forEach(component=>component.init())
    }
}