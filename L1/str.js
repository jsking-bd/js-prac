let str = 'I am Imtiaz " double quote " ';

/* 
\b: backspace (U+0008 BACKSPACE)
\f: form feed (U+000C FORM FEED)
\n: line feed (U+000A LINE FEED)
\r: carriage return (U+000D CARRIAGE RETURN)
\t: horizontal tab (U+0009 CHARACTER TABULATION)
\v: vertical tab (U+000B LINE TABULATION)
\0: null character (U+0000 NULL) (only if the next character is not a decimal digit; else it’s an octal escape sequence)
\': single quote (U+0027 APOSTROPHE)
\": double quote (U+0022 QUOTATION MARK)
\\: backslash (U+005C REVERSE SOLIDUS)
*/
// indexOf() for Position
console.log("str first position - ", str.indexOf("Imtiaz"));
console.log("str last position - ", str.lastIndexOf("Imtiaz"));
