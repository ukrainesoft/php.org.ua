- [« Список ключових слів](reserved.keywords.md)
- [Предвизначені константи »](reserved.constants.md)

- [PHP Manual](index.md)
- [Список зарезервованих слів](reserved.md)
- Обумовлені класи

## Передбачені класи

У цьому розділі перераховуються стандартні визначені класи.
Різноманітні модулі визначають інші класи, які описані в
відповідної довідкової інформації.

### Стандартні певні класи

Ці класи визначені разом зі стандартним набором функцій, що йдуть
збиранням PHP.

[Directory](class.directory.md)
Створюється функцією [dir()](function.dir.md).

**stdClass**
Створюється [наведенням типу до
об'єкту](language.types.object.md#language.types.object.casting).

**\_\_PHP_Incomplete_Class**
Можливо, створюється функцією [unserialize()](function.unserialize.md).

[Exception](class.exception.md)

[ErrorException](class.errorexception.md)

[php_user_filter](class.php-user-filter.md)

[Closure](class.closure.md)
Обумовлений остаточний клас [Closure](class.closure.md),
використовується для внутрішньої реалізації [анонімних
функцій] (functions.anonymous.md).

[Generator](class.generator.md)
Обумовлений остаточний клас [Generator](class.generator.md),
використовується для представлення [генераторів](language.generators.md).

[ArithmeticError](class.arithmeticerror.md)

[AssertionError](class.assertionerror.md)

[DivisionByZeroError](class.divisionbyzeroerror.md)

[Error](class.error.md)

[Throwable](class.throwable.md)

[ParseError](class.parseerror.md)

[TypeError](class.typeerror.md)

### Спеціальні класи

Наступні ідентифікатори не можуть використовуватись як ім'я
класу, оскільки вони мають спеціальне призначення.

**self**
[Поточний клас](language.oop5.paamayim-nekudotayim.md).

**static**
[Поточний клас під час
виконання](language.oop5.late-static-bindings.md).

**parent**
[Батьківський клас](language.oop5.paamayim-nekudotayim.md).
