var Toast = {};
Toast.install = function (Vue, options) {
    var opt = {
        defaultType:'bottom',
        duration:'2500'
    }
    for(var property in options){
        opt[property] = options[property];
    }
    Vue.prototype.$toast = function(tips,type){

        var curType = type ? type : opt.defaultType;

        if(document.querySelector('.lx-toast')){
            // 如果toast还在，则不再执行
            return;
        }
        var toastTpl = Vue.extend({
            template: '<div class="lx-toast lx-toast-'+ curType +'">' + tips + '</div>'
        });
        var tpl = new toastTpl().$mount().$el;
        document.body.appendChild(tpl);
        setTimeout(function () {
            document.body.removeChild(tpl);
        }, opt.duration)
    };
    ['bottom', 'center', 'top'].forEach(function(type) {
        Vue.prototype.$toast[type] = function(tips) {
            return Vue.prototype.$toast(tips,type)
        }
    });

    Vue.prototype.$loading = function(tips,type) {
        var load = document.querySelector('.lx-load-mark');

        if(type == 'close'){
            load && document.body.removeChild(load);
        }else{
            if(load){
                // 如果loading还在，则不再执行
                return;
            }
            var loadTpl = Vue.extend({
                template: '<div class="lx-load-mark"><div class="lx-load-box"><div class="lx-loading"><div class="loading_leaf loading_leaf_0"></div><div class="loading_leaf loading_leaf_1"></div><div class="loading_leaf loading_leaf_3"></div><div class="loading_leaf loading_leaf_4"></div><div class="loading_leaf loading_leaf_5"></div><div class="loading_leaf loading_leaf_6"></div><div class="loading_leaf loading_leaf_7"></div><div class="loading_leaf loading_leaf_8"></div><div class="loading_leaf loading_leaf_9"></div><div class="loading_leaf loading_leaf_10"></div><div class="loading_leaf loading_leaf_11"></div></div><div class="lx-load-content">'+tips+'</div></div></div>'
            });
            var tpl = new loadTpl().$mount().$el;
            document.body.appendChild(tpl);
        }
    };

    ['open', 'close'].forEach(function(type) {
        Vue.prototype.$loading[type] = function(tips) {
            return Vue.prototype.$loading(tips,type)
        }
    });
}
export  default Toast