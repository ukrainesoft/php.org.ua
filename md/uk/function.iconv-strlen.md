- [« iconv_set_encoding](function.iconv-set-encoding.md)
- [iconv_strpos »](function.iconv-strpos.md)

- [PHP Manual](index.md)
- [Функції iconv](ref.iconv.md)
- Повертає кількість символів у рядку

# iconv_strlen

(PHP 5, PHP 7, PHP 8)

iconv_strlen — Повертає кількість символів у рядку

### Опис

**iconv_strlen**(string `$string`, ?string `$encoding` u003d **`null`**):
int\|false

На відміну від [strlen()](function.strlen.md), **iconv_strlen()**
враховує кодування рядка. Довжина `string` не обов'язково буде
відповідати кількості байт у ній, так як у різних кодуваннях
різні символи кодуються різною кількістю байт, наприклад,
Юнікод може бути і дво-, і чотирибайтним.

### Список параметрів

`string`
Рядок.

`encoding`
Якщо параметр `encoding` опущений, передбачається, що кодування рядка
`string` еквівалентна значенню
[iconv.internal_encoding](iconv.configuration.md).

### Значення, що повертаються

Повертає кількість символів в `string` як ціле число або
**`false`** у разі виникнення помилки при кодуванні.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----|
| 8.0.0 | encoding тепер допускає значення null. |

### Дивіться також

- [grapheme_strlen()](function.grapheme-strlen.md) - Отримує довжину
рядки в одиницях графеми
- [mb_strlen()](function.mb-strlen.md) - Отримує довжину рядка
- [strlen()](function.strlen.md) - Повертає довжину рядка
