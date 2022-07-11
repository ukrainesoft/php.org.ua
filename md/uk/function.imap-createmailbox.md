- [« imap_create](function.imap-create.md)
- [imap_delete »] (function.imap-delete.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Створити нову поштову скриньку

#imap_createmailbox

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_createmailbox — Створити нову поштову скриньку

### Опис

**imap_createmailbox**([IMAP\Connection](class.imap-connection.md)
`$imap`, string `$mailbox`): bool

Створює нову поштову скриньку, вказану в mailbox.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`mailbox`
Ім'я поштової скриньки. Детальніше дивіться
[imap_open()](function.imap-open.md). Імена поштових скриньок,
що містять міжнародні символи повинні бути закодовані за допомогою
[imap_utf7_encode()](function.imap-utf7-encode.md).

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

### Приклади

**Приклад #1 Приклад використання **imap_createmailbox()****

` <?php$mbox u003dimap_open("{imap.example.org}", "username", "password", OP_HALFOPEN)     or die("не вийшло|підключитися: " . imap_last_error ;$name2 u003d imap_utf7_encode("phpnewböx"); // phpnewb&w7Y-x$newname u003d $name1;echo "Новим ім'ям буде '$name1'<br />
";// тепер створимо новий ящик "phptestbox" в вашем вхідному каталозі,// перевіримо його статус і удалимо, щоб повернути|ваш каталог к| INBOX.$newname"))) {    $status u003d @imap_status($mbox, "{imap.example.org}INBOX.$newname", SA_ALL);    if ($status) на у  name1' і має наступний статус:<br />
";         echo "Повідомлень:            " . $status->messages    . "<br />
";         echo "Нових:                   " . $status->recent      . . "<br />
";        echo "Непрочитаних:     " . $status->unseen      . "<br />
";        echo "Наступний UID:    " . $status->uidnext     . "<br />
";        echo "Коректність UID:" . $status->uidvalidity . "<br />
";        if (imap_renamemailbox($mbox, "{imap.example.org}INBOX.$newname", "{imap.example.org}INBOX.$name2")) {            echo "переименуем новый ящик из '$name1' в '$name2'<br />
";            $newname u003d $name2;        } else {            echo "вызов imap_renamemailbox для нового ящика завершился ошибкой: " . imap_last_error() . "<br />
";        }    }}else {        echo "виклик imap_status для нової скрині закінчився помилкою: " > | .
";    }   if (@imap_deletemailbox($mbox, "{imap.example.org}INBOX.$newname")) {       echo "новий поштовий ящик |
";    }}else {         echo "виклик imap_deletemailbox на новій поштовій скринці закінчився помилкою: "| . implode("<br   
", imap_errors()) . "<br />
";    }} else {   echo "неможливо створити нову поштову ящик: " . implode("<br />
", imap_errors()) . "<br />
";}imap_close($mbox);?> `

### Дивіться також

- [imap_renamemailbox()](function.imap-renamemailbox.md) -
Перейменувати поштову скриньку
- [imap_deletemailbox()](function.imap-deletemailbox.md) - Видалити
Поштова скринька
