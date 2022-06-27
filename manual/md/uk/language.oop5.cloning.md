- [«Ключове слово final](language.oop5.final.md)
- [Порівняння об'єктів »](language.oop5.object-comparison.md)

- [PHP Manual](index.md)
- [Класи та об'єкти](language.oop5.md)
- Клонування об'єктів

## Клонування об'єктів

Створення копії об'єкта з абсолютно ідентичними властивостями не завжди
є прийнятним варіантом. Гарним прикладом потреби
копіювання конструкторів може послужити ситуація, коли у вас є
об'єкт, що є вікном GTK і містить ресурс-ідентифікатор
цього вікна; коли ви створюєте копію цього об'єкта, ви можете
знадобиться, щоб копія об'єкта містила ресурс-ідентифікатор нового
вікна. Іншим прикладом може бути ситуація, коли ваш об'єкт
містить посилання на будь-який інший використовуваний об'єкт і, коли ви
створюєте копію батьківського об'єкта, вам потрібно також створити новий
екземпляр цього іншого об'єкта, так, щоб копія об'єкта-контейнера
містила власний окремий екземпляр об'єкта, що міститься.

Копія об'єкта створюється за допомогою ключового слова `clone`
(який викликає метод
[\_\_clone()](language.oop5.cloning.md#object.clone) об'єкта, якщо це
можливо).

$copy_of_object u003d clone $object;

При клонуванні об'єкта PHP виконує поверхневу копію всіх властивостей
об'єкт. Будь-які властивості, які є посиланнями на інші змінні,
залишаться посиланнями.

**\_\_clone**(): void

Після завершення клонування, якщо метод
[\_\_clone()](language.oop5.cloning.md#object.clone) визначено, то
буде викликаний метод
[\_\_clone()](language.oop5.cloning.md#object.clone) новоствореного
об'єкта для можливої зміни всіх необхідних властивостей.

**Приклад #1 Клонування об'єкта**

`<?phpclass SubObject{    static $instances u003d 0; public $instance; public function __construct() {         $this->instance u003d ++self::$instances; }    public function __clone() {        $this->instance u003d ++self::$instances; }}class MyCloneable{    public $object1; public $object2; function __clone()    {         // Примусово клонуємо this->object1, інакше        // он буде вказувати на о $this->object1 u003d clone $this->object1; }}$obj u003d new MyCloneable();$obj->object1 u003d new SubObject();$obj->object2 u003d new SubObject();$obj2 u003d clone $obj;print("Оригінальний об'єкт:
");print_r($obj);print("Клонований об'єкт:
");print_r($obj2);?> `

Результат виконання цього прикладу:

Оригінальний об'єкт:
MyCloneable Object
(
[object1] u003d> SubObject Object
(
[instance] u003d> 1
)

[object2] u003d> SubObject Object
(
[instance] u003d> 2
)

)
Клонований об'єкт:
MyCloneable Object
(
[object1] u003d> SubObject Object
(
[instance] u003d> 3
)

[object2] u003d> SubObject Object
(
[instance] u003d> 2
)

)

Можливо звертатися до властивостей/методів щойно схиленого
об'єкта:

**Приклад #2 Доступ до об'єкта**

` <?php$dateTime u003d new DateTime();echo (clone $dateTime)->format('Y');?> `

Результатом виконання цього прикладу буде щось подібне:

2016
