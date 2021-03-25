var nJq = $ = function (selector,context){
    _njq = {
        selector:null,
        init : function (selector,context){
            this.selector = selector;
            if(typeof selector == 'string'){
                if(this.get(selector,document).length > 0){
                    this._element = this.get(selector,document);
                }
                if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
                    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
                    match = rquickExpr.exec( selector );
                }
                // if(this.get(this._content,document).length > 0){
                //     return this.get(this._content,document);
                // }
            }else{
                if(!(selector instanceof $)){
                    this._element = selector;
                }
                // if((selector instanceof HTMLElement)){
                //     this._element = selector;
                // }
            }
            // console.log(selector,' selector');
            // console.log(this,' this');
            return this;
        },
        on : function (elem,eventName,handler){
            document.addEventListener(eventName, function(e) {
                // loop parent nodes from the target to the delegation node
                for (var target = e.target; target && target != this; target = target.parentNode) {
                    if (target.matches(elem)) {
                        handler.call(target, e);
                        break;
                    }
                }
            }, false);
        },
        create: function (elementname){
            return document.createElement(elementname);
        },
        get: function (elementname,_element = null){
            if(_element == null){
                _element = this._element;
            }
            return _element.querySelectorAll(elementname);
        },
        find: function (elementname,_element = null){
            return nJq(this.get(elementname,_element));
        },
        parent: function (){
            return this._element.parentNode;
        },
        addClass: function (classname){
            return this._element.classList.add(classname);
        },
        removeClass: function (classname){
            return this._element.classList.remove(classname);
        },
        before: function (element){
            var prev = __parent(this._element);
            prev.insertBefore(element,this._element);
        },
        after: function (elem){
            this._element.insertAdjacentElement('afterend',elem);
        },
        each: function (items,callback){
            items.forEach(function(el,ind){
                callback.call(el,ind);
            })
        },
        attr: function (attrName,attrValue){
            this._element.setAttribute(attrName,attrValue);
        },
        html: function (html){
            if(this._element.length){

            }
            this._element.innerHTML = html;
        },
        append: function (el){
            this._element.appendChild(el);
        },
        remove: function (el){
            this._element.appendChild(el);
        }
    }
    return _njq.init(selector,context);
}
