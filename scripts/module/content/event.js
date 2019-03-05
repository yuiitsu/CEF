/**
 * CES Content Event
 * Created by Yuiitsu on 2018/10/24.
 */
App.event.extend('content', function() {

    let self = this;

    this.event = {
        listenExample: function() {
            $('body').on('click', function() {
                self.module.content.show();
            });
        }
    }
});
