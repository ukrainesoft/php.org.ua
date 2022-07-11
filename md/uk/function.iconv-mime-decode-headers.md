- [« iconv_get_encoding](function.iconv-get-encoding.md)
- [iconv_mime_decode »](function.iconv-mime-decode.md)

- [PHP Manual](index.md)
- [Функції iconv](ref.iconv.md)
- Декодує кілька полів заголовка MIME

# iconv_mime_decode_headers

(PHP 5, PHP 7, PHP 8)

iconv_mime_decode_headers - Декодує кілька полів заголовка `MIME`

### Опис

**iconv_mime_decode_headers**(string `$headers`, int `$mode` u003d 0,
?string `$encoding` u003d **`null`**): array\|false

Декодує кілька полів заголовка `MIME` за один раз.

### Список параметрів

`headers`
Закодовані заголовки у вигляді рядка.

`mode`
Параметр `mode` визначає поведінку, якщо
**iconv_mime_decode_headers()** виявить неправильне поле заголовка
`MIME`. Можна вказати будь-яку комбінацію наступних бітових масок.

| Значення | Константа Опис |
|----------|-------------------------------------| -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------------------------|
| 1 | ICONV_MIME_DECODE_STRICT | Суворо дотримуватися стандартів, визначених у [»RFC2047](http://www.faqs.org/rfcs/rfc2047). За замовчуванням ця опція відключена, оскільки багато пропрієтарних програм електронної пошти не дотримуються стандартів і створюють некоректні заголовки `MIME`. |
| 2 | ICONV_MIME_DECODE_CONTINUE_ON_ERROR | Якщо встановлено, **iconv_mime_decode_headers()** намагатиметься ігнорувати будь-які помилки та продовжувати обробку поточного заголовка. |

**Бітові маски **iconv_mime_decode_headers()****

`encoding`
Необов'язковий параметр `encoding` вказує кодування, в якому буде
представлений результат. Якщо опущено, буде використано значення
директиви [iconv.internal_encoding](iconv.configuration.md).

### Значення, що повертаються

У разі успішного виконання повертає асоціативний масив із полями
`MIME`-заголовків, вказаних параметром `headers`, або **`false`** в
у разі виникнення помилки.

Кожен ключ елемента повертається масиву є окремим
ім'я поля, а сам елемент – його значення. Якщо у заголовку існує
кілька полів з однаковим ім'ям **iconv_mime_decode_headers()**
автоматично поміщає їх у підмасив з числовими індексами в порядку їх
обробки. Зверніть увагу, що імена заголовків не * нечутливі до
регістру*.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----|
| 8.0.0 | encoding тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **iconv_mime_decode_headers()****

` <?php$headers_string u003d <<<<EOFSubject: u003d?UTF-8?B?UHLDvGZ1bmcgUHLDvGZ1bmcu003d?u003dTo: example@example.comDate: Thu, 1 Jan 1970 00:00:00:00 example.com>Received: from localhost (localhost [127.0.0.1]) by localhost   with SMTP id example for <example@example.com>; Thu, 1 Jan 1970 00:00:00 +0000 (UTC)    (envelope-from example-return-0000-exampleu003dexample.com@example.com)Received: (qmail 0 in5 1 Thu 2003 00:00:00 +0000EOF;$headers u003d  iconv_mime_decode_headers($headers_string, 0, "ISO-8859-1");print_r($headers);?> `

Результат виконання цього прикладу:

Array
(
[Subject] u003d> Prüfung Prüfung
[To] u003d> example@example.com
[Date] u003d> Thu, 1 Jan 1970 00:00:00 +0000
[Message-Id] u003d> <example@example.com>
[Received] u003d> Array
(
[0] u003d> з localhost (localhost [127.0.0.1]) by localhost з SMTP id example for <example@example.com>; Thu, 1 Jan 1970 00:00:00 +0000 (UTC) (envelope-from example-return-0000-exampleu003dexample.com@example.com)
[1] u003d> (qmail 0 invoked by uid 65534); 1 Thu 2003 00:00:00 +0000
)

)

### Дивіться також

- [iconv_mime_decode()](function.iconv-mime-decode.md) - Декодує
поле MIME-заголовка
- [mb_decode_mimeheader()](function.mb-decode-mimeheader.md) -
Декодує рядок у MIME-заголовку
- [imap_mime_header_decode()](function.imap-mime-header-decode.md) -
Декодувати елементи заголовка
- [imap_base64()](function.imap-base64.md) - Декодувати текст
закодований BASE64
- [imap_qprint()](function.imap-qprint.md) - Перетворити рядок з
формату "quoted-printable" у 8-бітний рядок
