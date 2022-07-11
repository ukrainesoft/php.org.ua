- [«openal_source_get](function.openal-source-get.md)
- [openal_source_play »](function.openal-source-play.md)

- [PHP Manual](index.md)
- [Функції OpenAL](ref.openal.md)
- Поставити джерело на паузу

#openal_source_pause

(PECL openal u003d 0.1.0)

openal_source_pause — Поставити джерело на паузу

### Опис

**openal_source_pause**(resource `$source`): bool

### Список параметрів

`source`
Ресурс [Open AL(Source)](openal.resources.md) (створений раніше з
за допомогою [openal_source_create()](function.openal-source-create.md)).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [openal_source_stop()](function.openal-source-stop.md) -
Зупинити відтворення джерела
- [openal_source_play()](function.openal-source-play.md) - Почати
відтворення джерела
- [openal_source_rewind()](function.openal-source-rewind.md) -
Перемотати джерело на початок
