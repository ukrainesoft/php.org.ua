- [«Зумовлені константи](classobj.constants.md)
- [Функції роботи з класами та об'єктами»] (ref.classobj.md)

- [PHP Manual](index.md)
- [Класи та об'єкти](book.classobj.md)
- Приклади

# Приклади

У наведеному нижче прикладі ми спочатку визначимо базовий клас та клас
його успадковує. Базовий клас описує овоч: чи їстівний він і якого
кольору. Дочірній клас `Spinach` додає метод приготування овочів та
перевірки, чи був він уже підготовлений.

**Приклад #1 Визначення класів**

`Овощ`

`<?phpclass Vegetable {    public $edible; public $color; public function __construct($edible, $color u003d "green")    {       $this->edible u003d $edible; $this->color u003d $color; }   public functionisEdible()   {        return $this->edible; }   publicfunction getColor()   {        return $this->color; }}?> `

`Шпинат`

`<?phpclass Spinach extends Vegetable {    public $cooked u003d false; public function __construct()    {        parent::__construct(true, "green"); }    public function cook()    {        $this->cooked u003d true; }   public|function isCooked()   {        return $this->cooked; }}?> `

Тепер ми створимо об'єкт кожного класу і роздрукуємо інформацію про
них, включаючи порядок їх успадкування. Також ми оголосимо кілька
функцій-утиліт, головним чином для зручного виведення результатів.

**Приклад #2 test_script.php**

` <?php// зареєструвати автозавантажувач для завантаження класівspl_autoload_register();function printProperties($obj){    foreach (get_object_vars($obj) as $prop u003d> $               
";    }}function printMethods($obj){   $arr u003d get_class_methods(get_class($obj));   foreach ($arr as $method) {     
";    }}function objectBelongsTo($obj, $class){    if (is_subclass_of($obj, $class)) {        echo "Объект принадлежит к классу " . get_class($obj);        echo ", подкласс $class
";    }}else {         echo "Об'єкт не належить до підкласу $class
";    }}// створення 2 об'єктів$veggie u003d new Vegetable(true, "blue");$leafy u003d new Spinach();// виведення інформації об'єктахecho |
";echo "листовий: CLASS " . get_class($leafy);echo ", PARENT " . get_parent_class($leafy) . "
";// показати вегетаріанські властивостіecho "
вегетаріанська: Властивості
";printProperties($veggie);// і листові методиecho "
leafy: Методи
";printMethods($leafy);echo "
Походження:
";objectBelongsTo($leafy, Spinach::class);objectBelongsTo($leafy, Vegetable::class);?> `

Результат виконання даних прикладів:

вегетаріанський: CLASS Vegetable
листовий: CLASS Spinach, PARENT Vegetable

вегетаріанська: Властивості
edible u003d 1
color u003d blue

листовий: Методи
function __construct()
function cook()
function isCooked()
function isEdible()
function getColor()

Походження:
Об'єкт не належить до підкласу Spinach
Об'єкт належить до класу Spinach, підклас Vegetable

Важливо зазначити, що у наведеному вище прикладі об'єкт `$leafy` -
екземпляр класу **Spinach**, який успадковує клас **Vegetable**.
