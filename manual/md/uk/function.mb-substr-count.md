- [«mb_substitute_character](function.mb-substitute-character.md)
- [mb_substr »](function.mb-substr.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Повертає кількість входжень підрядки

#mb_substr_count

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

mb_substr_count — Повертає кількість входжень підрядка

### Опис

**mb_substr_count**(string `$haystack`, string `$needle`, ?string
`$encoding` u003d **`null`**): int

Підраховує, скільки разів підрядок `needle` зустрічається у рядку
`haystack`.

### Список параметрів

`haystack`
Рядок (string) для перевірки

`needle`
Рядок (string) для пошуку

`encoding`
Параметр 'encoding' є символьним кодуванням. Якщо він
опущений або дорівнює **`null`**, замість нього буде використано значення
внутрішнього кодування.

### Значення, що повертаються

Кількість входжень підрядки `needle` у рядок `haystack`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------|
| 8.0.0 | Тепер параметр `encoding` може набувати значення **`null`**. |

### Приклади

**Приклад #1 Приклад використання **mb_substr_count()****

`<?phpecho mb_substr_count("Це просто перевірка", "то"); // виведе на екран 2?> `

### Дивіться також

- [mb_strpos()](function.mb-strpos.md) - Пошук позиції першого
входження одного рядка в інший
- [mb_substr()](function.mb-substr.md) - Повертає частину рядка
- [substr_count()](function.substr-count.md) - Повертає число
входжень підрядки
