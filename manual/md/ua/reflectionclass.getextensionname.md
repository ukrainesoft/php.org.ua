- [« ReflectionClass::getExtension](reflectionclass.getextension.md)
- [ReflectionClass::getFileName »](reflectionclass.getfilename.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Повертає ім'я модуля, що визначає клас

# ReflectionClass::getExtensionName

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getExtensionName — Повертає ім'я модуля, що визначає
клас

### Опис

public **ReflectionClass::getExtensionName**(): string\|false

Повертає ім'я модуля, який визначає клас.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ім'я модуля, що визначає клас, або **`false`** для користувача
класів.

### Приклади

**Приклад #1 Приклад використання
**ReflectionClass::getExtensionName()****

` <?php$class u003d new ReflectionClass('ReflectionClass');$extension u003d $class->getExtensionName();var_dump($extension);?> `

Результат виконання цього прикладу:

string(10) "Reflection"

### Дивіться також

- [ReflectionClass::getExtension()](reflectionclass.getextension.md) -
Повертає об'єкт класу ReflectionExtension для модуля,
визначального клас
