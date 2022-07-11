- [« imap_fetchheader](function.imap-fetchheader.md)
- [imap_fetchstructure »](function.imap-fetchstructure.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Вийняти MIME-заголовки для конкретного розділу повідомлення

#imap_fetchmime

(PHP 5 \>u003d 5.3.6, PHP 7, PHP 8)

imap_fetchmime — Вийняти MIME-заголовки для конкретного розділу повідомлення

### Опис

**imap_fetchmime**(
[IMAP\Connection](class.imap-connection.md) `$imap`,
int `$message_num`,
string `$section`,
int `$flags` u003d 0
): string\|false

Виймає заголовки MIME для конкретної секції повідомлення.

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

Повертає MIME-заголовки для конкретної секції повідомлення у вигляді рядка
або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [imap_fetchbody()](function.imap-fetchbody.md) - Вийняти
конкретну секцію тіла повідомлення
- [imap_fetchstructure()](function.imap-fetchstructure.md) -
Прочитати структуру вказаного повідомлення
- [imap_fetchheader()](function.imap-fetchheader.md) - Отримати
заголовок повідомлення
