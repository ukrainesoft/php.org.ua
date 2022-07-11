- [«\_\_autoload](function.autoload.md)
- [class_exists »](function.class-exists.md)

- [PHP Manual](index.md)
- [Функції роботи з класами та об'єктами](ref.classobj.md)
- створює псевдонім для зазначеного класу

#class_alias

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

class_alias — Створює псевдонім для вказаного класу

### Опис

**class_alias**(string `$class`, string `$alias`, bool `$autoload` u003d
**`true`**): bool

Створює псевдонім `alias` для користувача класу `class`. новий
клас із псевдонімом буде таким самим, як і оригінальний клас.

### Список параметрів

`class`
Оригінальний клас.

`alias`
Ім'я псевдоніму для класу.

`autoload`
Чи потрібно автоматично підвантажувати оригінальний клас, якщо він не був
знайдено.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **class_alias()****

` <?phpclass foo { }class_alias('foo', 'bar');$a u003d new foo;$b u003d new bar;// об'єкти однаковіvar_dump($a u003du003du003d $b, $a u003du003du003du003d ;var_dump($a instanceof $b);// класи однакові var_dump($a instanceof foo);var_dump($a instanceof bar);var_dump($b instanceof foo);var_dump($b 

Результат виконання цього прикладу:

bool(true)
bool(false)
bool(true)
bool(true)
bool(true)
bool(true)
bool(true)

### Дивіться також

- [get_parent_class()](function.get-parent-class.md) - Повертає
ім'я батьківського класу для об'єкта чи класу
- [is_subclass_of()](function.is-subclass-of.md) - Перевіряє,
чи містить об'єкт у своєму дереві предків зазначений клас чи прямо
реалізує його
