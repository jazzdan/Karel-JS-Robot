/* Author: 

*/            
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
                                          value: "function myScript(){return 100;}\n",
                                          path:  "mode",
                                          mode:  "javascript",
                                          theme: "monokai"
                                          });

/*var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true
  });*/
