- [«
IntlDateFormatter::setTimeZone](intldateformatter.settimezone.md)
- [ResourceBundle::count »](resourcebundle.count.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- Клас ResourceBundle

# Клас ResourceBundle

(PHP 5 \>u003d 5.3.2, PHP 7, PHP 8, PECL intl \>u003d 2.0.0)

## Вступ

Локалізовані програмні продукти часто потребують наборів даних
підготовлених залежно від поточної локалі, наприклад: повідомлення,
етикетки, шаблони форматування. Механізм ресурсів ICU дозволяє задати
набори ресурсів, які програма може завантажити в залежності від
поточної локалі та використовувати уніфікованим, не залежним від локалі,
чином.

Цей клас реалізує доступ до файлів ресурсів ICU. Ці файли є
бінарними масивами даних, які ICU використовує для зберігання
локалізованих даних.

Пакет ресурсів ICU може містити прості та складні ресурси. Складні
ресурси – це контейнери, які можуть бути індексовані як числами
так і рядками (аналогічно до масивів PHP). Прості ресурси можуть бути
наступних типів: рядки, цілі, бінарні поля даних та цілочислові
масиви.

**ResourceBundle** підтримує прямий доступ до даних через синтаксис
доступу до масивів та ітеруватися через
[foreach](control-structures.foreach.md), так само як і доступ через
методи. В результаті буде отримано значення PHP для простих ресурсів та
об'єкти **ResourceBundle** для складних. Усі ресурси доступні лише для
читання.

## Огляд класів

class **ResourceBundle** implements
[IteratorAggregate](class.iteratoraggregate.md),
[Countable](class.countable.md) {

/\* Методи \*/

public [\_\_construct](resourcebundle.create.md)(?string `$locale`,
?string `$bundle`, bool `$fallback` u003d **`true`**)

public [count](resourcebundle.count.md)(): int

public static [create](resourcebundle.create.md)(?string `$locale`,
?string `$bundle`, bool `$fallback` u003d **`true`**):
?[ResourceBundle](class.resourcebundle.md)

public [getErrorCode](resourcebundle.geterrorcode.md)(): int

public [getErrorMessage](resourcebundle.geterrormessage.md)(): string

public [get](resourcebundle.get.md)(string\|int `$index`, bool
`$fallback` u003d **`true`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public static [getLocales](resourcebundle.locales.md)(string
`$bundle`): array\|false

}

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------------------|
| 8.0.0 | Клас **ResourceBundle** тепер реалізує інтерфейс [IteratorAggregate](class.iteratoraggregate.md). Раніше було реалізовано інтерфейс [Traversable](class.traversable.md). |
| 7.4.0 | Клас **ResourceBundle** тепер реалізує інтерфейс [Countable](class.countable.md). |

## Дивіться також

- [»  Менеджер ресурсів
ICU](http://userguide.icu-project.org/locale/resources)
- [» Дані ICU](http://userguide.icu-project.org/icudata)

## Зміст

- [ResourceBundle::count](resourcebundle.count.md) — Отримати
кількість елементів у пакеті
- [ResourceBundle::create](resourcebundle.create.md) — Створити пакет
ресурсів
- [ResourceBundle::getErrorCode](resourcebundle.geterrorcode.md) -
Отримати останній код помилки пакета
- [ResourceBundle::getErrorMessage](resourcebundle.geterrormessage.md)
— Отримати останнє повідомлення про помилку пакета
- [ResourceBundle::get](resourcebundle.get.md) — Отримати дані з
пакету
- [ResourceBundle::getLocales](resourcebundle.locales.md) — Отримати
підтримувані локалі
