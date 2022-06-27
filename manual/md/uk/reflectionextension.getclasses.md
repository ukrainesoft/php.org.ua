- [« ReflectionExtension::export](reflectionextension.export.md)
- [ReflectionExtension::getClassNames
»](reflectionextension.getclassnames.md)

- [PHP Manual](index.md)
- [ReflectionExtension](class.reflectionextension.md)
- Повертає класи

# ReflectionExtension::getClasses

(PHP 5, PHP 7, PHP 8)

ReflectionExtension::getClasses — Повертає класи

### Опис

public **ReflectionExtension::getClasses**(): array

Повертає перелік класів модуля.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив об'єктів класу [ReflectionClass](class.reflectionclass.md),
одному на кожен клас модуля. Якщо не визначено жодного класу, то
повертається порожній масив.

### Приклади

**Приклад #1 Приклад використання **ReflectionExtension::getClasses()****

` <?php$ext u003d new ReflectionExtension('XMLWriter');var_dump($ext->getClasses());?> `

Результатом виконання цього прикладу буде щось подібне:

array(1) {
["XMLWriter"]u003d>
object(ReflectionClass)#2 (1) {
["name"]u003d>
string(9) "XMLWriter"
}
}

### Дивіться також

- [ReflectionExtension::getClassNames()](reflectionextension.getclassnames.md) -
Отримання імен класів
