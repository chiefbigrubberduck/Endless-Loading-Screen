function doGet(e) {
var html = HtmlService
.createHtmlOutputFromFile('Index')
.setTitle('Endless Loading')
.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
return html;
}
