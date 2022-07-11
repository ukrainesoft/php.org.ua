- [«ReflectionClassConstant](class.reflectionclassconstant.md)
- [ReflectionClassConstant::export
»](reflectionclassconstant.export.md)

- [PHP Manual](index.md)
- [ReflectionClassConstant](class.reflectionclassconstant.md)
- Створює ReflectionClassConstant

# ReflectionClassConstant::\_\_construct

(PHP 7 \>u003d 7.1.0, PHP 8)

ReflectionClassConstant::\_\_construct — Створює ReflectionClassConstant

### Опис

public **ReflectionClassConstant::\_\_construct**(object\|string
`$class`, string `$constant`)

Створює новий об'єкт
[ReflectionClassConstant](class.reflectionclassconstant.md).

### Список параметрів

`class`
Рядок (string), що містить ім'я класу для відображення, або об'єкт
(object).

`constant`
Назва константи класу.

### Помилки

Викидає [Exception](class.exception.md) у випадку, якщо передана
константа класу немає.

### Дивіться також

- [Конструктори](language.oop5.decon.md#language.oop5.decon.constructor)
