import Parse from "parse/node";

// Adicione este log para ver o que aparece no terminal
console.log("DEBUG - APP ID:", process.env.NEXT_PUBLIC_PARSE_APP_ID);
console.log("DEBUG - JS KEY:", process.env.NEXT_PUBLIC_PARSE_JS_KEY);

Parse.initialize(
  process.env.NEXT_PUBLIC_PARSE_APP_ID,
  process.env.NEXT_PUBLIC_PARSE_JS_KEY
);

Parse.serverURL = "https://parseapi.back4app.com/";

export default Parse;