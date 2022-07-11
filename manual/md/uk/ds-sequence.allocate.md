- [« Послідовність](class.ds-sequence.md)
- [Ds\Sequence::apply »](ds-sequence.apply.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Виділення пам'яті під зазначену місткість

# Ds\Sequence::allocate

(PECL ds \>u003d 1.0.0)

Ds\Sequence::allocate — Виділення пам'яті під зазначену місткість

### Опис

abstract public **Ds\Sequence::allocate**(int `$capacity`): void

Гарантує, що виділено достатньо пам'яті під задану місткість
(кількість значень). Дозволяє уникнути динамічного додавання
пам'яті під час додавання значень.

### Список параметрів

`capacity`
Місткість. Очікувана кількість значень.

> **Примітка**:
>
> Якщо нове значення місткості менше поточного, вона не зміниться.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Sequence::allocate()****

` <?php$sequence u003d new \Ds\Vector();var_dump($sequence->capacity());$vector->allocate(100);var_dump($sequence->capacity());?> `

Результатом виконання цього прикладу буде щось подібне:

int(10)
int(100)
