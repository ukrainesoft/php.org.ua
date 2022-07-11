- [« Функції PHP-лексера (tokenizer)] (ref.tokenizer.md)
- [token_name »](function.token-name.md)

- [PHP Manual](index.md)
- [Функції PHP-лексера (tokenizer)] (ref.tokenizer.md)
- Розбиває переданий вихідний код на PHP-лексеми

#token_get_all

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

token_get_all — Розбиває переданий вихідний код на PHP-лексеми

### Опис

**token_get_all**(string `$code`, int `$flags` u003d 0): array

Функція **token_get_all()** розбирає переданий рядок `code` у
мовні лексеми PHP, використовуючи лексичний сканер Zend Engine.

Список лексем дивіться в [Список тегів (tokens) парсера](tokens.md)
або використовуйте [token_name()](function.token-name.md) для перекладу
значення лексеми у рядкове уявлення.

### Список параметрів

`code`
Вихідний код PHP для аналізу.

`flags`
Коректні прапори:

- **`TOKEN_PARSE`** - Розпізнає можливість використання
зарезервованих слів у певних контекстах.

### Значення, що повертаються

Масив ідентифікаторів лексем. Кожен індивідуальний ідентифікатор
лексеми це або одиночний символ (наприклад, `;`, `.`, `>`, `!`,
інші...), або триелементний масив, що містить індекс лексеми в
нульовому елементі, рядок з оригінальним вмістом лексеми у першому
елемент і номер рядка в другому елементі.

### Приклади

**Приклад #1 **token_get_all()** example**

`<?php$tokens u003dtoken_get_all('<?php echo; ?>');foreach ($tokens as $token) {    if (is_array($token)) {         , token_name($token[0]), " ('{$token[1]}')", PHP_EOL; }}?> `

Результатом виконання цього прикладу буде щось подібне:

Рядок 1: T_OPEN_TAG ('<?php')
Рядок 1: T_ECHO ('echo')
Рядок 1: T_WHITESPACE ('')
Рядок 1: T_CLOSE_TAG ('?>')

**Приклад #2 Приклад неправильного використання **token_get_all()****

` <?php$tokens u003d token_get_all('/* коментар */');foreach ($tokens as $token) {    if (is_array($token)) {             ($token[0]), " ('{$token[1]}')", PHP_EOL; }}?> `

Результатом виконання цього прикладу буде щось подібне:

Рядок 1: T_INLINE_HTML ('/* коментар */')

Зверніть увагу, у наведеному прикладі рядок розбирається як
**`T_INLINE_HTML`** замість очікуваного **`T_COMMENT`**. Це пов'язано з
тим, що не використовується тег, що відкриває в коді. Це було б
еквівалентно приміщенню коментарів поза тегами PHP у звичайному файлі.

**Приклад #3 Приклад використання **token_get_all()** з класом,
які використовують зарезервовані слова**

` <?php$source u003d <<<'Code'<?phpclass A{   const PUBLIC u003d 1;}code;$tokens u003d token_get_all($source, TOKEN_PARSE);foreach ($tokens as       $token)) {        echo token_name($token[0]) , PHP_EOL; }}?> `

Результатом виконання цього прикладу буде щось подібне:

T_OPEN_TAG
T_WHITESPACE
T_CLASS
T_WHITESPACE
T_STRING
T_CONST
T_WHITESPACE
T_STRING
T_LNUMBER

Без прапора **`TOKEN_PARSE`**, передостанній токен (**`T_STRING`**) був би
**`T_PUBLIC`**.

### Дивіться також

- [PhpToken::tokenize()](phptoken.tokenize.md) - Розбирає задану
рядок, що містить програму на PHP, на масив об'єктів PhpToken
- [token_name()](function.token-name.md) - Отримати символьне ім'я
для переданої PHP-лексеми
