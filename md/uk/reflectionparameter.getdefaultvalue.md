- [«
ReflectionParameter::getDeclaringFunction](reflectionparameter.getdeclaringfunction.md)
- [ReflectionParameter::getDefaultValueConstantName
»](reflectionparameter.getdefaultvalueconstantname.md)

- [PHP Manual](index.md)
- [ReflectionParameter](class.reflectionparameter.md)
- Отримання стандартного значення для параметра

# ReflectionParameter::getDefaultValue

(PHP 5 \>u003d 5.0.3, PHP 7, PHP 8)

ReflectionParameter::getDefaultValue — Отримання стандартного значення
для параметра

### Опис

public **ReflectionParameter::getDefaultValue**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Отримує значення за промовчанням параметра, будь-якого визначеного
користувача або внутрішньої функції або методу. Якщо аргумент не
є необов'язковим, буде викинуто виняток
[ReflectionException](class.reflectionexception.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Значення за промовчанням аргументу.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---|
| 8.0.0 | Метод тепер дозволяє отримати значення за замовчуванням параметрів вбудованих функцій і вбудованих методів класу. Раніше викидалося [ReflectionException](class.reflectionexception.md). |

### Приклади

**Приклад #1 Отримання**

` <?phpfunction foo($test, $bar u003d 'baz'){   echo $test . $bar;}$function u003d new ReflectionFunction('foo');foreach ($function->getParameters() as $param) {    echo 'Ім'я: ' . $param->getName() . PHP_EOL; if ($param->isOptional()) {        echo 'Значення за замовчуванням: ' . $param->getDefaultValue() . PHP_EOL; }   echo PHP_EOL;}?> `

Результат виконання цього прикладу:

Ім'я: test

Ім'я: bar
Значення за замовчуванням: baz

### Дивіться також

- [ReflectionParameter::isOptional()](reflectionparameter.isoptional.md) -
Перевіряє, чи є аргумент необов'язковим
- [ReflectionParameter::isDefaultValueAvailable()](reflectionparameter.isdefaultvalueavailable.md) -
Перевіряє, чи є значення за замовчуванням
- [ReflectionParameter::getDefaultValueConstantName()](reflectionparameter.getdefaultvalueconstantname.md) -
Повертає ім'я константи значення за замовчуванням, якщо значення
замовчуванням константа або null
- [ReflectionParameter::isPassedByReference()](reflectionparameter.ispassedbyreference.md) -
Перевіряє, чи передано параметр за посиланням
