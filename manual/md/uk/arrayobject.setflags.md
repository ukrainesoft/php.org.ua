- [« ArrayObject::serialize](arrayobject.serialize.md)
- [ArrayObject::setIteratorClass »](arrayobject.setiteratorclass.md)

- [PHP Manual](index.md)
- [ArrayObject](class.arrayobject.md)
- Встановлює прапори поведінки

# ArrayObject::setFlags

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

ArrayObject::setFlags — Встановлює прапори поведінки

### Опис

public **ArrayObject::setFlags**(int `$flags`): void

Встановлює прапори, що впливають на поведінку ArrayObject.

### Список параметрів

`flags`
Нова поведінка ArrayObject. Допускається або битова маска, або
іменовані константи. Використання іменованих констант наполегливо
рекомендується для сумісності з майбутніми версіями.

Доступні прапори поведінки наведені нижче. Фактичні значення цих
прапорів описані в розділі [передбачені
константи](class.arrayobject.md#arrayobject.constants).

| Значення | Константа
|----------|-------------------------------------- -------------------------------------------------- ----|
| 1 | [ArrayObject::STD_PROP_LIST](class.arrayobject.md#arrayobject.constants.std-prop-list) |
| 2 | [ArrayObject::ARRAY_AS_PROPS](class.arrayobject.md#arrayobject.constants.array-as-props) |

**Прапори поведінки ArrayObject**

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ArrayObject::setFlags()****

`<?php// Масив з доступними фруктами$fruits u003d array("lemons" u003d> 1, "oranges" u003d> 4, "bananas" u003d> 5, "apples" u003d> 10);$fruAr $fruits);// Спроба використовувати ключ масиву як властивістьvar_dump($fruitsArrayObject->lemons); fruitsArrayObject->lemons);?> `

Результат виконання цього прикладу:

NULL
int(1)
