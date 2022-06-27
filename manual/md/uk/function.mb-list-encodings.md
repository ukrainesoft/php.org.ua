- [«mb_language](function.mb-language.md)
- [mb_ord »] (function.mb-ord.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Повертає масив усіх підтримуваних кодувань

#mb_list_encodings

(PHP 5, PHP 7, PHP 8)

mb_list_encodings — Повертає масив усіх підтримуваних кодувань

### Опис

**mb_list_encodings**(): array

Повертає масив, що містить всі кодування, що підтримуються.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає індексний масив.

### Помилки

Ця функція не породжує жодних помилок.

### Приклади

**Приклад #1 Приклад використання **mb_list_encodings()****

` <?phpprint_r(mb_list_encodings());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> pass
[1] u003d> auto
[2] u003d> wchar
[3] u003d> byte2be
[4] u003d> byte2le
[5] u003d> byte4be
[6] u003d> byte4le
[7] u003d> BASE64
[8] u003d> UUENCODE
[9] u003d> HTML-ENTITIES
[10] u003d> Quoted-Printable
[11] u003d> 7bit
[12] u003d> 8bit
[13] u003d> UCS-4
[14] u003d> UCS-4BE
[15] u003d> UCS-4LE
[16] u003d> UCS-2
[17] u003d> UCS-2BE
[18] u003d> UCS-2LE
[19] u003d> UTF-32
[20] u003d> UTF-32BE
[21] u003d> UTF-32LE
[22] u003d> UTF-16
[23] u003d> UTF-16BE
[24] u003d> UTF-16LE
[25] u003d> UTF-8
[26] u003d> UTF-7
[27] u003d> UTF7-IMAP
[28] u003d> ASCII
[29] u003d> EUC-JP
[30] u003d> SJIS
[31] u003d> eucJP-win
[32] u003d> SJIS-win
[33] u003d> JIS
[34] u003d> ISO-2022-JP
[35] u003d> Windows-1252
[36] u003d> ISO-8859-1
[37] u003d> ISO-8859-2
[38] u003d> ISO-8859-3
[39] u003d> ISO-8859-4
[40] u003d> ISO-8859-5
[41] u003d> ISO-8859-6
[42] u003d> ISO-8859-7
[43] u003d> ISO-8859-8
[44] u003d> ISO-8859-9
[45] u003d> ISO-8859-10
[46] u003d> ISO-8859-13
[47] u003d> ISO-8859-14
[48] u003d> ISO-8859-15
[49] u003d> EUC-CN
[50] u003d> CP936
[51] u003d> HZ
[52] u003d> EUC-TW
[53] u003d> BIG-5
[54] u003d> EUC-KR
[55] u003d> UHC
[56] u003d> ISO-2022-KR
[57] u003d> Windows-1251
[58] u003d> CP866
[59] u003d> KOI8-R
)

### Дивіться також

- [mb_encoding_aliases()](function.mb-encoding-aliases.md) -
Отримує псевдоніми відомого типу кодування
