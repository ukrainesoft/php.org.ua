- [« ReflectionClass::getEndLine](reflectionclass.getendline.md)
- [ReflectionClass::getExtensionName
»](reflectionclass.getextensionname.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Повертає об'єкт класу ReflectionExtension для модуля,
визначального клас

# ReflectionClass::getExtension

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getExtension — Повертає об'єкт класу
[ReflectionExtension](class.reflectionextension.md) для модуля,
визначального клас

### Опис

public **ReflectionClass::getExtension**():
?[ReflectionExtension](class.reflectionextension.md)

Повертає об'єкт класу
[ReflectionExtension](class.reflectionextension.md) для модуля,
який визначає клас.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Примірник класу [ReflectionExtension](class.reflectionextension.md),
представляє модуль, що визначає клас, або **`null`** для
користувальницьких класів.

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::getExtension()****

` <?php$class u003d new ReflectionClass('ReflectionClass');$extension u003d $class->getExtension();var_dump($extension);?> `

Результат виконання цього прикладу:

object(ReflectionExtension)#2 (1) {
["name"]u003d>
string(10) "Reflection"
}

### Дивіться також

- [ReflectionClass::getExtensionName()](reflectionclass.getextensionname.md) -
Повертає ім'я модуля, що визначає клас
