- [« imap_alerts](function.imap-alerts.md)
- [imap_base64 »](function.imap-base64.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Додає рядкове повідомлення у вказану поштову скриньку

#imap_append

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_append — Додає рядкове повідомлення до вказаної поштової скриньки

### Опис

**imap_append**(
[IMAP\Connection](class.imap-connection.md) `$imap`,
string `$folder`,
string `$message`,
?string `$options` u003d **`null`**,
?string `$internal_date` u003d **`null`**
): bool

Додає рядок `message` у вказаний `folder`.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`folder`
Ім'я поштової скриньки. Дивіться [imap_open()](function.imap-open.md) для
Детальна інформація.

**Увага**
Якщо
[imap.enable_insecure_rsh](imap.configuration.md#ini.imap.enable-insecure-rsh)
не вимкнено, то передача в цей параметр не перевірених даних *не
безпечна*.

`message`
Додане повідомлення у вигляді рядка

При зверненні до сервера Cyrus IMAP слід використовувати "
як
завершальний символ рядка замість "
"Інакше операція буде невдала.

`options`
Якщо вказано, то параметр `options` також буде записаний у `folder`

`internal_date`
Якщо цей параметр вказано, він встановить INTERNALDATE у доданому
повідомленні. Параметр повинен містити дату, подану рядком,
яка відповідає специфікації rfc2060 значення date_time.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `options` та `internal_date` тепер допускають значення null. |

### Приклади

**Приклад #1 Приклад використання **imap_append()****

` <?php$imap u003d imap_open("{imap.example.org}INBOX.Drafts", "username", "password");$check u003d imap_check($imap);echo "Кількість повідомлень до додавання: " . $check->Nmsgs . "
";imap_append($imap, "{imap.example.org}INBOX.Drafts"                    , "From: me@example.com
"                     . "To: you@example.com
"                     ..""Subject: test
"                     . ."
                      . "це перевірочне повідомлення, будь ласка, ігноруйте його
"                      );$check u003d imap_check($imap);echo "Кількість повідомлень після додавання :: ". $check>.
";imap_close($imap);?> `
