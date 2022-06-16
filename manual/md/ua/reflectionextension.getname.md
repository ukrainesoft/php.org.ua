- [«
ReflectionExtension::getINIEntries](reflectionextension.getinientries.md)
- [ReflectionExtension::getVersion
»](reflectionextension.getversion.md)

- [PHP Manual](index.md)
- [ReflectionExtension](class.reflectionextension.md)
- Отримання імені модуля

# ReflectionExtension::getName

(PHP 5, PHP 7, PHP 8)

ReflectionExtension::getName — Отримання імені модуля

### Опис

public **ReflectionExtension::getName**(): string

Отримує ім'я модуля.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ім'я модуль.

### Приклади

**Приклад #1 Приклад використання **ReflectionExtension::getName()****

` <?php$ext u003d new ReflectionExtension('mysqli');var_dump($ext->getName());?> `

Результатом виконання цього прикладу буде щось подібне:

string(6) "mysqli"

### Дивіться також

- [ReflectionExtension::getClassNames()](reflectionextension.getclassnames.md) -
Отримання імен класів
