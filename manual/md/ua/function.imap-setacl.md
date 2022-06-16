- [«imap_set_quota](function.imap-set-quota.md)
- [imap_setflag_full »](function.imap-setflag-full.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Встановлення ACL для заданої поштової скриньки

# imap_setacl

(PHP 4 \>u003d 4.0.7, PHP 5, PHP 7, PHP 8)

imap_setacl — Встановлення ACL для заданої поштової скриньки

### Опис

**imap_setacl**(
[IMAP\Connection](class.imap-connection.md) `$imap`,
string `$mailbox`,
string `$user_id`,
string `$rights`
): bool

Встановлює ACL для заданої поштової скриньки.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`mailbox`
Ім'я поштової скриньки, докладніше дивіться в описі
[imap_open()](function.imap-open.md)

**Увага**
Якщо
[imap.enable_insecure_rsh](imap.configuration.md#ini.imap.enable-insecure-rsh)
не вимкнено, то передача в цей параметр не перевірених даних *не
безпечна*.

`user_id`
Ідентифікатор користувача, якому видаються права.

`rights`
Права для видачі. Передача порожнього рядка означає видалення всіх прав.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Примітки

В даний момент ця функція підтримується лише при використанні
бібліотеки c-client2000 або новішої версії.

### Дивіться також

- [imap_getacl()](function.imap-getacl.md) - Отримати ACL для
заданої поштової скриньки
