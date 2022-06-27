- [« Міграція з PHP 7.0.x на PHP 7.1.x](migration71.md)
- [Нові функції »](migration71.new-functions.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.0.x на PHP 7.1.x](migration71.md)
-   Нові можливості

## Нові можливості

### Обнулювані типи

Типи для параметрів і значень, що повертаються, можуть бути позначені як
обнулювані шляхом додавання префікса як знака питання. Це означає,
що зазначені параметри та значення, що повертаються, можуть бути як
зазначеного типу, так і **`null`**.

` ? ){   var_dump($name);}test('elePHPant');test(null);test(); `

Результат виконання цього прикладу:

string(10) "elePHPant"
NULL
string(10) "elePHPant"
NULL
Uncaught Error: Too few arguments для функцій test(), 0 passed in...

### Функції, що нічого не повертають

Був доданий тип значення, що повертається void. Функції з таким заданим
типом значення, що повертається, не повинні нічого повертати. Тобто або
взагалі не утримувати жодного оператора return, або використовувати його
без параметра. **`null`** не є коректним значенням для повернення
у таких функціях.

` <?phpfunction swap(&$left, &$right): void{    if ($left u003du003du003d $right) {        return; }   $tmpu003du003d$left; $left u003d $right; $rightu003d $tmp;}$a u003d 1;$b u003d 2;var_dump(swap($a, $b), $a, $b); `

Результат виконання цього прикладу:

null
int(2)
int(1)

Спроба використовувати такі функції, що повертаються, призведе до
тому, що це значення вважатиметься за **`null`**, без висновку
попередження. Причина цього в тому, що попередження будуть викликати
загальних функцій найвищого порядку.

### Симетрична деструктуризація масиву

Можна використовувати короткий синтаксис (`[]`) для деструктуризації
масивів з метою присвоєння (у тому числі в `foreach`), як альтернатива
функції [list()](function.list.md), яка, втім, все ще
підтримується.

` <?php$data u003d [    [1, 'Tom'],    [2, 'Fred'],];// використовуючи list()list($id1, $name1) u003d $data[0];// використання [][$id1, $name1] u003d $data[0];// використовуючи list()foreach ($data as list($id, $name)) {    // код, містить $id і $name}// використовуючи []foreach ($data as [$id, $name]) {    // код, містить $id і $name} `

### Видимість констант класу

Додано підтримку визначення області видимості для констант класу.

`<?phpclass ConstDemo{    const PUBLIC_CONST_A u003d 1; public const PUBLIC_CONST_B u003d 2; protected const PROTECTED_CONST u003d 3; private const PRIVATE_CONST u003d 4;} `

### Псевдотип [iterable](language.types.iterable.md)

Було додано новий псевдотип (схожий на
[callable](language.types.callable.md)), названий
[iterable](language.types.iterable.md). Він може використовуватись як
параметр, так і як значення, що повертається там, де використовується
масив або об'єкт, що реалізує інтерфейс
[Traversable](class.traversable.md). Що стосується підтипів, типи
параметрів із дочірніх класів можуть розширити декларацію батьків типу
array або [Traversable](class.traversable.md) до
[iterable](language.types.iterable.md). Для типів повернення, дочірні
класи можуть звужувати тип значення, що повертається з
[iterable](language.types.iterable.md) до array або об'єкта
реалізує [Traversable](class.traversable.md).

` <?phpfunction iterator(iterable $iter){    foreach ($iter as $val) {         //    }} `

### Обробка кількох винятків в одному блоці catch

У блоці catch тепер можна обробляти кілька винятків, перераховуючи
їх через символ вертикальної межі (`|`). Це може бути корисно, якщо
різні винятки обробляються однаково.

` <?phptry {    // Який то код} catch (FirstException | SecondException $e) {    // Обробляємо обидва виключення} `

### Підтримка ключів у [list()](function.list.md)

Тепер ви можете вказувати ключі оператора
[list()](function.list.md) або в його новому короткому синтаксисі `[]`.
Це дозволяє деструктурувати масиви з нечисловими або
непослідовними ключами.

` <?php$data u003du003d [    ["id" u003d> 1, "name" u003d> 'Tom'],    ["id" u003d> 2, "name" u003d> 'Fred'],];// стиль ()list("id" u003d> $id1, "name" u003d> $name1) u003d $data[0];// стиль []["id" u003d> $id1, "name" u003d> $name1] u003d $data[0];// стиль list()foreach ($data aslist("id" u003d> $id, "name" u003d> $name)) {    // logic here/with $id and $name} стиль []foreach ($data as ["id" u003d> $id, "name" u003d> $name]) {     // logic here with $id and$$name} `

### Підтримка негативних зсувів для рядків

Підтримка негативних зсувів для рядків додано до [функції для
роботи з рядками](book.strings.md), а також в [індексацію
строк](language.types.string.md#language.types.string.substr) з
допомогою `[]` або `{}`. У цих випадках негативні усунення
інтерпретуються як усунення щодо кінця рядка.

` <?phpvar_dump("abcdef"[-2]);var_dump(strpos("aabbcc", "b", -3)); `

Результат виконання цього прикладу:

string (1) "e"
int(3)

Тепер підтримуються негативні усунення в простому синтаксисі
вказівки індексу у рядках та масивах.

` <?php$string u003d 'bar';echo "Останній символ '$string' - '$string[-1]'.
";?> `

Результат виконання цього прикладу:

Останній символ 'bar' – 'r'.

### Підтримка AEAD в ext/openssl

Підтримка AEAD (режими GCM та CCM) була додана шляхом розширення
функцій [openssl_encrypt()](function.openssl-encrypt.md) та
[openssl_decrypt()](function.openssl-decrypt.md) додатковими
параметрами.

### Перетворення callable на [Closure](class.closure.md) за допомогою [Closure::fromCallable()](closure.fromcallable.md)

До класу [Closure](class.closure.md) додано новий статичний метод
для можливості легко перетворити
[callable](language.types.callable.md) до об'єктів типу
[Closure](class.closure.md).

` <?phpclass Test{    public function exposeFunction()    {        return Closure::fromCallable([$this, 'privateFunction']); }   private function privateFunction($param)    {       var_dump($param); }}$privFuncu003du003d(new Test)->exposeFunction();$privFunc('значення'); `

Результат виконання цього прикладу:

string(16) "значення"

### Асинхронна обробка сигналів

Нова функція [pcntl_async_signals()](function.pcntl-async-signals.md)
була додана для дозволу асинхронної обробки сигналів без
використання тиків (які виробляють багато накладних витрат).

`<?phppcntl_async_signals(true); // включає асинхронні сигналиpcntl_signal(SIGHUP, function($sig) {   echo "SIGHUP
";});posix_kill(posix_getpid(), SIGHUP); `

Результат виконання цього прикладу:

SIGHUP

### Підтримка HTTP/2 server push в ext/curl

Підтримка "server push" додана в модуль CURL (потрібна версія 7.46 та
вище). Використовувати можна у функції
[curl_multi_setopt()](function.curl-multi-setopt.md) з новою
константою **`CURLMOPT_PUSHFUNCTION`**. Також додані константи
**`CURL_PUSH_OK`** та **`CURL_PUSH_DENY`** для визначення, чи був прийнятий
або відхилено "server push".

### Контекстні опції потоку

Була додана опція контексту потоку
[tcp_nodelay](context.socket.md#context.socket.tcp_nodelay).
