- [« imap_check](function.imap-check.md)
- [imap_close »](function.imap-close.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Зняти з повідомлення встановлені прапори

#imap_clearflag_full

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_clearflag_full — Зняти з повідомлення встановлені прапори

### Опис

**imap_clearflag_full**(
[IMAP\Connection](class.imap-connection.md) `$imap`,
string `$sequence`,
string `$flag`,
int `$options` u003d 0
): bool

Ця функція сповіщає сховище, що потрібно зняти заданий прапор
`flag` для зазначеної послідовності повідомлень `sequence`.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`sequence`
Послідовність номерів повідомлень. Ви можете перерахувати номери через
кому `X,Y`, або задати діапазон номерів за допомогою двокрапки `X:Y`

`flag`
Прапори, які можна видалити: "Sean", "Answered", "Flagged",
"\\Deleted" та "\\Draft" (як визначено в
[»RFC2060](http://www.faqs.org/rfcs/rfc2060))

`options`
`options` - бітова маска, яка може приймати єдине
значення:

- **`ST_UID`** - аргумент sequence містить список UID, а не
послідовність номерів

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [imap_setflag_full()](function.imap-setflag-full.md) - Встановити
прапори на повідомлення
