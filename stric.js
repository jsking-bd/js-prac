function strict() {

    // Function-level strict mode syntax
    'use strict';
  
    function nested() { console.log('Javascript on GeeksforGeeks'); }
  
    console.log("strict mode function!  " + nested());
  }
  function notStrict() { console.log("non strict function"); }

  strict()
  notStrict()