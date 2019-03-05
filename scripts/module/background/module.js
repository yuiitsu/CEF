/**
 * Created by Yuiitsu on 2018/10/23.
 */
App.module.extend('background', function() {
    //
    let self = this,
        article_data = {};

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
