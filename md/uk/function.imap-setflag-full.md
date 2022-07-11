- [« imap_setacl](function.imap-setacl.md)
- [imap_sort »](function.imap-sort.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Встановити прапори на повідомлення

#imap_setflag_full

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_setflag_full — Встановити прапорці на повідомлення

### Опис

**imap_setflag_full**(
[IMAP\Connection](class.imap-connection.md) `$imap`,
string `$sequence`,
string `$flag`,
int `$options` u003d 0
): bool

Повідомляє сервер, що треба додати прапор `flag` до набору прапорів,
заданим у `sequence` повідомленням.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`sequence`
Послідовність номерів повідомлень. Ви можете перерахувати кілька
повідомлень, використовуючи як роздільник кому (`X,Y`), або задати
інтервал повідомлень за допомогою двокрапки `X:Y`

`flag`
Прапори, які можна встановити: `Seen`, `Answered`, `\Flagged`,
`\Deleted` та `\Draft`, як визначено в
[»RFC2060](http://www.faqs.org/rfcs/rfc2060).

`options`
Бітова маска, яка може приймати лише одне значення:

- **`ST_UID`** - послідовність повідомлень задана не їх номерами,
а за допомогою UID

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **imap_setflag_full()****

` <?php$mbox u003dimap_open("{imap.example.org:143}", "username", "password")     or die("не вдалося підключитися: " . imap_last_error())$$us mbox, "2,5", "Seen Flagged");echo gettype($status) . "
";echo $status . "
";imap_close($mbox);?> `

### Дивіться також

- [imap_clearflag_full()](function.imap-clearflag-full.md) - Зняти з
повідомлення встановлені прапори
