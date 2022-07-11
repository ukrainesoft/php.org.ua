- [« IntlBreakIterator::getLocale](intlbreakiterator.getlocale.md)
- [IntlBreakIterator::getText »](intlbreakiterator.gettext.md)

- [PHP Manual](index.md)
- [IntlBreakIterator](class.intlbreakiterator.md)
- створює ітератор для переміщення фрагментів між кордонами

# IntlBreakIterator::getPartsIterator

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

IntlBreakIterator::getPartsIterator — Створює ітератор для переміщення
фрагментів між кордонами

### Опис

public **IntlBreakIterator::getPartsIterator**(string `$type` u003d
IntlPartsIterator::KEY_SEQUENTIAL):
[IntlPartsIterator](class.intlpartsiterator.md)

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`type`
Необов'язковий тип ключа. Можливі значення:

- **`IntlPartsIterator::KEY_SEQUENTIAL`** - Значення за замовчуванням.
Послідовно збільшує цілі числа, що використовуються як
ключа.
- **`IntlPartsIterator::KEY_LEFT`** - Байтове зміщення ліворуч
поточної частини, що використовується як ключ.
- **`IntlPartsIterator::KEY_RIGHT`** - Байтове зміщення праворуч від
поточної частини, що використовується як ключ.

### Значення, що повертаються
