- [«
ReflectionParameter::getDefaultValue](reflectionparameter.getdefaultvalue.md)
- [ReflectionParameter::getName »](reflectionparameter.getname.md)

- [PHP Manual](index.md)
- [ReflectionParameter](class.reflectionparameter.md)
- Повертає ім'я константи значення за замовчуванням, якщо значення по
замовчуванням константа або null

# ReflectionParameter::getDefaultValueConstantName

(PHP 5 \>u003d 5.4.6, PHP 7, PHP 8)

ReflectionParameter::getDefaultValueConstantName — Повертає ім'я
константи значення за промовчанням, якщо значення за промовчанням константа
або null

### Опис

public **ReflectionParameter::getDefaultValueConstantName**(): ?string

Повертає значення за промовчанням константи для будь-якого параметра
користувальницької або внутрішньої функції або методу, якщо значення по
замовчуванням константа або null. Якщо параметр необов'язковий,
викидається виняток
[ReflectionException](class.reflectionexception.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок у разі успішного виконання або **`null`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------------------------|
| 8.0.0 | Метод дозволяє отримувати стандартні імена для вбудованих функцій та вбудованих методів класу. Раніше викидалося [ReflectionException](class.reflectionexception.md). |

### Приклади

**Приклад #1 Отримання стандартних констант для параметрів
функції**

` <?phpfunction foo($test, $bar u003d PHP_INT_MIN){    echo $test . $bar;}$function u003d new ReflectionFunction('foo');foreach ($function->getParameters() as $param) {    echo 'Ім'я: ' . $param->getName() . PHP_EOL; if ($param->isOptional()) {        echo 'Значення за замовчуванням: ' . $param->getDefaultValueConstantName() . PHP_EOL; }   echo PHP_EOL;}?> `

Результат виконання цього прикладу:

Name: test

Ім'я: bar
Значення за замовчуванням: PHP_INT_MIN

### Дивіться також

- [ReflectionParameter::isOptional()](reflectionparameter.isoptional.md) -
Перевіряє, чи є аргумент необов'язковим
- [ReflectionParameter::isDefaultValueConstant()](reflectionparameter.isdefaultvalueconstant.md) -
Визначити, чи є значення за замовчуванням константою
- [ReflectionParameter::getDefaultValue()](reflectionparameter.getdefaultvalue.md) -
Отримання стандартного значення для параметра
