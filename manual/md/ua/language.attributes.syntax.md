- [«Вступ до атрибутів](language.attributes.overview.md)
- [Читання атрибутів за допомогою Reflection API
»](language.attributes.reflection.md)

- [PHP Manual](index.md)
- [Атрибути](language.attributes.md)
- Синтаксис атрибутів

## Синтаксис атрибутів

Синтаксис атрибутів складається із кількох частин. Спочатку декларація
атрибут завжди починається з символу `#[` і закінчується `]`. Всередині
перерахування з одного або більше розділених комою, атрибутів.
Атрибути можна задавати за допомогою неповних, повних та абсолютних імен,
як описано в розділі [Використання простору імен:
основи] (language.namespaces.basics.md). Аргументи атрибутів
опціональні, але якщо вони є, то укладаються в дужки `()`. Аргументи
атрибутів можуть бути або конкретними значеннями, або константними
виразами. Для аргументів можна використовувати як позиційний
синтаксис, і синтаксис іменованих аргументів.

Коли атрибут запитується за допомогою Reflection API, його ім'я трактується
як ім'я класу, а аргументи передаються до його конструктора. Таким чином,
для кожного атрибута має бути відповідний клас.

**Приклад #1 Синтаксис атрибутів**

` <?php// a.phpnamespace MyExample;use Attribute;#[Attribute]class MyAttribute{   const VALUE u003d 'value'; private$value; public function __construct($value u003d null)    {        $this->value u003d $value; }}// b.phpnamespace Another;use MyExample\MyAttribute;#[MyAttribute]#[\MyExample\MyAttribute]#[MyAttribute(1234)]#[MyAttribute(value: 1234)]#[My ]#[MyAttribute(array("key" u003d> "value"))]#[MyAttribute(100 + 200)]class Thing{}#[MyAttribute(1234), MyAttribute(5678)]class Another
