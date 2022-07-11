- [«array_chunk](function.array-chunk.md)
- [array_combine »](function.array-combine.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Повертає масив із значень одного стовпця вхідного масиву

#array_column

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

array_column — Повертає масив із значень одного стовпця вхідного
масиву

### Опис

**array_column**(array `$array`, int\|string\|null `$column_key`,
int\|string\|null `$index_key` u003d **`null`**): array

**array_column()** повертає масив із значень стовпця масиву `array`
з ключем `column_key`. Опціонально можна вказати `index_key`, щоб
індексувати повертається масив значеннями зі стовпця з ключем
`index_key` вхідного масиву.

### Список параметрів

`array`
Багатовимірний масив або масив об'єктів, з якого вироблятиметься
вибірка значень. Якщо заданий масив об'єктів, можна вибирати будь-які
його загальнодоступні якості. Для вибірки закритих або захищених властивостей
об'єкт повинен реалізовувати магічні методи **\_\_get()** та
**\_\_isset()**.

`column_key`
Ключ шпальти, значення якого потрібно повернути. Може містити як
числовий, і рядковий ключ для асоціативних масивів. А також може
приймати значення **`null`**, тоді повертаються не значення
певного стовпця, а весь масив (корисно використовувати разом із
`index_key`, щоб переіндексувати масив).

`index_key`
Ключ стовпця, значення якого будуть використовуватися як ключі
повертається масиву. Може бути як цілим ключем, так і
рядковим. Тип значення
[наводиться](language.types.array.md#language.types.array.key-casts),
як завжди для ключів масиву (проте до PHP 8.0.0 об'єкти,
що підтримують перетворення до рядка, також дозволено).

### Значення, що повертаються

Повертає масив із значень одного стовпця вхідного масиву (набору
записів).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------|
| 8.0.0 | Об'єкти в стовпцях, позначені параметром `index_key`, більше не будуть перетворені на рядок і замість цього будуть видавати [TypeError](class.typeerror.md). |

### Приклади

**Приклад #1 Отримаємо стовпець з іменами з набору записів**

` <?php// Массив, представляющий из себя набор записей, полученных из базы данных$records u003d array(    array(        'id' u003d> 2135,        'first_name' u003d> 'John',        'last_name' u003d> 'Doe', ),    array(        'id' u003d> 3245,        'first_name' u003d> 'Sally',        'last_name' u003d> 'Smith',    ),    array(        'id' u003d> 5342,        'first_name' u003d> 'Jane',        ' last_name' u003d> 'Jones',    ),    array(        'id' u003d> 5623,        'first_name' u003d> 'Peter',        'last_name' u003d> 'Doe',    ));$first_names u003d array_column($records, 'first_name ');print_r($first_names);?> `

Результат виконання цього прикладу:

Array
(
[0] u003d> John
[1] u003d> Sally
[2] u003d> Jane
[3] u003d> Peter
)

**Приклад #2 Отримаємо стовпець з прізвищами, а як ключі
масиву, що повертається використовуємо значення зі стовпця "id"**

` <?php// Використовуємо масив $records з першого прикладу$last_names u003d array_column($records, 'last_name', 'id');print_r($last_names);?> `

Результат виконання цього прикладу:

Array
(
[2135] u003d> Doe
[3245] u003d> Smith
[5342] u003d> Jones
[5623] u003d> Doe
)

**Приклад #3 Отримаємо стовпець імен користувачів із загальнодоступного
властивості "username" об'єкта**

`<?phpclass User{    public $username; public function __construct(string$$username)    {        $this->username u003d $username; }}$users u003d [   new User('user 1'),    new User('user 2'),    new User('user 3'),];print_r(array_column($users, '>> `

Результат виконання цього прикладу:

Array
(
[0] u003d> user 1
[1] u003d> user 2
[2] u003d> user 3
)

**Приклад #4 Отримаємо стовпець імен користувачів з приватної властивості
"name" об'єкта, використовуючи магічний метод **\_\_get()**.**

`<?phpclass Person{    private $name; public function __construct(string $name)    {        $this->name u003d $name; }    public function __get($prop)    {        return $this->$prop; }    public function __isset($prop) : bool    {       return isset($this->$prop); }}$people u003d [   new Person('Fred'),    new Person('Jane'),    new Person('John'),];print_r(array_column($people, 'name');

Результат виконання цього прикладу:

Array
(
[0] u003d> Fred
[1] u003d> Jane
[2] u003d> John
)

Якщо в об'єкті не буде методу **\_\_isset()**, то повернеться порожнім
масив.
