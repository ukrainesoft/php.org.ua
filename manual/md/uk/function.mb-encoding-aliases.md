- [« mb_encode_numericentity](function.mb-encode-numericentity.md)
- [mb_ereg_match »] (function.mb-ereg-match.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Отримує псевдоніми відомого типу кодування

#mb_encoding_aliases

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

mb_encoding_aliases — Отримує псевдоніми відомого типу кодування

### Опис

**mb_encoding_aliases**(string `$encoding`): array

Повертає масив псевдонімів для відомого типу кодування 'encoding'.

### Список параметрів

`encoding`
Кодування, для якого шукаються псевдоніми.

### Значення, що повертаються

У разі успішного виконання повертає індексний масив із псевдонімами
кодування або **`false`** у разі виникнення помилки

### Помилки

Викликає помилку рівня **`E_WARNING`**, якщо кодування `encoding`
невідома.

### Приклади

**Приклад #1 Приклад використання **mb_encoding_aliases()****

` <?php$encoding         u003d 'ASCII';$known_encodings u003d mb_list_encodings();if (in_array($encoding, $known_encodings)) { | print_r($aliases);} else {    echo "Невідоме кодування ($encoding).
";}?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> ANSI_X3.4-1968
[1] u003d> iso-ir-6
[2] u003d> ANSI_X3.4-1986
[3] u003d> ISO_646.irv:1991
[4] u003d> US-ASCII
[5] u003d> ISO646-US
[6] u003d> us
[7] u003d> IBM367
[8] u003d> CP367
[9] u003d> csASCII
)

### Дивіться також

- [mb_list_encodings()](function.mb-list-encodings.md) - Повертає
масив усіх підтримуваних кодувань
