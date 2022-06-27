- [« yaz_sort](function.yaz-sort.md)
- [yaz_wait »](function.yaz-wait.md)

- [PHP Manual](index.md)
- [Функції YAZ](ref.yaz.md)
- Задає синтаксис для запису

# yaz_syntax

(PHP 4 u003d 4.0.1, PECL yaz u003d 0.9.0)

yaz_syntax — Визначає синтаксис для запису, що вибирається.

### Опис

**yaz_syntax**(resource `$id`, string `$syntax`): void

**yaz_syntax()** задає синтаксис для запису

Функція має бути викликана до [yaz_search()](function.yaz-search.md)
або [yaz_present()](function.yaz-present.md).

### Список параметрів

`id`
Дескриптор з'єднання, що повертається
[yaz_connect()](function.yaz-connect.md).

`syntax`
Синтаксис має бути заданий як OID (Object Identifier, ідентифікатор
об'єкта) у вихідному форматі, розділеному крапками (наприклад
`1.2.840.10003.5.10`) або як відомий зареєстрований
формату запису (sutrs, usmarc, grs1, xml та ін.).

### Значення, що повертаються

Функція не повертає значення після виконання.
