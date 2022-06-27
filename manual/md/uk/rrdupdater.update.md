- [«RRDUpdater::\_\_construct](rrdupdater.construct.md)
- [ScoutAPM »](book.scoutapm.md)

- [PHP Manual](index.md)
- [RRDUpdater](class.rrdupdater.md)
- Оновлює файл бази даних RRD

# RRDUpdater::update

(PECL rrd \>u003d 0.9.0)

RRDUpdater::update — Оновлює файл бази даних RRD

### Опис

public **RRDUpdater::update**(array `$values`, string `$time` u003d time()
): bool

Оновлює файл бази даних RRD, визначений через конструктор
[RRDUpdater::\_\_construct()](rrdupdater.construct.md). Файл
оновлюється заданими значеннями.

### Список параметрів

`values`
Інформація для оновлення. Масив із ключами, що відповідають іменам
джерел даних.

`time`
Значення часу оновлення відповідних даних. За замовчуванням
використовується поточний час.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

У разі виникнення помилки викидає виняток типу
[Exception](class.exception.md).

### Приклади

**Приклад #1 Приклад використання **RRDUpdater::update()****

` <?php$updator u003d new RRDUpdater("speed.rrd");//оновлює джерело даних "speed" значенням "12411"//для часу заданого часової міткою timestamp da20 " u003d> "12411"), "920807700");?> `
