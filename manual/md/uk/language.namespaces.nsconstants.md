- [« Простори імен та динамічні особливості
мови](language.namespaces.dynamic.md)
- [Використання просторів імен: імпорт/створення псевдоніма імені
»](language.namespaces.importing.md)

- [PHP Manual](index.md)
- [Простори імен](language.namespaces.md)
- Ключове слово namespace та константа \_\_NAMESPACE\_\_

## Ключове слово namespace і константа \_\_NAMESPACE\_\_

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

PHP підтримує два способи доступу до абстрактних елементів у поточному
просторі імен таким, як магічна константа **`__NAMESPACE__`** та
ключове слово `namespace`.

Значення константи **`__NAMESPACE__`** - це рядок, що містить
Ім'я поточного простору імен. У глобальному просторі, поза
простір імен, вона містить порожній рядок.

**Приклад #1 Приклад використання константи \_\_NAMESPACE\_\_ у коді з
простором імен**

`<?phpnamespace MyProject;echo '"', __NAMESPACE__, '"'; // виводить "MyProject"?> `

**Приклад #2 Приклад використання константи \_\_NAMESPACE\_\_
глобальному просторі**

`<?phpecho '"', __NAMESPACE__, '"'; // виводить ""?> `

Константа **`__NAMESPACE__`** корисна для динамічно конструюваних
імен, наприклад:

**Приклад #3 використання константи \_\_NAMESPACE\_\_ для динамічного
конструювання імені**

` <?phpnamespace MyProject;function get($classname){    $a u003d __NAMESPACE__ . '\' . $classname; return new $a;}?> `

Ключове слово `namespace` може бути використане для явного запиту
елемента з поточного простору імен або підпростору. Це
еквівалент оператора `self` для класів у просторі імен.

**Приклад #4 Оператор namespace, всередині простору імен**

`<?phpnamespace MyProject;use blah lah as mine; // дивіться "Використання пространств імён: імпорт/створення псевдоніму імені"blah\mine(); // викликає функцію MyProject lah\mine()namespace lah\mine(); // викликає функцію MyProject lah\mine()namespace unc(); // викликає функцію MyProject unc()namespace\sub unc(); // викликає функцію MyProject\sub unc()namespac

**Приклад #5 Оператор namespace у глобальному коді**

`<?phpnamespace unc(); // викликає функцію func()namespace\sub unc(); // викликає функцію sub unc()namespac
