// 缩小功能键
var zoomOut = document.querySelector("#id-button-zoomOut")
bindEvent(zoomOut, 'click', function() {
    var view = map.getView();
    var zoom = view.getZoom();
    view.setZoom(zoom - 1);
})
// zoomOut.onclick = function() {
//     var view = map.getView();
//     var zoom = view.getZoom();
//     view.setZoom(zoom - 1);
// };

// 放大功能键
var zoomIn = document.querySelector("#id-button-zoomIn")
bindEvent(zoomIn, 'click', function() {
    var view = map.getView();
    var zoom = view.getZoom();
    view.setZoom(zoom + 1);
})
// zoomIn.onclick = function() {
//     var view = map.getView();
//     var zoom = view.getZoom();
//     view.setZoom(zoom + 1);
// };
