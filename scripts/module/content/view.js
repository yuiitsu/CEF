/**
 * CES Content View
 */
App.view.extend('content', function() {

    this.viewExample = function() {
        return `
            <div class="ces-view-example">
                <h1>CES View Example</h1>
                <div>Hi, {{ data['name'] }}</div>
            </div>
        `;
    };
});