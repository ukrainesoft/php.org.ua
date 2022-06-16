- [«base64_decode](function.base64-decode.md)
- [get_headers »](function.get-headers.md)

- [PHP Manual](index.md)
- [Функції URL](ref.url.md)
- Кодує дані у формат MIME base64

# base64_encode

(PHP 4, PHP 5, PHP 7, PHP 8)

base64_encode — Кодує дані у формат MIME base64

### Опис

**base64_encode**(string `$string`): string

Кодує `string` із base64.

Це кодування призначене для коректної передачі бінарних даних за
протоколи, що не підтримують 8-бітну передачу, наприклад, для відправлення
тіла листи.

Дані, закодовані base64 займають на 33% більше місця порівняно
з оригінальними даними.

### Список параметрів

`string`
Дані кодування.

### Значення, що повертаються

Кодовані дані у вигляді рядка.

### Приклади

**Приклад #1 Приклад використання **base64_encode()****

` <?php$str u003d 'Це закодований рядок';echo base64_encode($str);?> `

Результат виконання цього прикладу:

0K3RgtC+INC30LDQutC+0LTQuNGA0L7QstCw0L3QvdCw0Y8g0YHRgtGA0L7QutCw

### Дивіться також

- [base64_decode()](function.base64-decode.md) - Декодує дані,
закодовані MIME base64
- [chunk_split()](function.chunk-split.md) - Розбиває рядок на
фрагменти
- [convert_uuencode()](function.convert-uuencode.md) - Кодує
рядок у формат uuencode
- [» RFC 2045](http://www.faqs.org/rfcs/rfc2045) розділ 6.8
