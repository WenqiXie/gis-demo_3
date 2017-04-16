// 声明地图
var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source:(
                new ol.source.OSM(),
                new ol.source.TileJSON({
                    url: 'https://api.tiles.mapbox.com/v3/mapbox.natural-earth-hypso-bathy.json?secure',
                    crossOrigin: 'anonymous'
                })
            )
        })
    ],
    overlays: [overlay],
    target: 'map',
    controls: ol.control.defaults({
        attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
            collapsible: false
        })
    }),
    view: new ol.View({
        center: [0, 0],
        zoom: 2
    })
});
