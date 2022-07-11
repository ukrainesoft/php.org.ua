- [«floatval](function.floatval.md)
- [get_defined_vars »](function.get-defined-vars.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Повертає ім'я типу змінної у вигляді, що підходить для налагодження

#get_debug_type

(PHP 8)

get_debug_type — Повертає ім'я типу змінної у вигляді, що підходить для
налагодження

### Опис

**get_debug_type**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): string

Повертає перетворене ім'я змінної PHP `value`. Функція
перетворює об'єкти в ім'я їхнього класу, ресурси - в ім'я їхнього типу ресурсу, а
скалярні значення - у загальноприйняте ім'я їх типу, яке б
використовувалося в оголошенні типів.

Функція відрізняється від [gettype()](function.gettype.md) тим, що
повертає імена типів, які більше відповідають фактичному
використання, а не ті, що присутні з історичних причин.

### Список параметрів

`value`
Змінна, яка перевіряє тип.

### Значення, що повертаються

Можливі значення для рядка, що повертається:

| Тип + Стан | Значення, що повертається | Зауваження |
|--------------------------------------|---------- -------------------------------------------------- -----------|-------------------------------------- -------------------------------------------------- ------|
| null | "null" | \- |
| Логічні значення (true чи false) | "bool" | \- |
| Цілі числа "int" | \- |
| Числа з плаваючою точкою "float" | \- |
| Рядки | ``string'` | \- |
| Масиви | ``array'` | \- |
| Ресурси "resource (resourcename)" | \- |
| Ресурси (закриті) "resource (closed)" | Приклад: файловий потік після закриття з допомогою fclose. |
| Об'єкти іменованих класів Повне ім'я класу, включаючи його простір назв, наприклад, `Foo\Bar` | \- |
| Об'єкти анонімних класів "class@anonymous" | Анонімні класи - це класи, створені за допомогою синтаксису $x u003d new class {...}. |

### Приклади

**Приклад #1 Приклад використання **get_debug_type()****

`<?phpecho get_debug_type(null) . PHP_EOL;echo get_debug_type(true) . PHP_EOL;echo get_debug_type(1) . PHP_EOL;echo get_debug_type(0.1) . PHP_EOL;echo get_debug_type("foo") . PHP_EOL;echo get_debug_type([]) . PHP_EOL;$fp u003dfopen(__FILE__, 'rb');echo get_debug_type($fp) . PHP_EOL;fclose($fp);echo get_debug_type($fp) . PHP_EOL;echo get_debug_type(new stdClass) . PHP_EOL;echo get_debug_type(new class {}) . PHP_EOL;?> `

Результатом виконання цього прикладу буде щось подібне:

null
bool
int
float
string
array
resource (stream)
resource (closed)
stdClass
class@anonymous

### Дивіться також

- [gettype()](function.gettype.md) - Повертає тип змінної
- [get_class()](function.get-class.md) - Повертає ім'я класу, до
якому належить об'єкт
