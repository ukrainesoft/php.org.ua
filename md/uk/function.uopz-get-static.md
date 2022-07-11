- [«uopz_get_return](function.uopz-get-return.md)
- [uopz_implement »](function.uopz-implement.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Повертає статичні змінні з області видимості функції або
методу

#uopz_get_static

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_get_static — Повертає статичні змінні в області видимості
функції або методу

### Опис

**uopz_get_static**(string `$class`, string `$function`): array

**uopz_get_static**(string `$function`): array

Повертає статичні змінні з області видимості функції або
методу.

### Список параметрів

`class`
Назва класу.

`function`
Ім'я функції чи методу.

### Значення, що повертаються

Повертає асоціативний масив (array) імен змінних, зіставлений
з їх поточним значенням у разі успішного виконання, або **`null`**,
якщо функція чи метод не існують.

### Приклади

**Приклад #1 Просте використання **uopz_get_static()****

` <?phpfunction foo() {    static $bar u003d 'baz';}var_dump(uopz_get_static('foo'));?> `

Результат виконання цього прикладу:

array(1) {
["bar"]u003d>
string(3) "baz"
}

### Дивіться також

- [uopz_set_static()](function.uopz-set-static.md) - Встановлює
статичні змінні в області видимості функції або методу
