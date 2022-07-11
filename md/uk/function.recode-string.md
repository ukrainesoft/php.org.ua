- [« recode_file](function.recode-file.md)
- [recode »](function.recode.md)

- [PHP Manual](index.md)
- [Функції Recode](ref.recode.md)
- Перекодує рядок відповідно до заданих параметрів

# recode_string

(PHP 4, PHP 5, PHP 7 \< 7.4.0)

recode_string — Перекодує рядок відповідно до заданих
параметрами

### Опис

**recode_string**(string `$request`, string `$string`): string

Перекодує рядок `string` відповідно до `request`.

### Список параметрів

`request`
Вибраний тип запиту на перекодування

`string`
Рядок для перекодування

### Значення, що повертаються

Повертає перекодований рядок (string) або **`false`**, якщо
виникли будь-які проблеми з перекодуванням.

### Приклади

**Приклад #1 Приклад використання **recode_string()****

`<?phpecho recode_string("us..flat", "The following character has a diacritical mark: á");?> `

### Примітки

Простий запит на перекодування може бути "lat1..iso646-de".

### Дивіться також

- Докладніше про запити на перекодування читайте у документації,
яка входить до дистрибутиву GNU Recode.
- [mb_convert_encoding()](function.mb-convert-encoding.md) -
Перетворює рядок з одного кодування символів на інше
- [UConverter::transcode()](uconverter.transcode.md) - Перетворює
рядок з одного кодування символів до іншого
- [iconv()](function.iconv.md) - Перетворює рядок з одного
кодування символів в іншу
