- [« Функції APCu](ref.apcu.md)
- [apcu_cache_info »](function.apcu-cache-info.md)

- [PHP Manual](index.md)
- [Функції APCu](ref.apcu.md)
- Додати змінну в кеш

#apcu_add

(PECL apcu \>u003d 4.0.0)

apcu_add — Додати змінну до кешу

### Опис

**apcu_add**(string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$var`, int `$ttl` u003d 0): bool

**apcu_add**(array `$values`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$unused` u003d NULL, int `$ttl` u003d 0): array

Додає змінну в кеш, якщо її ще немає.

> **Примітка**: На відміну від багатьох інших механізмів PHP, змінні,
> збережені **apcu_add()**, зберігаються між запитами, доки їх не
> видалять із кеша.

### Список параметрів

`key`
Ім'я, під яким буде збережено змінну. Значення `key` є
унікальним для кеша, так що спроба використовувати **apcu_add()** для
збереження змінної з ключем, що вже існує, не перезапише
запис, а поверне **`false`**. (Це єдина різниця між
**apcu_add()** та [apcu_store()](function.apcu-store.md).)

`var`
Змінна для збереження

`ttl`
Час життя; змінна `var` зберігатиметься протягом `ttl` секунд.
Як тільки `ttl` секунд пройдуть, змінна буде видалена з кеша (при
наступний запит). Якщо параметр `ttl` не заданий (або `ttl` заданий як
`0`), значення буде зберігатися доки не буде видалено явно, або по
технічній причині (очищення кешу, перезапуск тощо)

`values`
Імена у ключах, змінні у значеннях.

### Значення, що повертаються

Повертає **`true`**, якщо вдалося занести значення в кеш, інакше
у разі повертає **`false`**. Другий тип синтаксису повертає масив з
ключами, якими сталася помилка.

### Приклади

**Приклад #1 Приклад використання **apcu_add()****

` <?php$bar u003d 'BAR';apcu_add('foo', $bar);var_dump(apcu_fetch('foo'));echo "
";$bar u003d 'NEVER GETS SET';apcu_add('foo', $bar);var_dump(apcu_fetch('foo'));echo "
";?> `

Результат виконання цього прикладу:

string(3) "BAR"
string(3) "BAR"

### Дивіться також

- [apcu_store()](function.apcu-store.md) - Кешує змінну
- [apcu_fetch()](function.apcu-fetch.md) - Витягує з кеша
збережену змінну
- [apcu_delete()](function.apcu-delete.md) - Видаляє збережене
значення з кешу
