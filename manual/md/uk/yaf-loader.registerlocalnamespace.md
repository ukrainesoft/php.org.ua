- [« Yaf_Loader::isLocalName](yaf-loader.islocalname.md)
- [Yaf_Loader::registerNamespace »](yaf-loader.registernamespace.md)

- [PHP Manual](index.md)
- [Yaf_Loader](class.yaf-loader.md)
- реєструє префікс локального класу

# Yaf_Loader::registerLocalNamespace

(Yaf \>u003d1.0.0)

Yaf_Loader::registerLocalNamespace — Реєструє префікс локального
класу

### Опис

public
**Yaf_Loader::registerLocalNamespace**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$prefix`): void

Реєструє префікс локального класу,
[Yaf_Loader](class.yaf-loader.md) шукає класи у двох каталогах
бібліотеки, один з яких налаштовується за допомогою
[application.library.directory](yaf.appconfig.md#configuration.yaf.library)
(в application.ini) який називається локальним каталогом бібліотек;
інший налаштовується за допомогою
[yaf.library](yaf.configuration.md#ini.yaf.library) (у php.ini),
який називається глобальним каталогом бібліотеки, оскільки він може
використовуватися багатьма програмами на одному сервері.

Коли запускається автозавантаження, [Yaf_Loader](class.yaf-loader.md)
визначатиме, у якому каталозі бібліотеки слід шукати, слід
шукати, перевіряючи ім'я префіксу пропущеного імені класу. Якщо ім'я
префікса зареєстровано як localnamespack, буде шукати в каталозі
локальної бібліотеки, інакше — у каталозі глобальної
бібліотеки.

> **Примітка**:
>
> Якщо yaf.library не настроєний, то передбачається, що каталог
> Глобальна бібліотека є каталогом локальної бібліотеки. В цьому
> у випадку всі автозавантаження шукатимуть каталог локальної бібліотеки. Але
> якщо ви хочете, щоб ваша програма Yaf була стійкою, завжди
> реєструйте власні класи як локальні.

### Список параметрів

`prefix`
Рядок або масив префіксів імені класу. Всі префікси класу з цим
префіксом будуть завантажені у шлях локальної бібліотеки.

### Значення, що повертаються

Логічний тип (bool)

### Приклади

**Приклад #1 Приклад використання
**Yaf_Loader::registerLocalNamespace()****

` <?php$loader u003d Yaf_Loader::getInstance('/local/library/', '/global/library');$loader->registerLocalNamespace("Baidu");$loader->registerLocalNamespace(array("Sina") , "Weibo"));$loader->autoload("Baidu_Name"); // буде шукати в '/local/library/'$loader->autoload("Sina"); // буде шукати в '/local/library/'$loader->autoload("Global_Name");// буде шукати в '/global/library/'$loader->autoload("Foo_Bar"); // буде шукати в '/global/library/'?> `
