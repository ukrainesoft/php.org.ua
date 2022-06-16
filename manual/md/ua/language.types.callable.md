- [«NULL](language.types.null.md)
- [Оголошення типів »](language.types.declarations.md)

- [PHP Manual](index.md)
- [Типи](language.types.md)
- Функції зворотного дзвінка (callback-функції)

## Функції зворотного виклику (callback-функції)

Callback-функції можуть бути позначені оголошенням типу
[callable](language.types.callable.md).

Деякі функції, такі як
[call_user_func()](function.call-user-func.md) або
[usort()](function.usort.md), приймають певні користувачем
callback-функції як параметр. Callback-функції можуть бути як
простими функціями, і методами об'єктів, включаючи статичні методи
класів.

### Передача

У PHP функції передаються на ім'я у вигляді рядка. Можно використовувати
будь-які вбудовані або створені користувачем функції, за винятком
конструкцій мови, таких як: [array()](function.array.md),
[echo](function.echo.md), [empty()](function.empty.md),
[eval()](function.eval.md), [exit()](function.exit.md),
[isset()](function.isset.md), [list()](function.list.md),
[print](function.print.md) або [unset()](function.unset.md).

Метод створеного об'єкта (object) передається як масив, що містить
об'єкт за індексом 0 та ім'я методу за індексом 1. Доступ до закритих та
захищеним методам дозволено зсередини класу.

Статичні методи класу також можуть бути викликані без створення
екземпляра об'єкта класу шляхом передачі імені класу замість об'єкта в
елементі масиву з індексом 0 або виконання ClassName::methodName.

Крім звичайних функцій користувача, як callback-функції
можна передавати [анонімні функції](functions.anonymous.md) та
[Стрілкові функції](functions.arrow.md).

> **Примітка**:
>
> Починаючи з PHP 8.1.0, у [Callback-функцій як об'єктів першого
> класу](functions.first_class_callable_syntax.md) та сама семантика,
> що й цього методу.

Як правило, будь-який об'єкт, що реалізує
[\_\_invoke()](language.oop5.magic.md#object.invoke), також може бути
передано в параметр callback.

**Приклад #1 Приклад callback-функції**

` <?php// Приклад callback-функціїfunction my_callback_function() {    echo 'Привіт, світ!';}// Приклад callback-методаclass MyClass {                                       Éн  | }}// Тип Тип 1: Простий callbackcall_user_func ('my_callback_function'); ();call_user_func(array($obj, 'myCallbackMethod'));// Тип 4: Виклик статичного методу класуcall_user_func('MyClass::myCallbackMethod'); ) {        echo "A
";    }}class B extends A {    public static function who() {        echo "B
";    }}call_user_func(array('B', 'parent::who')); // A// Тип 6: Объекты, реализующие __invoke, могут быть использованы как callbackclass C {    public function __invoke($name) {        echo 'Привіт ', $name, "
";    }}$c u003d new C();call_user_func($c, 'PHP!');?> `

**Приклад #2 Приклад callback-функції з використанням замикання**

` <?php// Наше замикання$double u003d function($a) {    return $a * 2;};// Діапазон чисел$numbers u003d range(1, 5);// Ін для подвоєння кожного елемента в нашому діапазоні$new_numbers u003d array_map($double, $numbers);print implode(' ', $new_numbers);?> `

Результат виконання цього прикладу:

2 4 6 8 10

> **Примітка**:
>
> Callback-функції, зареєстровані такими функціями як
> [call_user_func()](function.call-user-func.md) та
> [call_user_func_array()](function.call-user-func-array.md), не будуть
> викликані за наявності не спійманого виключення, кинутого в попередній
> callback-функції.
