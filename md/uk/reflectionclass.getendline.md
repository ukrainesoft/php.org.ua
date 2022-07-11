- [«
ReflectionClass::getDocComment](reflectionclass.getdoccomment.md)
- [ReflectionClass::getExtension »](reflectionclass.getextension.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Повертає номер останнього рядка

# ReflectionClass::getEndLine

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getEndLine — Повертає номер останнього рядка

### Опис

public **ReflectionClass::getEndLine**(): int\|false

Повертає номер останнього рядка з визначення користувача
класу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Номер останнього рядка з визначення користувача класу або
**`false`**, якщо номер не відомий.

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::getEndLine()****

` <?php// Тестовий класclass TestClass { }$rc u003d new ReflectionClass('TestClass');echo $rc->getEndLine();?> `

Результат виконання цього прикладу:

3

### Дивіться також

- [ReflectionClass::getStartLine()](reflectionclass.getstartline.md) -
Повертає номер початкового рядка
