- [«apcu_sma_info](function.apcu-sma-info.md)
- [APCUIterator »](class.apcuiterator.md)

- [PHP Manual](index.md)
- [Функції APCu](ref.apcu.md)
- Кешує змінну

#apcu_store

(PECL apcu \>u003d 4.0.0)

apcu_store - Кешує змінну

### Опис

**apcu_store**(string `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$var`, int `$ttl` u003d 0): bool

**apcu_store**(array `$values`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$unused` u003d NULL, int `$ttl` u003d 0): array

Кешує змінну.

> **Примітка**: На відміну від багатьох інших механізмів PHP, змінні,
> збережені **apcu_store()**, зберігаються між запитами, доки їх не
> видалять із кеша.

### Список параметрів

`key`
Ім'я, під яким буде збережено змінну. Значення `key` є
унікальним для кеша, так що спроба зберегти запис із ключем `key`,
що вже існує, призведе до її перезапису.

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

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Другий тип синтаксису повертає масив з
ключами, якими сталася помилка.

### Приклади

**Приклад #1 Приклад використання **apcu_store()****

` <?php$bar u003d 'BAR';apcu_store('foo', $bar);var_dump(apcu_fetch('foo'));?> `

Результат виконання цього прикладу:

string(3) "BAR"

### Дивіться також

- [apcu_add()](function.apcu-add.md) - Додати змінну до кешу
- [apcu_fetch()](function.apcu-fetch.md) - Витягує з кеша
збережену змінну
- [apcu_delete()](function.apcu-delete.md) - Видаляє збережене
значення з кешу
