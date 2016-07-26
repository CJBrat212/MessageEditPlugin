//META{"name":"testPlugin"}*//

var testPlugin = function () {};

testPlugin.prototype.start = function () {

};

testPlugin.prototype.load = function () {

};

testPlugin.prototype.unload = function () {}
;

testPlugin.prototype.stop = function () {

};

testPlugin.prototype.onMessage = function () {
    //called when a message is received
};

testPlugin.prototype.onSwitch = function () {
    //called when a server or channel is switched
};

testPlugin.prototype.observer = function (e) {
    //raw MutationObserver event for each mutation
};

testPlugin.prototype.getSettingsPanel = function () {
    return "<h3>Settings Panel</h3>";
};

testPlugin.prototype.getName = function () {
    return "Message Spoofer";
};

testPlugin.prototype.getDescription = function () {
    return "A plugin used to spoof messages of others.";
};

testPlugin.prototype.getVersion = function () {
    return "0.0.1";
};

testPlugin.prototype.getAuthor = function () {
    return "CJBrat212";
};
