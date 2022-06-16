- [« PhpToken::\_\_toString](phptoken.tostring.md)
- [Функції PHP-лексера (tokenizer)»] (ref.tokenizer.md)

- [PHP Manual](index.md)
- [PhpToken](class.phptoken.md)
- Розбирає заданий рядок, що містить програму на PHP, масив
об'єктів PhpToken

# PhpToken::tokenize

(PHP 8)

PhpToken::tokenize — Розбирає заданий рядок, що містить програму на
PHP, на масив об'єктів PhpToken

### Опис

public static **PhpToken::tokenize**(string `$code`, int `$flags` u003d 0):
array

Повертає масив об'єктів PhpToken, що представляють код code.

### Список параметрів

`code`
Вихідний код мовою PHP.

`flags`
Допустимі прапори:

- **`TOKEN_PARSE`** - допускає можливість використовувати
зарезервовані слова у певних контекстах.

### Значення, що повертаються

Масив токенів PHP як об'єктів класу PhpToken чи його нащадків.
Цей метод повертає static\[\], так що PhpToken можна вільно
розширювати.

### Приклади

**Приклад #1 Приклад використання **PhpToken::tokenize()****

` <?php$tokens u003d PhpToken::tokenize('<?php echo; ?>');foreach ($tokens as $token) {    echo "Line {$token->line}: {$token->To )} ('{$token->text}')", PHP_EOL;} `

Результат виконання даних прикладів:

Line 1: T_OPEN_TAG ('<?php')
Line 1: T_ECHO ('echo')
Line 1:; (';')
Line 1: T_WHITESPACE ('')
Line 1: T_CLOSE_TAG ('?>')

**Приклад #2 Розширення PhpToken**

`<?phpclass MyPhpToken extends PhpToken {    public function getUpperText() {        return strtoupper($this->text); }}$tokens u003d MyPhpToken::tokenize('<?php echo; ?>');echo "'{$tokens[0]->getUpperText()}'"; `

Результат виконання даних прикладів:

'<?PHP'

### Дивіться також

- [token_get_all()](function.token-get-all.md) - Розбиває
переданий вихідний код на PHP-лексеми
