- [« ReflectionExtension::getName](reflectionextension.getname.md)
- [ReflectionExtension::info »](reflectionextension.info.md)

- [PHP Manual](index.md)
- [ReflectionExtension](class.reflectionextension.md)
- Отримання версії модуля

# ReflectionExtension::getVersion

(PHP 5, PHP 7, PHP 8)

ReflectionExtension::getVersion — Отримання версії модуля

### Опис

public **ReflectionExtension::getVersion**(): ?string

Отримує версію модуля.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Версія модуля, або **`null`** якщо у модуля немає версії.

### Приклади

**Приклад #1 Приклад використання **ReflectionExtension::getVersion()****

` <?php$ext u003d new ReflectionExtension('mysqli');var_dump($ext->getVersion());?> `

Результатом виконання цього прикладу буде щось подібне:

string(3) "0.1"

### Дивіться також

- [ReflectionExtension::info()](reflectionextension.info.md) - Висновок
інформації про модуль
