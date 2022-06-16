- [« ReflectionFunction::invoke](reflectionfunction.invoke.md)
- [ReflectionFunction::isDisabled
»](reflectionfunction.isdisabled.md)

- [PHP Manual](index.md)
- [ReflectionFunction](class.reflectionfunction.md)
- Виклик функції із передачею аргументів

# ReflectionFunction::invokeArgs

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

ReflectionFunction::invokeArgs — Виклик функції передачі аргументів

### Опис

public **ReflectionFunction::invokeArgs**(array `$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Викликає функцію та передає їй аргументи у вигляді масиву.

### Список параметрів

`args`
Передані функції аргументи як масиву. Поведінка функції
аналогічно [call_user_func_array()](function.call-user-func-array.md).

### Значення, що повертаються

Повертає результат виконання викликаної функції.

### Приклади

**Приклад #1 Приклад використання **ReflectionFunction::invokeArgs()****

` <?phpfunction title($title, $name){    return sprintf("%s. %s
", $title, $name);}$function u003d new ReflectionFunction('title');echo $function->invokeArgs(array('Dr', 'Phil'));?> `

Результат виконання цього прикладу:

Dr. Phil

**Приклад #2 Приклад використання **ReflectionFunction::invokeArgs()** з
посиланнями на аргументи **

`<?phpfunction get_false_conditions(array $conditions, array &$false_conditions){   foreach ($conditions as $condition) {         if (             ¦        ¨ }   }}$function_ref                  ¦¦¦¦¦¦¦ $false_conditions));var_dump($false_conditions);?> `

Результат виконання цього прикладу:

array(2) {
[0]u003d>
bool(false)
[1]u003d>
int(0)
}

### Примітки

> **Примітка**:
>
> Якщо функція має аргументи, які мають бути посиланнями, вони
> повинні бути посиланнями і на переданому спиці аргументів.

### Дивіться також

- [ReflectionFunction::invoke()](reflectionfunction.invoke.md) -
Викликає функцію
- [ReflectionFunctionAbstract::getNumberOfParameters()](reflectionfunctionabstract.getnumberofparameters.md) -
Отримує кількість параметрів
- [\_\_invoke()](language.oop5.magic.md#object.invoke)
- [call_user_func_array()](function.call-user-func-array.md) -
Викликає callback-функцію з масивом параметрів
