/**
 * Created by Yuiitsu on 2018/10/23.
 */
App.module.extend('content', function() {
    let self = this;
    //
    this.init = function() {
        // todo.
        chrome.extension.onMessage.addListener(function(request, _, response) {
            let method = request.method;
            if (self.hasOwnProperty(method)) {
                self[method]();
            } else {
                self.log('method '+ method +' not exist.');
            }
            response('');
        });
    };

    this.show = function() {
        if ($('.ces-view-example').length === 0) {
            this.view.append('content', 'viewExample', {name: 'Guest'}, $('body'));
        }
    };
});

