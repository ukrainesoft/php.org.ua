- [«wincache_ucache_clear](function.wincache-ucache-clear.md)
- [wincache_ucache_delete »](function.wincache-ucache-delete.md)

- [PHP Manual](index.md)
- [Функції WinCache](ref.wincache.md)
- Зменшує значення, пов'язане з ключем

#wincache_ucache_dec

(PECL wincache \>u003d 1.1.0)

wincache_ucache_dec — Зменшує значення, пов'язане з ключем

### Опис

**wincache_ucache_dec**(string `$key`, int `$dec_by` u003d 1, bool
`&$success` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Зменшує значення, пов'язане з `key` на 1 або як зазначено в `dec_by`.

### Список параметрів

`key`
`key`, який використовувався для збереження змінної у кеш. `key`
чутливий до регістру.

`dec_by`
Значення, на яке має бути зменшена змінна, пов'язана з
`key`. Якщо аргумент є числом з плаваючою точкою, він буде усічений
до найближчого цілого числа. Змінна, пов'язана з `key`, повинна мати
тип `long`, інакше функція завершиться помилкою та поверне **`false`**.

`success`
Буде встановлено значення **`true`** у разі успішного виконання та
**`false`** у разі виникнення помилки.

### Значення, що повертаються

Повертає зменшене значення у разі успішного виконання та
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **wincache_ucache_dec()****

` <?phpwincache_ucache_set('counter', 1);var_dump(wincache_ucache_dec('counter', 2923, $success));var_dump($success);?> `

Результат виконання цього прикладу:

int(2922)
bool(true)

### Дивіться також

- [wincache_ucache_inc()](function.wincache-ucache-inc.md) -
Збільшує значення, пов'язане з ключем
- [wincache_ucache_cas()](function.wincache-ucache-cas.md) -
Порівнює змінну зі старим значенням і надає їй нове
значення
