- [«mb_encode_mimeheader](function.mb-encode-mimeheader.md)
- [mb_encoding_aliases »](function.mb-encoding-aliases.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Кодує символ у числове HTML-посилання

#mb_encode_numericentity

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

mb_encode_numericentity — Кодує символ у числове HTML-посилання

### Опис

**mb_encode_numericentity**(
string `$string`,
array `$map`,
?string `$encoding` u003d **`null`**,
bool `$hex` u003d **`false`**
): string

Перетворює задані коди символів у рядку (string) `string` з кодів у
числові HTML-посилання.

### Список параметрів

`string`
Кодований рядок (string).

`map`
`map` - масив, що задає діапазон кодів.

`encoding`
Параметр 'encoding' є символьним кодуванням. Якщо він
опущений або дорівнює **`null`**, замість нього буде використано значення
внутрішнього кодування.

`hex`
Чи повинна сутність, що повертається, бути представлена в шістнадцятковій
нотації (інакше у десятковій)

### Значення, що повертаються

Сконвертований рядок (string).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------|
| 8.0.0 | Тепер параметр `encoding` може набувати значення **`null`**. |

### Приклади

**Приклад #1 Приклад використання `map`**

` <?php$convmap u003d array ( int start_code1, int end_code1, int offset1, int mask1, int start_code2, int end_code2, int offset2, int ma... ... int maskN );// Задайте значення Юнікоду для start_codeN і end_codeN// Додайте до|значення offsetN і складіть побитово з прообраз за  

**Приклад #2 Приклад використання **mb_encode_numericentity()****

` <?php/* Перетворення лівої частини ISO-8859-1 в числову HTML-посилання */$convmap u003d array(0x80, 0xff, 0, 0xff);$str u003d mb_encode$8 -1");/* Преобразование заданного пользователем SJIS-win кода в блоке в числовую ссыку*/$convmap u003d array(       0xe000, 0xe03e, 0x1040, 0xffff,       0xe03f, 0xe0bb, 0x1041, 0xffff,       0xe0bc, 0xe0fa, 0x1084, 0xffff, 0xe0fb, 0xe177, 0x1085, 0xffff,       0xe178, 0xe1b6, 0x10c8, 0xffff,       0xe1b7, 0xe233, 0x10c9, 0xffff,       0xe234, 0xe272, 0x110c, 0xffff,       0xe273, 0xe2ef, 0x110d, 0xffff,       0xe2f0, 0xe32e, 0x1150, 0xffff,       0xe32f, 0xe3ab, 0x1151, 0xffff );$str u003d mb_encode_numericentity($str, $convmap, "sjis-win");?> `

### Дивіться також

- [mb_decode_numericentity()](function.mb-decode-numericentity.md) -
Декодує посилання на числовий рядок HTML на символ
