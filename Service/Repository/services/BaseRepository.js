const 
  path = require('path'), //The path module provides utilities for working with file and directory paths
  fs = require('fs'), //This module allows to work with the file system: read and write files back       
  xml2js = require('xml2js'), //This module does XML <-> JSON conversion
  xmlParse = require('xslt-processor').xmlParse, //This module allows to work with XML files
  xsltProcess = require('xslt-processor').xsltProcess, //The same module allows us to uitlise XSL Transformations

  path_xml = "..\\xml\\", 
  path_xsl = "..\\xsl\\";
  
// Function to read in XML file and convert it to JSON
function XMLtoJSON(filename) { 
  var file = GetXML(filename);    
  return xml2js.parseStringPromise(file);
}
  
//Function to convert JSON to XML and save it
function JSONtoXML(filename, obj, result) {
  var filepath = path.normalize(path.join(__dirname, path_xml + filename + ".xml"));
  var builder = new xml2js.Builder();
  var xml = builder.buildObject(obj);
  fs.unlinkSync(filepath);
  fs.writeFile(filepath, xml, result);
}

function GetXML(filename) {
  var filepath = path.normalize(path.join(__dirname, path_xml + filename + ".xml"));
  return fs.readFileSync(filepath, 'utf8');
}

function GetXSL(filename) {
  var filepath = path.normalize(path.join(__dirname, path_xsl + filename + ".xsl"));
  return fs.readFileSync(filepath, 'utf8');
}

function TransformerXSLT(filename, filenameXSL) {
  let xml = GetXML(filename),
      xsl = GetXSL(filenameXSL);

  let doc = xmlParse(xml), 
      stylesheet = xmlParse(xsl);

  let result = xsltProcess(doc, stylesheet);

  return result.toString();
}

module.exports = { XMLtoJSON,  JSONtoXML, GetXML, GetXSL, TransformerXSLT };
