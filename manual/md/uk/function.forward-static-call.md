- [«
forward_static_call_array](function.forward-static-call-array.md)
- [func_get_arg »](function.func-get-arg.md)

- [PHP Manual](index.md)
- [Функції керування функціями](ref.funchand.md)
- Виклик статичного методу

#forward_static_call

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

forward_static_call — виклик статичного методу

### Опис

**forward_static_call**([callable](language.types.callable.md)
`$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Виклик функції або методу, задані в параметрі
callback з наступними аргументами. Ця функція повинна викликатися в
контексті методу і може бути викликана поза класом. Вона використовує
[пізніше статичне
зв'язування](language.oop5.late-static-bindings.md).

### Список параметрів

`callback`
Функція або метод дзвінка. Цей параметр може бути масивом з ім'ям
класу та методу, або рядком з ім'ям функції.

`args`
Нуль або більше параметрів, які будуть передані функції, що викликається.

### Значення, що повертаються

Повертає результат функції або **`false`**, у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **forward_static_call()****

`<?phpclass A{    const NAME u003d 'A'; public static function test() {         $args u003d func_get_args(); echo static::NAME, " ".join(',', $args)."
";    }}class B extends A{    const NAME u003d 'B';   public static function test() {         echo self::NAME
"; |:"; ||||||||||| ;function test() {        $args u003d func_get_args();        echo "C ".join(',', $args)."
";    }?> `

Результат виконання цього прикладу:

B
B більше,args
C other,args

### Дивіться також

- [forward_static_call_array()](function.forward-static-call-array.md) -
Виклик статичного методу та передача параметрів у вигляді масиву
- [call_user_func_array()](function.call-user-func-array.md) -
Викликає callback-функцію з масивом параметрів
- [call_user_func()](function.call-user-func.md) - Викликає
callback-функцію, задану у першому параметрі
- [is_callable()](function.is-callable.md) - Перевіряє, що значення
може бути викликано як функція у поточній області видимості
