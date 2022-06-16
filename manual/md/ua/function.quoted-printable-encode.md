- [«quoted_printable_decode](function.quoted-printable-decode.md)
- [quotemeta»] (function.quotemeta.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Перетворює 8-бітний рядок за допомогою методу quoted-printable

#quoted_printable_encode

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

quoted_printable_encode — Перетворює 8-бітний рядок за допомогою методу
quoted-printable

### Опис

**quoted_printable_encode**(string `$string`): string

Повертає рядок, закодований у формат quoted-printable у
відповідно до розділу 6.7
[» RFC2045](http://www.faqs.org/rfcs/rfc2045).

Ця функція подібна до функції [imap_8bit()](function.imap-8bit.md), за
виключення того, що не вимагає для своєї роботи модуля IMAP.

### Список параметрів

`string`
Вхідний рядок.

### Значення, що повертаються

Повертає закодований рядок.

### Приклади

**Приклад #1 Приклад використання **quoted_printable_encode()****

` <?php$encoded u003d quoted_printable_encode('Möchten Sie ein paar Äpfel?');var_dump($encoded);var_dump(quoted_printable_decode($encoded));?> `

Результат виконання цього прикладу:

string(37) "Mu003dC3u003dB6chten Sie ein paar u003dC3u003d84pfel?"
string(29) "Möchten Sie ein paar Äpfel?"

### Дивіться також

- [quoted_printable_decode()](function.quoted-printable-decode.md) -
Перетворює рядок, закодований методом quoted-printable в
8-бітний рядок
- [iconv_mime_encode()](function.iconv-mime-encode.md) - Створює
поле MIME-заголовка
