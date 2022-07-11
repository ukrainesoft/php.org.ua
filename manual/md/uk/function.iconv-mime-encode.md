- [« iconv_mime_decode](function.iconv-mime-decode.md)
- [iconv_set_encoding »](function.iconv-set-encoding.md)

- [PHP Manual](index.md)
- [Функції iconv](ref.iconv.md)
- Створює поле MIME-заголовка

# iconv_mime_encode

(PHP 5, PHP 7, PHP 8)

iconv_mime_encode — Створює поле `MIME`-заголовка

### Опис

**iconv_mime_encode**(string `$field_name`, string `$field_value`, array
`$options` u003d \[\]): string\|false

Створює та повертає коректне поле `MIME`-заголовка у вигляді рядка
виду:

Subject: u003d?ISO-8859-1?Q?Pru003dFCfung_fu003dFCr?u003d Entwerfen von einer MIME kopfzeile

У прикладі вище "Subject" є ім'ям поля, а частина рядка, починаючи з
"u003d? ISO-8859-1? ..." - Його значення.

### Список параметрів

`field_name`
Назва поля.

`field_value`
Значення поля.

`options`
Є можливість контролювати поведінку функції
**iconv_mime_encode()** за допомогою передачі масиву з налаштуваннями в
як третій аргумент "options". Можливі значення цього масиву,
підтримувані функцією **iconv_mime_encode()**, наведені нижче.
Зверніть увагу, що імена елементів чутливі до регістру
символів.

| Елемент Тип | Опис | Значення за замовчуванням | приклад |
|------------------|--------|--------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------|--------------------------- --------------------------|------------|
| scheme | string | Задає, як закодувати значення поля. Значенням цього елемента може бути "B", або "Q". "B" означає схему кодування `base64`, а "Q" - `quoted-printable`. | B | B |
| input-charset | string | Задає, в якому кодуванні представлені аргументи `field_name` та `field_value`. Якщо не заданий, **iconv_mime_encode()** передбачає, що набір символів вказано в ini-налаштуванні [iconv.internal_encoding](iconv.configuration.md). | [iconv.internal_encoding](iconv.configuration.md) | ISO-8859 |
| output-charset | string | Задає набір символів, у якому буде представлений результуючий MIME-заголовок. | [iconv.internal_encoding](iconv.configuration.md) | UTF-8 |
| line-length | int | Встановлює максимальну довжину рядків заголовка. Якщо результуючий заголовок виявиться довшим за цю величину, функція його розріже на кілька рядків відповідно до [» Форматом інтернет повідомлень - RFC2822](http://www.faqs.org/rfcs/rfc2822). Якщо не встановлено, ця довжина буде встановлена 76 символів. | 76 | 996 |
| line-break-chars | string | Задає послідовність символів, які будуть використовуватися для завершення "розрізаних" рядків заголовка, якщо заголовок виявиться довшим за один рядок. Якщо не встановлено, будуть використовуватися символи "
" (`CR` `LF`). Зверніть увагу, що цей аргумент завжди обробляється як рядок ASCII незалежно від значення `input-charset`.
                                                |
         |

**Налаштування, що підтримуються в **iconv_mime_encode()****

### Значення, що повертаються

Повертає закодоване `MIME`-поле у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **iconv_mime_encode()****

` <?php$preferences u003d array(    "input-charset" u003d> "ISO-8859-1",   "output-charset" u003d> "UTF-8",    "line-length" u003d>    -chars" u003d> "
");$preferences["scheme"] u003d "Q";// Результат "Subject: u003d?UTF-8?Q?Pru003dC3u003dBCfungu003d20Pru003dC3u003dBCfung?u003d"echo iconv_mime_encode("Subject", "Prüfung Prüfung", $preferences);$preferences["scheme"] u003d "B";// Результат "Subject: u003d?UTF-8?B?UHLDvGZ1bmcgUHLDvGZ1bmcu003d?u003d"echo ", $preferences);?> `

### Дивіться також

- [imap_binary()](function.imap-binary.md) - Конвертує 8-бітну
рядок у рядок base64
- [mb_encode_mimeheader()](function.mb-encode-mimeheader.md) -
Кодує рядок для MIME-заголовка
- [imap_8bit()](function.imap-8bit.md) - Конвертує 8-бітну
рядок у рядок у форматі quoted-printable
- [quoted_printable_encode()](function.quoted-printable-encode.md) -
Перетворює 8-бітний рядок за допомогою методу quoted-printable
