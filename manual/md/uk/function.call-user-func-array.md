- [« Функції керування функціями](ref.funchand.md)
- [call_user_func »](function.call-user-func.md)

- [PHP Manual](index.md)
- [Функції керування функціями](ref.funchand.md)
- Викликає callback-функцію з масивом параметрів

#call_user_func_array

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

call_user_func_array — Викликає callback-функцію з масивом параметрів

### Опис

**call_user_func_array**([callable](language.types.callable.md)
`$callback`, array `$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Викликає callback-функцію `callback`, з параметрами з масиву `args`.

### Список параметрів

`callback`
Функція типу [callable](language.types.callable.md).

`args`
Параметри, що передаються в функцію, у вигляді індексованого масиву.

### Значення, що повертаються

Повертає результат функції або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання функції **call_user_func_array()****

` <?phpfunction foobar($arg, $arg2) {   echo __FUNCTION__, " got $arg and $arg2
";}class foo {    function bar($arg, $arg2) {       echo __METHOD__, " got $arg and $arg2
";    }}// Викликаємо функцію foobar() з 2 аргументамиcall_user_func_array("foobar", array("one", "two")); ;call_user_func_array(array($foo, "bar"), array("three", "four"));?> `

Результатом виконання цього прикладу буде щось подібне:

foobar got one and two
foo::bar got three and four

**Приклад #2 Приклад використання **call_user_func_array()** з ім'ям
простору імен**

` <?phpnamespace Foobar;class Foo {    static public function test($name) {         print "Hello {$name}!
";    }}call_user_func_array(__NAMESPACE__ .'\Foo::test', array('Hannes'));call_user_func_array(array(__NAMESPACE__ .'\Foo', 'test'), array('>) `

Результатом виконання цього прикладу буде щось подібне:

Hello Hannes!
Hello Philip!

**Приклад #3 Використання лямбда-функції**

` <?php$func u003d function($arg1, $arg2) {    return $arg1 * $arg2;};var_dump(call_user_func_array($func, array(2, 4))));?> `

Результат виконання цього прикладу:

int(8)

**Приклад #4 Передача значень за посиланням**

` <?phpfunction mega(&$a){    $a u003d 55; echo "function mega \$au003d$a
";}$bar u003d 77;call_user_func_array('mega',array(&$bar));echo "global \$baru003d$bar
";?> `

Результат виконання цього прикладу:

function mega $au003d55
global $baru003d55

### Примітки

> **Примітка**:
>
> Callback-функції, зареєстровані такими функціями як
> [call_user_func()](function.call-user-func.md) та
> **call_user_func_array()**, не будуть викликані за наявності не спійманого
> винятки, кинутого попередньої callback-функции.

### Дивіться також

- [call_user_func()](function.call-user-func.md) - Викликає
callback-функцію, задану у першому параметрі
- [ReflectionFunction::invokeArgs()](reflectionfunction.invokeargs.md) -
Виклик функції з надсиланням аргументів
- [ReflectionMethod::invokeArgs()](reflectionmethod.invokeargs.md) -
Виклик методу з передачею аргументів масивом
