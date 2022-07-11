- [«
ReflectionFunction::getClosure](reflectionfunction.getclosure.md)
- [ReflectionFunction::invokeArgs
»](reflectionfunction.invokeargs.md)

- [PHP Manual](index.md)
- [ReflectionFunction](class.reflectionfunction.md)
- Викликає функцію

# ReflectionFunction::invoke

(PHP 5, PHP 7, PHP 8)

ReflectionFunction::invoke — Викликає функцію

### Опис

public
**ReflectionFunction::invoke**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Викликає відображену (reflected) функцію.

### Список параметрів

`args`
Передані функції аргументи. Може приймати змінну кількість
аргументів за аналогією з
[call_user_func()](function.call-user-func.md).

### Значення, що повертаються

Повертає результат виконання викликаної функції.

### Приклади

**Приклад #1 Приклад використання **ReflectionFunction::invoke()****

` <?phpfunction title($title, $name){    return sprintf("%s. %s
", $title, $name);}$function u003d new ReflectionFunction('title');echo $function->invoke('Dr', 'Phil');?> `

Результат виконання цього прикладу:

Dr. Phil

### Примітки

> **Примітка**:
>
> **ReflectionFunction::invoke()** не може використовуватися, якщо
> очікуються параметри посилань. Замість нього слід використовувати
> [ReflectionFunction::invokeArgs()](reflectionfunction.invokeargs.md)
> (Передача посилань у списку аргументів).

### Дивіться також

- [ReflectionFunction::export()](reflectionfunction.export.md) -
Експортує функції
- [\_\_invoke()](language.oop5.magic.md#object.invoke)
- [call_user_func()](function.call-user-func.md) - Викликає
callback-функцію, задану у першому параметрі
