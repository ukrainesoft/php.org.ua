- [« За станом](extensions.state.md)
- [Список зарезервованих слів»] (reserved.md)

- [PHP Manual](index.md)
- [Appendices](appendices.md)
- Список псевдонімів функцій

# Список псевдонімів функцій

У PHP досить багато функцій, доступних відразу за декількома іменами. В
деяких випадках немає бажаного варіанта, хорошим прикладом
є [is_int()](function.is-int.md) та
[is_integer()](function.is-integer.md). Однак, є функції,
що змінили свої назви внаслідок чищення API або будь-якої іншої
причини, а старі імена були залишені з метою зворотної сумісності.
Зазвичай не рекомендується використовувати ці псевдоніми, оскільки причиною їх
існування може бути старіння або зміна імені основної функції,
що може призвести до проблем портування скрипта. Цей перелік
надається для допомоги при оновленні старих скриптів до нового
синтаксису.

| Псевдонім Основна функція Модуль |
|-------------------------|----------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------------------------|---------------- -------------------------------|
| \_ | [gettext()](function.gettext.md) | [Gettext](ref.gettext.md) |
| chop | [rtrim()](function.rtrim.md) | Базовий синтаксис
| close | [closedir()](function.closedir.md) | Базовий синтаксис
| com_get | **com_propget()** | [COM](ref.com.md) |
[COM](ref.com.md) || com_propset | **com_propput()** | 
| com_set | **com_propput()** | [COM](ref.com.md) |
| die | [exit()](function.exit.md) | [Некласифіковані функції](ref.misc.md) |
| diskfreespace | [disk_free_space()](function.disk-free-space.md) | [Файлова система](ref.filesystem.md) |
| doubleval | [floatval()](function.floatval.md) | Базовий синтаксис
| fputs | [fwrite()](function.fwrite.md) | Базовий синтаксис
| gzputs | [gzwrite()](function.gzwrite.md) | [Zlib](ref.zlib.md) |
| i18n_convert | [mb_convert_encoding()](function.mb-convert-encoding.md) | [Багатобайтові рядки](ref.mbstring.md) |
[Багатобайтові рядки](ref.mbstring.md) || i18n_discover_encoding | [mb_detect_encoding()](function.mb-detect-encoding.md) | 
| i18n_http_input | [mb_http_input()](function.mb-http-input.md) | [Багатобайтові рядки](ref.mbstring.md) |
| i18n_http_output | [mb_http_output()](function.mb-http-output.md) | [Багатобайтові рядки](ref.mbstring.md) |
| i18n_internal_encoding | [mb_internal_encoding()](function.mb-internal-encoding.md) | [Багатобайтові рядки](ref.mbstring.md) |
| i18n_ja_jp_hantozen | [mb_convert_kana()](function.mb-convert-kana.md) | [Багатобайтові рядки](ref.mbstring.md) |
[Багатобайтові рядки](ref.mbstring.md) || i18n_mime_header_decode | [mb_decode_mimeheader()](function.mb-decode-mimeheader.md) | 
[Багатобайтові рядки](ref.mbstring.md) || i18n_mime_header_encode | [mb_encode_mimeheader()](function.mb-encode-mimeheader.md) | 
| imap_create | [imap_createmailbox()](function.imap-createmailbox.md) | [IMAP](ref.imap.md) |
| imap_fetchtext | [imap_body()](function.imap-body.md) | [IMAP](ref.imap.md) |
| imap_getmailboxes | **imap_list_full()** | [IMAP](ref.imap.md) |
| imap_getsubscribed | **imap_lsub_full()** | [IMAP](ref.imap.md) |
| imap_header | [imap_headerinfo()](function.imap-headerinfo.md) | [IMAP](ref.imap.md) |
| imap_listmailbox | [imap_list()](function.imap-list.md) | [IMAP](ref.imap.md) |
| imap_listsubscribed | [imap_lsub()](function.imap-lsub.md) | [IMAP](ref.imap.md) |
| imap_rename | [imap_renamemailbox()](function.imap-renamemailbox.md) | [IMAP](ref.imap.md) |
| imap_scan | [imap_listscan()](function.imap-listscan.md) | [IMAP](ref.imap.md) |
| imap_scanmailbox | [imap_listscan()](function.imap-listscan.md) | [IMAP](ref.imap.md) |
| ini_alter | [ini_set()](function.ini-set.md) | Базовий синтаксис
| is_double | [is_float()](function.is-float.md) | Базовий синтаксис
| is_integer | [is_int()](function.is-int.md) | Базовий синтаксис
| is_long | [is_int()](function.is-int.md) | Базовий синтаксис
| is_real | [is_float()](function.is-float.md) | Базовий синтаксис
| is_writeable | [is_writable()](function.is-writable.md) | Базовий синтаксис
| join | [implode()](function.implode.md) | Базовий синтаксис
| key_exists [array_key_exists()](function.array-key-exists.md) | Базовий синтаксис
| ldap_close | [ldap_unbind()](function.ldap-unbind.md) | [LDAP](ref.ldap.md) |
| mbstrcut | [mb_strcut()](function.mb-strcut.md) | [Багатобайтові рядки](ref.mbstring.md) |
| mbstrlen | [mb_strlen()](function.mb-strlen.md) | [Багатобайтові рядки](ref.mbstring.md) |
| mbstrpos | [mb_strpos()](function.mb-strpos.md) | [Багатобайтові рядки](ref.mbstring.md) |
| mbstrrpos | [mb_strrpos()](function.mb-strrpos.md) | [Багатобайтові рядки](ref.mbstring.md) |
[Багатобайтові рядки](ref.mbstring.md) || mbsubstr | [mb_substr()](function.mb-substr.md) | 
| mysql | [mysql_db_query()](function.mysql-db-query.md) | [MySQL](ref.mysql.md) |
| mysql_createdb [mysql_create_db()](function.mysql-create-db.md) | [MySQL](ref.mysql.md) |
| mysql_db_name [mysql_result()](function.mysql-result.md) | [MySQL](ref.mysql.md) |
| mysql_dbname [mysql_result()](function.mysql-result.md) | [MySQL](ref.mysql.md) |
| mysql_dropdb [mysql_drop_db()](function.mysql-drop-db.md) | [MySQL](ref.mysql.md) |
| mysql_fieldflags | [mysql_field_flags()](function.mysql-field-flags.md) | [MySQL](ref.mysql.md) |
| mysql_fieldlen | [mysql_field_len()](function.mysql-field-len.md) | [MySQL](ref.mysql.md) |
| mysql_fieldname | [mysql_field_name()](function.mysql-field-name.md) | [MySQL](ref.mysql.md) |
| mysql_fieldtable | [mysql_field_table()](function.mysql-field-table.md) | [MySQL](ref.mysql.md) |
| mysql_fieldtype | [mysql_field_type()](function.mysql-field-type.md) | [MySQL](ref.mysql.md) |
| mysql_freeresult | [mysql_free_result()](function.mysql-free-result.md) | [MySQL](ref.mysql.md) |
| mysql_listdbs [mysql_list_dbs()](function.mysql-list-dbs.md) | [MySQL](ref.mysql.md) |
| mysql_listfields | [mysql_list_fields()](function.mysql-list-fields.md) | [MySQL](ref.mysql.md) |
| mysql_listtables [mysql_list_tables()](function.mysql-list-tables.md) | [MySQL](ref.mysql.md) |
| mysql_numfields | [mysql_num_fields()](function.mysql-num-fields.md) | [MySQL](ref.mysql.md) |
| mysql_numrows [mysql_num_rows()](function.mysql-num-rows.md) | [MySQL](ref.mysql.md) |
| mysql_selectdb [mysql_select_db()](function.mysql-select-db.md) | [MySQL](ref.mysql.md) |
| mysql_tablename [mysql_result()](function.mysql-result.md) | [MySQL](ref.mysql.md) |
| ociassignelem | [OCICollection::assignElem](ocicollection.assignelem.md) | [OCI8](ref.oci8.md) |
| ocibindbyname | [oci_bind_by_name()](function.oci-bind-by-name.md) | [OCI8](ref.oci8.md) |
| ocicancel | [oci_cancel()](function.oci-cancel.md) | [OCI8](ref.oci8.md) |
| ocicloselob | [OCILob::close](ocilob.close.md) | [OCI8](ref.oci8.md) |
| ocicollappend | [OCICollection::append](ocicollection.append.md) | [OCI8](ref.oci8.md) |
| ocicollassign | [OCICollection::assign](ocicollection.assign.md) | [OCI8](ref.oci8.md) |
| ocicollmax | [OCICollection::max](ocicollection.max.md) | [OCI8](ref.oci8.md) |
| ocicollsize | [OCICollection::size](ocicollection.size.md) | [OCI8](ref.oci8.md) |
| ocicolltrim | [OCICollection::trim](ocicollection.trim.md) | [OCI8](ref.oci8.md) |
| ocicolumnisnull | [oci_field_is_null()](function.oci-field-is-null.md) | [OCI8](ref.oci8.md) |
| ocicolumnname | [oci_field_name()](function.oci-field-name.md) | [OCI8](ref.oci8.md) |
| ocicolumnprecision | [oci_field_precision()](function.oci-field-precision.md) | [OCI8](ref.oci8.md) |
| ocicolumnscale | [oci_field_scale()](function.oci-field-scale.md) | [OCI8](ref.oci8.md) |
| ocicolumnsize | [oci_field_size()](function.oci-field-size.md) | [OCI8](ref.oci8.md) |
| ocicolumntype | [oci_field_type()](function.oci-field-type.md) | [OCI8](ref.oci8.md) |
| ocicolumntyperaw | [oci_field_type_raw()](function.oci-field-type-raw.md) | [OCI8](ref.oci8.md) |
| ocicommit | [oci_commit()](function.oci-commit.md) | [OCI8](ref.oci8.md) |
| ocidefinebyname | [oci_define_by_name()](function.oci-define-by-name.md) | [OCI8](ref.oci8.md) |
| ocierror | [oci_error()](function.oci-error.md) | [OCI8](ref.oci8.md) |
| ociexecute | [oci_execute()](function.oci-execute.md) | [OCI8](ref.oci8.md) |
| ocifetch | [oci_fetch()](function.oci-fetch.md) | [OCI8](ref.oci8.md) |
| ocifetchinto | [oci_fetch_array()](function.oci-fetch-array.md), [oci_fetch_row()](function.oci-fetch-row.md), [oci_fetch_assoc()](function.oci-fetch-assoc.md) , [oci_fetch_object()](function.oci-fetch-object.md) | [OCI8](ref.oci8.md) |
| ocifetchstatement | [oci_fetch_all()](function.oci-fetch-all.md) | [OCI8](ref.oci8.md) |
| ocifreecollection | [OCICollection::free](ocicollection.free.md) | [OCI8](ref.oci8.md) |
| ocifreecursor | [oci_free_statement()](function.oci-free-statement.md) | [OCI8](ref.oci8.md) |
| ocifreedesc | [oci_free_descriptor()](function.oci-free-descriptor.md) | [OCI8](ref.oci8.md) |
| ocifreestatement | [oci_free_statement()](function.oci-free-statement.md) | [OCI8](ref.oci8.md) |
| ocigetelem | [OCICollection::getElem](ocicollection.getelem.md) | [OCI8](ref.oci8.md) |
| ociinternaldebug | [oci_internal_debug()](function.oci-internal-debug.md) | [OCI8](ref.oci8.md) |
| ociloadlob | [OCILob::load](ocilob.load.md) | [OCI8](ref.oci8.md) |
| ocilogon | [oci_connect()](function.oci-connect.md) | [OCI8](ref.oci8.md) |
| ocinewcollection | [oci_new_collection()](function.oci-new-collection.md) | [OCI8](ref.oci8.md) |
| ocinewcursor | [oci_new_cursor()](function.oci-new-cursor.md) | [OCI8](ref.oci8.md) |
| ocinewdescriptor | [oci_new_descriptor()](function.oci-new-descriptor.md) | [OCI8](ref.oci8.md) |
| ocinlogon | [oci_new_connect()](function.oci-new-connect.md) | [OCI8](ref.oci8.md) |
| ocinumcols | [oci_num_fields()](function.oci-num-fields.md) | [OCI8](ref.oci8.md) |
| ociparse | [oci_parse()](function.oci-parse.md) | [OCI8](ref.oci8.md) |
| ocipasswordchange | [oci_password_change()](function.oci-password-change.md) | [OCI8](ref.oci8.md) |
| ociplogon | [oci_pconnect()](function.oci-pconnect.md) | [OCI8](ref.oci8.md) |
| ociresult | [oci_result()](function.oci-result.md) | [OCI8](ref.oci8.md) |
| ocirollback | [oci_rollback()](function.oci-rollback.md) | [OCI8](ref.oci8.md) |
| ocisavelob | [OCILob::save](ocilob.save.md) | [OCI8](ref.oci8.md) |
| ocisavelobfile | [OCILob::import](ocilob.import.md) | [OCI8](ref.oci8.md) |
| ociserverversion | [oci_server_version()](function.oci-server-version.md) | [OCI8](ref.oci8.md) |
| ocisetprefetch | [oci_set_prefetch()](function.oci-set-prefetch.md) | [OCI8](ref.oci8.md) |
| Визначеннятипу | [oci_statement_type()](function.oci-statement-type.md) | [OCI8](ref.oci8.md) |
| ociwritelobtofile | [OCILob::export](ocilob.export.md) | [OCI8](ref.oci8.md) |
| ociwritetemporarylob | [OCILob::writeTemporary](ocilob.writetemporary.md) | [OCI8](ref.oci8.md) |
| odbc_do | [odbc_exec()](function.odbc-exec.md) | [ODBC](ref.uodbc.md) |
| odbc_field_precision | [odbc_field_len()](function.odbc-field-len.md) | [ODBC](ref.uodbc.md) |
| pg_clientencoding | [pg_client_encoding()](function.pg-client-encoding.md) | [PostgreSQL](ref.pgsql.md) |
| pg_setclientencoding | [pg_set_client_encoding()](function.pg-set-client-encoding.md) | [PostgreSQL](ref.pgsql.md) |
| pos | [current()](function.current.md) | Базовий синтаксис
| recode | [recode_string()](function.recode-string.md) | [Recode](ref.recode.md) |
| show_source | [highlight_file()](function.highlight-file.md) | Базовий синтаксис
| sizeof | [count()](function.count.md) | Базовий синтаксис
| snmpwalkoid | [snmprealwalk()](function.snmprealwalk.md) | [SNMP](ref.snmp.md) |
| strchr | [strstr()](function.strstr.md) | Базовий синтаксис
| xptr_new_context | **xpath_new_context()** | |

**Псевдоніми**
