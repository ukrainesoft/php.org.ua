- [«uopz_get_mock](function.uopz-get-mock.md)
- [uopz_get_return »](function.uopz-get-return.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Отримує значення класу або властивість екземпляра

#uopz_get_property

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_get_property — Отримує значення класу або властивість екземпляра

### Опис

**uopz_get_property**(string `$class`, string `$property`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

**uopz_get_property**(object `$instance`, string `$property`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Встановлює значення існуючої статичної властивості класу, якщо
вказаний клас (`class`), або значення існуючої властивості екземпляра,
якщо передано екземпляр ('instance').

### Список параметрів

`class`
Назва класу.

`instance`
Примірник об'єкта.

`property`
Ім'я якості.

### Значення, що повертаються

Повертає значення класу або властивість екземпляра, або **`null`**,
якщо властивість не визначено.

### Приклади

**Приклад #1 Просте використання **uopz_get_property()****

`<?phpclass Foo {    private static $staticBar u003d 10; private $bar u003d 100;}$foo u003d new Foo;var_dump(uopz_get_property('Foo', 'staticBar'));var_dump(uopz_get_property($foo, 'bar'));?> `

Результатом виконання цього прикладу буде щось подібне:

int(10)
int(100)

### Дивіться також

- [uopz_set_property()](function.uopz-set-property.md) -
Встановлює значення існуючої властивості класу чи екземпляра
