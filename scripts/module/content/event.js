/**
 * SpinXS Content Event
 * Created by Yuiitsu on 2018/10/24.
 */
App.event.extend('content', function() {

    let self = this;

    this.event = {
        linstenExample: function() {
            $('body').on('click', function() {
                self.module.content.show();
            });
        }
    }
});
