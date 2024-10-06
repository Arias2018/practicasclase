window.onload = init;

function init(){
	const map = new ol.Map({	
		view: new ol.View ({
			center: ol.proj.transform([-78.5,-0.2380], 'EPSG:4326', 'EPSG:3857' ),
			zoom: 15,
			minZoom: 10,
			rotation: 3.141592/2*3
			
		}),
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM()
			})
		],
		target:"js-map"
	})
	map.addLayer(ortoIGM);
	const ortoIGM = new ol.layer.Tile({
		source new ol.source.TileWMS({
			url:"https://www.geoportaligm.gob.ec/orto/wms?",
			params:{
				LAYERS:"quito,2019",
				FORMAT:"image/png",
				TRANSPARENT: true
				
					
		},
		attributions:'<a href=https://www.geoportaligm.gob.ec/orto/wms?/a>
		
	
	
	
	
	
	
	
}