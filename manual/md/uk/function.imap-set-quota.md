- [« imap_search](function.imap-search.md)
- [imap_setacl »](function.imap-setacl.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Встановити квоту для заданої поштової скриньки

#imap_set_quota

(PHP 4 \>u003d 4.0.5, PHP 5, PHP 7, PHP 8)

imap_set_quota — Встановити квоту для заданої поштової скриньки

### Опис

**imap_set_quota**([IMAP\Connection](class.imap-connection.md)
`$imap`, string `$quota_root`, int `$mailbox_size`): bool

Встановлює верхню межу квоти для заданої поштової скриньки

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`quota_root`
Поштова скринька, для якої встановлюється квота у вигляді рядка в
формат IMAP: `user.name`.

`mailbox_size`
Максимальний розмір (у кілобайтах) для `quota_root`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **imap_set_quota()****

` <?php$mbox u003d imap_open("{imap.example.org:143}", "mailadmin", "password");if (!imap_set_quota($mbox, "user.kalowsky", 3000)) {      Помилка при установці квоти
";   return;}imap_close($mbox);?> `

### Примітки

В даний момент ця функція підтримується лише при використанні
бібліотеки c-client2000 або свіжішою.

Заданий imap повинен бути відкритий від імені адміністратора поштового
сервера, інакше функція завершиться помилкою.

### Дивіться також

- [imap_open()](function.imap-open.md) - Відкриває потік IMAP до
поштовій скриньці
- [imap_get_quota()](function.imap-get-quota.md) - Отримати
налаштування рівня квоти та статистику використання поштових скриньок
