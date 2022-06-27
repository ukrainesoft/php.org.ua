- [«get_debug_type](function.get-debug-type.md)
- [get_resource_id »](function.get-resource-id.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Повертає масив усіх певних змінних

#get_defined_vars

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

get_defined_vars — Повертає масив усіх певних змінних

### Опис

**get_defined_vars**(): array

Ця функція повертає багатовимірний масив, що містить список усіх
певних змінних, будь то змінні оточення, серверні
змінні чи змінні, визначені користувачем, у тій області
видимості, у якій викликана **get_defined_vars()**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Багатовимірний масив із усіма змінними.

### Приклади

**Приклад #1 Приклад використання **get_defined_vars()****

` <?php$b u003d array(1, 1, 2, 3, 5, 8);$arr u003d get_defined_vars();// друкує $bprint_r($arr["b"]);/* друкує шлях до ін PHP (за використання режимуCGI) * наприклад, /usr/local/bin/php */echo $arr["_"];// друкує параметри командного рядки, якщо вони єprint_r($r / друкує всі серверні змінніprint_r($arr["_SERVER"]);// друкує всі доступні ключі для масивів зміннихprint_r(array_keys(get_defined_vars()));?> `

### Дивіться також

- [isset()](function.isset.md) - Визначає, чи було встановлено
змінна значенням, відмінним від null
- [get_defined_functions()](function.get-defined-functions.md) -
Повертає масив усіх певних функцій
- [get_defined_constants()](function.get-defined-constants.md) -
Повертає асоціативний масив з іменами всіх констант та їх
значень
