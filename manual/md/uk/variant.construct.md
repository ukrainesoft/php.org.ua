- [« variant] (class.variant.md)
- [COMPersistHelper »](class.compersisthelper.md)

- [PHP Manual](index.md)
- [Variant](class.variant.md)
- Конструктор класу variant

# variant::\_\_construct

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

variant::\_\_construct — Конструктор класу variant

### Опис

public
**variant::\_\_construct**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value` u003d **`null`**, int `$type` u003d **`VT_EMPTY`**, int `$codepage` u003d
**`CP_ACP`**)

Створює об'єкт класу variant.

### Список параметрів

`value`
Початкове значення. Якщо не задано або задано як **`null`**, буде
створено об'єкт VT_EMPTY.

`type`
Визначає тип контенту об'єкта variant. Допустимі значення - одна з
констант **`VT_XXX`** ([Предвизначені
константи](com.constants.md)). PHP може автоматично визначати
параметри, передані за посиланням; їх навіть не потрібно передавати як об'єкти
variant. Додаткову інформацію за типами variant читайте у бібліотеці
MSDN.

`codepage`
Кодова сторінка Докладніше читайте на сторінці [com](class.com.md).
