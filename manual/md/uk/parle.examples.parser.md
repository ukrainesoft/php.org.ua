- [« Приклади використання лексера](parle.examples.lexer.md)
- [Parle\Lexer »](class.parle-lexer.md)

- [PHP Manual](index.md)
- [Приклади](parle.examples.md)
- приклад використання парсера

## Приклад використання парсера

**Приклад #1 Простий калькулятор**

` <?phpuse Parle\{Parser, ParserException, Lexer, Token};$p u003d new Parser;$p->token("INTEGER");$p->left("'+' '-' '*' ' /'");$p->push("start", "exp");$prod_add u003d $p->push("exp", "exp '+' exp");$prod_sub u003d $p->push ("exp", "exp '-' exp");$prod_mul u003d $p->push("exp", "exp '*' exp"); exp '/' exp");$p->push("exp", "INTEGER"); /* Індекс виробництва не використовується. */$p->build();$lex u003d new Lexer;$lex->push("[+]", $p->tokenId("'+'"));$lex->push("[ -]", $p->tokenId("'-'"));$lex->push("[*]", $p->tokenId("'*'"));$lex->push( "[/]", $p->tokenId("'/'"));$lex->push("\d+", $p->tokenId("INTEGER"));$lex->push(" \s+", Token::SKIP);$lex->build();$exp u003d array(    "1 + 1",    "33 / 10",    "100 * 45", | ($exp as $in) {    if (!$p->validate($in, $lex)) {         throw new ParserException("Не удалося перевірити введення"); }   $p->consume($in, $lex); while (Parser::ACTION_ERROR !u003d $p->action && Parser::ACTION_ACCEPT !u003d $p->action) {        switch ($p->action) {            case Parser::ACTION_ERROR:                throw new ParserException("Parser error" ); break; case Parser::ACTION_SHIFT:                                             case Parser::ACTION_REDUCE:                switch ($p->reduceId) {                    case $prod_add:                        $l u003d $p->sigil(0); $r u003d $p->sigil(2); echo "$l + $r u003d " . ($l + $r) . "
";                        break;                    case $prod_sub:                        $l u003d $p->sigil(0);                        $r u003d $p->sigil(2);                        echo "$l - $r u003d " . ($l - $r) . "
";                        break;                    case $prod_mul:                        $l u003d $p->sigil(0);                        $r u003d $p->sigil(2);                        echo "$l * $r u003d " . ($l * $r) . "
";                        break;                    case $prod_div:                        $l u003d $p->sigil(0);                        $r u003d $p->sigil(2);                    echo "$l / $r u003d " . ($l / $r) . "
";                        break;            }            break;        }        $p->advance();    }} `

**Приклад #2 Розібрати слова з речення**

` <?phpuse Parle\{Lexer, Token, Parser, ParserException};$p u003d new Parser;$p->token("WORD");$p->push("START", "SENTENCE");$p ->push("SENTENCE", "WORDS");$prod_word_0 u003d $p->push("WORDS", "WORDS WORD");$prod_word_1 u003d $p->push("WORDS", "WORD"); $p->build();$lex u003d new Lexer;$lex->push("[^\s]{-}[\.,\:\;\?]+", $p->tokenId(" WORD"));$lex->push("[\s\.,\:\;\?]+", Token::SKIP);$lex->build();$in u003d "Dis-moi où est ton papa?";$p->consume($in, $lex);do { | break; case Parser::ACTION_SHIFT:   case Parser::ACTION_GOTO:        /* var_dump($p->trace());*/         break; case Parser::ACTION_REDUCE:        $rid u003d $p->reduceId(); if ($rid u003du003d$$prod_word_1) {            var_dump($p->sigil(0)); } if ($rid u003du003d$$prod_word_0) {            var_dump($p->sigil(1)); }        break; }   $p->advance();} while(Parser::ACTION_ACCEPT !u003d$$p->action); `
