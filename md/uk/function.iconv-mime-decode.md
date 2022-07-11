- [«
iconv_mime_decode_headers](function.iconv-mime-decode-headers.md)
- [iconv_mime_encode »](function.iconv-mime-encode.md)

- [PHP Manual](index.md)
- [Функції iconv](ref.iconv.md)
- Декодує поле MIME-заголовка

# iconv_mime_decode

(PHP 5, PHP 7, PHP 8)

iconv_mime_decode — Декодує поле `MIME`-заголовка

### Опис

**iconv_mime_decode**(string `$string`, int `$mode` u003d 0, ?string
`$encoding` u003d **`null`**): string\|false

Декодує поле `MIME`-заголовка.

### Список параметрів

`string`
Закодований заголовок у вигляді рядка.

`mode`
`mode` задає режим поведінки функції у випадку, коли
**iconv_mime_decode()** визначить, що `MIME`-заголовок має
неприпустиму структуру. Режим задається комбінацією наступних бітових
масок.

| Значення | Константа Опис |
|----------|-------------------------------------| -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --|
| 1 | ICONV_MIME_DECODE_STRICT | Якщо задано, заголовок декодується відповідно до стандарту [»RFC2047](http://www.faqs.org/rfcs/rfc2047). Ця опція відключена за замовчуванням, оскільки існує безліч поштових програм, які не слідують специфікації та формують некоректні з погляду стандарту `MIME`-заголовки. |
| 2 | ICONV_MIME_DECODE_CONTINUE_ON_ERROR | Якщо встановлено, [iconv_mime_decode_headers()](function.iconv-mime-decode-headers.md) намагатиметься пропускати граматичні помилки та продовжувати обробку заголовка. |

**Бітові маски, що застосовуються в **iconv_mime_decode()****

`encoding`
Необов'язковий аргумент `encoding` задає набір символів, у якому
буде представлено результат. Якщо аргумент опущено, використовуватиметься
[iconv.internal_encoding](iconv.configuration.md).

### Значення, що повертаються

Повертає декодований `MIME`-заголовок у разі успішного виконання
або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----|
| 8.0.0 | encoding тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **iconv_mime_decode()****

` <?php// Выдаст в результате "Subject: Prüfung Prüfung"echo iconv_mime_decode("Subject: u003d?UTF-8?B?UHLDvGZ1bmcgUHLDvGZ1bmcu003d?u003d",                       0, "ISO-8859-1");?> `

### Дивіться також

- [iconv_mime_decode_headers()](function.iconv-mime-decode-headers.md) -
Декодує кілька полів заголовка MIME
- [mb_decode_mimeheader()](function.mb-decode-mimeheader.md) -
Декодує рядок у MIME-заголовку
- [imap_mime_header_decode()](function.imap-mime-header-decode.md) -
Декодувати елементи заголовка
- [imap_base64()](function.imap-base64.md) - Декодувати текст
закодований BASE64
- [imap_qprint()](function.imap-qprint.md) - Перетворити рядок з
формату "quoted-printable" у 8-бітний рядок
