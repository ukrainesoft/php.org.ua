- [« mysqli::$client_version](mysqli.get-client-version.md)
- [mysqli::$host_info »](mysqli.get-host-info.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає статистику з'єднання із клієнтом

# mysqli::get_connection_stats

# mysqli_get_connection_stats

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

mysqli::get_connection_stats -- mysqli_get_connection_stats -- Повертає
статистику з'єднання з клієнтом

### Опис

Об'єктно-орієнтований стиль

public **mysqli::get_connection_stats**(): array

Процедурний стиль

**mysqli_get_connection_stats**([mysqli](class.mysqli.md) `$mysql`):
array

Повертає статистику з'єднання із клієнтом.

> **Примітка**:
>
> Доступно лише з модулем [mysqlnd](book.mysqlnd.md).

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Повертає масив статистики з'єднання.

### Приклади

**Приклад #1 Приклад використання **mysqli_get_connection_stats()****

` <?php$link u003d mysqli_connect();print_r(mysqli_get_connection_stats($link));?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[bytes_sent] u003d> 43
[bytes_received] u003d> 80
[packets_sent] u003d> 1
[packets_received] u003d> 2
[protocol_overhead_in] u003d> 8
[protocol_overhead_out] u003d> 4
[bytes_received_ok_packet] u003d> 11
[bytes_received_eof_packet] u003d> 0
[bytes_received_rset_header_packet] u003d> 0
[bytes_received_rset_field_meta_packet] u003d> 0
[bytes_received_rset_row_packet] u003d> 0
[bytes_received_prepare_response_packet] u003d> 0
[bytes_received_change_user_packet] u003d> 0
[packets_sent_command] u003d> 0
[packets_received_ok] u003d> 1
[packets_received_eof] u003d> 0
[packets_received_rset_header] u003d> 0
[packets_received_rset_field_meta] u003d> 0
[packets_received_rset_row] u003d> 0
[packets_received_prepare_response] u003d> 0
[packets_received_change_user] u003d> 0
[result_set_queries] u003d> 0
[non_result_set_queries] u003d> 0
[no_index_used] u003d> 0
[bad_index_used] u003d> 0
[slow_queries] u003d> 0
[buffered_sets] u003d> 0
[unbuffered_sets] u003d> 0
[ps_buffered_sets] u003d> 0
[ps_unbuffered_sets] u003d> 0
[flushed_normal_sets] u003d> 0
[flushed_ps_sets] u003d> 0
[ps_prepared_never_executed] u003d> 0
[ps_prepared_once_executed] u003d> 0
[rows_fetched_from_server_normal] u003d> 0
[rows_fetched_from_server_ps] u003d> 0
[rows_buffered_from_client_normal] u003d> 0
[rows_buffered_from_client_ps] u003d> 0
[rows_fetched_from_client_normal_buffered] u003d> 0
[rows_fetched_from_client_normal_unbuffered] u003d> 0
[rows_fetched_from_client_ps_buffered] u003d> 0
[rows_fetched_from_client_ps_unbuffered] u003d> 0
[rows_fetched_from_client_ps_cursor] u003d> 0
[rows_skipped_normal] u003d> 0
[rows_skipped_ps] u003d> 0
[copy_on_write_saved] u003d> 0
[copy_on_write_performed] u003d> 0
[command_buffer_too_small] u003d> 0
[connect_success] u003d> 1
[connect_failure] u003d> 0
[connection_reused] u003d> 0
[reconnect] u003d> 0
[pconnect_success] u003d> 0
[active_connections] u003d> 1
[active_persistent_connections] u003d> 0
[explicit_close] u003d> 0
[implicit_close] u003d> 0
[disconnect_close] u003d> 0
[in_middle_of_command_close] u003d> 0
[explicit_free_result] u003d> 0
[implicit_free_result] u003d> 0
[explicit_stmt_close] u003d> 0
[implicit_stmt_close] u003d> 0
[mem_emalloc_count] u003d> 0
[mem_emalloc_ammount] u003d> 0
[mem_ecalloc_count] u003d> 0
[mem_ecalloc_ammount] u003d> 0
[mem_erealloc_count] u003d> 0
[mem_erealloc_ammount] u003d> 0
[mem_efree_count] u003d> 0
[mem_malloc_count] u003d> 0
[mem_malloc_ammount] u003d> 0
[mem_calloc_count] u003d> 0
[mem_calloc_ammount] u003d> 0
[mem_realloc_count] u003d> 0
[mem_realloc_ammount] u003d> 0
[mem_free_count] u003d> 0
[proto_text_fetched_null] u003d> 0
[proto_text_fetched_bit] u003d> 0
[proto_text_fetched_tinyint] u003d> 0
[proto_text_fetched_short] u003d> 0
[proto_text_fetched_int24] u003d> 0
[proto_text_fetched_int] u003d> 0
[proto_text_fetched_bigint] u003d> 0
[proto_text_fetched_decimal] u003d> 0
[proto_text_fetched_float] u003d> 0
[proto_text_fetched_double] u003d> 0
[proto_text_fetched_date] u003d> 0
[proto_text_fetched_year] u003d> 0
[proto_text_fetched_time] u003d> 0
[proto_text_fetched_datetime] u003d> 0
[proto_text_fetched_timestamp] u003d> 0
[proto_text_fetched_string] u003d> 0
[proto_text_fetched_blob] u003d> 0
[proto_text_fetched_enum] u003d> 0
[proto_text_fetched_set] u003d> 0
[proto_text_fetched_geometry] u003d> 0
[proto_text_fetched_other] u003d> 0
[proto_binary_fetched_null] u003d> 0
[proto_binary_fetched_bit] u003d> 0
[proto_binary_fetched_tinyint] u003d> 0
[proto_binary_fetched_short] u003d> 0
[proto_binary_fetched_int24] u003d> 0
[proto_binary_fetched_int] u003d> 0
[proto_binary_fetched_bigint] u003d> 0
[proto_binary_fetched_decimal] u003d> 0
[proto_binary_fetched_float] u003d> 0
[proto_binary_fetched_double] u003d> 0
[proto_binary_fetched_date] u003d> 0
[proto_binary_fetched_year] u003d> 0
[proto_binary_fetched_time] u003d> 0
[proto_binary_fetched_datetime] u003d> 0
[proto_binary_fetched_timestamp] u003d> 0
[proto_binary_fetched_string] u003d> 0
[proto_binary_fetched_blob] u003d> 0
[proto_binary_fetched_enum] u003d> 0
[proto_binary_fetched_set] u003d> 0
[proto_binary_fetched_geometry] u003d> 0
[proto_binary_fetched_other] u003d> 0
)

### Дивіться також

- [Опис статистики](mysqlnd.stats.md)
