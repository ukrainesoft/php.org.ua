- [« ReflectionParameter::\_\_clone](reflectionparameter.clone.md)
- [ReflectionParameter::export »](reflectionparameter.export.md)

- [PHP Manual](index.md)
- [ReflectionParameter](class.reflectionparameter.md)
- Конструктор

# ReflectionParameter::\_\_construct

(PHP 5, PHP 7, PHP 8)

ReflectionParameter::\_\_construct — Конструктор

### Опис

public **ReflectionParameter::\_\_construct**(string\|array\|object
`$function`, int\|string `$param`)

Створює екземпляр [ReflectionParameter](class.reflectionparameter.md).

### Список параметрів

`function`
Функція, яку потрібно відобразити.

`param`
Або ціле число (int), що вказує позицію параметра (починаючи з нуля),
або ім'я параметра як рядка (string).

### Приклади

**Приклад #1 Використання класу
[ReflectionParameter](class.reflectionparameter.md)**

` <?phpfunction foo($a, $b, $c) { }function bar(Exception $a, &$b, $c) { }function baz(ReflectionFunction $a, $b u003d 1, $c u003d { }function abc() { }$reflect u003d new ReflectionFunction('foo');echo $reflect;foreach ($reflect->getParameters() as $i u003d> $param) {               : %s {
".         "   Клас: %s
".         "   Допускає значення NULL:%s
".         "   Передається по посилання:%s
".         "   Необов'язковий?:%s
".        "}
",         $i, // можна використовувати $param->getPosition()        $param->getName(),                                 るvar_export($param->isPassedByReference(), 1),        $param->isOptional() ? 'да' : 'нет'    );}?> `

Результатом виконання цього прикладу буде щось подібне:

Function [ <user> function foo ] {
@@ /Users/philip/cvs/phpdoc/a 2 - 2

- Parameters [3] {
Parameter #0 [ <required> $a ]
Parameter #1 [ <required> $b ]
Parameter #2 [ <required> $c ]
}
}
-- Аргумент #0: a {
Клас: NULL
Допускає значення NULL: true
Передається за посиланням: false
Необов'язковий?: ні
}
-- Аргумент #1: b {
Клас: NULL
Допускає значення NULL: true
Передається за посиланням: false
Необов'язковий?: ні
}
-- Аргумент #2: c {
Клас: NULL
Допускає значення NULL: true
Передається за посиланням: false
Необов'язковий?: ні
}

### Дивіться також

- [ReflectionFunctionAbstract::getParameters()](reflectionfunctionabstract.getparameters.md) -
Отримує параметри
- [ReflectionFunction::\_\_construct()](reflectionfunction.construct.md) -
Конструктор класу ReflectionFunction
- [ReflectionMethod::\_\_construct()](reflectionmethod.construct.md) -
Конструктор класу ReflectionMethod
- [Конструктори](language.oop5.decon.md#language.oop5.decon.constructor)
