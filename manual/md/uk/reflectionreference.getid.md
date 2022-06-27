- [«
ReflectionReference::fromArrayElement](reflectionreference.fromarrayelement.md)
- [ReflectionAttribute »](class.reflectionattribute.md)

- [PHP Manual](index.md)
- [ReflectionReference](class.reflectionreference.md)
- Отримати унікальний ідентифікатор посилання

# ReflectionReference::getId

(PHP 7 u003d 7.4.0, PHP 8)

ReflectionReference::getId — Отримати унікальний ідентифікатор посилання

### Опис

public **ReflectionReference::getId**(): string

Повертає ідентифікатор, що є унікальним для посилання на все
протягом її життя. Цей ідентифікатор можна використовувати для перевірки
на еквівалентність або складання карти відомих посилань.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає string невизначеного формату.

### Приклади

**Приклад #1 Просте використання **ReflectionReference::getId()****

` <?php$val1 u003d 'foo';$val2 u003d 'bar';$arr u003d [&$val1, &$val2, &$val1];$rr1 u003d ReflectionReference::fromArrayElement($arr, 0);$ rr2 u003dReflectionReference::fromArrayElement($arr, 1);$rr3 u003dReflectionReference::fromArrayElement($arr, 2);var_dump($rr1->getId() u003du003du003d $rr2->getId() $rr1->getId() u003du003du003d $rr3->getId());?> `

Результат виконання цього прикладу:

bool(false)
bool(true)
