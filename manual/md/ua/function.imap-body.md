- [« imap_binary](function.imap-binary.md)
- [imap_bodystruct »](function.imap-bodystruct.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Прочитати тіло повідомлення

#imap_body

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_body — Прочитати тіло повідомлення

### Опис

**imap_body**([IMAP\Connection](class.imap-connection.md) `$imap`, int
`$message_num`, int `$flags` u003d 0): string\|false

**imap_body()** повертає тіло повідомлення з номером `message_num` у
поточної поштової скриньки.

**imap_body()** поверне точну копію тіла повідомлення. Для отримання однієї
частини складеного MIME-повідомлення використовуйте
[imap_fetchstructure()](function.imap-fetchstructure.md) для аналізу
структури та [imap_fetchbody()](function.imap-fetchbody.md) для
вилучення копії однієї з частин тіла.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`message_num`
Номер повідомлення

`flags`
Опціональний параметр `flags`, що є бітовою маскою однією або
кількох констант:

- **`FT_UID`** - `message_num` є UID
- **`FT_PEEK`** - Не встановлювати прапорець Переглянуто (\Seen), якщо він
вже не встановлено.
- **`FT_INTERNAL`** - рядок, що повертається, буде у внутрішньому
форматі, а не канонізована до CRLF.

### Значення, що повертаються

Повертає рядок із тілом зазначеного повідомлення або **`false`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
