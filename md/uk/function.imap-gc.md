- [« imap_fetchtext](function.imap-fetchtext.md)
- [imap_get_quota »](function.imap-get-quota.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Очистити кеш IMAP

#imap_gc

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

imap_gc — Очистити кеш IMAP

### Опис

**imap_gc**([IMAP\Connection](class.imap-connection.md) `$imap`, int
`$flags`): bool

Видаляє з кеша записи заданого типу.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`flags`
Задає кеш для чищення. Може бути будь-якою комбінацією констант:
**`IMAP_GC_ELT`** (елементи кешу повідомлень), **`IMAP_GC_ENV`** (обгортки
та тіла), **`IMAP_GC_TEXTS`** (тексти).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **imap_gc()****

` <?php$mbox u003d imap_open("{imap.example.org:143}", "username", "password");imap_gc($mbox, IMAP_GC_ELT);?> `
