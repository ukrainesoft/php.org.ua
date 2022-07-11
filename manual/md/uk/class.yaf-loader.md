- [«
Yaf_View_Simple::setScriptPath](yaf-view-simple.setscriptpath.md)
- [Yaf_Loader::autoload »](yaf-loader.autoload.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Loader

# Клас Yaf_Loader

(Yaf \>u003d1.0.0)

## Вступ

**Yaf_Loader** представляє комплексне рішення для автозавантаження
Yaf.

При першому вилученні екземпляра
[Yaf_Application](class.yaf-application.md), **Yaf_Loader** створює
екземпляр-одиначок і реєструється за допомогою spl_autoload. Ви
витягуєте екземпляр, використовуючи
[Yaf_Loader::getInstance()](yaf-loader.getinstance.md)

**Yaf_Loader** спробує завантажити клас лише один раз, у разі
виникнення помилки, залежить від
[yaf.use_spl_auload](yaf.configuration.md#ini.yaf.use-spl-autoload),
якщо ця конфігурація увімкнена
[Yaf_Loader::autoload()](yaf-loader.autoload.md) поверне **`false`**,
таким чином, надаючи можливість іншої функції автозавантаження. Якщо
вимкнена (за замовчуванням),
[Yaf_Loader::autoload()](yaf-loader.autoload.md) поверне **`true`**, а
також спрацює дуже корисне попередження (корисно, щоб з'ясувати,
чому клас може бути завантажений).

> **Примітка**:
>
> Будь ласка, залиште yaf.use_spl_autoload вимкненим, якщо в якійсь
> бібліотеці немає власного механізму автозавантаження та його неможливо
> переписати.

За замовчуванням **Yaf_Loader** припускає, що вся бібліотека (сценарій,
визначений класом) зберігається в [каталозі глобальної
бібліотеки](yaf.configuration.md#ini.yaf.library), який визначено в
php.ini (yaf.library).

Якщо ви хочете за допомогою **Yaf_Loader** виконати пошук деяких
класів (бібліотек) у [каталозі локальних
класів](class.yaf-loader.md#yaf-loader.props.library) (який
визначено в application.ini, за замовчуванням це
[application.directory](yaf.appconfig.md#configuration.yaf.directory).
"/library"), ви повинні зареєструвати префікс класу, використовуючи
[Yaf_Loader::registerLocalNameSpace()](yaf-loader.registerlocalnamespace.md)

Давайте подивимося кілька прикладів (за умови, що APPLICATION_PATH
[application.directory](yaf.appconfig.md#configuration.yaf.directory)):

**Приклад #1 Приклад конфігурації**

`` shellcode
// Передбачаються наступні налаштування у php.ini:
yaf.library u003d "/global_dir"

/ / Передбачаються наступні налаштування в php.ini:
application.library u003d APPLICATION_PATH "/library"
````

Передбачається, що зареєстровано такий локальний простір
імен:

**Приклад #2 Зареєструвати локальний простір імен**

` <?phpclass Bootstrap extends Yaf_Bootstrap_Abstract{   | }?> `

Тоді приклад автозавантаження:

**Приклад #3 Приклад завантаження класу**

`` shellcode
class Foo_Bar_Test u003d>
// APPLICATION_PATH/library/Foo/Bar/Test.php

class GLO_Name u003d>
// /global_dir/Glo/Name.php

class BarNon_Test
// /global_dir/Barnon/Test.php
````

**Приклад #4 Приклад завантаження класу імен**

`` shellcode
class \Foo\Bar\Dummy u003d>
// APPLICATION_PATH/library/Foo/Bar/Dummy.php

class \FooBar\Bar\Dummy u003d>
// /global_dir/FooBar/Bar/Dummy.php
````

Ви можете помітити, що всі папки з першою літерою великими, ви можете
зробити їх малими, встановивши
[yaf.lowcase_path](yaf.configuration.md#ini.yaf.lowcase-path) u003d On в
php.ini.

**Yaf_Loader** також призначений для завантаження класів MVC, і правило
таке:

**Приклад #5 Приклад завантаження класу MVC**

`` shellcode
Controller Classes u003d>
// APPLICATION_PATH/controllers/

Model Classes u003d>
// APPLICATION_PATH/models/

Plugin Classes u003d>
// APPLICATION_PATH/plugins/
````

Yaf ідентифікує суфікс класу (це за замовчуванням, ви також можете
змінити його на префікс, змінивши конфігурацію
[yaf.name_suffix](yaf.configuration.md#ini.yaf.name-suffix)), щоб
вирішити, чи є він класом MVC:

**Приклад #6 Класові відмінності MVC**

`` shellcode
Controller Classes u003d>
// ***Controller

Model Classes u003d>
// ***Model

Plugin Classes u003d>
// ***Plugin
````

кілька прикладів:

**Приклад #7 Приклад завантаження MVC**

`` shellcode
class IndexController
// APPLICATION_PATH/controllers/Index.php

class DataModel u003d>
// APPLICATION_PATH/models/Data.php

class DummyPlugin u003d>
// APPLICATION_PATH/plugins/Dummy.php

class A_B_TestModel u003d>
// APPLICATION_PATH/models/A/B/Test.php
````

> **Примітка**:
>
> Починаючи з 2.1.18, Yaf підтримує автозавантаження контролерів для
> сторони скрипта користувача (що означає автозавантаження,
> php, що запускається користувальницьким скриптом, наприклад: доступ до
> статичні властивості контролера в Bootstrap або плагінах), але
> автозавантажувач тільки намагається знайти скрипт класу контролера у папці
> модуля за замовчуванням, що називається
> "APPLICATION_PATH/controllers/".

також на каталог буде впливати
[yaf.lowcase_path](yaf.configuration.md#ini.yaf.lowcase-path).

## Огляд класів

class **Yaf_Loader** {

/\* Властивості \*/

protected `$_local_ns`;

protected `$_library`;

protected `$_global_library`;

static `$_instance`;

/\* Методи \*/

private [\_\_construct](yaf-loader.construct.md)()

public [autoload](yaf-loader.autoload.md)(): void

public [clearLocalNamespace](yaf-loader.clearlocalnamespace.md)():
void

public static [getInstance](yaf-loader.getinstance.md)(): void

public [getLibraryPath](yaf-loader.getlibrarypath.md)(bool
`$is_global` u003d **`false`**): [Yaf_Loader](class.yaf-loader.md)

public [getLocalNamespace](yaf-loader.getnamespaces.md)(): void

public [getNamespacePath](yaf-loader.getnamespacepath.md)(string
`$namespaces`): string

public **getNamespaces**(): array

public static [import](yaf-loader.import.md)(): void

public [isLocalName](yaf-loader.islocalname.md)(): void

public
[registerLocalNamespace](yaf-loader.registerlocalNamespace.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$prefix`): void

public
[registerNamespace](yaf-loader.registernamespace.md)(string\|array
`$namespaces`, string `$path` u003d ?): bool

public [setLibraryPath](yaf-loader.setlibrarypath.md)(string
`$directory`, bool `$is_global` u003d **`false`**):
[Yaf_Loader](class.yaf-loader.md)

}

## Властивості

`_local_ns`

`_library`
За замовчуванням це значення дорівнює
[application.directory](yaf.appconfig.md#configuration.yaf.directory)
. "/library", ви можете змінити це або в
application.ini(application.library) або викликати
[Yaf_Loader::setLibraryPath()](yaf-loader.setlibrarypath.md)

`_global_library`

`_instance`

## Зміст

- [Yaf_Loader::autoload](yaf-loader.autoload.md) — Призначення
autoload
- [Yaf_Loader::clearLocalNamespace](yaf-loader.clearlocalnamespace.md)
— Призначення clearLocalNamespace
- [Yaf_Loader::\_\_construct](yaf-loader.construct.md) - Призначення
\_\_construct
- [Yaf_Loader::getInstance](yaf-loader.getinstance.md) — Призначення
getInstance
- [Yaf_Loader::getLibraryPath](yaf-loader.getlibrarypath.md) -
Отримує шлях до бібліотеки
- [Yaf_Loader::getLocalNamespace](yaf-loader.getlocalnamespace.md)
Призначення getLocalNamespace
- [Yaf_Loader::getNamespacePath](yaf-loader.getnamespacepath.md) -
Отримує шлях зареєстрованого простору імен
- [Yaf_Loader::getLocalNamespace](yaf-loader.getnamespaces.md)
Отримує всю інформацію про зареєстровані простори імен
- [Yaf_Loader::import](yaf-loader.import.md) — Призначення import
- [Yaf_Loader::isLocalName](yaf-loader.islocalname.md) — Призначення
isLocalName
- [Yaf_Loader::registerLocalNamespace](yaf-loader.registerlocalNamespace.md)
- Реєструє префікс локального класу
- [Yaf_Loader::registerNamespace](yaf-loader.registernamespace.md)
Реєструє простір імен шляхом пошуку
- [Yaf_Loader::setLibraryPath](yaf-loader.setlibrarypath.md) -
Змінює шлях до бібліотеки
