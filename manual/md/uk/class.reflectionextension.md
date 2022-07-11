- [«
ReflectionZendExtension::\_\_toString](reflectionzendextension.tostring.md)
- [ReflectionExtension::\_\_clone »](reflectionextension.clone.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Клас ReflectionExtension

# Клас ReflectionExtension

(PHP 5, PHP 7, PHP 8)

## Вступ

Клас **ReflectionExtension** повідомляє інформацію про модулі.

## Огляд класів

class **ReflectionExtension** implements
[Reflector](class.reflector.md) {

/\* Властивості \*/

public string `$name`;

/\* Методи \*/

public [\_\_construct](reflectionextension.construct.md)(string
`$name`)

private [\_\_clone](reflectionextension.clone.md)(): void

public static [export](reflectionextension.export.md)(string `$name`,
string `$return` u003d **`false`**): string

public [getClasses](reflectionextension.getclasses.md)(): array

public [getClassNames](reflectionextension.getclassnames.md)(): array

public [getConstants](reflectionextension.getconstants.md)(): array

public [getDependencies](reflectionextension.getdependencies.md)():
array

public [getFunctions](reflectionextension.getfunctions.md)(): array

public [getINIEntries](reflectionextension.getinientries.md)(): array

public [getName](reflectionextension.getname.md)(): string

public [getVersion](reflectionextension.getversion.md)(): ?string

public [info](reflectionextension.info.md)(): void

public [isPersistent](reflectionextension.ispersistent.md)(): bool

public [isTemporary](reflectionextension.istemporary.md)(): bool

public [\_\_toString](reflectionextension.tostring.md)(): string

}

## Властивості

`name`
Ім'я модуль. Значення якості збігається з тим, що повертає метод
[ReflectionExtension::getName()](reflectionextension.getname.md)

## Зміст

- [ReflectionExtension::\_\_clone](reflectionextension.clone.md) -
Клонує об'єкт
- [ReflectionExtension::\_\_construct](reflectionextension.construct.md)
— Створює об'єкт класу ReflectionExtension
- [ReflectionExtension::export](reflectionextension.export.md) -
Експортує модуль
- [ReflectionExtension::getClasses](reflectionextension.getclasses.md)
- Повертає класи
- [ReflectionExtension::getClassNames](reflectionextension.getclassnames.md)
- Отримання імен класів
- [ReflectionExtension::getConstants](reflectionextension.getconstants.md)
- Отримання констант
- [ReflectionExtension::getDependencies](reflectionextension.getdependencies.md)
- Отримання залежностей
- [ReflectionExtension::getFunctions](reflectionextension.getfunctions.md)
— Отримання функцій модуля
- [ReflectionExtension::getINIEntries](reflectionextension.getinientries.md)
— Отримання ini-налаштувань модуля
- [ReflectionExtension::getName](reflectionextension.getname.md) -
Отримання імені модуля
- [ReflectionExtension::getVersion](reflectionextension.getversion.md)
— Отримання версії модуля
- [ReflectionExtension::info](reflectionextension.info.md) - Висновок
інформації про модуль
- [ReflectionExtension::isPersistent](reflectionextension.ispersistent.md)
— Визначає, чи модуль постійний
- [ReflectionExtension::isTemporary](reflectionextension.istemporary.md)
— Визначає, чи модуль є тимчасовим
- [ReflectionExtension::\_\_toString](reflectionextension.tostring.md)
— Перетворення на рядок
