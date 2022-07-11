- [«is_bool](function.is-bool.md)
- [is_countable »](function.is-countable.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Перевіряє, що значення може бути викликане як функція в поточній
області видимості

#is_callable

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

is_callable — Перевіряє, що значення може бути викликане як функція в
поточної області видимості

### Опис

**is_callable**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, bool `$syntax_only` u003d **`false`**, string `&$callable_name` u003d
**`null`**): bool

Перевіряє, що значення є
[callable](language.types.callable.md).

### Список параметрів

`value`
Значення для перевірки

`syntax_only`
Якщо дорівнює **`true`**, функція лише перевіряє, що `value` може бути
функцією чи методом. У цьому випадку відхилятимуться змінні,
які не є ні рядком, ні масивом з коректною структурою для
використання як callback-функції. Коректна структура масиву
передбачає наявність лише двох елементів, перший з яких – об'єкт
або рядок, а другий – лише рядок.

`callable_name`
Отримує ім'я, що викликається. У прикладі нижче це "someClass:: someMethod".
Слід пам'ятати, що хоча запис someClass::SomeMethod() означає
викликаний статичний метод, це негаразд.

### Значення, що повертаються

Повертає **`true`**, якщо `value` може бути викликана, або **`false`**
в іншому випадку.

### Приклади

**Приклад #1 Приклад використання **is_callable()****

` <?php// Як перевірити змінну, щоб дізнатися, може або вона бути викликана//  як функція.//// Проста змінна, містить ім'яфункції/' is_callable($functionVariable, false, $callable_name)); //bool(true)echo$callable_name,"
;; ($methodVariable, true, $callable_name));  //  bool(true)echo $callable_name, "
";  // someClass::someMethod?> `

**Приклад #2 **is_callable()** та конструктори**

Функція **is_callable()** не рахує конструктори за callable.

` <?phpclass Foo{    public function __construct() {}    public function foo() {}}var_dump(   is_callable(array('Foo', '__construct')' | ); `

Результат виконання цього прикладу:

bool(false)
bool(false)

### Примітки

- Об'єкт завжди є callable, якщо він реалізує
[\_\_invoke()](language.oop5.magic.md#object.invoke), і цей метод
доступний у поточній області видимості.
- Ім'я класу є callable, якщо воно реалізує
[\_\_callStatic()](language.oop5.overloading.md#object.callstatic)
- Якщо об'єкт реалізує
[\_\_call()](language.oop5.overloading.md#object.call), тоді ця
функція поверне **`true`** для будь-якого методу цього об'єкта, навіть якщо
метод не визначено.
- Функція може запускати автозавантаження, якщо викликається з ім'ям
класу.

### Дивіться також

- [function_exists()](function.function-exists.md) - Повертає
true, якщо зазначена функція визначена
- [method_exists()](function.method-exists.md) - Перевіряє,
чи існує метод у даному класі
