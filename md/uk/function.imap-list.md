- [« imap_last_error](function.imap-last-error.md)
- [imap_listmailbox »](function.imap-listmailbox.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Прочитати список поштових скриньок

#imap_list

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_list — Прочитати список скриньок

### Опис

**imap_list**([IMAP\Connection](class.imap-connection.md) `$imap`,
string `$reference`, string `$pattern`): array\|false

Читає список скриньок.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`reference`
В `reference`, як правило, має бути вказана лише специфікація
сервера, як описано в [imap_open()](function.imap-open.md).

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

### Значення, що повертаються

Повертає масив з іменами поштових скриньок або **`false`** у разі
невдачі.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **imap_list()****

` <?php$mbox u003d|imap_open("{imap.example.org}", "username", "password", OP_HALFOPEN)       or die("не удалося підключитися: " . imap_last mbox, "{imap.example.org}", "*");if(is_array($list)) {   foreach ($list as $val) {        echo imap_utf7_de de. "
";    }} else {    echo "виклик imap_list завершився з помилкою: " . imap_last_error() . "
";}imap_close($mbox);?> `

### Дивіться також

- [imap_getmailboxes()](function.imap-getmailboxes.md) - Прочитати
список поштових скриньок, повертаючи докладну інформацію по кожному з
них
- [imap_lsub()](function.imap-lsub.md) - Список усіх підписаних
поштових скриньок
