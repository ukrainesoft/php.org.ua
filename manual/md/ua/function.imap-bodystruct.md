- [« imap_body](function.imap-body.md)
- [imap_check »](function.imap-check.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Прочитати структуру вказаної секції тіла заданого повідомлення

# imap_bodystruct

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_bodystruct — Прочитати структуру вказаної секції тіла заданого
повідомлення

### Опис

**imap_bodystruct**([IMAP\Connection](class.imap-connection.md)
`$imap`, int `$message_num`, string `$section`): stdClass\|false

Читає структуру вказаної секції тіла заданого повідомлення.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`message_num`
Номер повідомлення

`section`
Секція тіла для читання

### Значення, що повертаються

Повертає інформацію у вигляді об'єкта або **`false`** у разі
виникнення помилки. Опис структури та властивостей об'єкту читайте у
розділ, присвячений функції
[imap_fetchstructure()](function.imap-fetchstructure.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [imap_fetchstructure()](function.imap-fetchstructure.md) -
Прочитати структуру вказаного повідомлення
