- [«
imap_rfc822_write_address](function.imap-rfc822-write-address.md)
- [imap_scan »](function.imap-scan.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Зберегти частину тіла повідомлення у файл

#imap_savebody

(PHP 5 \>u003d 5.1.3, PHP 7, PHP 8)

imap_savebody — Зберегти частину тіла повідомлення у файл

### Опис

**imap_savebody**(
[IMAP\Connection](class.imap-connection.md) `$imap`,
resource\|string\|int `$file`,
int `$message_num`,
string `$section` u003d "",
int `$flags` u003d 0
): bool

Записує частину тіла повідомлення у файл.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`file`
Шлях до файлу у вигляді рядка або відкритий за допомогою
[fopen()](function.fopen.md) – файловий дескриптор.

`message_num`
Номер повідомлення

`section`
Номер розділу повідомлення. Рядок цілих чисел, розділених крапками,
визначальна частина тіла повідомлення відповідно до специфікації IMAP4

`flags`
Бітова маска з однієї або кількох опцій:

- **`FT_UID`** - The `message_num` is a UID
- **`FT_PEEK`** - Не встановлювати прапор \Seen, якщо він уже не
встановлений
- **`FT_INTERNAL`** - повертати рядок у внутрішньому форматі, без
перетворення кінців рядків до CRLF.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [imap_fetchbody()](function.imap-fetchbody.md) - Вийняти
конкретну секцію тіла повідомлення
