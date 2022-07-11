- [«is_subclass_of](function.is-subclass-of.md)
- [property_exists »](function.property-exists.md)

- [PHP Manual](index.md)
- [Функції роботи з класами та об'єктами](ref.classobj.md)
- Перевіряє, чи існує метод у даному класі

# method_exists

(PHP 4, PHP 5, PHP 7, PHP 8)

method_exists — Перевіряє, чи існує метод у цьому класі

### Опис

**method_exists**(object\|string `$object_or_class`, string `$method`):
bool

Перевіряє, чи існує метод класу у вказаному об'єкті
`object_or_class`.

### Список параметрів

`object_or_class`
Примірник об'єкта або ім'я класу

`method`
Ім'я методу

### Значення, що повертаються

Повертає **`true`**, якщо метод `method` визначений для зазначеного
об'єкта `object_or_class`, інакше повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання **method_exists()****

` <?php$directory u003d new Directory('.');var_dump(method_exists($directory,'read'));?> `

Результат виконання цього прикладу:

bool(true)

**Приклад #2 Приклад статичного використання **method_exists()****

` <?phpvar_dump(method_exists('Directory','read'));?> `

Результат виконання цього прикладу:

bool(true)

### Примітки

> **Примітка**:
>
> Виклик цієї функції використовуватиме всі зареєстровані [функції
> автозавантаження](language.oop5.autoload.md), якщо клас ще не
> відомий.

### Дивіться також

- [function_exists()](function.function-exists.md) - Повертає
true, якщо зазначена функція визначена
- [is_callable()](function.is-callable.md) - Перевіряє, що значення
може бути викликано як функція у поточній області видимості
- [class_exists()](function.class-exists.md) - Перевіряє, чи був він
оголошено клас
