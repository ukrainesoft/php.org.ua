- [«
ReflectionReference::\_\_construct](reflectionreference.construct.md)
- [ReflectionReference::getId »](reflectionreference.getid.md)

- [PHP Manual](index.md)
- [ReflectionReference](class.reflectionreference.md)
- Створює ReflectionReference з елементу масиву

# ReflectionReference::fromArrayElement

(PHP 7 u003d 7.4.0, PHP 8)

ReflectionReference::fromArrayElement — Створює ReflectionReference з
елемента масиву

### Опис

public static **ReflectionReference::fromArrayElement**(array `$array`,
int\|string `$key`):
?[ReflectionReference](class.reflectionreference.md)

Створює [ReflectionReference](class.reflectionreference.md) з
елемент масиву.

### Список параметрів

`array`
Масив, що містить потенційне посилання.

`key`
Ключ; ціле число(int) чи рядок(string).

### Значення, що повертаються

Повертає екземпляр **ReflectionReference** якщо `$array[$key]`
є посиланням, або **`null`** інакше.

### Помилки

Якщо `array` не є масивом, або `key` не є цілим
числом (int) або рядком (string), буде викинуто виняток
[TypeError](class.typeerror.md). Якщо `$array[$key]` не заданий, то
буде викинуто виняток
[ReflectionException](class.reflectionexception.md).
