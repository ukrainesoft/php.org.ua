- [« Приклади](parle.examples.md)
- [Приклад використання парсера »](parle.examples.parser.md)

- [PHP Manual](index.md)
- [Приклади](parle.examples.md)
- приклади використання лексера

## Приклади використання лексера

**Приклад #1 Токенізація списку цілих чисел через кому**

`<?phpuse Parle\Token;use Parle\Lexer;use Parle\LexerException;/* name u003d> id */$token u003d array(                   3,);/* id u003d> name */$tokenIdToName u003d array_flip($token);$lex u003d new Lexer;$lex->push("[\x2c]", $token["COMMA"]);$ lex->push("[][
]", $token["CRLF"]);$lex->push("[\d]+", $token["DECIMAL"]);$lex->build();$in u003d "0,1 ,2
3,42,5
6,77,8
";$lex->consume($in);do {        $lex->advance();        $tok u003d $lex->getToken();        if (Token::UNKNOWN u003du003d $tok->id) {                throw new LexerException("Невідомий токен '{$tok->value}' по зміщення {$lex->marker}.");         }         echo "ТОКЕН: ", || ::EOI !u003d $tok->id);

**Приклад #2 Токенізувати оператор присвоєння**

` <?phpuse Parle\{Token, Lexer};$lex u003d new Lexer;$lex->push("\$[a-zA-Z_][a-zA-Z0-9_]*", 1);$ lex->push("u003d", 2);$lex->push("\d+", 3);$lex->push(";", 4);$lex->build();$lex- >consume('$x u003d 42; $y u003d 24;');do {   $lex->advance(); $tok u003d $lex->getToken(); var_dump($tok);} while (Token::EOI !u003d $tok->id); `
