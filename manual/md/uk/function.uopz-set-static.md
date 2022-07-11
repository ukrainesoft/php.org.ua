- [«uopz_set_return](function.uopz-set-return.md)
- [uopz_undefine »] (function.uopz-undefine.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Встановлює статичні змінні області видимості функції або
методу

#uopz_set_static

(PECL uopz 5, PECL uopz , PECL uopz 7)

uopz_set_static — Встановлює статичні змінні в області
видимості функції чи методу

### Опис

**uopz_set_static**(string `$function`, array `$static`): void

**uopz_set_static**(string `$class`, string `$function`, array
`$static`): void

Встановлює статичні змінні області видимості функції або
методу.

### Список параметрів

`class`
Назва класу.

`function`
Ім'я функції чи методу.

`static`
Асоціативний масив (array) імен змінних, зіставлених із них
значеннями.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Просте використання **uopz_set_static()****

` <?phpfunction foo() {    static $bar u003d 'baz'; var_dump($bar);}uopz_set_static('foo', ['bar' u003d> 'qux']);foo();?> `

Результат виконання цього прикладу:

string(3) "qux"

### Дивіться також

- [uopz_get_static()](function.uopz-get-static.md) - Повертає
статичні змінні в області видимості функції або методу
