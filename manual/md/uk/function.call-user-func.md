- [«call_user_func_array](function.call-user-func-array.md)
- [create_function »](function.create-function.md)

- [PHP Manual](index.md)
- [Функції керування функціями](ref.funchand.md)
- Викликає callback-функцію, задану у першому параметрі

#call_user_func

(PHP 4, PHP 5, PHP 7, PHP 8)

call_user_func — Викликає callback-функцію, задану у першому параметрі

### Опис

**call_user_func**([callable](language.types.callable.md) `$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Викликає callback-функцію, передану першим параметром, та передає
Інші параметри як аргументи. `callback`.

### Список параметрів

`callback`
Функція типу [callable](language.types.callable.md).

`args`
Нуль або більше параметрів, що передаються в callback-функцію.

> **Примітка**:
>
> Врахуйте, що параметри для **call_user_func()** не передаються за
> Посилання.
>
> **Приклад #1 Приклад використання **call_user_func()** та посилання**
>
> ` <?phperror_reporting(E_ALL);function increment(&$var){   $var++;}$a u003d 0;call_user_func('increment', $a);echo $a."
";// Замість цього можна використовувати цей спосібcall_user_func_array('increment', array(&$a));echo $a."
";// Також можна використовувати функцію в якості змінної$increment u003d 'increment';$increment($a);echo $a."
";?> `
>
> Результат виконання цього прикладу:
>
> Warning: Parameter 1 to increment() expected to be a reference, value given in …
> 0
> 1
> 2

### Значення, що повертаються

Повертає значення, повернене функцією callback.

### Приклади

**Приклад #2 Приклад використання **call_user_func()****

`<?phpfunction barber($type){    echo "Ви хотіли стрижку $type, без проблем
";}call_user_func('barber', "під горщик");call_user_func('barber', "наголо");?> `

Результат виконання цього прикладу:

Ви хотіли стрижку під горщик, без проблем
Ви хотіли стрижку наголо, без проблем

**Приклад #3 Використання **call_user_func()**, використовуючи простір
імен**

`<?phpnamespace Foobar;class Foo {    static public function test() {         print "Привіт, мир!
";    }}call_user_func(__NAMESPACE__ .'\Foo::test');call_user_func(array(__NAMESPACE__ .'\Foo', 'test'));?> `

Результат виконання цього прикладу:

Привіт світ!
Привіт світ!

**Приклад #4 Виклик методу класу за допомогою **call_user_func()****

`<?phpclass myclass {   static function say_hello()    {       echo "Привіт!
";    }}$classname u003d "myclass";call_user_func(array($classname, 'say_hello'));call_user_func($classname .'::say_hello');$myobject u003d new myclass();call_user , 'say_hello'));?> `

Результат виконання цього прикладу:

Вітання!
Вітання!
Вітання!

**Приклад #5 Використання лямбда-функції з **call_user_func()****

` <?phpcall_user_func(function($arg) { print "[$arg]
"; }, 'test');?> `

Результат виконання цього прикладу:

[test]

### Примітки

> **Примітка**:
>
> Callback-функції, зареєстровані такими функціями як
> **call_user_func()** та
> [call_user_func_array()](function.call-user-func-array.md), не будуть
> викликані за наявності не спійманого виключення, кинутого в попередній
> callback-функції.

### Дивіться також

- [call_user_func_array()](function.call-user-func-array.md) -
Викликає callback-функцію з масивом параметрів
- [is_callable()](function.is-callable.md) - Перевіряє, що значення
може бути викликано як функція у поточній області видимості
- [Звернення до функцій через
змінні](functions.variable-functions.md)
- [ReflectionFunction::invoke()](reflectionfunction.invoke.md) -
Викликає функцію
- [ReflectionMethod::invoke()](reflectionmethod.invoke.md) - Виклик
