- [ create_function](function.create-function.md)
- [forward_static_call »](function.forward-static-call.md)

- [PHP Manual](index.md)
- [Функції керування функціями](ref.funchand.md)
- Виклик статичного методу та передача параметрів у вигляді масиву

#forward_static_call_array

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

forward_static_call_array — виклик статичного методу та передача
параметрів у вигляді масиву

### Опис

**forward_static_call_array**([callable](language.types.callable.md)
`$callback`, array `$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Викликає функцію користувача або метод, задані в параметрі
`callback`. Ця функція повинна викликатись у контексті методу і не може
бути викликана поза класом. Вона використовує [пізніше статичне
зв'язування](language.oop5.late-static-bindings.md). Усі аргументи
пересилаються в метод за значенням та у вигляді масиву, аналогічно
[call_user_func_array()](function.call-user-func-array.md).

### Список параметрів

`callback`
Функція або метод дзвінка. Цей параметр може бути масивом з ім'ям
класу та методу, або рядком з ім'ям функції.

`parameter`
Масив, що містить усі аргументи виклику функції.

> **Примітка**:
>
> Пам'ятайте, що аргументи **forward_static_call_array()** не передаються
> за посиланням.

### Значення, що повертаються

Повертає результат функції або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **forward_static_call_array()****

`<?phpclass A{    const NAME u003d 'A'; public static function test() {         $args u003d func_get_args(); echo static::NAME, " ".join(',', $args)."
";    }}class B extends A{    const NAME u003d 'B';   public static function test() {         echo self::NAME
";|                  ¦                                                                               ят test('foo');function test() {        $args u003d func_get_args();        echo "C ".join(',', $args)."
";    }?> `

Результат виконання цього прикладу:

B
B більше,args
C other,args

### Дивіться також

- [forward_static_call()](function.forward-static-call.md) - Виклик
статичного методу
- [call_user_func()](function.call-user-func.md) - Викликає
callback-функцію, задану у першому параметрі
- [call_user_func_array()](function.call-user-func-array.md) -
Викликає callback-функцію з масивом параметрів
- [is_callable()](function.is-callable.md) - Перевіряє, що значення
може бути викликано як функція у поточній області видимості
