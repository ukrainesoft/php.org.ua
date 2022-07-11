- [«ReflectionMethod](class.reflectionmethod.md)
- [ReflectionMethod::export »](reflectionmethod.export.md)

- [PHP Manual](index.md)
- [ReflectionMethod](class.reflectionmethod.md)
- Конструктор класу ReflectionMethod

# ReflectionMethod::\_\_construct

(PHP 5, PHP 7, PHP 8)

ReflectionMethod::\_\_construct - Конструктор класу ReflectionMethod

### Опис

public **ReflectionMethod::\_\_construct**(object\|string
`$objectOrMethod`, string `$method`)

Alternative signature (не supported with named arguments):

public **ReflectionMethod::\_\_construct**(string `$classMethod`)

Створює новий об'єкт класу
[ReflectionMethod](class.reflectionmethod.md).

### Список параметрів

`objectOrMethod`
Ім'я класу або об'єкт (примірник класу), що містить метод.

`method`
Назва методу.

`classMethod`
Імена класу та методу, розділені `::`.

### Помилки

Виняток [ReflectionException](class.reflectionexception.md)
викидається, якщо заданий метод немає.

### Приклади

**Приклад #1 Приклад використання **ReflectionMethod::\_\_construct()****

`<?phpclass Counter{    private static $c u003d 0; /**     * Счётчик     *     * @final     * @static     * @access  public     * @return  int     */    final public static function increment()    {        return ++self::$c; }}// Створення примірника класу ReflectionMethod$method u003d new ReflectionMethod('Counter', 'increment');// Висновок основної інформаціїprintf(    "u003du003du003d> %s%s %s' (%s)
" .    ""     оголошений в%s
" .    "     рядки|з|%d|по|%d
" .    "     має модифікатори %d[%s]
",        $method->isInternal() ? 'внутренний' : 'определённый пользователем',        $method->isAbstract() ? ' абстрактный' : '',        $method->isFinal() ? ' окончательный' : '',        $ method->isPublic() ? ' общедоступный' : '',        $method->isPrivate() ? ' закрытый' : '',        $method->isProtected() ? ' защищённый' : '',        $method->isStatic( ) ? ' статический' : '',        $method->getName(),        $method->isConstructor() ? 'конструктор' : 'обычный метод',        $method->getFileName(),        $method->getStartLine(), $method->getEndline(),        $method->getModifiers(),  Комментарія| :
%s
", var_export($method->getDocComment(), true));// Виведення статичних змінних, якщоif ($staticsu003d $method->getStaticVariables()) {                                   ¦  
", var_export($statics, true));}// Виклик методprintf("---> Результат виклику методу: ");var_dump($method->invoke(NULL));?> `

Результатом виконання цього прикладу буде щось подібне:

u003du003du003d> визначений користувачем остаточний доступний статичний метод 'increment' (звичайний метод)
оголошений в /Users/philip/cvs/phpdoc/test.php
рядки з 14 по 17
має модифікатори 261[final public static]
---> Коментар:
'/**
* Лічильник
*
* @final
* @static
* @access public
* @return int
*/'
---> Результат виклику методу: int(1)

### Дивіться також

- [ReflectionMethod::export()](reflectionmethod.export.md) - Експорт
відбитого методу
- [Конструктори](language.oop5.decon.md#language.oop5.decon.constructor)
