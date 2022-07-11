- [« imap_rename](function.imap-rename.md)
- [imap_reopen »](function.imap-reopen.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Перейменувати поштову скриньку

#imap_renamemailbox

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_renamemailbox — Перейменувати поштову скриньку

### Опис

**imap_renamemailbox**([IMAP\Connection](class.imap-connection.md)
`$imap`, string `$from`, string `$to`): bool

Ця функція перейменовує old_mbox на new_mbox (формат імені `mbox`
дивіться в описі [imap_open()](function.imap-open.md)).

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`from`
Старе ім'я. Докладніше читайте в описі
[imap_open()](function.imap-open.md)

**Увага**
Якщо
[imap.enable_insecure_rsh](imap.configuration.md#ini.imap.enable-insecure-rsh)
не вимкнено, то передача в цей параметр не перевірених даних *не
безпечна*.

`to`
Нове ім'я. Докладніше читайте в описі
[imap_open()](function.imap-open.md)

**Увага**
Якщо
[imap.enable_insecure_rsh](imap.configuration.md#ini.imap.enable-insecure-rsh)
не вимкнено, то передача в цей параметр не перевірених даних *не
безпечна*.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [imap_createmailbox()](function.imap-createmailbox.md) - Створити
нова поштова скринька
- [imap_deletemailbox()](function.imap-deletemailbox.md) - Видалити
Поштова скринька
