- [«ReflectionFunction](class.reflectionfunction.md)
- [ReflectionFunction::export »](reflectionfunction.export.md)

- [PHP Manual](index.md)
- [ReflectionFunction](class.reflectionfunction.md)
- Конструктор класу ReflectionFunction

# ReflectionFunction::\_\_construct

(PHP 5, PHP 7, PHP 8)

ReflectionFunction::\_\_construct - Конструктор класу
ReflectionFunction

### Опис

public
**ReflectionFunction::\_\_construct**([Closure](class.closure.md)\|string
`$function`)

Створює об'єкт класу
[ReflectionFunction](class.reflectionfunction.md).

### Список параметрів

`function`
Ім'я функції відображення або [замикання](functions.anonymous.md).

### Помилки

Об'єкт класу [ReflectionException](class.reflectionexception.md),
якщо аргумент function не містить допустимої функції.

### Приклади

**Приклад #1 Приклад використання
**ReflectionFunction::\_\_construct()****

` <?php/** * Простий лічильник * * @return    intu003d**function counter1(){    static $c u003d 0; return ++$c;}/** * Інший лічильник * * @return    int */$counter2 u003d function(){   static $d u003d 0; return ++$d;};function dumpReflectionFunction($func){    // Висновок основної інформації    printf(        ")

u003du003du003d> %s функція '%s'
".         "     оголошена в%s
".         "     рядки с %d по %d
",        $func->isInternal() ? 'internal' : 'user-defined',        $func->getName(),        $func->getFileName(),        $func->getStartLine(),        $func->getEndline( )    );;    // Друк документації    printf("---> Документація:
%s
", var_export($func->getDocComment(), 1));    // Виведеннястатичних змінних    if ($statics u003d $func->getStaticVariables())                                            
", var_export($statics, 1));    }}// Створення об'єкта класу ReflectionFunctiondumpReflectionFunction(new ReflectionFunction('counter1'));dumpReflectionFunction(new $>

Результатом виконання цього прикладу буде щось подібне:

u003du003du003d> user-defined функція 'counter1'
оголошено в Z:eflectcounter.php
рядки з 7 по 11
---> Документація:
'/**
* Простий лічильник
*
* @return int
*/'
---> Статичні змінні: array (
'c' u003d> 0,
)


u003du003du003d> user-defined функція '{closure}'
оголошено в Z:eflectcounter.php
рядки з 18 по 23
---> Документація:
'/**
* Інший лічильник
*
* @return int
*/'
---> Статичні змінні: array (
'd' u003d> 0,
)

### Дивіться також

- [ReflectionMethod::\_\_construct()](reflectionmethod.construct.md) -
Конструктор класу ReflectionMethod
- [Конструктори](language.oop5.decon.md#language.oop5.decon.constructor)
