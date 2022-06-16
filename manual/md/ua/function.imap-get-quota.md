- [« imap_gc](function.imap-gc.md)
- [imap_get_quotaroot »](function.imap-get-quotaroot.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Отримати налаштування рівня квоти та статистику використання поштових
ящиків

#imap_get_quota

(PHP 4 \>u003d 4.0.5, PHP 5, PHP 7, PHP 8)

imap_get_quota — Отримати налаштування рівня квоти та статистику
використання поштових скриньок

### Опис

**imap_get_quota**([IMAP\Connection](class.imap-connection.md)
`$imap`, string `$quota_root`): array\|false

Повертає налаштування рівня квоти та статистику використання поштових
ящиків.

Версія даної функції для використання звичайними користувачами, не
адміністраторами -
[imap_get_quotaroot()](function.imap-get-quotaroot.md).

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`quota_root`
`quota_root` має відповідати формату `user.name`, де name - ім'я
ящика, інформація щодо якого потрібна.

### Значення, що повертаються

Повертає асоціативний масив цілих чисел із ключами "limit" та "usage".
Число з ключем "limit" визначає максимальний допустимий розмір скриньки.
Число із ключем "usage" визначає поточний рівень використання. В
у разі виникнення помилки поверне **`false`**.

Починаючи з PHP 4.3 і вище, функція точніше відповідає стандарту,
описаному в [»RFC2087](http://www.faqs.org/rfcs/rfc2087). Значення
повертається масиву змінилося для підтримки необмеженого
кількості ресурсів, що повертаються (тобто повідомлень або підпапок), де
кожен названий ресурс буде представлений індивідуальним масивом.
Кожен елемент масиву міститиме інший масив до ключів "limit" і
"usage".

Для забезпечення зворотної сумісності, оригінальний метод доступу
ще доступний, хоча передбачається це виправити.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **imap_get_quota()****

` <?php$mbox u003d imap_open("{imap.example.org}", "mailadmin", "password", OP_HALFOPEN)       or die("не удалося підключитися: " _map_last$| mbox, "user.kalowsky");if(is_array($quota_value)) {    echo "Рівень використання: " . $quota_value['usage']; echo "Розмір ящика: " . $quota_value['limit'];}imap_close($mbox);?> `

**Приклад #2 Приклад використання **imap_get_quota()** у PHP 4.3 та вище**

` <?php$mbox u003d imap_open("{imap.example.org}", "mailadmin", "password", OP_HALFOPEN)      or die("не удалося підключитися: " _map_last$| mbox, "user.kalowsky");if(is_array($quota_values)) {   $storage u003d $quota_values['STORAGE']; echo "Рівень використання STORAGE: " . $storage['usage']; echo "Максимальний розмір STORAGE: " . $storage['limit']; $messageu003du003d$quota_values['MESSAGE']; echo "Рівень використання MESSAGE: " . $message['usage']; echo "Максимальний розмір MESSAGE: " . $message['limit']; /* ... */}imap_close($mbox);?> `

### Примітки

Ця функція доступна лише при використанні бібліотеки c-client2000
чи новіше.

Заданий потік `imap` має бути відкритим під адміністративним
користувачем.

### Дивіться також

- [imap_open()](function.imap-open.md) - Відкриває потік IMAP до
поштовій скриньці
- [imap_set_quota()](function.imap-set-quota.md) - Встановити квоту
для заданої поштової скриньки
- [imap_get_quotaroot()](function.imap-get-quotaroot.md) - Отримати
налаштування квоти для кожного користувача
