- [«is_string](function.is-string.md)
- [print_r »](function.print-r.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Визначає, чи була встановлена змінна значенням, відмінним від
null

# isset

(PHP 4, PHP 5, PHP 7, PHP 8)

isset - Визначає, чи була встановлена змінна значенням, відмінним
від **`null`**

### Опис

**isset**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$var`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$vars`): bool

Визначає, чи була встановлена змінна значенням відмінним від
**`null`**

Якщо змінну було видалено за допомогою [unset()](function.unset.md),
вона більше не вважається встановленою.

**isset()** поверне **`false`** при перевірці змінної яка була
встановлена значенням **`null`**. Також врахуйте, що NULL-символ (`````)
не дорівнює константі **`null`** у PHP.

Якщо було передано кілька параметрів, то **isset()** поверне
**`true`** лише у тому випадку, якщо всі параметри визначені. Перевірка
відбувається зліва направо і закінчується, як тільки зустрінеться
невизначена змінна.

### Список параметрів

`var`
Перевірена змінна.

`vars`
Наступні змінні.

### Значення, що повертаються

Повертає **`true`**, якщо `var` визначена та її значення відмінно від
**`null`**, і **`false`** в іншому випадку.

### Приклади

**Приклад #1 Приклад використання **isset()****

` <?php$var u003d '';// Перевірка верне TRUE, тому текст буде надрукований.if (isset($var)) {    echo "Ця змінна визначена, нами| | використовуємо var_dump для висновку// значення, повертаного isset().$a u003d "test";$b u003d "anothertest";var_dump(isset($a)); // TRUEvar_dump(isset($a, $b)); // TRUEunset ($a);var_dump(isset($a)); //FALSEvar_dump(isset($a, $b)); // FALSE$foo u003d NULL;var_dump(isset($foo)); // FALSE?> `

Функція також працює з елементами масивів:

` <?php$a u003d array ('test' u003d> 1, 'hello' u003d> NULL, 'pie' u003d> array('a' u003d> 'apple'));var_dump(isset($a['test '])); //TRUEvar_dump(isset($a['foo'])); //FALSEvar_dump(isset($a['hello'])); // FALSE// Элемент з ключом 'hello' рівний NULL, тому він вважається невизначеним// Якщо ви хотіте перевірити існування ключів з_exist // TRUE// Перевірка вкладених елементів масиваvar_dump(isset($a['pie']['a'])); // TRUEvar_dump(isset($a['pie']['b'])); // FALSEvar_dump(isset($a['cake']['a']['b'])); // FALSE?> `

**Приклад #2 **isset()** та рядкові індекси**

` <?php$expected_array_got_string u003d 'somestring';var_dump(isset($expected_array_got_string['some_key']));var_dump(isset($expected_array_got_string[0]));var_dump(isset($expected_array) ;var_dump(isset($expected_array_got_string[0.5]));var_dump(isset($expected_array_got_string['0.5']));var_dump(isset($expected_array_got_string['0 Mostel'])));?> `

Результат виконання цього прикладу:

bool(false)
bool(true)
bool(true)
bool(true)
bool(false)
bool(false)

### Примітки

**Увага**

**isset()** працює тільки зі змінними, тому передача як
параметрів будь-яких інших значень призведе до помилки парсингу. Для
перевірки визначення [констант](language.constants.md) використовуйте
функцію [defined()](function.defined.md).

> **Примітка**: Оскільки це мовна конструкція, а не функція, вона
> не може викликатися за допомогою [змінних
> функцій](functions.variable-functions.md) або [іменованих
> аргументів](functions.arguments.md#functions.named-arguments).

> **Примітка**:
>
> При використанні **isset()** на недоступних властивостях об'єкта, буде
> викликатись перевантажений метод
> [\_\_isset()](language.oop5.overloading.md#object.isset), якщо він
> Існує.

### Дивіться також

- [empty()](function.empty.md) - Перевіряє, чи порожня змінна
- [\_\_isset()](language.oop5.overloading.md#object.isset)
- [unset()](function.unset.md) - Видаляє змінну
- [defined()](function.defined.md) - Перевіряє існування
зазначеної іменованої константи
- [Таблиця порівняння типів](types.comparisons.md)
- [array_key_exists()](function.array-key-exists.md) - Перевіряє,
чи присутній у масиві зазначений ключ чи індекс
- [is_null()](function.is-null.md) - Перевіряє, чи є значення
змінною рівним null
- Оператор управління помилками
[@](language.operators.errorcontrol.md)
