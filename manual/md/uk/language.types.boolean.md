- [«Вступ](language.types.intro.md)
- [Цілі числа »](language.types.integer.md)

- [PHP Manual](index.md)
- [Типи](language.types.md)
- Бульов

## Булев

Це найпростіший тип. bool виражає істинність значення. Він може бути
або **`true`**, або **`false`**.

### Синтаксис

Для вказівки bool, використовуйте константи **`true`** або **`false`**. Вони
обидві реєстронезалежні.

`<?php$foo u003d True; // присвоїти $foo значення TRUE?> `

Як правило, деякий [оператор](language.operators.md) повертає
значення типу bool, яке потім передається [керуючою
конструкції] (language.control-structures.md).

` <?php// u003du003d це оператор, перевіряє// еквівалентність і повертає booleanif ($action u003du003d "show_version") {    echo "Версія s? ) {    echo "<hr>
";}//...... тому що наступне має то ж самий смисл:if ($show_separators) {    echo ""<hr>
";}?> `

### Перетворення на булев тип

Для явного перетворення на bool, використовуйте `(bool)` або `(boolean)`.
Однак, у більшості випадків приведення типу необов'язково, оскільки
значення буде автоматично перетворено, якщо оператор, функція або
керуюча конструкція вимагає аргументу типу bool.

Дивіться також [маніпуляції з
типами] (language.types.type-juggling.md).

При перетворенні на bool, наступні значення розглядаються як
**`false`**:

- саме значення [boolean](language.types.boolean.md) **`false`**
- [integer](language.types.integer.md) 0 (нуль)
- [float](language.types.float.md) 0.0 (нуль) та -0.0 (мінус нуль)
- порожня [рядок](language.types.string.md), та
[рядок](language.types.string.md) "0"
- [масив](language.types.array.md) без елементів
- особливий тип [NULL](language.types.null.md) (включаючи
невстановлені змінні)
- об'єкти [SimpleXML](ref.simplexml.md), створені з пустих
елементів без атрибутів, тобто елементів, які не мають дочірніх
елементів, ні атрибутів.

Всі інші значення розглядаються як **`true`** (включаючи будь-який
[resource](language.types.resource.md) та **`NAN`**).

**Увага**

`-1` розглядається як **`true`**, як і будь-яке інше ненульове
(Негативне або позитивне) число!

`<?phpvar_dump((bool) ""); //bool(false)var_dump((bool) "0"); //bool(false)var_dump((bool) 1); //bool(true)var_dump((bool) -2); //bool(true)var_dump((bool) "foo"); //bool(true)var_dump((bool) 2.3e5); //bool(true)var_dump((bool) array(12)); //bool(true)var_dump((bool) array()); //bool(false)var_dump((bool) "false"); //bool(true)?> `
