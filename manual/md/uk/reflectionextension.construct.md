- [« ReflectionExtension::\_\_clone](reflectionextension.clone.md)
- [ReflectionExtension::export »](reflectionextension.export.md)

- [PHP Manual](index.md)
- [ReflectionExtension](class.reflectionextension.md)
- Створює об'єкт класу ReflectionExtension

# ReflectionExtension::\_\_construct

(PHP 5, PHP 7, PHP 8)

ReflectionExtension::\_\_construct — Створює об'єкт класу
ReflectionExtension

### Опис

public **ReflectionExtension::\_\_construct**(string `$name`)

Створює об'єкт (object) класу
[ReflectionExtension](class.reflectionextension.md).

### Список параметрів

`name`
Ім'я модуль.

### Приклади

**Приклад #1 Приклад використання
[ReflectionExtension](class.reflectionextension.md)**

` <?php$ext u003d new ReflectionExtension('Reflection');printf('Модуль: %s (версія: %s)', $ext->getName(), $ext->getVersion());?> `

Результатом виконання цього прикладу буде щось подібне:

Модуль: Reflection (версія: $ Revision $)

### Дивіться також

- [ReflectionExtension::info()](reflectionextension.info.md) - Висновок
інформації про модуль
- [Конструктори](language.oop5.decon.md#language.oop5.decon.constructor)
