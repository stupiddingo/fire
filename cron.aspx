<%@ Page Language="c#"%>
<%
System.Net.WebClient webClient = new System.Net.WebClient();
webClient.DownloadFile("https://wildfire.cr.usgs.gov/arcgis/rest/services/GeoPerimKML/MapServer/0/query?where=incidentname+%3C+%27I%27&text=&objectIds=&time=&geometry=%7Bxmin%3A+-117.3%2C+ymin%3A+42%2C+xmax%3A+-111%2C+ymax%3A+49%7D+&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=incidentname%2C+state%2C+agency&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=kmz", HttpContext.Current.Server.MapPath("") + "/kmz/temp-perimeter.kmz");
webClient.DownloadFile("https://wildfire.cr.usgs.gov/arcgis/rest/services/GeoPerimKML/MapServer/0/query?where=incidentname+%3E%3D+%27I%27+AND+incidentname+%3C+%27S%27&text=&objectIds=&time=&geometry=%7Bxmin%3A+-117.3%2C+ymin%3A+42%2C+xmax%3A+-111%2C+ymax%3A+49%7D+&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=incidentname%2C+state%2C+agency&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=kmz", HttpContext.Current.Server.MapPath("") + "/kmz/temp-perimeter2.kmz");
webClient.DownloadFile("https://wildfire.cr.usgs.gov/arcgis/rest/services/GeoPerimKML/MapServer/0/query?where=incidentname+%3E%3D+%27S%27&text=&objectIds=&time=&geometry=%7Bxmin%3A+-117.3%2C+ymin%3A+42%2C+xmax%3A+-111%2C+ymax%3A+49%7D+&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=incidentname%2C+state%2C+agency&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=kmz", HttpContext.Current.Server.MapPath("") + "/kmz/temp-perimeter3.kmz");
webClient.DownloadFile("https://fsapps.nwcg.gov/afm/data/kml/conus.kmz", HttpContext.Current.Server.MapPath("") + "/kmz/temp-modis.kmz");
webClient.DownloadFile("https://wildfire.cr.usgs.gov/arcgis/rest/services/GeoPerimKML/MapServer/0/query?where=incidentname+%3C+%27M%27&text=&objectIds=&time=&geometry=%7Bxmin%3A+-117.3%2C+ymin%3A+42%2C+xmax%3A+-111%2C+ymax%3A+49%7D+&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=incidentname%2C+state%2C+agency&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=kmz", HttpContext.Current.Server.MapPath("") + "/kmz/temp-perimeter2.kmz");
webClient.DownloadFile("https://fishandgame.idaho.gov/gis/rest/services/External/InciWeb_FireClosures/MapServer/0/query?where=1+%3D+1&outFields=*&returnGeometry=true&outSR=4326&returnIdsOnly=false&returnCountOnly=false&f=kmz", HttpContext.Current.Server.MapPath("") + "/kmz/temp-closures.kmz");
System.IO.File.Copy(@"C:\Websites\IFWIS_Production\maps\realtime\fire\kmz\temp-perimeter.kmz", @"C:\Websites\IFWIS_Production\maps\realtime\fire\kmz\perimeter.kmz", true);
System.IO.File.Copy(@"C:\Websites\IFWIS_Production\maps\realtime\fire\kmz\temp-perimeter2.kmz", @"C:\Websites\IFWIS_Production\maps\realtime\fire\kmz\perimeter2.kmz", true);
System.IO.File.Copy(@"C:\Websites\IFWIS_Production\maps\realtime\fire\kmz\temp-perimeter3.kmz", @"C:\Websites\IFWIS_Production\maps\realtime\fire\kmz\perimeter3.kmz", true);
System.IO.File.Copy(@"C:\Websites\IFWIS_Production\maps\realtime\fire\kmz\temp-closures.kmz", @"C:\Websites\IFWIS_Production\maps\realtime\fire\kmz\closures.kmz", true);
%>
Done