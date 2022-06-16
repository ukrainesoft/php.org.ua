- [« imap_get_quota](function.imap-get-quota.md)
- [imap_getacl »](function.imap-getacl.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Отримати налаштування квоти для кожного користувача

#imap_get_quotaroot

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

imap_get_quotaroot — Отримати налаштування квоти для кожного користувача

### Опис

**imap_get_quotaroot**([IMAP\Connection](class.imap-connection.md)
`$imap`, string `$mailbox`): array\|false

Повертає параметри квоти для кожного користувача. Число з ключем
"limit" визначає максимальний допустимий розмір скриньки. Число з ключем
"Usage" визначає поточний рівень використання.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`mailbox`
`mailbox` має містити ім'я скриньки (наприклад, INBOX).

### Значення, що повертаються

Повертає масив цілих чисел, які стосуються конкретного користувача. В
як ключі масиву використовуються імена ресурсів, а як
значень масиви з ключами "limit" та "usage".

У разі виникнення помилки ця функція поверне **`false`** та масив
інформації про з'єднання у разі отримання відповіді, яку вона не зможе
розібрати.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **imap_get_quotaroot()****

` <?php$mbox u003d imap_open("{imap.example.org}", "kalowsky", "password", OP_HALFOPEN)      or die("не удалося підключитися: " imap_las| mbox, "INBOX");if (is_array($quota)) {   $storage u003d $quota['STORAGE']; echo "Рівень використання STORAGE: " . $storage['usage']; echo "Максимальний розмір STORAGE: " . $storage['limit']; $messageu003du003d$quota['MESSAGE']; echo "Рівень використання MESSAGE: " . $message['usage']; echo "Максимальний розмір MESSAGE: " . $message['limit']; /* ... */}imap_close($mbox);?> `

### Примітки

Ця функція доступна лише при використанні бібліотеки c-client2000
чи новіше.

Заданий потік `imap` повинен бути відкритий під користувачем, чия скринька ви
хочете перевірити.

### Дивіться також

- [imap_open()](function.imap-open.md) - Відкриває потік IMAP до
поштовій скриньці
- [imap_set_quota()](function.imap-set-quota.md) - Встановити квоту
для заданої поштової скриньки
- [imap_get_quota()](function.imap-get-quota.md) - Отримати
налаштування рівня квоти та статистику використання поштових скриньок
