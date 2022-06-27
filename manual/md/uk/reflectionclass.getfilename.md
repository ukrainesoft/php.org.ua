- [«
ReflectionClass::getExtensionName](reflectionclass.getextensionname.md)
- [ReflectionClass::getInterfaceNames
»](reflectionclass.getinterfacenames.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Повертає ім'я файлу, в якому визначено клас

# ReflectionClass::getFileName

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getFileName — Повертає ім'я файлу, в якому визначено
клас

### Опис

public **ReflectionClass::getFileName**(): string\|false

Повертає ім'я файлу, у якому визначено клас.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ім'я файлу, у якому визначено клас. Якщо клас визначений у
ядрі PHP або в модулі PHP, повертає **`false`**.

### Дивіться також

- [ReflectionClass::getExtensionName()](reflectionclass.getextensionname.md) -
Повертає ім'я модуля, що визначає клас
