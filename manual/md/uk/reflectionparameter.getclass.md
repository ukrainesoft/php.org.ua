- [«
ReflectionParameter::getAttributes](reflectionparameter.getattributes.md)
- [ReflectionParameter::getDeclaringClass
»](reflectionparameter.getdeclaringclass.md)

- [PHP Manual](index.md)
- [ReflectionParameter](class.reflectionparameter.md)
- Отримує об'єкт ReflectionClass для параметра, що відображається, або null

# ReflectionParameter::getClass

(PHP 5, PHP 7, PHP 8)

ReflectionParameter::getClass — Отримує об'єкт
[ReflectionClass](class.reflectionclass.md) для параметра, що відображається
або **`null`**

**Увага**

Ця функція була *Видалена* в PHP 8.0.0. Використання цієї функції не
рекомендується.

### Опис

public **ReflectionParameter::getClass**():
?[ReflectionClass](class.reflectionclass.md)

Отримує об'єкт [ReflectionClass](class.reflectionclass.md) для
параметра, що відображається, або **`null`**.

Починаючи з PHP 8.0.0, ця функція застаріла і не рекомендується. Замість неї
використовуйте
[ReflectionParameter::getType()](reflectionparameter.gettype.md),
щоб отримати [ReflectionType](class.reflectiontype.md) параметра, а
потім опитайте об'єкт, щоб визначити тип параметра.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт класу [ReflectionClass](class.reflectionclass.md) або
**`null`**, якщо тип не оголошений або якщо оголошений тип не є
класом чи інтерфейсом.

### Приклади

**Приклад #1 Приклад використання класу
[ReflectionParameter](class.reflectionparameter.md)**

` <?phpfunction foo(Exception $a) { }$functionReflection u003d new ReflectionFunction('foo');$parameters u003d $functionReflection->getParameters();$aParameter u003d $parameters[>] )->name;?> `

### Дивіться також

- [ReflectionParameter::getDeclaringClass()](reflectionparameter.getdeclaringclass.md) -
Отримання класу, що оголошує
