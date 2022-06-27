- [«uopz_set_mock](function.uopz-set-mock.md)
- [uopz_set_return »](function.uopz-set-return.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Встановлює значення існуючої властивості класу чи екземпляра

#uopz_set_property

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_set_property — Встановлює значення існуючої властивості класу
або екземпляра

### Опис

**uopz_set_property**(string `$class`, string `$property`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

**uopz_set_property**(object `$instance`, string `$property`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

Задає значення статичної властивості класу, якщо заданий
клас (`class`), або значення існуючої властивості екземпляра (поза
залежно від того, чи існує властивість екземпляра), якщо переданий
екземпляр ('instance').

### Список параметрів

`class`
Назва класу.

`instance`
Примірник об'єкта.

`property`
Ім'я якості.

`value`
Значення, яке присвоюється властивістю.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Просте використання **uopz_set_property()****

`<?phpclass Foo {   private static $staticBar; private $bar; public static function testStaticBar() {     return self::$staticBar; }   public function testBar() {     return $this->bar; }}$foo u003d new Foo;uopz_set_property('Foo', 'staticBar', 10);uopz_set_property($foo, 'bar', 100);var_dump(Foo::testStaticBar() ());?> `

Результат виконання цього прикладу:

int(10)

### Дивіться також

- [uopz_get_property()](function.uopz-get-property.md) - Отримує
значення класу або властивість екземпляра
