- [« imap_fetch_overview](function.imap-fetch-overview.md)
- [imap_fetchheader »](function.imap-fetchheader.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Витягти конкретну секцію тіла повідомлення

#imap_fetchbody

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_fetchbody — Витягти конкретну секцію тіла повідомлення

### Опис

**imap_fetchbody**(
[IMAP\Connection](class.imap-connection.md) `$imap`,
int `$message_num`,
string `$section`,
int `$flags` u003d 0
): string\|false

Витягує конкретну секцію тіла повідомлення. Секції повідомлення у цій
функції не декодуються.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`message_num`
Номер повідомлення

`section`
Номер розділу повідомлення. Рядок цілих чисел, розділених крапками,
визначальна частина тіла повідомлення відповідно до специфікації IMAP4

`flags`
Бітова маска з однієї або кількох опцій:

- **`FT_UID`** - параметр `message_num` є UID
- **`FT_PEEK`** - Не встановлювати прапор \Seen, якщо він уже не
встановлений
- **`FT_INTERNAL`** - повертати рядок у внутрішньому форматі, без
перетворення кінців рядків до CRLF.

### Значення, що повертаються

Повертає конкретну секцію тіла повідомлення у вигляді рядка або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [imap_savebody()](function.imap-savebody.md) - Зберегти частину
тіла повідомлення у файл
- [imap_fetchstructure()](function.imap-fetchstructure.md) -
Прочитати структуру вказаного повідомлення
