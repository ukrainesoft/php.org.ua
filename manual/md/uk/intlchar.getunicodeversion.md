- [«
IntlChar::getPropertyValueName](intlchar.getpropertyvaluename.md)
- [IntlChar::hasBinaryProperty »](intlchar.hasbinaryproperty.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Отримати версію Unicode

# IntlChar::getUnicodeVersion

(PHP 7, PHP 8)

IntlChar::getUnicodeVersion — Отримати версію Unicode

### Опис

public static **IntlChar::getUnicodeVersion**(): array

Отримує інформацію про версію Unicode.

Масив, що повертається, заповнюється інформацією про версію Unicode
використовуваної ICU. Наприклад, Unicode версії 3.1.1 поверне масив з
значеннями `[3, 1, 1, 0]`.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив, що містить інформацію про версію Unicode.

### Приклади

**Приклад #1 Тестування різних властивостей**

` <?phpvar_dump(IntlChar::getUnicodeVersion());?> `

Результат виконання цього прикладу:

array(4) {
[0]u003d>
int(7)
[1]u003d>
int(0)
[2]u003d>
int(0)
[3]u003d>
int(0)
}

### Дивіться також

- [IntlChar::charAge()](intlchar.charage.md) - Отримати "вік"
символьного коду
