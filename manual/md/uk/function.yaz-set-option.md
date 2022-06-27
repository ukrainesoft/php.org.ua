- [« yaz_search](function.yaz-search.md)
- [yaz_sort »](function.yaz-sort.md)

- [PHP Manual](index.md)
- [Функції YAZ](ref.yaz.md)
- Встановлює параметри для з'єднання

# yaz_set_option

(PECL yaz \>u003d 0.9.0)

yaz_set_option — Встановлює установки для з'єднання

### Опис

**yaz_set_option**(resource `$id`, string `$name`, string `$value`):
void

**yaz_set_option**(resource `$id`, array `$options`): void

Встановлює один або кілька параметрів для цього з'єднання.

### Список параметрів

`id`
Дескриптор з'єднання, повернутий
[yaz_connect()](function.yaz-connect.md).

`name` або `options`
Може бути рядком чи масивом.

Якщо заданий рядок, то його буде сприйнято як назву параметра,
яке потрібно встановити. Потрібно поставити значення `value`.

Якщо заданий масив, він повинен бути асоціативним (назва параметра
u003d\> значення).

| Назва | Опис |
|---------------------|--------------------------- ------------------------|
| implementationName | реалізація імені сервера
| implementationVersion | реалізація версії сервера
| implementationId | реалізація ID сервера
| schema | схема для набору, що повертається. За промовчанням не встановлено. Ця установка еквівалентна функції [yaz_schema()](function.yaz-schema.md). |
| preferredRecordSyntax | синтаксис запису, що повертається. За промовчанням не встановлено. Встановлення цього параметра дорівнює використання функції [yaz_syntax()](function.yaz-syntax.md). |
| start | зміщення для першого запису з набору, що повертається функціями [yaz_search()](function.yaz-search.md) або [yaz_present()](function.yaz-present.md). Перший запис має значення start рівне 0, другий - 1 і т.д. Встановлення цієї настройки спільно з установкою `count` має той же ефект, що й виклик функції [yaz_range()](function.yaz-range.md), за винятком того, що в [yaz_range()](function.yaz-range). md) записи нумеруються зі значенням 1. |
| count | максимальна кількість записів, що повертаються функціями [yaz_search()](function.yaz-search.md) або [yaz_present()](function.yaz-present.md). |
| elementSetName | Встановлює тип набору елементів, що повертаються. Еквівалентний виклик [yaz_element()](function.yaz-element.md). |

**Налаштування з'єднання PHP/YAZ**

`value`
Нове значення для налаштування. Використовується лише коли попередній
аргумент є рядком.

### Значення, що повертаються

Функція не повертає значення після виконання.
