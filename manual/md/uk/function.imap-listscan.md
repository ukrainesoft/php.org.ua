- [« imap_listmailbox](function.imap-listmailbox.md)
- [imap_listsubscribed »](function.imap-listsubscribed.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Отримати список поштових скриньок, імена яких містять задану
рядок

#imap_listscan

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_listscan — Отримати список скриньок, імена яких містять
заданий рядок

### Опис

**imap_listscan**(
[IMAP\Connection](class.imap-connection.md) `$imap`,
string `$reference`,
string `$pattern`,
string `$content`
): array\|false

Повертає масив, що містить імена поштових скриньок, що містять `content`
у тексті.

Ця функція схожа на
[imap_listmailbox()](function.imap-listmailbox.md), але також виявляє
наявність рядка `content` всередині даних поштової скриньки.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`reference`
В `reference`, як правило, має бути вказана лише специфікація
сервера, як описано в [imap_open()](function.imap-open.md)

**Увага**
Якщо
[imap.enable_insecure_rsh](imap.configuration.md#ini.imap.enable-insecure-rsh)
не вимкнено, то передача в цей параметр не перевірених даних *не
безпечна*.

`pattern`
Визначає початок пошуку у ієрархії поштових скриньок.

Є два спеціальні символи, які можна використовувати під час передачі
як частина `pattern`: '`*`` та '`%''. '`*`' повертає всі поштові скриньки.
Якщо ви передасте `pattern` як ``*``, то отримаєте повний перелік
ієрархії поштових скриньок. ''%'' поверне лише поточний рівень. ''%'',
переданий як параметр `pattern`, поверне поштові скриньки лише на самому
верхній рівень; '`~/mail/%`' на `UW_IMAPD` поверне всі ящики в директорії
`~/mail`, крім тих, що знаходяться в її піддиректоріях.

`content`
Шуканий рядок

### Значення, що повертаються

Повертає масив, що містить імена поштових скриньок, що містять `content`
у тексті або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [imap_listmailbox()](function.imap-listmailbox.md) - Псевдонім
imap_list
- [imap_search()](function.imap-search.md) - Отримати повідомлення,
які відповідають заданим критеріям
