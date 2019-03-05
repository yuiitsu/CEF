/**
 * Created by onlyfu on 2019/03/05.
 */
App.module.extend('background', function() {
    //
    let self = this;

    this.init = function() {
        // todo.
        chrome.browserAction.onClicked.addListener(function(tab) {
            chrome.tabs.sendMessage(tab.id, {
                'method': 'show'
            }, function (response) {
            });
        });
    };
});
