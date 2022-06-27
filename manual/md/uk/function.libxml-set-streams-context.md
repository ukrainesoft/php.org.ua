- [«
libxml_set_external_entity_loader](function.libxml-set-external-entity-loader.md)
- [libxml_use_internal_errors
»](function.libxml-use-internal-errors.md)

- [PHP Manual](index.md)
- [Функції libxml](ref.libxml.md)
- Встановлення контексту потоків для наступного завантаження чи запису
документа за допомогою libxml

# libxml_set_streams_context

(PHP 5, PHP 7, PHP 8)

libxml_set_streams_context — Встановлення контексту потоків для наступного
завантаження або запису документа за допомогою libxml

### Опис

**libxml_set_streams_context**(resource `$context`): void

Встановлення контексту потоку для наступного завантаження або запису документа
за допомогою libxml.

### Список параметрів

`context`
Ресурс контексту потоку (створений функцією
[stream_context_create()](function.stream-context-create.md))

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **libxml_set_streams_context()****

`<?php$opts u003d array(   'http' u003d> array(       'user_agent' u003d> 'PHP libxml agent',     ));$context|context| HTTP$doc u003d DOMDocument::load('http://www.example.com/file.xml');?> `

### Дивіться також

- [stream_context_create()](function.stream-context-create.md) -
Створює контекст потоку
