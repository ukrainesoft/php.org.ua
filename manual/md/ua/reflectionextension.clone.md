- [« ReflectionExtension](class.reflectionextension.md)
- [ReflectionExtension::\_\_construct
»](reflectionextension.construct.md)

- [PHP Manual](index.md)
- [ReflectionExtension](class.reflectionextension.md)
- клонує об'єкт

# ReflectionExtension::\_\_clone

(PHP 5, PHP 7, PHP 8)

ReflectionExtension::\_\_clone — Клонує об'єкт

### Опис

private **ReflectionExtension::\_\_clone**(): void

Метод clone запобігає клонуванню об'єкта. Об'єкти reflection не
можуть бути клоновані.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Метод нічого не повертає, у разі виклику виникає рокова помилка.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------|
| 8.1.0 | Метод не є остаточним (final). |

### Дивіться також

- [ReflectionExtension::\_\_construct()](reflectionextension.construct.md) -
Створює об'єкт класу ReflectionExtension
- [Клонування об'єктів](language.oop5.cloning.md)
