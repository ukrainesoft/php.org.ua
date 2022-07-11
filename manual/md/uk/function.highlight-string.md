- [«highlight_file](function.highlight-file.md)
- [hrtime »] (function.hrtime.md)

- [PHP Manual](index.md)
- [Різні функції](ref.misc.md)
- Підсвічування синтаксису рядка

#highlight_string

(PHP 4, PHP 5, PHP 7, PHP 8)

highlight_string — Підсвічування синтаксису рядка

### Опис

**highlight_string**(string `$string`, bool `$return` u003d **`false`**):
string\|bool

Виводить або повертає код PHP з html-розміткою з підсвіченим
синтаксисом, використовуючи кольори, визначені у вбудованому обробнику
підсвічування синтаксису PHP.

### Список параметрів

`string`
PHP-код, що підсвічується. Повинен включати тег, що відкриває.

`return`
При установці цього параметра дорівнює **`true`**, функція повертає код
з підсвічуванням синтаксису.

### Значення, що повертаються

Якщо параметр `return` дорівнює **`true`**, то замість виведення у вигляді рядка
повертається код із підсвічуванням синтаксису. Інакше повертає
**`true`** або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **highlight_string()****

` <?phphighlight_string('<?php phpinfo(); ?>');?> `

Результат виконання цього прикладу:

<code><span styleu003d"color: #000000">
<span styleu003d"color: #0000BB"><?php phpinfo</span><span styleu003d"color: #007700">(); </span><span styleu003d"color: #0000BB">?></span>
</span>
</code>

### Примітки

> **Примітка**:
>
> При використанні параметра `return` ця функція використовує
> Внутрішню буферизацію виведення, тому вона не може бути використана
> всередині callback-функції [ob_start()](function.ob-start.md).

Згенерована розмітка HTML може бути змінена.

### Дивіться також

- [highlight_file()](function.highlight-file.md) - Підсвічування
синтаксису файлу
- [Підсвічування директив
INI](misc.configuration.md#ini.syntax-highlighting)
