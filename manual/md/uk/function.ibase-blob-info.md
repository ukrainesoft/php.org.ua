- [« ibase_blob_import](function.ibase-blob-import.md)
- [ibase_blob_open »](function.ibase-blob-open.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Повертає довжину BLOB-об'єкта та іншу корисну інформацію

# ibase_blob_info

(PHP 5, PHP 7 \< 7.4.0)

ibase_blob_info — Повертає довжину BLOB-об'єкта та іншу корисну
інформацію

### Опис

**ibase_blob_info**(resource `$link_identifier`, string `$blob_id`):
array

**ibase_blob_info**(string `$blob_id`): array

Повертає довжину BLOB-об'єкта та іншу корисну інформацію.

### Список параметрів

`link_identifier`
Ідентифікатор посилання на InterBase. Якщо не вказано, передбачається остання
відкрите посилання.

`blob_id`
Ідентифікатор об'єкта BLOB.

### Значення, що повертаються

Повертає масив, що містить інформацію про BLOB-об'єкт. Повертається
інформація складається з довжини BLOB-об'єкта, кількості, що містяться в ньому
сегментів, розміру найбільшого сегмента та того, чи є він
BLOB-потоком або сегментованим BLOB-об'єктом.
