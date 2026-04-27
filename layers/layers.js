var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Centralesdecompresin_1 = new ol.format.GeoJSON();
var features_Centralesdecompresin_1 = format_Centralesdecompresin_1.readFeatures(json_Centralesdecompresin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centralesdecompresin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centralesdecompresin_1.addFeatures(features_Centralesdecompresin_1);
var lyr_Centralesdecompresin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centralesdecompresin_1, 
                style: style_Centralesdecompresin_1,
                popuplayertitle: 'Centrales de compresión',
                interactive: true,
                title: '<img src="styles/legend/Centralesdecompresin_1.png" /> Centrales de compresión'
            });

        var lyr_ESRIBoundariesPlaces_2 = new ol.layer.Tile({
            'title': 'ESRI Boundaries&Places',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_GasoductosintegradosaSISTRANAGAS_3 = new ol.format.GeoJSON();
var features_GasoductosintegradosaSISTRANAGAS_3 = format_GasoductosintegradosaSISTRANAGAS_3.readFeatures(json_GasoductosintegradosaSISTRANAGAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GasoductosintegradosaSISTRANAGAS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GasoductosintegradosaSISTRANAGAS_3.addFeatures(features_GasoductosintegradosaSISTRANAGAS_3);
var lyr_GasoductosintegradosaSISTRANAGAS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GasoductosintegradosaSISTRANAGAS_3, 
                style: style_GasoductosintegradosaSISTRANAGAS_3,
                popuplayertitle: 'Gasoductos integrados a SISTRANAGAS',
                interactive: true,
                title: '<img src="styles/legend/GasoductosintegradosaSISTRANAGAS_3.png" /> Gasoductos integrados a SISTRANAGAS'
            });
var format_GasoductosnointegradosaSISTRANAGAS_4 = new ol.format.GeoJSON();
var features_GasoductosnointegradosaSISTRANAGAS_4 = format_GasoductosnointegradosaSISTRANAGAS_4.readFeatures(json_GasoductosnointegradosaSISTRANAGAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GasoductosnointegradosaSISTRANAGAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GasoductosnointegradosaSISTRANAGAS_4.addFeatures(features_GasoductosnointegradosaSISTRANAGAS_4);
var lyr_GasoductosnointegradosaSISTRANAGAS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GasoductosnointegradosaSISTRANAGAS_4, 
                style: style_GasoductosnointegradosaSISTRANAGAS_4,
                popuplayertitle: 'Gasoductos no integrados a SISTRANAGAS',
                interactive: true,
                title: '<img src="styles/legend/GasoductosnointegradosaSISTRANAGAS_4.png" /> Gasoductos no integrados a SISTRANAGAS'
            });
var format_Gasoductoscancelados_5 = new ol.format.GeoJSON();
var features_Gasoductoscancelados_5 = format_Gasoductoscancelados_5.readFeatures(json_Gasoductoscancelados_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gasoductoscancelados_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gasoductoscancelados_5.addFeatures(features_Gasoductoscancelados_5);
var lyr_Gasoductoscancelados_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gasoductoscancelados_5, 
                style: style_Gasoductoscancelados_5,
                popuplayertitle: 'Gasoductos cancelados',
                interactive: true,
                title: '<img src="styles/legend/Gasoductoscancelados_5.png" /> Gasoductos cancelados'
            });
var format_Gasoductosenconstruccin_6 = new ol.format.GeoJSON();
var features_Gasoductosenconstruccin_6 = format_Gasoductosenconstruccin_6.readFeatures(json_Gasoductosenconstruccin_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gasoductosenconstruccin_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gasoductosenconstruccin_6.addFeatures(features_Gasoductosenconstruccin_6);
var lyr_Gasoductosenconstruccin_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gasoductosenconstruccin_6, 
                style: style_Gasoductosenconstruccin_6,
                popuplayertitle: 'Gasoductos en construcción',
                interactive: true,
                title: '<img src="styles/legend/Gasoductosenconstruccin_6.png" /> Gasoductos en construcción'
            });
var format_Gasoductosenproyecto_7 = new ol.format.GeoJSON();
var features_Gasoductosenproyecto_7 = format_Gasoductosenproyecto_7.readFeatures(json_Gasoductosenproyecto_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gasoductosenproyecto_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gasoductosenproyecto_7.addFeatures(features_Gasoductosenproyecto_7);
var lyr_Gasoductosenproyecto_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gasoductosenproyecto_7, 
                style: style_Gasoductosenproyecto_7,
                popuplayertitle: 'Gasoductos en proyecto',
                interactive: true,
                title: '<img src="styles/legend/Gasoductosenproyecto_7.png" /> Gasoductos en proyecto'
            });
var format_Plantasdelicuefaccindegas_8 = new ol.format.GeoJSON();
var features_Plantasdelicuefaccindegas_8 = format_Plantasdelicuefaccindegas_8.readFeatures(json_Plantasdelicuefaccindegas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plantasdelicuefaccindegas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantasdelicuefaccindegas_8.addFeatures(features_Plantasdelicuefaccindegas_8);
var lyr_Plantasdelicuefaccindegas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plantasdelicuefaccindegas_8, 
                style: style_Plantasdelicuefaccindegas_8,
                popuplayertitle: 'Plantas de licuefacción de gas',
                interactive: true,
                title: '<img src="styles/legend/Plantasdelicuefaccindegas_8.png" /> Plantas de licuefacción de gas'
            });
var format_Ductosdeimportacin_9 = new ol.format.GeoJSON();
var features_Ductosdeimportacin_9 = format_Ductosdeimportacin_9.readFeatures(json_Ductosdeimportacin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ductosdeimportacin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ductosdeimportacin_9.addFeatures(features_Ductosdeimportacin_9);
var lyr_Ductosdeimportacin_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ductosdeimportacin_9, 
                style: style_Ductosdeimportacin_9,
                popuplayertitle: 'Ductos de importación',
                interactive: true,
                title: '<img src="styles/legend/Ductosdeimportacin_9.png" /> Ductos de importación'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_Centralesdecompresin_1.setVisible(true);lyr_ESRIBoundariesPlaces_2.setVisible(true);lyr_GasoductosintegradosaSISTRANAGAS_3.setVisible(true);lyr_GasoductosnointegradosaSISTRANAGAS_4.setVisible(true);lyr_Gasoductoscancelados_5.setVisible(true);lyr_Gasoductosenconstruccin_6.setVisible(true);lyr_Gasoductosenproyecto_7.setVisible(true);lyr_Plantasdelicuefaccindegas_8.setVisible(true);lyr_Ductosdeimportacin_9.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_Centralesdecompresin_1,lyr_ESRIBoundariesPlaces_2,lyr_GasoductosintegradosaSISTRANAGAS_3,lyr_GasoductosnointegradosaSISTRANAGAS_4,lyr_Gasoductoscancelados_5,lyr_Gasoductosenconstruccin_6,lyr_Gasoductosenproyecto_7,lyr_Plantasdelicuefaccindegas_8,lyr_Ductosdeimportacin_9];
lyr_Centralesdecompresin_1.set('fieldAliases', {'estaciones': 'estaciones', });
lyr_GasoductosintegradosaSISTRANAGAS_3.set('fieldAliases', {'ducto': 'Nombre', 'proyecto': 'Proyecto', 'tipo': 'Tipo', 'longitud_k': 'Longitud (km)', 'tramo': 'Tramo', 'permiso_cr': 'Permiso (CRE)', 'inicio_de_': 'Inicio de operaciones', 'zona_tarif': 'Zona tarifaria', 'integrado_': 'integrado_', 'notas': 'Notas', });
lyr_GasoductosnointegradosaSISTRANAGAS_4.set('fieldAliases', {'nombre': 'Nombre', 'proyecto': 'Proyecto', 'tipo': 'Tipo', 'capacidad_': 'Capacidad (mmpcd)', 'inversin_m': 'Inversión', 'desarrolla': 'Desarrollador', 'promotor': 'Promotor (CRE)', 'longitud_k': 'Longitud (km)', 'tramo': 'Tramo', 'permiso_cr': 'Permiso (CRE)', 'fecha_de_i': 'Fecha de inicio', 'zona_tarif': 'Zona tarifaria', 'integrado_': 'integrado_', 'observacio': 'Observaciones', });
lyr_Gasoductoscancelados_5.set('fieldAliases', {'nombre': 'nombre', 'proyecto': 'proyecto', 'tipo': 'tipo', 'capacidad_': 'capacidad_', 'inversin_m': 'inversin_m', 'desarrolla': 'desarrolla', 'promotor': 'promotor', 'longitud_k': 'longitud_k', 'tramo': 'tramo', 'permiso_cr': 'permiso_cr', 'fecha_de_i': 'fecha_de_i', 'zona_tarif': 'zona_tarif', 'integrado_': 'integrado_', 'observacio': 'observacio', });
lyr_Gasoductosenconstruccin_6.set('fieldAliases', {'nombre': 'Nombre', 'proyecto': 'Proyecto', 'tipo': 'Tipo', 'capacidad_': 'Capacidad (mmpcd)', 'inversin_m': 'Inversión', 'desarrolla': 'Desarrollador', 'promotor': 'Promotor en México', 'longitud_k': 'Longitud (km)', 'tramo': 'Tramo', 'permiso_cr': 'Permiso (CRE)', 'fecha_de_i': 'Fecha de inicio', 'zona_tarif': 'Zona tarifaria', 'integrado_': 'integrado_', 'observacio': 'Observaciones', });
lyr_Gasoductosenproyecto_7.set('fieldAliases', {'nombre': 'Nombre', 'proyecto': 'Proyecto', 'tipo': 'tipo', 'capacidad_': 'Capacidad (mmpcd)', 'inversin_m': 'Inversión', 'desarrolla': 'Desarrollador', 'promotor': 'Promotor en México', 'longitud_k': 'Longitud (km)', 'tramo': 'Tramo', 'permiso_cr': 'Permiso (CRE)', 'fecha_de_i': 'Fecha de inicio', 'zona_tarif': 'Zona tarifaria', 'integrado_': 'integrado_', 'observacio': 'Observaciones', });
lyr_Plantasdelicuefaccindegas_8.set('fieldAliases', {'Name': 'Nombre', 'Localidad': 'Localidad', 'Conexi__n': 'Conexión', 'Permisiona': 'Permisionario', 'No__Permis': 'Número de permiso', 'Inicio_Ope': 'Inicio de operaciones', 'Consorcio': 'Consorcio', 'Capacidad_': 'Capacidad (mtpa)', 'Infraestru': 'Infraestructura asociada', 'Notas/cont': 'Notas/contexto', 'Fecha_Oper': 'Fecha_Oper', 'Fecha_Expo': 'Fecha_Expo', 'Estatus': 'Estatus', 'Monto_Inv': 'Monto_Inv', 'Cap_Fase1': 'Cap_Fase1', 'Cap_Fase2': 'Cap_Fase2', 'Cap_Fase3': 'Cap_Fase3', 'Cap_Fase4': 'Cap_Fase4', 'Cap_Fase5': 'Cap_Fase5', 'Permiso_EU': 'Permiso de Estados Unidos', 'Num_Proyec': 'Número de proyecto (CRE)', });
lyr_Ductosdeimportacin_9.set('fieldAliases', {'nombre': 'nombre', 'longitud': 'longitud', 'permisiona': 'permisiona', 'nmero_de_p': 'nmero_de_p', });
lyr_Centralesdecompresin_1.set('fieldImages', {'estaciones': 'TextEdit', });
lyr_GasoductosintegradosaSISTRANAGAS_3.set('fieldImages', {'ducto': 'TextEdit', 'proyecto': 'TextEdit', 'tipo': 'TextEdit', 'longitud_k': 'TextEdit', 'tramo': 'TextEdit', 'permiso_cr': 'TextEdit', 'inicio_de_': 'TextEdit', 'zona_tarif': 'TextEdit', 'integrado_': 'TextEdit', 'notas': 'TextEdit', });
lyr_GasoductosnointegradosaSISTRANAGAS_4.set('fieldImages', {'nombre': 'TextEdit', 'proyecto': 'TextEdit', 'tipo': 'TextEdit', 'capacidad_': 'TextEdit', 'inversin_m': 'TextEdit', 'desarrolla': 'TextEdit', 'promotor': 'TextEdit', 'longitud_k': 'TextEdit', 'tramo': 'TextEdit', 'permiso_cr': 'TextEdit', 'fecha_de_i': 'TextEdit', 'zona_tarif': 'TextEdit', 'integrado_': 'TextEdit', 'observacio': 'TextEdit', });
lyr_Gasoductoscancelados_5.set('fieldImages', {'nombre': 'TextEdit', 'proyecto': 'TextEdit', 'tipo': 'TextEdit', 'capacidad_': 'TextEdit', 'inversin_m': 'TextEdit', 'desarrolla': 'TextEdit', 'promotor': 'TextEdit', 'longitud_k': 'TextEdit', 'tramo': 'TextEdit', 'permiso_cr': 'TextEdit', 'fecha_de_i': 'TextEdit', 'zona_tarif': 'TextEdit', 'integrado_': 'TextEdit', 'observacio': 'TextEdit', });
lyr_Gasoductosenconstruccin_6.set('fieldImages', {'nombre': 'TextEdit', 'proyecto': 'TextEdit', 'tipo': 'TextEdit', 'capacidad_': 'TextEdit', 'inversin_m': 'TextEdit', 'desarrolla': 'TextEdit', 'promotor': 'TextEdit', 'longitud_k': 'TextEdit', 'tramo': 'TextEdit', 'permiso_cr': 'TextEdit', 'fecha_de_i': 'TextEdit', 'zona_tarif': 'TextEdit', 'integrado_': 'TextEdit', 'observacio': 'TextEdit', });
lyr_Gasoductosenproyecto_7.set('fieldImages', {'nombre': 'TextEdit', 'proyecto': 'TextEdit', 'tipo': 'TextEdit', 'capacidad_': 'TextEdit', 'inversin_m': 'TextEdit', 'desarrolla': 'TextEdit', 'promotor': 'TextEdit', 'longitud_k': 'TextEdit', 'tramo': 'TextEdit', 'permiso_cr': 'TextEdit', 'fecha_de_i': 'TextEdit', 'zona_tarif': 'TextEdit', 'integrado_': 'TextEdit', 'observacio': 'TextEdit', });
lyr_Plantasdelicuefaccindegas_8.set('fieldImages', {'Name': 'TextEdit', 'Localidad': 'TextEdit', 'Conexi__n': 'TextEdit', 'Permisiona': 'TextEdit', 'No__Permis': 'TextEdit', 'Inicio_Ope': 'TextEdit', 'Consorcio': 'TextEdit', 'Capacidad_': 'TextEdit', 'Infraestru': 'TextEdit', 'Notas/cont': 'TextEdit', 'Fecha_Oper': 'TextEdit', 'Fecha_Expo': 'TextEdit', 'Estatus': 'TextEdit', 'Monto_Inv': 'TextEdit', 'Cap_Fase1': 'TextEdit', 'Cap_Fase2': 'TextEdit', 'Cap_Fase3': 'TextEdit', 'Cap_Fase4': 'TextEdit', 'Cap_Fase5': 'TextEdit', 'Permiso_EU': 'TextEdit', 'Num_Proyec': 'TextEdit', });
lyr_Ductosdeimportacin_9.set('fieldImages', {'nombre': 'TextEdit', 'longitud': 'TextEdit', 'permisiona': 'TextEdit', 'nmero_de_p': 'TextEdit', });
lyr_Centralesdecompresin_1.set('fieldLabels', {'estaciones': 'inline label - always visible', });
lyr_GasoductosintegradosaSISTRANAGAS_3.set('fieldLabels', {'ducto': 'inline label - always visible', 'proyecto': 'hidden field', 'tipo': 'inline label - always visible', 'longitud_k': 'inline label - always visible', 'tramo': 'inline label - always visible', 'permiso_cr': 'inline label - always visible', 'inicio_de_': 'inline label - always visible', 'zona_tarif': 'inline label - always visible', 'integrado_': 'inline label - always visible', 'notas': 'hidden field', });
lyr_GasoductosnointegradosaSISTRANAGAS_4.set('fieldLabels', {'nombre': 'inline label - always visible', 'proyecto': 'inline label - always visible', 'tipo': 'inline label - always visible', 'capacidad_': 'inline label - always visible', 'inversin_m': 'inline label - always visible', 'desarrolla': 'inline label - always visible', 'promotor': 'inline label - always visible', 'longitud_k': 'inline label - always visible', 'tramo': 'inline label - always visible', 'permiso_cr': 'inline label - always visible', 'fecha_de_i': 'inline label - always visible', 'zona_tarif': 'no label', 'integrado_': 'no label', 'observacio': 'inline label - always visible', });
lyr_Gasoductoscancelados_5.set('fieldLabels', {'nombre': 'inline label - always visible', 'proyecto': 'inline label - always visible', 'tipo': 'inline label - always visible', 'capacidad_': 'inline label - always visible', 'inversin_m': 'inline label - always visible', 'desarrolla': 'inline label - always visible', 'promotor': 'inline label - always visible', 'longitud_k': 'inline label - always visible', 'tramo': 'inline label - always visible', 'permiso_cr': 'inline label - always visible', 'fecha_de_i': 'hidden field', 'zona_tarif': 'hidden field', 'integrado_': 'inline label - always visible', 'observacio': 'inline label - always visible', });
lyr_Gasoductosenconstruccin_6.set('fieldLabels', {'nombre': 'inline label - always visible', 'proyecto': 'inline label - always visible', 'tipo': 'inline label - always visible', 'capacidad_': 'inline label - always visible', 'inversin_m': 'inline label - always visible', 'desarrolla': 'inline label - always visible', 'promotor': 'inline label - always visible', 'longitud_k': 'inline label - always visible', 'tramo': 'inline label - always visible', 'permiso_cr': 'inline label - always visible', 'fecha_de_i': 'inline label - always visible', 'zona_tarif': 'hidden field', 'integrado_': 'hidden field', 'observacio': 'inline label - always visible', });
lyr_Gasoductosenproyecto_7.set('fieldLabels', {'nombre': 'inline label - always visible', 'proyecto': 'inline label - always visible', 'tipo': 'inline label - always visible', 'capacidad_': 'inline label - always visible', 'inversin_m': 'inline label - always visible', 'desarrolla': 'inline label - always visible', 'promotor': 'inline label - always visible', 'longitud_k': 'inline label - always visible', 'tramo': 'inline label - always visible', 'permiso_cr': 'inline label - always visible', 'fecha_de_i': 'inline label - always visible', 'zona_tarif': 'hidden field', 'integrado_': 'hidden field', 'observacio': 'inline label - always visible', });
lyr_Plantasdelicuefaccindegas_8.set('fieldLabels', {'Name': 'inline label - always visible', 'Localidad': 'inline label - always visible', 'Conexi__n': 'inline label - always visible', 'Permisiona': 'inline label - always visible', 'No__Permis': 'inline label - always visible', 'Inicio_Ope': 'inline label - always visible', 'Consorcio': 'inline label - always visible', 'Capacidad_': 'inline label - always visible', 'Infraestru': 'inline label - always visible', 'Notas/cont': 'inline label - always visible', 'Fecha_Oper': 'inline label - always visible', 'Fecha_Expo': 'inline label - always visible', 'Estatus': 'inline label - always visible', 'Monto_Inv': 'inline label - always visible', 'Cap_Fase1': 'hidden field', 'Cap_Fase2': 'hidden field', 'Cap_Fase3': 'hidden field', 'Cap_Fase4': 'hidden field', 'Cap_Fase5': 'hidden field', 'Permiso_EU': 'inline label - always visible', 'Num_Proyec': 'inline label - always visible', });
lyr_Ductosdeimportacin_9.set('fieldLabels', {'nombre': 'inline label - always visible', 'longitud': 'hidden field', 'permisiona': 'inline label - always visible', 'nmero_de_p': 'inline label - always visible', });
lyr_Ductosdeimportacin_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});