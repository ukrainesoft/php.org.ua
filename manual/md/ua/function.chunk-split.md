- [«chr](function.chr.md)
- [convert_cyr_string »](function.convert-cyr-string.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Розбиває рядок на фрагменти

#chunk_split

(PHP 4, PHP 5, PHP 7, PHP 8)

chunk_split — Розбиває рядок на фрагменти

### Опис

**chunk_split**(string `$string`, int `$length` u003d 76, string
`$separator` u003d "
"): string

Функція використовується для розбиття рядка на фрагменти, наприклад,
приведення результату функції
[base64_encode()](function.base64-encode.md) у відповідність до
вимогами RFC 2045. Вона вставляє рядок `separator` після кожних
`length` символів.

### Список параметрів

`string`
Рядок, що розбивається.

`length`
Довжина фрагмента.

`separator`
Послідовність символів, що використовується як кінець рядка.

### Значення, що повертаються

Повертає перетворений рядок.

### Приклади

**Приклад #1 Приклад використання **chunk_split()****

`<?php// форматування даних у відповідності з RFC 2045$new_string u003d chunk_split(base64_encode($data));?> `

### Дивіться також

- [str_split()](function.str-split.md) - Перетворює рядок на масив
- [explode()](function.explode.md) - Розбиває рядок за допомогою
роздільника
- [wordwrap()](function.wordwrap.md) - Переносить рядок по
вказаній кількості символів
- [»RFC 2045](http://www.faqs.org/rfcs/rfc2045)
