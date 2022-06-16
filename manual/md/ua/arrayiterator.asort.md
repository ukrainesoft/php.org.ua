- [« ArrayIterator::append](arrayiterator.append.md)
- [ArrayIterator::\_\_construct »](arrayiterator.construct.md)

- [PHP Manual](index.md)
- [ArrayIterator](class.arrayiterator.md)
- Сортує елементи за значеннями

# ArrayIterator::asort

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

ArrayIterator::asort — Сортує елементи за значеннями

### Опис

public **ArrayIterator::asort**(int `$flags` u003d **`SORT_REGULAR`**): bool

Сортує елементи за значеннями.

> **Примітка**:
>
> Якщо обидва порівнювані значення еквівалентні, вони зберігають свій
> Початковий порядок. До PHP 8.0.0 їх відносний порядок
> відсортованому масиві був визначений.

### Список параметрів

`flags`
Необов'язковий другий параметр `flags` може використовуватись для
зміни поведінки сортування з використанням таких значень:

Прапори типу сортування:

- **`SORT_REGULAR`** - звичайне порівняння елементів; подробиці
описані в розділі [оператори
порівняння](language.operators.comparison.md)
- **`SORT_NUMERIC`** - числове порівняння елементів
- **`SORT_STRING`** - рядкове порівняння елементів
- **`SORT_LOCALE_STRING`** - порівняння елементів як рядки на основі
поточний мовний стандарт. Використовується мовний стандарт,
який можна змінити за допомогою
[setlocale()](function.setlocale.md)
- **`SORT_NATURAL`** - порівняння елементів як рядки, використовуючи
"природний порядок", наприклад, [natsort()](function.natsort.md)
- **`SORT_FLAG_CASE`** - можна об'єднувати (побітове АБО) з
**`SORT_STRING`** або **`SORT_NATURAL`** для сортування рядків без
обліку регістру

### Значення, що повертаються

Функція завжди повертає **`true`**.

### Дивіться також

- [ArrayIterator::ksort()](arrayiterator.ksort.md) - Сортує
елементи за ключами
- [ArrayIterator::natcasesort()](arrayiterator.natcasesort.md) -
Сортує елементи "натурально", з урахуванням регістру
- [ArrayIterator::natsort()](arrayiterator.natsort.md) - Сортує
елементи "натурально"
- [ArrayIterator::uasort()](arrayiterator.uasort.md) - Сортування з
допомогою заданої користувачем функції та збереженням ключів
- [ArrayIterator::uksort()](arrayiterator.uksort.md) - Сортування за
ключам за допомогою заданої функції порівняння
- [asort()](function.asort.md) - Сортує масив у порядку
зростання та підтримує асоціацію індексів
