- [« Ключове слово namespace та константа
\_\_NAMESPACE\_\_](language.namespaces.nsconstants.md)
- [Глобальний простір »](language.namespaces.global.md)

- [PHP Manual](index.md)
- [Простори імен](language.namespaces.md)
- Використання просторів імен: імпорт/створення псевдоніма імені

## Використання просторів імен: імпорт/створення псевдоніма імені

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

Можливість посилатися на зовнішнє абсолютне ім'я за псевдонімом або
імпортування – це важлива особливість просторів імен. Це схоже на
можливість файлових систем unix створювати символічні посилання на файл
чи директорію.

PHP може створювати псевдоніми імені/імпортувати константи, функції,
класи, інтерфейси та простори імен.

Створення псевдоніма імені виконується за допомогою оператора `use`. Ось
приклад, що показує 5 типів імпорту:

**Приклад #1 імпорт/створення псевдоніма імені за допомогою оператора use**

`<?phpnamespace Foo; \Full unctionName;// псевдонім функціїuse function My\Full unctionName as func;// імпортування константиuse const My\Full\CONSTANT;$obj u003d new namespace\Another; // створює примірник класу foo\Another$obj u003d new Another; // створює об'єкт класу My\Full\ClassnameNSname\subns unc(); // викликає функцію My\Full\NSname\subns unc$a u003d new ArrayObject(array(1)); // створює об'єкт класу ArrayObject// без вираження "use ArrayObject" ми створимо об'єкт класу foo\ArrayObjectfunc(); // викликає функцію My\Full unctionNameecho CONSTANT; // виводить вміст константи My\Full\CONSTANT?> `

Зверніть увагу, що для імен у просторі імен (абсолютні імена,
що містять роздільник просторів імен, такі як `Foo\Bar`, на відміну
від глобальних імен, які його не містять, такі як `FooBar`) немає
необхідності в початковому зворотному сліші (\) та його присутність там не
рекомендується, оскільки імена, що імпортуються, повинні бути абсолютними і не
обробляються щодо поточного простору імен.

PHP додатково підтримує зручне скорочення для завдання кількох
операторів use в одному і тому ж рядку

**Приклад #2 імпорт/створення псевдоніма імені за допомогою оператора use,
комбінування кількох операторів use**

` <?phpuse My\Full\Classname as Another, My\Full\NSname;$obj u003d new Another; // створює об'єкт класу My\Full\ClassnameNSname\subns unc(); // викликає функцію My\Full\NSname\subns unc?> `

Імпорт виконується під час компіляції і тому не впливає на імена
динамічних класів, функцій чи констант.

**Приклад #3 Імпорт та динамічні імена**

` <?phpuse My\Full\Classname as Another, My\Full\NSname;$obj u003d new Another; // створює об'єкт класу My\Full\Classname$a u003d 'Another';$obj u003d new $a; // створює об'єкт класу Another?> `

На додаток, імпорт поширюється лише на неповні та повні імена.
Абсолютні імена не торкаються операції імпорту.

**Приклад #4 Імпортування та абсолютні імена**

` <?phpuse My\Full\Classname as Another, My\Full\NSname;$obj u003d new Another; // створює об'єкт класу My\Full\Classname$obj u003d new \Another; // створює об'єкт класу Another$obj u003d new Another hing; // створює об'єкт класу My\Full\Classname hing$obj u003d new \Another hing; // створює об'єкт класу Another hing?> `

### Огляд правил для імпорту

Ключове слово `use` має бути вказано на самому початку файлу (у
глобальної області) або всередині оголошення простору імен. Це
необхідно тому, що імпорт виконується під час компіляції, а не у
час виконання, тому воно не може бути укладено в блок. Наступний
приклад показує неприпустиме застосування ключового слова `use`:

**Приклад #5 Неприпустиме правило імпорту**

`<?phpnamespace Languages;function toGreenlandic(){    use|Languages\Danish; //...}?> `

> **Примітка**:
>
> Правила імпорту задаються на кожен файл окремо. Це означає, що
> файли, що приєднуються *НЕ* будуть успадковувати правила імпорту з
> батьківського файлу.

### Опис групування в одному операторі `use`

Класи, функції та константи, що імпортуються з одного і того ж
[`namespace`](language.namespaces.definition.md), можуть групуватися
в одному операторі [`use`] (language.namespaces.importing.md).

`<?phpuse some
amespace\ClassA;use some
amespace\ClassB;use some
amespace\ClassC as C;use function some
amespace n_a;use function some
amespace n_b;use function some
amespace n_c;use const some
amespace\ConstA;use const some
amespace\ConstB;use const some
amespace\ConstC;// Еквівалентно наступному груповому використанняuse some
amespace\{ClassA, ClassB, ClassC as C};use function some
amespace\{fn_a, fn_b, fn_c};use const some
amespace \ {ConstA, ConstB, ConstC}; `
