- [« Анонімні класи](language.oop5.anonymous.md)
- [Ітератори об'єктів »](language.oop5.iterations.md)

- [PHP Manual](index.md)
- [Класи та об'єкти](language.oop5.md)
- Перевантаження

## Перевантаження

Перевантаження в PHP означає можливість динамічно "створювати" властивості та
методи. Ці динамічні сутності обробляються за допомогою магічних
методи, які можна створити в класі для різних видів дій.

Методи навантаження викликаються при взаємодії з властивостями або
методами, які не були оголошені чи не
[видні](language.oop5.visibility.md) у поточній області видимості.
Далі в цьому розділі будуть використовуватись терміни "недоступні властивості"
або “недоступні методи” для позначення цієї комбінації оголошення та
області видимості.

Усі методи навантаження мають бути оголошені як `public`.

> **Примітка**:
>
> Жоден з аргументів цих магічних методів може бути переданий
> [за
> посилання](functions.arguments.md#functions.arguments.by-reference).

> **Примітка**:
>
> Інтерпретація "перевантаження" в PHP відрізняється від більшості
> об'єктно-орієнтованих мов. Традиційно навантаження означає
> можливість мати кілька однойменних методів з різною кількістю та
> типами аргументів.

### Перевантаження властивостей

public **\_\_set**(string `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public **\_\_get**(string `$name`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public **\_\_isset**(string `$name`): bool

public **\_\_unset**(string `$name`): void

Метод [\_\_set()](language.oop5.overloading.md#object.set) буде
виконаний при запису даних у недоступні (захищені або приватні) або
неіснуючі властивості.

Метод [\_\_get()](language.oop5.overloading.md#object.get) буде
виконаний під час читання даних із недоступних (захищених або приватних) або
неіснуючих властивостей.

Метод [\_\_isset()](language.oop5.overloading.md#object.isset) буде
виконаний при використанні [isset()](function.isset.md) або
[empty()](function.empty.md) на недоступних (захищених або приватних)
або неіснуючі властивості.

Метод [\_\_unset()](language.oop5.overloading.md#object.unset) буде
виконано під час виклику [unset()](function.unset.md) на недоступному
(захищеному або приватному) або неіснуючій властивості.

Аргумент `$name` являє собою ім'я властивості, що викликається. Метод
[\_\_set()](language.oop5.overloading.md#object.set) містить аргумент
$value, що являє собою значення, яке буде записано в
властивість з ім'ям $name.

Перевантаження властивостей працює лише у контексті об'єкта. Дані
магічні методи не будуть викликані у статичному контексті. Тому ці
методи не повинні оголошуватись [статичними](language.oop5.static.md).
При оголошенні будь-якого магічного методу як static буде видано
попередження.

> **Примітка**:
>
> Значення, що повертається
> [\_\_set()](language.oop5.overloading.md#object.set) буде
> проігноровано через спосіб обробки PHP оператора привласнення.
> Аналогічно, [\_\_get()](language.oop5.overloading.md#object.get)
> ніколи не викликається при об'єднанні привласнень, наприклад, подібних
> чином: ``
>
> $a u003d $ obj-> b u003d 8;

**Приклад #1 Перевантаження властивостей за допомогою методів
[\_\_get()](language.oop5.overloading.md#object.get),
[\_\_set()](language.oop5.overloading.md#object.set),
[\_\_isset()](language.oop5.overloading.md#object.isset) та
[\_\_unset()](language.oop5.overloading.md#object.unset)**

`<?phpclass PropertyTest{    /**  Місце зберігання перевантажуваних даних. */    private $data u003d array(); /**  Перевантаження не застосовується до оголошених властивостей. */   public$$declaredu003d1; /**  Тут перевантаження буде використане тільки при доступі позакласом. */    private $hidden u003d 2; public function __set($name, $value)    {        echo "Установка '$name' в '$value'
";        $this->data[$name] u003d $value;    }    public function __get($name)    {        echo 
";        if (array_key_exists($name, $this->data)) {            return $this->data[$name];        }        $trace u003d debug_backtrace();        trigger_error(            'Неопределённое свойство в __get(): ' . $name .            ' в файле ' . $trace[0]['file'] .            ' на строке ' . $trace[0]['line'],            E_USER_NOTICE);        return null;    }    public function __isset($name)    {        echo " Встановлено або '$name'?
";   return isset($this->data[$name]);   }    public function __unset($name)    {        
";        unset($this->data[$name]);    }    /**  Не магический метод, просто для примера. */    public function getHidden()    {        return $this->hidden;    }}echo "<pre>
";$obj u003d new PropertyTest;$obj->a u003d 1;echo $obj->a . "

";var_dump(isset($obj->a));unset($obj->a);var_dump(isset($obj->a));echo "
";echo $obj->declared . "

";echo "Давайте поекспериментуємо з закритим властивістю 'hidden':
";echo "Закриті властивості видні внутрі класу, тому __get() не використовується...
";echo $obj->getHidden() . "
";echo "Закриті властивості не видні поза класу, тому __get() використовується...
";echo $obj->hidden . "
";?> `

Результат виконання цього прикладу:

Установка 'a' в '1'
Отримання 'a'
1

Чи встановлено 'a'?
bool(true)
Знищення 'a'
Чи встановлено 'a'?
bool(false)

1

Давайте поекспериментуємо із закритою властивістю 'hidden':
Закриті властивості видно всередині класу, тому __get() не використовується.
2
Закриті властивості не видно поза класом, тому __get() використовується...
Отримання 'hidden'


Notice: Невизначена властивість у __get(): hidden у <file> on line 70 in <file> on line 29

### Перевантаження методів

public **\_\_call**(string `$name`, array `$arguments`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public static **\_\_callStatic**(string `$name`, array `$arguments`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

[\_\_call()](language.oop5.overloading.md#object.call) запускається при
виклику недоступних методів у контексті об'єкта.

[\_\_callStatic()](language.oop5.overloading.md#object.callstatic)
запускається під час виклику недоступних методів у статичному контексті.

Аргумент `$name` є ім'ям викликаного методу. Аргумент
`$arguments` є нумерованим масивом, що містить
параметри, передані в метод $name.

**Приклад #2 Перевантаження методів за допомогою методів
[\_\_call()](language.oop5.overloading.md#object.call) та
[\_\_callStatic()](language.oop5.overloading.md#object.callstatic)**

`<?phpclass MethodTest {    public function __call($name, $arguments) {         // Примітка: значення $name реєстрозалежно. echo "Виклик методу '$name' "              . implode(', ', $arguments). "
";    }    public static function __callStatic($name, $arguments) {        // Замечание: значение $name регистрозависимо.        echo "Вызов статического метода '$name' "             . implode(', ', $arguments). "
";    }}$obj u003d new MethodTest;$obj->runTest('в контексті об'єкта');MethodTest::runTest('в статичному контексті');?> `

Результат виконання цього прикладу:

Виклик методу 'runTest' у контексті об'єкта
Виклик статичного методу 'runTest' у статичному контексті
