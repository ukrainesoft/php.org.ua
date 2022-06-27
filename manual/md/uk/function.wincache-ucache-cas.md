- [«wincache_ucache_add](function.wincache-ucache-add.md)
- [wincache_ucache_clear »](function.wincache-ucache-clear.md)

- [PHP Manual](index.md)
- [Функції WinCache](ref.wincache.md)
- Порівнює змінну зі старим значенням та надає їй нове
значення

#wincache_ucache_cas

(PECL wincache \>u003d 1.1.0)

wincache_ucache_cas — Порівнює змінну зі старим значенням і
надає їй нового значення

### Опис

**wincache_ucache_cas**(string `$key`, int `$old_value`, int
`$new_value`): bool

Порівнює змінну, пов'язану з `key` з `old_value` і, якщо вона
збігається, надає їй `new_value`.

### Список параметрів

`key`
`key`, який використовувався для збереження змінної у кеш. `key`
чутливий до регістру.

`old_value`
Старе значення змінної, яку вказує `key` в
користувальницькому кеші. Значення має бути типу `long`, інакше функція
поверне **`false`**.

`new_value`
Нове значення, яке буде присвоєно покажчику змінної `key`, якщо
буде знайдено збіг. Значення має бути типу `long`, інакше
функція поверне **`false`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **wincache_ucache_cas()****

`<?phpwincache_ucache_set('counter', 2922);var_dump(wincache_ucache_cas('counter', 2922, 1));var_dump(wincache_ucache_get('counter'));?> `

Результат виконання цього прикладу:

bool(true)
int(1)

### Дивіться також

- [wincache_ucache_inc()](function.wincache-ucache-inc.md) -
Збільшує значення, пов'язане з ключем
- [wincache_ucache_dec()](function.wincache-ucache-dec.md) -
Зменшує значення, пов'язане з ключем
