- [« Читання атрибутів за допомогою Reflection
API] (language.attributes.reflection.md)
- [Пояснення посилань »](language.references.md)

- [PHP Manual](index.md)
- [Атрибути](language.attributes.md)
- Оголошення класів атрибутів

## Оголошення класів атрибутів

Створювати класи для атрибутів не обов'язково, але рекомендується.
У найпростішому випадку потрібно просто порожній клас з атрибутом
`#[Attribute]`, який можна імпортувати з глобального простору
імен за допомогою оператора use.

**Приклад #1 Простий клас з атрибутом**

`<?phpnamespace Example;use Attribute;#[Attribute]class MyAttribute{} `

Для обмеження того, з яким типом декларацій можна використати
конкретний атрибут, можна передати бітову маску першим параметром
`#[Attribute]`.

**Приклад #2 Обмеження допустимих сутностей для використання
атрибуту**

` <?phpnamespace Example;use Attribute;#[Attribute(Attribute::TARGET_METHOD | Attribute::TARGET_FUNCTION)]class MyAttribute{} `

Після цього анотування атрибутом **MyAttribute** чогось,
що відрізняється від методу або функції, призведе до викидання виключення
під час виклику
[ReflectionAttribute::newInstance()](reflectionattribute.newinstance.md).

Можна вказати такі сутності:

- **`Attribute::TARGET_CLASS`**
- **`Attribute::TARGET_FUNCTION`**
- **`Attribute::TARGET_METHOD`**
- **`Attribute::TARGET_PROPERTY`**
- **`Attribute::TARGET_CLASS_CONSTANT`**
- **`Attribute::TARGET_PARAMETER`**
- **`Attribute::TARGET_ALL`**

За умовчанням атрибут можна використовувати лише один раз для кожної
сутності. Якщо потрібно вказувати кілька однакових
атрибутів для однієї сутності - можна виставити відповідний прапор у
бітової маски для декларації `#[Attribute]`.

**Приклад #3 Використання IS_REPEATABLE для дозволу використовувати
атрибут в оголошенні кілька разів**

` <?phpnamespace Example;use Attribute;#[Attribute(Attribute::TARGET_METHOD | Attribute::TARGET_FUNCTION | Attribute::IS_REPEATABLE)]class MyAttribute{} `
