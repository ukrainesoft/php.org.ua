- [« Спадкування](language.oop5.inheritance.md)
- [Ключове слово static»](language.oop5.static.md)

- [PHP Manual](index.md)
- [Класи та об'єкти](language.oop5.md)
- Оператор дозволу області видимості (::)

## Оператор дозволу області видимості (::)

Оператор дозволу області видимості (також званий "Paamayim
Nekudotayim") або просто "подвійна двокрапка" - це лексема, що дозволяє
звертатися до [статичних](language.oop5.static.md) властивостей,
[константам](language.oop5.constants.md) та перевизначеним властивостям
чи методам класу.

При зверненні до цих елементів ззовні класу необхідно використовувати ім'я
цього класу.

Можна звернутися до класу за допомогою змінної. Значення змінної не
має бути ключовим словом (наприклад, `self`, `parent` або `static`).

"Paamayim Nekudotayim" на перший погляд може здатися дивним
словосполученням для позначення подвійної двокрапки. Однак, під час
створення Zend Engine версії 0.5 (який входив до PHP3), команда Zend
обрала саме це позначення. Воно насправді означає "подвійне
двокрапка" - на івриті!

**Приклад #1 Використання :: поза оголошенням класу**

` <?phpclass MyClass {   const CONST_VALUE u003d 'Значення константи';}$classname u003d 'MyClass';echo $classname::CONST_VALUE;echo MyClass::CONST_VALUE;?> `

Для звернення до властивостей та методів усередині самого класу використовуються
ключові слова `self`, `parent` та `static`.

**Приклад #2 Використання :: всередині оголошення класу**

`<?phpclass OtherClass extends MyClass{    public static $my_static u003d 'статична змінна'; public static function doubleColon() {       echo parent::CONST_VALUE . "
";        echo self::$my_static . "
";    }}$classname u003d 'OtherClass';$classname::doubleColon();OtherClass::doubleColon();?> `

Коли дочірній клас перевизначає методи, оголошені в батьківському
класі, PHP не буде здійснювати автоматичний виклик методів,
що належать класу-батьку. Ця функціональність покладається на
метод, що визначається в дочірньому класі. Це правило
поширюється на [конструктори та
деструктори](language.oop5.decon.md),
[перевантажені](language.oop5.overloading.md) та
["Магічні"](language.oop5.magic.md) методи.

**Приклад #3 Звернення до методу в батьківському класі**

` <?phpclass MyClass{   protected function myFunc() {       echo "MyClass::myFunc()
";    }}class OtherClass extends MyClass{    // Переопределить родительское определение    public function myFunc()    {        // Но всё ещё вызываем родительскую функцию        parent::myFunc();        echo "OtherClass::myFunc()
";    }}$class u003d new OtherClass();$class->myFunc();?> `

Дивіться також [деякі приклади статичних
викликів](language.oop5.basic.md#language.oop5.basic.class.this).
