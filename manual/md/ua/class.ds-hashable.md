- [« Ds\Collection::toArray](ds-collection.toarray.md)
- [Ds\Hashable::equals »](ds-hashable.equals.md)

- [PHP Manual](index.md)
- [Структури даних](book.ds.md)
- Інтерфейс Hashable

# Інтерфейс Hashable

(No version information available, might only be in Git)

## Вступ

Hashable - це інтерфейс, який дозволяє використовувати об'єкти в
якість ключів. Це альтернатива функції
[spl_object_hash()](function.spl-object-hash.md), яка обчислює
хеш об'єкта відповідно до його обробника: це означає, що два
об'єкти можуть бути однакові за своїм станом, але не вважаються
однаковими через те, що є різними екземплярами одного класу.

Функція [hash()](function.hash.md) використовується для обчислення
скалярного значення, що характеризує хеш об'єкта та визначає його
становище у хеш-таблиці. Хоча це значення необов'язково має бути
унікальним, однакові об'єкти повинні мати те саме значення хеша.

Функція **equals()** використовується для визначення ідентичності двох
об'єктів. Вона гарантує, що два об'єкти є одним і тим же
екземпляром класу.

## Огляд інтерфейсів

class **Ds\Hashable** {

/\* Методи \*/

abstract public [equals](ds-hashable.equals.md)(object `$obj`): bool

abstract public [hash](ds-hashable.hash.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

}

## Зміст

- [Ds\Hashable::equals](ds-hashable.equals.md) - Визначає, дорівнює
чи поточний екземпляр переданому об'єкту
- [Ds\Hashable::hash](ds-hashable.hash.md) — Повертає скалярне
значення для використання як значення хешу
