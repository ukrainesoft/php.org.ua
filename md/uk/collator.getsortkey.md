- [«Collator::getLocale](collator.getlocale.md)
- [Collator::getStrength »](collator.getstrength.md)

- [PHP Manual](index.md)
- [Collator](class.collator.md)
- Отримує ключ сортування рядка

# Collator::getSortKey

#collator_get_sort_key

(PHP 5 \>u003d 5.3.2, PHP 7, PHP 8, PECL intl \>u003d 1.0.3)

Collator::getSortKey -- collator_get_sort_key — Отримує ключ сортування
рядки

### Опис

Об'єктно-орієнтований стиль

public **Collator::getSortKey**(string `$string`): string\|false

Процедурний стиль

**collator_get_sort_key**([Collator](class.collator.md) `$object`,
string `$string`): string\|false

Повертає ключ зіставлення для рядка. Ключі зіставлення можна
порівнювати безпосередньо, а не рядки, хоча вони залежать від реалізації і можуть
змінюватись в залежності від версії бібліотеки ICU. Ключі сортування зазвичай
корисні лише в базах даних або в інших випадках, коли виклики функцій
надзвичайно дорогі.

### Список параметрів

`object`
Об'єкт [Collator](class.collator.md).

`string`
Рядок, з якого створюється ключ.

### Значення, що повертаються

Повертає ключ зіставлення для рядка або **`false`** у випадку
виникнення помилки.

**Увага**

Ця функція може повертати як логічне значення **`false`**, так і
значення не типу boolean, яке наводиться до **`false`**. Більше
Детальну інформацію див. у розділі [Булев
тип](language.types.boolean.md). Використовуйте [оператор
u003du003du003d](language.operators.comparison.md) для перевірки значення,
повертається цією функцією.

### Приклади

**Приклад #1 Приклад використання **collator_get_sort_key()****

` <?php$s1 u003d 'Hello';$coll u003d collator_create('en_US');$res  u003d collator_get_sort_key($coll, $s1);echo bin2hex($res);?> `

Результатом виконання цього прикладу буде щось подібне:


3832404046010901dc08

### Дивіться також

- [collator_sort()](collator.sort.md) - Сортує масив з
використанням зазначеного засобу сортування
- [collator_sort_with_sort_keys()](collator.sortwithsortkeys.md) -
Сортує масив з використанням вказаного Collator та ключів
сортування
