- [«printf](function.printf.md)
- [quoted_printable_encode »](function.quoted-printable-encode.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Перетворює рядок, закодований методом quoted-printable у
8-бітний рядок

#quoted_printable_decode

(PHP 4, PHP 5, PHP 7, PHP 8)

quoted_printable_decode — Перетворює рядок, закодований методом
quoted-printable у 8-бітний рядок

### Опис

**quoted_printable_decode**(string `$string`): string

Ця функція повертає 8-бітний бінарний рядок, що відповідає
вказаному рядку в кодуванні quoted-printable (відповідно до розділу
6.7 [»RFC2045](http://www.faqs.org/rfcs/rfc2045), а не розділом 4.5.2
[» RFC2821](http://www.faqs.org/rfcs/rfc2821), тобто додаткові
крапки не будуть вирізані з початку рядка).

Ця функція подібна до функції [imap_qprint()](function.imap-qprint.md),
але не вимагає своєї роботи модуля IMAP.

### Список параметрів

`string`
Вхідний рядок.

### Значення, що повертаються

Повертає 8-бітний бінарний рядок.

### Приклади

**Приклад #1 Приклад використання **quoted_printable_decode()****

` <?php$encoded u003d quoted_printable_encode('Möchten Sie ein paar Äpfel?');var_dump($encoded);var_dump(quoted_printable_decode($encoded));?> `

Результат виконання цього прикладу:

string(37) "Mu003dC3u003dB6chten Sie ein paar u003dC3u003d84pfel?"
string(29) "Möchten Sie ein paar Äpfel?"

### Дивіться також

- [quoted_printable_encode()](function.quoted-printable-encode.md) -
Перетворює 8-бітний рядок за допомогою методу quoted-printable
