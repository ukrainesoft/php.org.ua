- [« Функції Recode](ref.recode.md)
- [recode_string »](function.recode-string.md)

- [PHP Manual](index.md)
- [Функції Recode](ref.recode.md)
- Перекодує з одного файлу до іншого відповідно до заданих
параметрами

# recode_file

(PHP 4, PHP 5, PHP 7 \< 7.4.0)

recode_file — Перекодує з одного файлу до іншого відповідно до
заданими параметрами

### Опис

**recode_file**(string `$request`, resource `$input`, resource
`$output`): bool

Перекодує файл, заданий дескриптором `input` у файл, заданий
дескриптором `output` відповідно до `request`.

### Список параметрів

`request`
Вибраний тип запиту на перекодування

`input`
Локальний файловий ресурс (resource) `input`

`output`
Локальний файловий ресурс (resource) `output`

### Значення, що повертаються

Повертає **`false`**, якщо виникли якісь труднощі або
**`true`** у разі успішного виконання.

### Приклади

**Приклад #1 Приклад використання **recode_file()****

` <?php$input u003dfopen('input.txt', 'r');$output u003dfopen('output.txt', 'w');recode_file("us..flat", $input, $output );?> `

### Примітки

На даний момент ця функція не працює з дескрипторами, що посилаються
на віддалені файли (URL). Обидва файлові дескриптори повинні вказувати на
локальні файли.

### Дивіться також

- [fopen()](function.fopen.md) - Відкриває файл або URL
