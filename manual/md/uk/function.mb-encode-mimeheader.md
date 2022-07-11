- [«mb_detect_order](function.mb-detect-order.md)
- [mb_encode_numericentity »](function.mb-encode-numericentity.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Кодує рядок для MIME-заголовка

#mb_encode_mimeheader

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

mb_encode_mimeheader — Кодує рядок для заголовка MIME

### Опис

**mb_encode_mimeheader**(
string `$string`,
?string `$charset` u003d **`null`**,
?string `$transfer_encoding` u003d **`null`**,
string `$newline` u003d "
",
int `$indent` u003d 0
): string

Кодує рядок (string) за схемою кодування MIME-заголовка.

### Список параметрів

`string`
Кодований рядок типу string. Її кодування має відповідати
[mb_internal_encoding()](function.mb-internal-encoding.md).

`charset`
`charset` задає ім'я кодування, в якому представлений рядок `string`.
За замовчуванням значення визначається налаштуванням NLS (`mbstring.language`).

`transfer_encoding`
`transfer_encoding` задає схему MIME-кодування. Це може бути або
"B" (Base64), або "Q" (Quoted-Printable). За замовчуванням "B".

`newline`
`newline` задає мітку EOL (кінець рядка, end-of-line), за допомогою
якою **mb_encode_mimeheader()** здійснює завершення рядків
("line-folding" - термін [»RFC](http://www.faqs.org/rfcs/rfc2822),
що означає поділ рядків, довжина яких перевищує задане значення.
Значення довжини зараз жорстко задано як 74 символи). за
замовчуванням `"
``(CRLF).

`indent`
Відступ першого рядка (число символів у заголовку перед `string`).

### Значення, що повертаються

Конвертований рядок (string), перетворений на ASCII.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------|
| 8.0.0 | `charset` та `transfer_encoding` тепер допускають значення null. |

### Приклади

**Приклад #1 Приклад використання **mb_encode_mimeheader()****

`<?php$name u003d "太郎"; // kanji$mbox u003d "kru";$doma u003d "gtinn.mon";$addr u003d '"' . addcslashes(mb_encode_mimeheader($name, "UTF-7", "Q"), '"') . '" <' . $mbox . "@" . $doma . ">";echo $addr;?> `

Результат виконання цього прикладу:

"u003d?UTF-7?Q?+WSqQzg-?u003d" <kru@gtinn.mon>

### Примітки

> **Примітка**:
>
> Ця функція не розрахована на виконання високорівневих розривів рядків
> (перенесення слів цілком і т.п.). Така поведінка може призвести до
> появі неочікуваних прогалин у вихідному рядку.

### Дивіться також

- [mb_decode_mimeheader()](function.mb-decode-mimeheader.md) -
Декодує рядок у MIME-заголовку
