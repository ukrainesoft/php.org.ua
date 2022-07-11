- [«
Transliterator::getErrorMessage](transliterator.geterrormessage.md)
- [Transliterator::transliterate »](transliterator.transliterate.md)

- [PHP Manual](index.md)
- [Transliterator](class.transliterator.md)
- Отримати ідентифікатори транслітератора

# Transliterator::listIDs

# transliterator_list_ids

(PHP 5 u003d 5.4.0, PHP 7, PHP 8, PECL intl u003d 2.0.0)

Transliterator::listIDs -- transliterator_list_ids — Отримати
ідентифікатори транслітератора

### Опис

Об'єктно-орієнтований стиль

public static **Transliterator::listIDs**(): array\|false

Процедурний стиль

**transliterator_list_ids**(): array\|false

Повертає масив зареєстрованих ідентифікаторів транслітератора.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив (array) зареєстрованих ідентифікаторів транслітератора або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Отримання зареєстрованих ідентифікаторів
транслітератора**

` <?phpprint_r(Transliterator::listIDs());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> ASCII-Latin
[1] u003d> Accents-Any
[2] u003d> Amharic-Latin/BGN
[3] u003d> Any-Accents
[4] u003d> Any-Publishing
...
[650] u003d> Any-ps_Latn/BGN
[651] u003d> Any-tk/BGN
[652] u003d> Any-ch_FONIPA
[653] u003d> Any-cs_FONIPA
[654] u003d> Any-cy_FONIPA
)

### Дивіться також

- [Transliterator::getErrorMessage()](transliterator.geterrormessage.md) -
Отримати останнє повідомлення про помилку
- [Transliterator::transliterate()](transliterator.transliterate.md) -
Транслітерувати рядок
