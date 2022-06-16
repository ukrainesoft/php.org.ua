- [« Список прикладів](indexes.examples.md)

- [PHP Manual](index.md)
- [Appendices](appendices.md)
-   Список змін

# Список змін

Наступні зміни були здійснені з функціями вбудованих модулів.

| Version | Function | Description |
|------------------------|------------------------ -------------------------------------------------- --------------------------------|----------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- |
| PECL OCI8 3.2 | [oci_set_prefetch_lob](function.oci-set-prefetch-lob.md) | |
| PECL OCI8 1.4 | [oci_set_prefetch](function.oci-set-prefetch.md) | До цієї версії rows мав бути \>u003d1. |
| PECL OCI8 1.3.4 | [oci_set_prefetch](function.oci-set-prefetch.md) | До цієї версії попередня вибірка була обмежена до меншого зі значень rows рядків і 1024 rows байт. Тепер обмеження за розміром байт знято. |
| PECL 3.0 | [IntlDateFormatter::format](intldateformatter.format.md) | Додано підтримку надання об'єктів IntlCalendar для параметра datetime. |
| 8.2.0 | [DateInterval::\_\_construct](dateinterval.construct.md) | Буде видно тільки y в f, invert і days, включаючи нову логічну властивість from_string. |
| | [DateInterval::createFromDateString](dateinterval.createfromdatestring.md) | Тільки властивості from_string і date_string будуть видні під час створення об'єкта DateInterval за допомогою цього методу. |
| | [idate](function.idate.md) Додані символи для параметра format: N (День тижня ISO-8601) та o (Рік ISO-8601). |
| 8.1.0 | [DirectoryIterator::key](directoryiterator.key.md) | Якщо ітератор не ініціалізований, викидається помилка Error. Раніше метод повертав false. |
| | [DOMDocument::createComment](domdocument.createcomment.md) | У разі помилки тепер викидає виняток DomException. Раніше натомість поверталося значення false. |
| | [DOMDocument::createDocumentFragment](domdocument.createdocumentfragment.md) | У разі помилки тепер викидає виняток DomException. Раніше натомість поверталося значення false. |
| | [DOMDocument::createTextNode](domdocument.createtextnode.md) | У разі помилки тепер викидає виняток DomException. Раніше натомість поверталося значення false. |
| | [current](function.current.md) | Виклик функції в об'єкті (object) оголошено застарілим. Або спочатку використовуйте для об'єкта (object) функцію get_mangled_object_vars, або використовуйте ArrayIterator. |
| | [date_sunrise](function.date-sunrise.md) | Функція оголошена застарілою, використовуйте date_sun_info. |
| | [date_sunset](function.date-sunset.md) | Функція оголошена застарілою, використовуйте date_sun_info. |
| | [end](function.end.md) | Виклик функції в об'єкті (object) оголошено застарілим. Або спочатку використовуйте для об'єкта (object) функцію get_mangled_object_vars, або використовуйте ArrayIterator. |
| | [finfo_buffer](function.finfo-buffer.md) | Параметр finfo тепер очікує на екземпляр finfo; раніше очікували ресурс (resource). |
| | [finfo_close](function.finfo-close.md) | Параметр finfo тепер очікує на екземпляр finfo; раніше очікували ресурс (resource). |
| | [finfo_file](function.finfo-file.md) | Параметр finfo тепер очікує на екземпляр finfo; раніше очікували ресурс (resource). |
| | [finfo_open](function.finfo-open.md) | Повертає екземпляр finfo; раніше повертався ресурс (resource). |
| | [finfo_set_flags](function.finfo-set-flags.md) | Параметр finfo тепер очікує на екземпляр finfo; раніше очікували ресурс (resource). |
| | [fputcsv](function.fputcsv.md) | Доданий необов'язковий параметр eol. |
| | [ftp_alloc](function.ftp-alloc.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_append](function.ftp-append.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_cdup](function.ftp-cdup.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_chdir](function.ftp-chdir.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_chmod](function.ftp-chmod.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_close](function.ftp-close.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_connect](function.ftp-connect.md) | Повертає екземпляр FTP\Connection; раніше повертався ресурс (resource). |
| | [ftp_delete](function.ftp-delete.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_exec](function.ftp-exec.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_fget](function.ftp-fget.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_fput](function.ftp-fput.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_get](function.ftp-get.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_get_option](function.ftp-get-option.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_login](function.ftp-login.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_mdtm](function.ftp-mdtm.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_mkdir](function.ftp-mkdir.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_mlsd](function.ftp-mlsd.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_nb_continue](function.ftp-nb-continue.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_nb_fget](function.ftp-nb-fget.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_nb_fput](function.ftp-nb-fput.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_nb_get](function.ftp-nb-get.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_nb_put](function.ftp-nb-put.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_nlist](function.ftp-nlist.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_pasv](function.ftp-pasv.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_put](function.ftp-put.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_pwd](function.ftp-pwd.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_raw](function.ftp-raw.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_rawlist](function.ftp-rawlist.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_rename](function.ftp-rename.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_rmdir](function.ftp-rmdir.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_set_option](function.ftp-set-option.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_site](function.ftp-site.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_size](function.ftp-size.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [ftp_ssl_connect](function.ftp-ssl-connect.md) | Повертає екземпляр FTP\Connection; раніше повертався ресурс (resource). |
| | [ftp_systype](function.ftp-systype.md) | Параметр ftp тепер очікує на екземпляр FTP\Connection; раніше очікували ресурс (resource). |
| | [get_html_translation_table](function.get-html-translation-table.md) | Значення за промовчанням параметра flags змінено з ENT_COMPAT на ENT_QUOTES \| ENT_SUBSTITUTE \| ENT_HTML401. |
| | [hash](function.hash.md) | Доданий параметр options. |
| | [hash_algos](function.hash-algos.md) | Додано підтримку алгоритмів MurmurHash3 і xxHash. |
| | [hash_file](function.hash-file.md) | Доданий параметр options. |
| | [hash_init](function.hash-init.md) | Доданий параметр options. |
| | [html_entity_decode](function.md-entity-decode.md) | Значення за промовчанням параметра flags змінено з ENT_COMPAT на ENT_QUOTES \| ENT_SUBSTITUTE \| ENT_HTML401. |
| | [htmlentities](function.mdentities.md) | Значення за промовчанням параметра flags змінено з ENT_COMPAT на ENT_QUOTES \| ENT_SUBSTITUTE \| ENT_HTML401. |
| | [htmlspecialchars](function.mdspecialchars.md) | Значення за промовчанням параметра flags змінено з ENT_COMPAT на ENT_QUOTES \| ENT_SUBSTITUTE \| ENT_HTML401. |
| | [htmlspecialchars_decode](function.mdspecialchars-decode.md) | Значення за промовчанням параметра flags змінено з ENT_COMPAT на ENT_QUOTES \| ENT_SUBSTITUTE \| ENT_HTML401. |
| | [imagechar](function.imagechar.md) | Параметр font тепер приймає як екземпляр GdFont, і ціле число (int); раніше приймалося лише ціле число (int). |
| | [imagecharup](function.imagecharup.md) | Параметр font тепер приймає як екземпляр GdFont, і ціле число (int); раніше приймалося лише ціле число (int). |
| | [imagefilledpolygon](function.imagefilledpolygon.md) | Параметр num_points оголошено застарілим. |
| | [imagefontheight](function.imagefontheight.md) | Параметр font тепер приймає як екземпляр GdFont, і ціле число (int); раніше приймалося лише ціле число (int). |
| | [imagefontwidth](function.imagefontwidth.md) | Параметр font тепер приймає як екземпляр GdFont, і ціле число (int); раніше приймалося лише ціле число (int). |
| | [imageloadfont](function.imageloadfont.md) | Повертає екземпляр GdFont; раніше поверталося ціле число (int). |
| | [imageopenpolygon](function.imageopenpolygon.md) | Параметр num_points оголошено застарілим. |
| | [imagepolygon](function.imagepolygon.md) | Параметр num_points оголошено застарілим. |
| | [imagestring](function.imagestring.md) | Параметр font тепер приймає як екземпляр GdFont, і ціле число (int); раніше приймалося лише ціле число (int). |
| | [imagestringup](function.imagestringup.md) | Параметр font тепер приймає як екземпляр GdFont, і ціле число (int); раніше приймалося лише ціле число (int). |
| | [imagetypes](function.imagetypes.md) | Додано константу IMG_AVIF. |
| | [imap_append](function.imap-append.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_body](function.imap-body.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_bodystruct](function.imap-bodystruct.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_check](function.imap-check.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_clearflag_full](function.imap-clearflag-full.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_close](function.imap-close.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_createmailbox](function.imap-createmailbox.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_delete](function.imap-delete.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_deletemailbox](function.imap-deletemailbox.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_expunge](function.imap-expunge.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_fetch_overview](function.imap-fetch-overview.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_fetchbody](function.imap-fetchbody.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_fetchheader](function.imap-fetchheader.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_fetchmime](function.imap-fetchmime.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_fetchstructure](function.imap-fetchstructure.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_gc](function.imap-gc.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_get_quota](function.imap-get-quota.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_get_quotaroot](function.imap-get-quotaroot.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_getacl](function.imap-getacl.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_getmailboxes](function.imap-getmailboxes.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_getsubscribed](function.imap-getsubscribed.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_headerinfo](function.imap-headerinfo.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_headers](function.imap-headers.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_list](function.imap-list.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_listscan](function.imap-listscan.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_lsub](function.imap-lsub.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_mail_copy](function.imap-mail-copy.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_mail_move](function.imap-mail-move.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_mailboxmsginfo](function.imap-mailboxmsginfo.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_msgno](function.imap-msgno.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_num_msg](function.imap-num-msg.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_num_recent](function.imap-num-recent.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_open](function.imap-open.md) | Повертає екземпляр IMAP\Connection; раніше повертався ресурс (resource). |
| | [imap_ping](function.imap-ping.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_renamemailbox](function.imap-renamemailbox.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_reopen](function.imap-reopen.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_savebody](function.imap-savebody.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_search](function.imap-search.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_set_quota](function.imap-set-quota.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_setacl](function.imap-setacl.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_setflag_full](function.imap-setflag-full.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_sort](function.imap-sort.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_status](function.imap-status.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_subscribe](function.imap-subscribe.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_thread](function.imap-thread.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_uid](function.imap-uid.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_undelete](function.imap-undelete.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [imap_unsubscribe](function.imap-unsubscribe.md) | Параметр imap тепер очікує на екземпляр IMAP\Connection; раніше очікували ресурс (resource). |
| | [ini_set](function.ini-set.md) | Параметр value тепер приймає будь-який скалярний тип (включаючи null). Раніше допускалися лише строкові (string) значення. |
| | [key](function.key.md) | Виклик функції в об'єкті (object) оголошено застарілим. Або спочатку використовуйте для об'єкта (object) функцію get_mangled_object_vars, або використовуйте ArrayIterator. |
| | [ldap_add](function.ldap-add.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_add_ext](function.ldap-add-ext.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_add_ext](function.ldap-add-ext.md) | Повертає екземпляр LDAP\Result; раніше повертався ресурс (resource). |
| | [ldap_bind](function.ldap-bind.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_bind_ext](function.ldap-bind-ext.md) | Повертає екземпляр LDAP\Result; раніше повертався ресурс (resource). |
| | [ldap_bind_ext](function.ldap-bind-ext.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_compare](function.ldap-compare.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_connect](function.ldap-connect.md) | Повертає екземпляр LDAP\Connection; раніше повертався ресурс (resource). |
| | [ldap_count_entries](function.ldap-count-entries.md) | Параметр result тепер очікує на екземпляр LDAP\Result; раніше очікували ресурс (resource). |
| | [ldap_count_entries](function.ldap-count-entries.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_count_references](function.ldap-count-references.md) | Параметр result тепер очікує на екземпляр LDAP\Result; раніше очікували ресурс (resource). |
| | [ldap_count_references](function.ldap-count-references.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_delete](function.ldap-delete.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_delete_ext](function.ldap-delete-ext.md) | Повертає екземпляр LDAP\Result; раніше повертався ресурс (resource). |
| | [ldap_delete_ext](function.ldap-delete-ext.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_errno](function.ldap-errno.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_error](function.ldap-error.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_exop](function.ldap-exop.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_exop_passwd](function.ldap-exop-passwd.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_exop_refresh](function.ldap-exop-refresh.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_exop_whoami](function.ldap-exop-whoami.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_first_attribute](function.ldap-first-attribute.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_first_attribute](function.ldap-first-attribute.md) | Параметр entry тепер очікує на екземпляр LDAP\ResultEntry; раніше очікували ресурс (resource). |
| | [ldap_first_entry](function.ldap-first-entry.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_first_entry](function.ldap-first-entry.md) | Параметр result тепер очікує на екземпляр LDAP\Result; раніше очікували ресурс (resource). |
| | [ldap_first_entry](function.ldap-first-entry.md) | Повертає екземпляр LDAP\ResultEntry; раніше повертався ресурс (resource). |
| | [ldap_free_result](function.ldap-free-result.md) | Параметр result тепер очікує на екземпляр LDAP\Result; раніше очікували ресурс (resource). |
| | [ldap_get_attributes](function.ldap-get-attributes.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_get_attributes](function.ldap-get-attributes.md) | Параметр entry тепер очікує на екземпляр LDAP\ResultEntry; раніше очікували ресурс (resource). |
| | [ldap_get_dn](function.ldap-get-dn.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_get_dn](function.ldap-get-dn.md) | Параметр entry тепер очікує на екземпляр LDAP\ResultEntry; раніше очікували ресурс (resource). |
| | [ldap_get_entries](function.ldap-get-entries.md) | Параметр result тепер очікує на екземпляр LDAP\Result; раніше очікували ресурс (resource). |
| | [ldap_get_entries](function.ldap-get-entries.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_get_option](function.ldap-get-option.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_get_values](function.ldap-get-values.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_get_values](function.ldap-get-values.md) | Параметр entry тепер очікує на екземпляр LDAP\ResultEntry; раніше очікували ресурс (resource). |
| | [ldap_get_values_len](function.ldap-get-values-len.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_get_values_len](function.ldap-get-values-len.md) | Параметр entry тепер очікує на екземпляр LDAP\ResultEntry; раніше очікували ресурс (resource). |
| | [ldap_list](function.ldap-list.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_list](function.ldap-list.md) | Повертає екземпляр LDAP\Result; раніше повертався ресурс (resource). |
| | [ldap_mod_add](function.ldap-mod-add.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_mod_del](function.ldap-mod-del.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_mod_replace](function.ldap-mod-replace.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_modify_batch](function.ldap-modify-batch.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_mod_add_ext](function.ldap-mod_add-ext.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_mod_add_ext](function.ldap-mod_add-ext.md) | Повертає екземпляр LDAP\Result; раніше повертався ресурс (resource). |
| | [ldap_mod_del_ext](function.ldap-mod_del-ext.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_mod_del_ext](function.ldap-mod_del-ext.md) | Повертає екземпляр LDAP\Result; раніше повертався ресурс (resource). |
| | [ldap_mod_replace_ext](function.ldap-mod_replace-ext.md) | Повертає екземпляр LDAP\Result; раніше повертався ресурс (resource). |
| | [ldap_mod_replace_ext](function.ldap-mod_replace-ext.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_next_attribute](function.ldap-next-attribute.md) | Параметр entry тепер очікує на екземпляр LDAP\ResultEntry; раніше очікували ресурс (resource). |
| | [ldap_next_attribute](function.ldap-next-attribute.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_next_entry](function.ldap-next-entry.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_next_entry](function.ldap-next-entry.md) | Повертає екземпляр LDAP\Result; раніше повертався ресурс (resource). |
| | [ldap_next_entry](function.ldap-next-entry.md) | Параметр entry тепер очікує на екземпляр LDAP\ResultEntry; раніше очікували ресурс (resource). |
| | [ldap_parse_exop](function.ldap-parse-exop.md) | Параметр result тепер очікує на екземпляр LDAP\Result; раніше очікували ресурс (resource). |
| | [ldap_parse_exop](function.ldap-parse-exop.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_parse_result](function.ldap-parse-result.md) | Параметр result тепер очікує на екземпляр LDAP\Result; раніше очікували ресурс (resource). |
| | [ldap_parse_result](function.ldap-parse-result.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_read](function.ldap-read.md) | Повертає екземпляр LDAP\Result; раніше повертався ресурс (resource). |
| | [ldap_read](function.ldap-read.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_rename](function.ldap-rename.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_rename_ext](function.ldap-rename-ext.md) | Повертає екземпляр LDAP\Result; раніше повертався ресурс (resource). |
| | [ldap_rename_ext](function.ldap-rename-ext.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_sasl_bind](function.ldap-sasl-bind.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_search](function.ldap-search.md) | Повертає екземпляр LDAP\Result; раніше повертався ресурс (resource). |
| | [ldap_search](function.ldap-search.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_set_option](function.ldap-set-option.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_set_rebind_proc](function.ldap-set-rebind-proc.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [ldap_unbind](function.ldap-unbind.md) | Параметр ldap очікує екземпляр LDAP\Connection; раніше очікували ресурс (resource). |
| | [mhash](function.mhash.md) | Функція оголошена застарілою. Використовуйте замість неї функції hash\_\*(). |
| | [mhash_count](function.mhash-count.md) | Функція оголошена застарілою. Використовуйте замість неї функції hash\_\*(). |
| | [mhash_get_block_size](function.mhash-get-block-size.md) | Функція оголошена застарілою. Використовуйте замість неї функції hash\_\*(). |
| | [mhash_get_hash_name](function.mhash-get-hash-name.md) | Функція оголошена застарілою. Використовуйте замість неї функції hash\_\*(). |
| | [mhash_keygen_s2k](function.mhash-keygen-s2k.md) | Функція оголошена застарілою. Використовуйте замість неї функції hash\_\*(). |
| | [Next] (function.next.md) | Виклик функції в об'єкті (object) оголошено застарілим. Або спочатку використовуйте для об'єкта (object) функцію get_mangled_object_vars, або використовуйте ArrayIterator. |
| | [odbc_result_all](function.odbc-result-all.md) | Функція оголошена застарілою. |
| | [openssl_cms_encrypt](function.openssl-cms-encrypt.md) | Алгоритм шифрування за замовчуванням (cipher_algo) тепер є AES-128-CBC (OPENSSL_CIPHER_AES_128_CBC). Раніше використовувався алгоритм PKCS7/CMS (OPENSSL_CIPHER_RC2_40). |
| | [openssl_decrypt](function.openssl-decrypt.md) | Параметр tag тепер припускає значення null. |
| | [openssl_pkcs7_encrypt](function.openssl-pkcs7-encrypt.md) | Алгоритм шифрування за замовчуванням (cipher_algo) тепер є AES-128-CBC (OPENSSL_CIPHER_AES_128_CBC). Раніше використовувався алгоритм PKCS7/CMS (OPENSSL_CIPHER_RC2_40). |
| | [pg_affected_rows](function.pg-affected-rows.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_cancel_query](function.pg-cancel-query.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_client_encoding](function.pg-client-encoding.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_close](function.pg-close.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_connect](function.pg-connect.md) | Повертає екземпляр PgSql\Connection; раніше повертався ресурс (resource). |
| | [pg_connect_poll](function.pg-connect-poll.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_connection_busy](function.pg-connection-busy.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_connection_reset](function.pg-connection-reset.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_connection_status](function.pg-connection-status.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_consume_input](function.pg-consume-input.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_convert](function.pg-convert.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_copy_from](function.pg-copy-from.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_copy_to](function.pg-copy-to.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_dbname](function.pg-dbname.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_delete](function.pg-delete.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_end_copy](function.pg-end-copy.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_escape_bytea](function.pg-escape-bytea.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_escape_identifier](function.pg-escape-identifier.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_escape_literal](function.pg-escape-literal.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_escape_string](function.pg-escape-string.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_execute](function.pg-execute.md) | Повертає екземпляр PgSql\Result; раніше повертався ресурс (resource). |
| | [pg_execute](function.pg-execute.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_fetch_all](function.pg-fetch-all.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_fetch_all_columns](function.pg-fetch-all-columns.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_fetch_array](function.pg-fetch-array.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_fetch_assoc](function.pg-fetch-assoc.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_fetch_object](function.pg-fetch-object.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_fetch_result](function.pg-fetch-result.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_fetch_row](function.pg-fetch-row.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_field_is_null](function.pg-field-is-null.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_field_name](function.pg-field-name.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_field_num](function.pg-field-num.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_field_prtlen](function.pg-field-prtlen.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_field_size](function.pg-field-size.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_field_table](function.pg-field-table.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_field_type](function.pg-field-type.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_field_type_oid](function.pg-field-type-oid.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_flush](function.pg-flush.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_free_result](function.pg-free-result.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_get_notify](function.pg-get-notify.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_get_pid](function.pg-get-pid.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_get_result](function.pg-get-result.md) | Повертає екземпляр PgSql\Result; раніше повертався ресурс (resource). |
| | [pg_get_result](function.pg-get-result.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_host](function.pg-host.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_insert](function.pg-insert.md) | Повертає екземпляр PgSql\Result; раніше повертався ресурс (resource). |
| | [pg_insert](function.pg-insert.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_last_error](function.pg-last-error.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_last_notice](function.pg-last-notice.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_last_oid](function.pg-last-oid.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_lo_close](function.pg-lo-close.md) | Параметр lob тепер чекає на екземпляр PgSql\Lob; раніше очікували ресурс (resource). |
| | [pg_lo_create](function.pg-lo-create.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_lo_export](function.pg-lo-export.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_lo_import](function.pg-lo-import.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_lo_open](function.pg-lo-open.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_lo_open](function.pg-lo-open.md) | Повертає екземпляр PgSql\Lob; раніше повертався ресурс (resource). |
| | [pg_lo_read](function.pg-lo-read.md) | Параметр lob тепер чекає на екземпляр PgSql\Lob; раніше очікували ресурс (resource). |
| | [pg_lo_read_all](function.pg-lo-read-all.md) | Параметр lob тепер чекає на екземпляр PgSql\Lob; раніше очікували ресурс (resource). |
| | [pg_lo_seek](function.pg-lo-seek.md) | Параметр lob тепер чекає на екземпляр PgSql\Lob; раніше очікували ресурс (resource). |
| | [pg_lo_tell](function.pg-lo-tell.md) | Параметр lob тепер чекає на екземпляр PgSql\Lob; раніше очікували ресурс (resource). |
| | [pg_lo_truncate](function.pg-lo-truncate.md) | Параметр lob тепер чекає на екземпляр PgSql\Lob; раніше очікували ресурс (resource). |
| | [pg_lo_unlink](function.pg-lo-unlink.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_lo_write](function.pg-lo-write.md) | Параметр lob тепер чекає на екземпляр PgSql\Lob; раніше очікували ресурс (resource). |
| | [pg_meta_data](function.pg-meta-data.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_num_fields](function.pg-num-fields.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_num_rows](function.pg-num-rows.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_options](function.pg-options.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_parameter_status](function.pg-parameter-status.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_pconnect](function.pg-pconnect.md) | Повертає екземпляр PgSql\Connection; раніше повертався ресурс (resource). |
| | [pg_ping](function.pg-ping.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_port](function.pg-port.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_prepare](function.pg-prepare.md) | Повертає екземпляр PgSql\Result; раніше повертався ресурс (resource). |
| | [pg_prepare](function.pg-prepare.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_put_line](function.pg-put-line.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_query](function.pg-query.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_query](function.pg-query.md) | Повертає екземпляр PgSql\Result; раніше повертався ресурс (resource). |
| | [pg_query_params](function.pg-query-params.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_query_params](function.pg-query-params.md) | Повертає екземпляр PgSql\Result; раніше повертався ресурс (resource). |
| | [pg_result_error](function.pg-result-error.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_result_error_field](function.pg-result-error-field.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_result_seek](function.pg-result-seek.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_result_status](function.pg-result-status.md) | Параметр result тепер очікує на екземпляр PgSql\Result; раніше очікували ресурс (resource). |
| | [pg_select](function.pg-select.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_send_execute](function.pg-send-execute.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_send_prepare](function.pg-send-prepare.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_send_query](function.pg-send-query.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_send_query_params](function.pg-send-query-params.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_set_client_encoding](function.pg-set-client-encoding.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_set_error_verbosity](function.pg-set-error-verbosity.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_socket](function.pg-socket.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_trace](function.pg-trace.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_transaction_status](function.pg-transaction-status.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_tty](function.pg-tty.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_untrace](function.pg-untrace.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_update](function.pg-update.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [pg_version](function.pg-version.md) | Параметр connection тепер очікує на екземпляр PgSql\Connection; раніше очікували ресурс (resource). |
| | [prev](function.prev.md) | Виклик функції в об'єкті (object) оголошено застарілим. Або спочатку використовуйте для об'єкта (object) функцію get_mangled_object_vars, або використовуйте ArrayIterator. |
| | [pspell_add_to_personal](function.pspell-add-to-personal.md) | Параметр dictionary тепер очікує примірник PSpell\Dictionary; раніше очікували ресурс (resource). |
| | [pspell_add_to_session](function.pspell-add-to-session.md) | Параметр dictionary тепер очікує примірник PSpell\Dictionary; раніше очікували ресурс (resource). |
| | [pspell_check](function.pspell-check.md) | Параметр dictionary тепер очікує примірник PSpell\Dictionary; раніше очікували ресурс (resource). |
| | [pspell_clear_session](function.pspell-clear-session.md) | Параметр dictionary тепер очікує примірник PSpell\Dictionary; раніше очікували ресурс (resource). |
| | [pspell_config_create](function.pspell-config-create.md) | Повертає екземпляр PSpell\Config; раніше повертався ресурс (resource). |
| | [pspell_config_data_dir](function.pspell-config-data-dir.md) | Параметр config тепер очікує на екземпляр PSpell\Config; раніше очікували ресурс (resource). |
| | [pspell_config_dict_dir](function.pspell-config-dict-dir.md) | Параметр config тепер очікує на екземпляр PSpell\Config; раніше очікували ресурс (resource). |
| | [pspell_config_ignore](function.pspell-config-ignore.md) | Параметр config тепер очікує на екземпляр PSpell\Config; раніше очікували ресурс (resource). |
| | [pspell_config_mode](function.pspell-config-mode.md) | Параметр config тепер очікує на екземпляр PSpell\Config; раніше очікували ресурс (resource). |
| | [pspell_config_personal](function.pspell-config-personal.md) | Параметр config тепер очікує на екземпляр PSpell\Config; раніше очікували ресурс (resource). |
| | [pspell_config_repl](function.pspell-config-repl.md) | Параметр config тепер очікує на екземпляр PSpell\Config; раніше очікували ресурс (resource). |
| | [pspell_config_runtogether](function.pspell-config-runtogether.md) | Параметр config тепер очікує на екземпляр PSpell\Config; раніше очікували ресурс (resource). |
| | [pspell_config_save_repl](function.pspell-config-save-repl.md) | Параметр config тепер очікує на екземпляр PSpell\Config; раніше очікували ресурс (resource). |
| | [pspell_new](function.pspell-new.md) | Повертає екземпляр PSpell\Dictionary; раніше повертався ресурс (resource). |
| | [pspell_new_config](function.pspell-new-config.md) | Повертає екземпляр PSpell\Dictionary; раніше повертався ресурс (resource). |
| | [pspell_new_config](function.pspell-new-config.md) | Параметр config тепер очікує на екземпляр PSpell\Config; раніше очікували ресурс (resource). |
| | [pspell_new_personal](function.pspell-new-personal.md) | Повертає екземпляр PSpell\Dictionary; раніше повертався ресурс (resource). |
| | [pspell_save_wordlist](function.pspell-save-wordlist.md) | Параметр dictionary тепер очікує примірник PSpell\Dictionary; раніше очікували ресурс (resource). |
| | [pspell_store_replacement](function.pspell-store-replacement.md) | Параметр dictionary тепер очікує примірник PSpell\Dictionary; раніше очікували ресурс (resource). |
| | [pspell_suggest](function.pspell-suggest.md) | Параметр dictionary тепер очікує примірник PSpell\Dictionary; раніше очікували ресурс (resource). |
| | [Reset](function.reset.md) | Виклик функції в об'єкті (object) оголошено застарілим. Або спочатку використовуйте для об'єкта (object) функцію get_mangled_object_vars, або використовуйте ArrayIterator. |
| | [stream_select](function.stream-select.md) | Параметр microseconds тепер допускає значення null. |
| | [strptime](function.strptime.md) | Функція оголошена застарілою. Замість неї використовуйте date_parse_from_format (для синтаксичного аналізу, який не залежить від мовного стандарту) або IntlDateFormatter::parse (для синтаксичного аналізу, що залежить від мовного стандарту). |
| | [MultipleIterator::current](multipleiterator.current.md) | Тепер викидається виняток RuntimeException, якщо MultipleIterator::key викликається на неприпустимому ітераторі. Раніше натомість поверталося значення false. |
| | [MultipleIterator::key](multipleiterator.key.md) | Тепер викидається виняток RuntimeException, якщо MultipleIterator::key викликається на неприпустимому ітераторі. Раніше натомість поверталося значення false. |
| | [mysqli_driver::$report_mode](mysqli-driver.report-mode.md) | За замовчуванням встановлено значення MYSQLI_REPORT_ERROR \| MYSQLI_REPORT_STRICT. Раніше він був MYSQLI_REPORT_OFF. |
| | [mysqli_result::fetch_all](mysqli-result.fetch-all.md) | Тепер також доступно при збиранні з libmysqlclient. |
| | [mysqli_stmt::execute](mysqli-stmt.execute.md) | Додано необов'язковий параметр params. |
| | [mysqli_stmt::next_result](mysqli-stmt.next-result.md) | Тепер також доступно при збиранні з libmysqlclient. |
| | [mysqli::$client_info](mysqli.get-client-info.md) | Об'єктно-орієнтований стиль виклику методу mysqli::get_client_info застарів. |
| | [mysqli::$client_info](mysqli.get-client-info.md) | Виклик функції mysqli_get_client_info із аргументом mysql застарів. Функція ніколи не вимагала параметра, але неправильно дозволяла його як необов'язковий параметр. |
| | [mysqli::init](mysqli.init.md) | Об'єктно-орієнтований стиль виклику методу mysqli:: init застарів. Замініть виклик методу parent::init за допомогою parent::\_\_construct. |
| | [Phar::buildFromDirectory](phar.buildfromdirectory.md) | Phar::buildFromDirectory більше не повертає значення false. |
| | [Phar::buildFromIterator](phar.buildfromiterator.md) | Phar::buildFromIterator більше не повертає значення false. |
| | [PharData::buildFromDirectory](phardata.buildfromdirectory.md) | PharData::buildFromDirectory більше не повертає значення false. |
| | [PharData::buildFromIterator](phardata.buildfromiterator.md) | PharData::buildFromIterator не повертає значення false. |
| | [ReflectionClassConstant::getName](reflectionclassconstant.getname.md) | Викидає помилку Error у випадку, якщо властивість name не була ініціалізована. Раніше, у разі помилки, метод повертав false. |
| | [ReflectionExtension::\_\_clone](reflectionextension.clone.md) | Метод не є остаточним (final). |
| | [ReflectionFunctionAbstract::\_\_clone](reflectionfunctionabstract.clone.md) | Метод не є остаточним (final). |
| | [ReflectionParameter::\_\_clone](reflectionparameter.clone.md) | Метод не є остаточним (final). |
| | [ReflectionProperty::\_\_clone](reflectionproperty.clone.md) | Метод не є остаточним (final). |
| | [ReflectionZendExtension::\_\_clone](reflectionzendextension.clone.md) | Метод не є остаточним (final). |
| | [SplFileObject::fputcsv](splfileobject.fputcsv.md) | Доданий необов'язковий параметр eol. |
| | [SplObjectStorage::current](splobjectstorage.current.md) | Метод SplObjectStorage::current тепер викидає виняток Error, якщо ця позиція неприпустима. Раніше натомість поверталося значення false. |
| 8.0.5 | [imageinterlace](function.imageinterlace.md) | imageinterlace тепер повертає логічне значення (bool); раніше вона повертала ціле число (int). (ненульове значення для зображень з інтерлейсингом, інакше - нуль). |
| 8.0.3 | [DOMDocument::getElementsByTagNameNS](domdocument.getelementsbytagnamens.md) | namespace тепер допускає значення null. |
| | [DOMElement::getElementsByTagNameNS](domelement.getelementsbytagnamens.md) | namespace тепер допускає значення null. |
| | [DOMImplementation::createDocument](domimplementation.createdocument.md) | namespace тепер допускає значення null. |
| | [finfo::\_\_construct](finfo.construct.md) | magic_database тепер припускає значення null. |
| | [bind_textdomain_codeset](function.bind-textdomain-codeset.md) | codeset тепер допускає значення null. Раніше було неможливо отримати поточне встановлене кодування. |
| | [bindtextdomain](function.bindtextdomain.md) | directory тепер допускає значення null. Раніше неможливо було отримати поточний встановлений каталог. |
| | [finfo_open](function.finfo-open.md) | magic_database тепер припускає значення null. |
| | [imagegd](function.imagegd.md) | file тепер припускає значення null. |
| | [imagegd2](function.imagegd2.md) | file тепер припускає значення null. |
| | [SoapClient::\_\_setLocation](soapclient.setlocation.md) | location тепер допускає значення null. |
| | [SoapVar::\_\_construct](soapvar.construct.md) | typeName, typeNamespace, nodeName та nodeNamespace тепер допускають значення null. |
| 8.0.0, PECL OCI8 3.0.0 | [oci_connect](function.oci-connect.md) connection_string тепер припускає значення null. |
| | [oci_error](function.oci-error.md) | connection_or_statement тепер припускає значення null. |
| | [oci_lob_copy](function.oci-lob-copy.md) | length тепер допускає значення null. |
| | [oci_new_collection](function.oci-new-collection.md) | schema тепер допускає значення null. |
| | [oci_new_connect](function.oci-new-connect.md) | connection_string тепер припускає значення null. |
| | [OCICollection::append](ocicollection.append.md) | Клас OCI-Collection перейменований на OCICollection відповідно до стандартів іменування PHP. |
| | [OCICollection::assign](ocicollection.assign.md) | Клас OCI-Collection перейменований на OCICollection відповідно до стандартів іменування PHP. |
| | [OCICollection::assignElem](ocicollection.assignelem.md) | Клас OCI-Collection перейменований на OCICollection відповідно до стандартів іменування PHP. |
| | [OCICollection::free](ocicollection.free.md) | Клас OCI-Collection перейменований на OCICollection відповідно до стандартів іменування PHP. |
| | [OCICollection::getElem](ocicollection.getelem.md) | Клас OCI-Collection перейменований на OCICollection відповідно до стандартів іменування PHP. |
| | [OCICollection::max](ocicollection.max.md) | Клас OCI-Collection перейменований на OCICollection відповідно до стандартів іменування PHP. |
| | [OCICollection::size](ocicollection.size.md) | Клас OCI-Collection перейменований на OCICollection відповідно до стандартів іменування PHP. |
| | [OCICollection::trim](ocicollection.trim.md) | Клас OCI-Collection перейменований на OCICollection відповідно до стандартів іменування PHP. |
| | [OCILob::append](ocilob.append.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::close](ocilob.close.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::eof](ocilob.eof.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::erase](ocilob.erase.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::erase](ocilob.erase.md) | offset і length тепер допускають значення null. |
| | [OCILob::export](ocilob.export.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::export](ocilob.export.md) | offset і length тепер допускають значення null. |
| | [OCILob::flush](ocilob.flush.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::free](ocilob.free.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::getBuffering](ocilob.getbuffering.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::import](ocilob.import.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::load](ocilob.load.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::read](ocilob.read.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::rewind](ocilob.rewind.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::save](ocilob.save.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::saveFile](ocilob.savefile.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::seek](ocilob.seek.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::setBuffering](ocilob.setbuffering.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::size](ocilob.size.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::tell](ocilob.tell.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::truncate](ocilob.truncate.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::write](ocilob.write.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::write](ocilob.write.md) | length тепер допускає значення null. |
| | [OCILob::writeTemporary](ocilob.writetemporary.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::writeToFile](ocilob.writetofile.md) | Клас OCI-Lob перейменований на OCILob відповідно до стандартів іменування PHP. |
| | [OCILob::writeToFile](ocilob.writetofile.md) | offset і length тепер допускають значення null. |
| 8.0.0/1.18.1 | [ZipArchive::addGlob](ziparchive.addglob.md) | Додані параметри "comp_method", "comp_flags", "enc_method" та "enc_password" в options. |
| 8.0.0/1.18.0 | [ZipArchive::addEmptyDir](ziparchive.addemptydir.md) | Доданий параметр flags. |
| | [ZipArchive::addFile](ziparchive.addfile.md) | Доданий параметр flags. |
| | [ZipArchive::addFromString](ziparchive.addfromstring.md) | Доданий параметр flags. |
| | [ZipArchive::addGlob](ziparchive.addglob.md) | Доданий параметр "flags" у options. |
| | [ZipArchive::getStatusString](ziparchive.getstatusstring.md) | Метод можна викликати у закритому архіві. |
| | [ZipArchive::getStatusString](ziparchive.getstatusstring.md) | Метод більше не повертає false у разі виникнення помилки. |
| 8.0.0 | [CURLFile::\_\_construct](curlfile.construct.md) | mime_type та posted_filename тепер допускають значення null; раніше значенням за промовчанням був 0. |
| | [DateInterval::\_\_construct](dateinterval.construct.md) | W тепер можна використовувати спільно з D. |
| | [DateTime::format](datetime.format.md) | До цієї версії у разі виникнення помилки поверталося false. |
| | [DateTime::format](datetime.format.md) | Доданий символ форматування p. |
| | [DateTime::getOffset](datetime.getoffset.md) | До цієї версії у разі виникнення помилки поверталося false. |
| | [DateTime::getTimestamp](datetime.gettimestamp.md) | Функції більше не повертають false у разі виникнення помилки. |
| | [DateTimeZone::getOffset](datetimezone.getoffset.md) | До цієї версії у разі виникнення помилки поверталося false. |
| | [DateTimeZone::listIdentifiers](datetimezone.listidentifiers.md) | До цієї версії у разі виникнення помилки поверталося false. |
| | [Directory::close](directory.close.md) | Параметри не приймаються. Раніше як аргумент можна було передати дескриптор каталогу. |
| | [Directory::read](directory.read.md) | Параметри не приймаються. Раніше як аргумент можна було передати дескриптор каталогу. |
| | [Directory::rewind](directory.rewind.md) | Параметри не приймаються. Раніше як аргумент можна було передати дескриптор каталогу. |
| | [DirectoryIterator::\_\_construct](directoryiterator.construct.md) | Тепер викидає виняток ValueError, якщо параметр directory містить порожній рядок; Раніше викидався виняток RuntimeException. |
| | [DOMImplementation::createDocument](domimplementation.createdocument.md) | doctype тепер допускає значення null. |
| | [FFI::cdef](ffi.cdef.md) | lib тепер припускає значення null. |
| | [FFI::string](ffi.string.md) | size тепер припускає значення null; раніше значенням за промовчанням був 0. |
| | [FilesystemIterator::\_\_construct](filesystemiterator.construct.md) | Тепер викидає виняток ValueError, якщо параметр directory містить порожній рядок; Раніше викидався виняток RuntimeException. |
| | [abs](function.abs.md) | num більше не приймає внутрішні об'єкти, що підтримують числове перетворення. |
| | [apache_note](function.apache-note.md) | note_value тепер припускає значення null. |
| | [array_chunk](function.array-chunk.md) | Якщо параметр length менший за 1, буде викинуто виняток ValueError; раніше, натомість видавалася помилка рівня E_WARNING і функція повертала null. |
| | [array_column](function.array-column.md) | Об'єкти в стовпцях, позначені параметром index_key, більше не будуть перетворені на рядок і замість цього будуть видавати TypeError. |
| | [array_combine](function.array-combine.md) | Функція array_combine тепер викидає помилку ValueError, якщо кількість елементів масивів не збігається; Раніше функція повертала значення false. |
| | [array_filter](function.array-filter.md) | Якщо параметр callback очікує, що буде передано значення посилання, функція тепер видасть помилку рівня E_WARNING. |
| | [array_filter](function.array-filter.md) | callback тепер допускає значення null. |
| | [array_map](function.array-map.md) | Якщо параметр callback очікує, що буде передано значення посилання, функція тепер видасть помилку рівня E_WARNING. |
| | [array_reduce](function.array-reduce.md) | Якщо параметр callback очікує, що буде передано значення посилання, функція тепер видасть помилку рівня E_WARNING. |
| | [array_splice](function.array-splice.md) | length тепер допускає значення null. |
| | [array_walk](function.array-walk.md) | Якщо параметр callback очікує, що значення другого або третього параметра буде надіслано за посиланням, функція тепер видасть помилку рівня E_WARNING. |
| | [assert](function.assert.md) | Оголошення функції з іменем assert() всередині простору імен тепер заборонено та викликає E_COMPILE_ERROR. |
| | [assert](function.assert.md) | Функція assert більше не оцінюватиме рядкові аргументи, натомість вони будуть розглядатися як будь-який інший аргумент. Замість assert($a u003du003d $b) слід використовувати assert('$a u003du003d $b'). Директива assert.quiet_eval php.ini та константа ASSERT_QUIET_EVAL також були видалені, оскільки вони більше не мають сенсу. |
| | [bcadd](function.bcadd.md) | scale тепер допускає значення null. |
| | [bccomp](function.bccomp.md) | scale тепер допускає значення null. |
| | [bcdiv](function.bcdiv.md) | scale тепер допускає значення null. |
| | [bcmod](function.bcmod.md) | scale тепер допускає значення null. |
| | [bcmul](function.bcmul.md) | scale тепер допускає значення null. |
| | [bcpowmod](function.bcpowmod.md) | scale тепер допускає значення null. |
| | [bcscale](function.bcscale.md) | scale is now nullable. |
| | [bcsqrt](function.bcsqrt.md) | scale тепер допускає значення null. |
| | [bcsub](function.bcsub.md) | scale тепер допускає значення null. |
| | [bzdecompress](function.bzdecompress.md) | Тип use_less_memory змінено з int на bool. Раніше значенням за промовчанням було 0. |
| | [bzwrite](function.bzwrite.md) | length тепер допускає значення null. |
| | [ceil](function.ceil.md) | num більше не приймає внутрішні об'єкти, що підтримують числове перетворення. |
| | [com_event_sink](function.com-event-sink.md) | sink_interface тепер припускає значення null. |
| | [com_get_active_object](function.com-get-active-object.md) | codepage тепер допускає значення null. |
| | [constant](function.constant.md) Якщо константа не визначена, функція constant тепер викидає виняток Error; раніше видавалась помилка рівня E_WARNING та поверталося значення null. |
| | [convert_uuencode](function.convert-uuencode.md) | До цієї версії при спробі конвертувати порожній рядок поверталося false без особливої причини. |
| | [count](function.count.md) count тепер викидає TypeError, якщо передано неприпустимий обчислюваний тип параметр value. |
| | [count_chars](function.count-chars.md) | До цієї версії функція повертала false у разі виникнення помилки. |
| | [crypt](function.crypt.md) | salt більше не є необов'язковим. |
| | [curl_close](function.curl-close.md) | handle тепер чекає екземпляр CurlHandle; раніше, очікувався ресурс (resource). |
| | [curl_copy_handle](function.curl-copy-handle.md) | handle тепер чекає екземпляр CurlHandle; раніше, очікувався ресурс (resource). |
| | [curl_copy_handle](function.curl-copy-handle.md) | У разі успішного виконання повертає екземпляр CurlHandle; раніше повертався ресурс (resource). |
| | [curl_errno](function.curl-errno.md) | handle тепер чекає екземпляр CurlHandle; раніше, очікувався ресурс (resource). |
| | [curl_error](function.curl-error.md) | handle тепер чекає екземпляр CurlHandle; раніше, очікувався ресурс (resource). |
| | [curl_escape](function.curl-escape.md) | handle тепер чекає екземпляр CurlHandle; раніше, очікувався ресурс (resource). |
| | [curl_exec](function.curl-exec.md) | handle тепер чекає екземпляр CurlHandle; раніше, очікувався ресурс (resource). |
| | [curl_getinfo](function.curl-getinfo.md) | option is nullable now; previously, the default was 0. |
| | [curl_getinfo](function.curl-getinfo.md) | handle тепер чекає екземпляр CurlHandle; раніше, очікувався ресурс (resource). |
| | [curl_init](function.curl-init.md) | url тепер припускає значення null. |
| | [curl_init](function.curl-init.md) | У разі успішного виконання повертає екземпляр CurlHandle; раніше, повертався ресурс (resource). |
| | [curl_multi_add_handle](function.curl-multi-add-handle.md) | handle тепер чекає екземпляр CurlHandle; раніше, очікувався ресурс (resource). |
| | [curl_multi_add_handle](function.curl-multi-add-handle.md) | multi_handle тепер чекає екземпляр; раніше, очікувався ресурс (resource). |
| | [curl_multi_close](function.curl-multi-close.md) | multi_handle тепер чекає екземпляр; раніше, очікувався ресурс (resource). |
| | [curl_multi_errno](function.curl-multi-errno.md) | Функція більше не повертає false у разі виникнення помилки. |
| | [curl_multi_errno](function.curl-multi-errno.md) | multi_handle тепер чекає екземпляр; раніше, очікувався ресурс (resource). |
| | [curl_multi_exec](function.curl-multi-exec.md) | multi_handle тепер чекає екземпляр; раніше, очікувався ресурс (resource). |
| | [curl_multi_getcontent](function.curl-multi-getcontent.md) | handle тепер чекає екземпляр CurlHandle; раніше, очікувався ресурс (resource). |
| | [curl_multi_info_read](function.curl-multi-info-read.md) | multi_handle тепер чекає екземпляр; раніше, очікувався ресурс (resource). |
| | [curl_multi_init](function.curl-multi-init.md) | У разі успішного виконання повертає екземпляр CurlMultiHandle; раніше, повертався ресурс (resource). |
| | [curl_multi_remove_handle](function.curl-multi-remove-handle.md) | handle тепер чекає екземпляр CurlHandle; раніше, очікувався ресурс (resource). |
| | [curl_multi_remove_handle](function.curl-multi-remove-handle.md) | multi_handle тепер чекає екземпляр; раніше, очікувався ресурс (resource). |
| | [curl_multi_select](function.curl-multi-select.md) | multi_handle тепер чекає екземпляр; раніше, очікувався ресурс (resource). |
| | [curl_multi_setopt](function.curl-multi-setopt.md) | multi_handle тепер чекає екземпляр; раніше, очікувався ресурс (resource). |
| | [curl_pause](function.curl-pause.md) | handle тепер чекає екземпляр CurlHandle; раніше, очікувався ресурс (resource). |
| | [curl_reset](function.curl-reset.md) | handle тепер чекає екземпляр CurlHandle; раніше, очікувався ресурс (resource). |
| | [curl_setopt](function.curl-setopt.md) | handle тепер чекає екземпляр CurlHandle; раніше, очікувався ресурс (resource). |
| | [curl_setopt_array](function.curl-setopt-array.md) | handle тепер чекає екземпляр CurlHandle; раніше, очікувався ресурс (resource). |
| | [curl_share_close](function.curl-share-close.md) | share_handle expects на CurlShareHandle instance now; Попередньо, як ресурс був виявлений. |
| | [curl_share_errno](function.curl-share-errno.md) | share_handle expects на CurlShareHandle instance now; Попередньо, як ресурс був виявлений. |
| | [curl_share_errno](function.curl-share-errno.md) | Функція більше не повертає false у разі виникнення помилки. |
| | [curl_share_init](function.curl-share-init.md) | Функція повертає екземпляр CurlShareHandle; раніше, повертався ресурс (resource). |
| | [curl_share_setopt](function.curl-share-setopt.md) | share_handle expects на CurlShareHandle instance now; Попередньо, як ресурс був виявлений. |
| | [curl_unescape](function.curl-unescape.md) | handle тепер чекає екземпляр CurlHandle; раніше, очікувався ресурс (resource). |
| | [curl_version](function.curl-version.md) | Необов'язковий параметр age видалено. |
| | [date](function.date.md) | timestamp тепер допускає значення null. |
| | [date_sunrise](function.date-sunrise.md) | latitude, longitude, zenith і utcOffset тепер допускають значення null. |
| | [date_sunset](function.date-sunset.md) | latitude, longitude, zenith і utcOffset тепер допускають значення null. |
| | [define](function.define.md) | Передача true до case_insensitive тепер видає помилку рівня E_WARNING. Передача false досі дозволена. |
| | [deflate_add](function.deflate-add.md) | context чекає екземпляр DeflateContext; раніше, очікувався ресурс (resource). |
| | [deflate_init](function.deflate-init.md) | У разі успішного виконання функція повертає екземпляр DeflateContext; раніше, повертався ресурс (resource). |
| | [dir] (function.dir.md) | context тепер припускає значення null. |
| | [dom_import_simplexml](function.dom-import-simplexml.md) | Функція більше не повертає null у разі помилки. |
| | [easter_date](function.easter-date.md) | year тепер допускає значення null. |
| | [easter_days](function.easter-days.md) | year тепер допускає значення null. |
| | [enchant_broker_describe](function.enchant-broker-describe.md) | До цієї версії функція повертала false у разі виникнення помилки. |
| | [enchant_broker_describe](function.enchant-broker-describe.md) | broker очікує екземпляр EnchantBroker; Раніше очікували ресурс (resource). |
| | [enchant_broker_dict_exists](function.enchant-broker-dict-exists.md) | broker очікує екземпляр EnchantBroker; Раніше очікували ресурс (resource). |
| | [enchant_broker_free](function.enchant-broker-free.md) | broker очікує екземпляр EnchantBroker; Раніше очікували ресурс (resource). |
| | [enchant_broker_free_dict](function.enchant-broker-free-dict.md) | dictionary очікує EnchantDictionary; Раніше очікували ресурс (resource). |
| | [enchant_broker_get_dict_path](function.enchant-broker-get-dict-path.md) | broker очікує екземпляр EnchantBroker; Раніше очікували ресурс (resource). |
| | [enchant_broker_get_error](function.enchant-broker-get-error.md) | broker очікує екземпляр EnchantBroker; Раніше очікували ресурс (resource). |
| | [enchant_broker_init](function.enchant-broker-init.md) | У разі успішного виконання, функція повертає екземпляр EnchantBroker; Раніше повертався ресурс. |
| | [enchant_broker_list_dicts](function.enchant-broker-list-dicts.md) | До цієї версії функція повертала false у разі виникнення помилки. |
| | [enchant_broker_list_dicts](function.enchant-broker-list-dicts.md) | broker очікує екземпляр EnchantBroker; Раніше очікували ресурс (resource). |
| | [enchant_broker_request_dict](function.enchant-broker-request-dict.md) | У разі успішного виконання функція повертає екземпляр EnchantDictionary; Раніше повертався ресурс. |
| | [enchant_broker_request_dict](function.enchant-broker-request-dict.md) | broker очікує екземпляр EnchantBroker; Раніше очікували ресурс (resource). |
| | [enchant_broker_request_pwl_dict](function.enchant-broker-request-pwl-dict.md) | broker очікує екземпляр EnchantBroker; Раніше очікували ресурс (resource). |
| | [enchant_broker_request_pwl_dict](function.enchant-broker-request-pwl-dict.md) | У разі успішного виконання функція повертає екземпляр EnchantDictionary; Раніше повертався ресурс. |
| | [enchant_broker_set_dict_path](function.enchant-broker-set-dict-path.md) | broker очікує екземпляр EnchantBroker; Раніше очікували ресурс (resource). |
| | [enchant_broker_set_ordering](function.enchant-broker-set-ordering.md) | broker очікує екземпляр EnchantBroker; Раніше очікували ресурс (resource). |
| | [enchant_dict_add](function.enchant-dict-add.md) | dictionary очікує екземпляр EnchantDictionary; Раніше очікували ресурс (resource). |
| | [enchant_dict_add_to_session](function.enchant-dict-add-to-session.md) | dictionary очікує екземпляр EnchantDictionary; Раніше очікували ресурс (resource). |
| | [enchant_dict_check](function.enchant-dict-check.md) | dictionary очікує екземпляр EnchantDictionary; Раніше очікували ресурс (resource). |
| | [enchant_dict_describe](function.enchant-dict-describe.md) | dictionary очікує екземпляр EnchantDictionary; Раніше очікували ресурс (resource). |
| | [enchant_dict_describe](function.enchant-dict-describe.md) | До цієї версії функція повертала false у разі виникнення помилки. |
| | [enchant_dict_get_error](function.enchant-dict-get-error.md) | dictionary очікує екземпляр EnchantDictionary; Раніше очікували ресурс (resource). |
| | [enchant_dict_is_added](function.enchant-dict-is-added.md) | dictionary очікує екземпляр EnchantDictionary; Раніше очікували ресурс (resource). |
| | [enchant_dict_quick_check](function.enchant-dict-quick-check.md) | dictionary очікує екземпляр EnchantDictionary; Раніше очікували ресурс (resource). |
| | [enchant_dict_store_replacement](function.enchant-dict-store-replacement.md) | dictionary очікує екземпляр EnchantDictionary; Раніше очікували ресурс (resource). |
| | [enchant_dict_suggest](function.enchant-dict-suggest.md) | dictionary очікує екземпляр EnchantDictionary; Раніше очікували ресурс (resource). |
| | [error_log](function.error-log.md) | Параметр destination та additional_headers тепер допускають значення null. |
| | [error_reporting](function.error-reporting.md) | error_level тепер припускає значення null. |
| | [exif_read_data](function.exif-read-data.md) | required_sections тепер допускає значення null. |
| | [explode](function.explode.md) | explode тепер викидає TypeError, якщо параметр separator є порожнім рядком (""). Раніше замість виключення explode повертала false. |
| | [fgetcsv](function.fgetcsv.md) | Параметр length тепер припускає значення null. |
| | [file_get_contents](function.file-get-contents.md) | Параметр length тепер припускає значення null. |
| | [finfo_buffer](function.finfo-buffer.md) | context тепер припускає значення null. |
| | [finfo_file](function.finfo-file.md) | context тепер припускає значення null. |
| | [floor](function.floor.md) | num більше не приймає внутрішні об'єкти, що підтримують числове перетворення. |
| | [fsockopen](function.fsockopen.md) | timeout тепер допускає значення null. |
| | [fwrite](function.fwrite.md) | Параметр length тепер припускає значення null. |
| | [get_class](function.get-class.md) | Виклик функції поза класом без жодних аргументів викликає виняток Error. Раніше видавалась помилка рівня E_WARNING та функція повертала значення false. |
| | [get_class_methods](function.get-class-methods.md) | Параметр object_or_class тепер приймає лише об'єкти чи коректні імена класів. |
| | [get_defined_functions](function.get-defined-functions.md) | Значення параметра exclude_disabled за промовчанням було змінено із false на true. |
| | [get_headers](function.get-headers.md) | Тип параметра associative було змінено з цілого числа (int) на логічне значення (bool). |
| | [get_parent_class](function.get-parent-class.md) | Параметр object_or_class тепер приймає лише об'єкти або коректні імена класів |
| | [get_resources](function.get-resources.md) | type тепер допускає значення null. |
| | [getdate](function.getdate.md) | timestamp тепер допускає значення null. |
| | [gmdate](function.gmdate.md) | timestamp тепер допускає значення null. |
| | [gmmktime](function.gmmktime.md) | minute, second, month, day та year тепер допускають значення null. |
| | [gmmktime](function.gmmktime.md) | hour більше не є необов'язковим. |
| | [gmp_binomial](function.gmp-binomial.md) | Функція більше не повертає false у разі виникнення помилки. |
| | [gmp_export](function.gmp-export.md) | Функція більше не повертає false у разі виникнення помилки. |
| | [gmp_import](function.gmp-import.md) | Функція більше не повертає false у разі виникнення помилки. |
| | [gmstrftime](function.gmstrftime.md) | timestamp тепер допускає значення null. |
| | [gzgets](function.gzgets.md) | length тепер припускає значення null; раніше значення за промовчанням було 1024. |
| | [gzwrite](function.gzwrite.md) | length тепер припускає значення null; раніше значенням за промовчанням був 0. |
| | [hash](function.hash.md) | Функція hash тепер викидає виняток ValueError, якщо алгоритм невідомий; раніше натомість поверталося значення false. |
| | [hash_hmac](function.hash-hmac.md) | Функція hash тепер викидає виняток ValueError, якщо алгоритм невідомий; раніше натомість поверталося значення false. |
| | [hash_update_file](function.hash-update-file.md) | stream_context тепер припускає значення null. |
| | [header_remove](function.header-remove.md) | name тепер припускає значення null. |
| | [html_entity_decode](function.md-entity-decode.md) | encoding тепер допускає значення null. |
| | [htmlentities](function.mdentities.md) | encoding тепер допускає значення null. |
| | [iconv_mime_decode](function.iconv-mime-decode.md) | encoding тепер допускає значення null. |
| | [iconv_mime_decode_headers](function.iconv-mime-decode-headers.md) | encoding тепер допускає значення null. |
| | [iconv_strlen](function.iconv-strlen.md) | encoding тепер допускає значення null. |
| | [iconv_strpos](function.iconv-strpos.md) | encoding тепер допускає значення null. |
| | [iconv_strrpos](function.iconv-strrpos.md) | encoding тепер допускає значення null. |
| | [iconv_substr](function.iconv-substr.md) | length та encoding тепер допускають значення null. |
| | [idate](function.idate.md) timestamp тепер допускає значення null. |
| | [ignore_user_abort](function.ignore-user-abort.md) | enable тепер допускає значення null. |
| | [imageaffine](function.imageaffine.md) | clip тепер припускає значення null. |
| | [imageaffine](function.imageaffine.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagealphablending](function.imagealphablending.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imageantialias](function.imageantialias.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagearc](function.imagearc.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagebmp](function.imagebmp.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagebmp](function.imagebmp.md) | Тип параметра compressed тепер логічне значення (bool); раніше був цілим числом (int). |
| | [imagechar](function.imagechar.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecharup](function.imagecharup.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecolorallocate](function.imagecolorallocate.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecolorallocatealpha](function.imagecolorallocatealpha.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecolorat](function.imagecolorat.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecolorclosest](function.imagecolorclosest.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecolorclosesthwb](function.imagecolorclosesthwb.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecolordeallocate](function.imagecolordeallocate.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecolorexact](function.imagecolorexact.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecolorexactalpha](function.imagecolorexactalpha.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecolormatch](function.imagecolormatch.md) | image1 та image2 тепер очікують екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecolorresolve](function.imagecolorresolve.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecolorresolvealpha](function.imagecolorresolvealpha.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecolorset](function.imagecolorset.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecolorsforindex](function.imagecolorsforindex.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecolorsforindex](function.imagecolorsforindex.md) | Функція imagecolorsforindex тепер викидає виняток ValueError, якщо параметр color поза допустимим діапазоном; раніше натомість поверталося значення false. |
| | [imagecolorstotal](function.imagecolorstotal.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecolortransparent](function.imagecolortransparent.md) | color тепер припускає значення null. |
| | [imagecolortransparent](function.imagecolortransparent.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imageconvolution](function.imageconvolution.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecopy](function.imagecopy.md) | dst_image та src_image тепер очікують на екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecopymerge](function.imagecopymerge.md) | dst_image та src_image тепер очікують на екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecopymergegray](function.imagecopymergegray.md) | dst_image та src_image тепер очікують на екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecopyresampled](function.imagecopyresampled.md) | dst_image та src_image тепер очікують на екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecopyresized](function.imagecopyresized.md) | dst_image та src_image тепер очікують на екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecreate](function.imagecreate.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagecreatefrombmp](function.imagecreatefrombmp.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagecreatefromgd](function.imagecreatefromgd.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagecreatefromgd2](function.imagecreatefromgd2.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagecreatefromgd2part](function.imagecreatefromgd2part.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagecreatefromgif](function.imagecreatefromgif.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagecreatefromjpeg](function.imagecreatefromjpeg.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagecreatefrompng](function.imagecreatefrompng.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagecreatefromstring](function.imagecreatefromstring.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagecreatefromtga](function.imagecreatefromtga.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagecreatefromwbmp](function.imagecreatefromwbmp.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagecreatefromwebp](function.imagecreatefromwebp.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagecreatefromxbm](function.imagecreatefromxbm.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagecreatefromxpm](function.imagecreatefromxpm.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagecreatetruecolor](function.imagecreatetruecolor.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagecrop](function.imagecrop.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecrop](function.imagecrop.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagecropauto](function.imagecropauto.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagecropauto](function.imagecropauto.md) | У разі успішного виконання, функція тепер повертає об'єкт GDImage; раніше повертався ресурс (resource). |
| | [imagedashedline](function.imagedashedline.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagedestroy](function.imagedestroy.md) | Функція тепер є NOP. |
| | [imagedestroy](function.imagedestroy.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imageellipse](function.imageellipse.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagefill](function.imagefill.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagefilledarc](function.imagefilledarc.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagefilledellipse](function.imagefilledellipse.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagefilledpolygon](function.imagefilledpolygon.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagefilledrectangle](function.imagefilledrectangle.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagefilltoborder](function.imagefilltoborder.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagefilter](function.imagefilter.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imageflip](function.imageflip.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagefttext](function.imagefttext.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagegammacorrect](function.imagegammacorrect.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagegd](function.imagegd.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagegd2](function.imagegd2.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagegetclip](function.imagegetclip.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagegetinterpolation](function.imagegetinterpolation.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagegif](function.imagegif.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagegrabscreen](function.imagegrabscreen.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagegrabwindow](function.imagegrabwindow.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagegrabwindow](function.imagegrabwindow.md) | client_area тепер очікує на логічне значення (bool); раніше очікувалося ціле число (int). |
| | [imageinterlace](function.imageinterlace.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imageinterlace](function.imageinterlace.md) | enable тепер очікує на логічне значення (bool); раніше очікувалося ціле число (int). |
| | [imageistruecolor](function.imageistruecolor.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagejpeg](function.imagejpeg.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagelayereffect](function.imagelayereffect.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imageline](function.imageline.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imageopenpolygon](function.imageopenpolygon.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagepalettecopy](function.imagepalettecopy.md) | dst і src тепер очікують на екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagepalettetotruecolor](function.imagepalettetotruecolor.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagepng](function.imagepng.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagepolygon](function.imagepolygon.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagerectangle](function.imagerectangle.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imageresolution](function.imageresolution.md) | resolution_x та resolution_y тепер допускають значення null. |
| | [imagerotate](function.imagerotate.md) | Невикористовуваний v тепер очікує на логічне значення (bool); раніше очікувалося ціле число (int). |
| | [imagerotate](function.imagerotate.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagerotate](function.imagerotate.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagesavealpha](function.imagesavealpha.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagescale](function.imagescale.md) | У разі успішного виконання, функція тепер повертає екземпляр GDImage; раніше повертався ресурс (resource). |
| | [imagescale](function.imagescale.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagesetbrush](function.imagesetbrush.md) | image та brush тепер очікують екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagesetclip](function.imagesetclip.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagesetinterpolation](function.imagesetinterpolation.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagesetpixel](function.imagesetpixel.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagesetthickness](function.imagesetthickness.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagesettile](function.imagesettile.md) | image та tile тепер очікують екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagestring](function.imagestring.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagestringup](function.imagestringup.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagesx](function.imagesx.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagesy](function.imagesy.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagetruecolortopalette](function.imagetruecolortopalette.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagettfbbox](function.imagettfbbox.md) | Доданий параметр options. |
| | [imagettftext](function.imagettftext.md) | Доданий параметр options. |
| | [imagewbmp](function.imagewbmp.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagewbmp](function.imagewbmp.md) | foreground_color тепер припускає значення null. |
| | [imagewebp](function.imagewebp.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imagexbm](function.imagexbm.md) | Четвертий параметр, який не використовувався, було видалено. |
| | [imagexbm](function.imagexbm.md) | foreground_color тепер припускає значення null. |
| | [imagexbm](function.imagexbm.md) | image тепер чекає екземпляр GdImage; раніше очікували ресурс (resource). |
| | [imap_append](function.imap-append.md) | options та internal_date тепер допускають значення null. |
| | [imap_headerinfo](function.imap-headerinfo.md) | Невикористання параметра defaulthost було видалено. |
| | [imap_mail](function.imap-mail.md) | additional_headers, cc, bcc та return_path тепер допускають значення null. |
| | [imap_sort](function.imap-sort.md) | search_criteria і charset тепер nullable. |
| | [imap_sort](function.imap-sort.md) | reverse є логічним типом (bool) замість цілого числа (int). |
| | [implode](function.implode.md) | Передача separator після array більше не підтримується. |
| | [inflate_add](function.inflate-add.md) | context чекає екземпляр InflateContext; раніше, очікувався ресурс (resource). |
| | [inflate_get_read_len](function.inflate-get-read-len.md) | context чекає екземпляр InflateContext; раніше, очікувався ресурс (resource). |
| | [inflate_get_status](function.inflate-get-status.md) | context чекає екземпляр InflateContext; раніше, очікувався ресурс (resource). |
| | [inflate_init](function.inflate-init.md) | У разі успішного виконання функція повертає екземпляр InflateContext; раніше повертався ресурс (resource). |
| | [is_numeric](function.is-numeric.md) | Рядки, що складаються з чисел, що закінчуються пробілом ("42"), тепер повертатимуть true. Раніше натомість поверталося false. |
| | [jdtounix](function.jdtounix.md) | Функція більше не повертає false у разі виникнення помилки, натомість викидає ValueError. |
| | [ldap_add](function.ldap-add.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_add_ext](function.ldap-add-ext.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_bind_ext](function.ldap-bind-ext.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_compare](function.ldap-compare.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_control_paged_result](function.ldap-control-paged-result.md) | Функцію було видалено. |
| | [ldap_control_paged_result_response](function.ldap-control-paged-result-response.md) | Функцію було видалено. |
| | [ldap_delete](function.ldap-delete.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_delete_ext](function.ldap-delete-ext.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_exop_passwd](function.ldap-exop-passwd.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_list](function.ldap-list.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_mod_add](function.ldap-mod-add.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_mod_del](function.ldap-mod-del.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_mod_replace](function.ldap-mod-replace.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_modify_batch](function.ldap-modify-batch.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_mod_add_ext](function.ldap-mod_add-ext.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_mod_del_ext](function.ldap-mod_del-ext.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_mod_replace_ext](function.ldap-mod_replace-ext.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_read](function.ldap-read.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_rename](function.ldap-rename.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_rename_ext](function.ldap-rename-ext.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_sasl_bind](function.ldap-sasl-bind.md) | dn, password, mech, realm, authc_id, authz_id and props тепер допускають значення null. |
| | [ldap_search](function.ldap-search.md) | controls тепер допускає значення null; раніше значення за умовчанням було [[]. |
| | [ldap_set_rebind_proc](function.ldap-set-rebind-proc.md) | callback тепер допускає значення null. |
| | [ldap_sort](function.ldap-sort.md) | Функцію було видалено. |
| | [Levenshtein](function.levenshtein.md) | До цієї версії levenshtein потрібно було викликати з двома чи п'ятьма аргументами. |
| | [libxml_use_internal_errors](function.libxml-use-internal-errors.md) | use_errors тепер припускає значення null. Раніше значенням за промовчанням було false. |
| | [localtime](function.localtime.md) | timestamp тепер допускає значення null. |
| | [mb_check_encoding](function.mb-check-encoding.md) | Параметри value та encoding можуть набувати значення null. |
| | [mb_chr](function.mb-chr.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_convert_kana](function.mb-convert-kana.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_decode_numericentity](function.mb-decode-numericentity.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_detect_order](function.mb-detect-order.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_encode_mimeheader](function.mb-encode-mimeheader.md) | charset та transfer_encoding тепер допускають значення null. |
| | [mb_encode_numericentity](function.mb-encode-numericentity.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_ereg](function.mb-ereg.md) | Тепер, якщо успішно завершено, ця функція повертає true. Раніше вона повертала довжину знайденого входження pattern у рядку string у випадку, якщо було передано параметр matches. Якщо опціональний параметр matches не був заданий, або довжина рядка, що перевіряється, дорівнювала 0, ця функція повертала число 1. |
| | [mb_ereg_match](function.mb-ereg-match.md) | options тепер допускає значення null. |
| | [mb_ereg_replace](function.mb-ereg-replace.md) | options тепер допускає значення null. |
| | [mb_ereg_replace_callback](function.mb-ereg-replace-callback.md) | options тепер допускає значення null. |
| | [mb_ereg_search](function.mb-ereg-search.md) | pattern та options тепер допускають значення null. |
| | [mb_ereg_search_init](function.mb-ereg-search-init.md) | pattern та options тепер допускають значення null. |
| | [mb_ereg_search_pos](function.mb-ereg-search-pos.md) | pattern та options тепер допускають значення null. |
| | [mb_ereg_search_regs](function.mb-ereg-search-regs.md) | pattern та options тепер допускають значення null. |
| | [mb_eregi](function.mb-eregi.md) | Тепер ця функція повертає true у разі успішного виконання. Раніше, якщо було задано параметр matches і було знайдено входження pattern у рядку string, поверталася довжина знайденого підрядка в байтах. Якщо параметр matches не задавався або довжина знайденого підрядка дорівнювала 0, функція повертала 1. |
| | [mb_eregi_replace](function.mb-eregi-replace.md) | Параметр options тепер може набувати значення null. |
| | [mb_get_info](function.mb-get-info.md) | type більше не підтримує "func_overload" та "func_overload_list". |
| | [mb_http_input](function.mb-http-input.md) | type тепер може бути задано як null. |
| | [mb_http_output](function.mb-http-output.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_internal_encoding](function.mb-internal-encoding.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_internal_encoding](function.mb-internal-encoding.md) | Тепер викидається виняток ValueError, якщо значення параметра encoding є неприпустимим кодуванням. Раніше натомість видавалася помилка рівня E_WARNING. |
| | [mb_language](function.mb-language.md) | Тепер параметр language може набувати значення null. |
| | [mb_ord](function.mb-ord.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_parse_str](function.mb-parse-str.md) | Другий параметр став обов'язковим. |
| | [mb_regex_encoding](function.mb-regex-encoding.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_regex_set_options](function.mb-regex-set-options.md) | Параметр options може набувати значення null. |
| | [mb_regex_set_options](function.mb-regex-set-options.md) | Якщо параметр options заданий і дорівнює null, повертаються попередні параметри. Раніше поточні параметри поверталися. |
| | [mb_scrub](function.mb-scrub.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_str_split](function.mb-str-split.md) | Функція більше не повертає false у разі невдачі. |
| | [mb_str_split](function.mb-str-split.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_strcut](function.mb-strcut.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_strimwidth](function.mb-strimwidth.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_stripos](function.mb-stripos.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_stripos](function.mb-stripos.md) | needle тепер приймає порожній рядок. |
| | [mb_stristr](function.mb-stristr.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_stristr](function.mb-stristr.md) | needle тепер приймає порожній рядок. |
| | [mb_strlen](function.mb-strlen.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_strpos](function.mb-strpos.md) | needle тепер приймає порожній рядок. |
| | [mb_strpos](function.mb-strpos.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_strrchr](function.mb-strrchr.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_strrchr](function.mb-strrchr.md) | needle тепер приймає порожній рядок. |
| | [mb_strrichr](function.mb-strrichr.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_strrichr](function.mb-strrichr.md) | needle тепер приймає порожній рядок. |
| | [mb_strripos](function.mb-strripos.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_strripos](function.mb-strripos.md) | needle тепер приймає порожній рядок. |
| | [mb_strrpos](function.mb-strrpos.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_strrpos](function.mb-strrpos.md) | Передача encoding як третій аргумент замість offset було видалено. |
| | [mb_strrpos](function.mb-strrpos.md) | needle тепер приймає порожній рядок. |
| | [mb_strstr](function.mb-strstr.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_strstr](function.mb-strstr.md) | needle тепер приймає порожній рядок. |
| | [mb_strwidth](function.mb-strwidth.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_substitute_character](function.mb-substitute-character.md) | Передача порожнього рядка substitute_character більше не підтримується; натомість використовуйте "none". |
| | [mb_substitute_character](function.mb-substitute-character.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_substr](function.mb-substr.md) | Тепер параметр encoding може набувати значення null. |
| | [mb_substr_count](function.mb-substr-count.md) | Тепер параметр encoding може набувати значення null. |
| | [metaphone](function.metaphone.md) | Функція повертала false у разі виникнення помилки. |
| | [mhash](function.mhash.md) | key тепер припускає значення null. |
| | [mktime](function.mktime.md) | minute, second, month, day та year тепер допускають значення null. |
| | [mktime](function.mktime.md) | hour більше не є необов'язковим. |
| | [msg_get_queue](function.msg-get-queue.md) | У разі успішного виконання, функція тепер повертає екземпляр SysvMessageQueue; раніше повертався ресурс (resource). |
| | [msg_receive](function.msg-receive.md) | Параметр queue тепер чекає на екземпляр SysvMessageQueue; раніше очікували ресурс (resource). |
| | [msg_remove_queue](function.msg-remove-queue.md) | Параметр queue тепер чекає на екземпляр SysvMessageQueue; раніше очікували ресурс (resource). |
| | [msg_send](function.msg-send.md) | Параметр queue тепер чекає на екземпляр SysvMessageQueue; раніше очікували ресурс (resource). |
| | [msg_set_queue](function.msg-set-queue.md) | Параметр queue тепер чекає на екземпляр SysvMessageQueue; раніше очікували ресурс (resource). |
| | [msg_stat_queue](function.msg-stat-queue.md) | Параметр queue тепер чекає на екземпляр SysvMessageQueue; раніше очікували ресурс (resource). |
| | [number_format](function.number-format.md) | До цієї версії функція number_format приймала один, два або чотири параметри (але не три). |
| | [ob_implicit_flush](function.ob-implicit-flush.md) | enable тепер набуває логічного значення (bool); раніше приймалося ціле число (int). |
| | [odbc_columns](function.odbc-columns.md) | schema, table і column тепер допускають значення null. |
| | [odbc_error](function.odbc-error.md) | odbc тепер допускає значення null. |
| | [odbc_errormsg](function.odbc-errormsg.md) | odbc тепер допускає значення null. |
| | [odbc_exec](function.odbc-exec.md) | Параметр flags був вилучений. |
| | [odbc_fetch_row](function.odbc-fetch-row.md) | row тепер припускає значення null. |
| | [odbc_procedurecolumns](function.odbc-procedurecolumns.md) | До цієї версії функцію можна було викликати лише з одним або п'ятьма аргументами. |
| | [odbc_procedures](function.odbc-procedures.md) | До цієї версії функцію можна було викликати лише з одним або чотирма аргументами. |
| | [odbc_tables](function.odbc-tables.md) | schema, table і types тепер можуть набувати значення null. |
| | [opendir](function.opendir.md) | context тепер припускає значення null. |
| | [openssl_csr_export](function.openssl-csr-export.md) | csr тепер приймає екземпляр OpenSSLCertificateSigningRequest; раніше приймався ресурс (resource) типу OpenSSL X.509 CSR. |
| | [openssl_csr_export_to_file](function.openssl-csr-export-to-file.md) | csr тепер приймає екземпляр OpenSSLCertificateSigningRequest; раніше приймався ресурс (resource) типу OpenSSL X.509 CSR. |
| | [openssl_csr_get_public_key](function.openssl-csr-get-public-key.md) | У разі успішного виконання повертає екземпляр OpenSSLAsymmetricKey; раніше повертався ресурс (resource) типу OpenSSL key. |
| | [openssl_csr_get_public_key](function.openssl-csr-get-public-key.md) | csr тепер приймає екземпляр OpenSSLCertificateSigningRequest; раніше приймався ресурс (resource) типу OpenSSL X.509 CSR. |
| | [openssl_csr_get_subject](function.openssl-csr-get-subject.md) | csr тепер приймає екземпляр OpenSSLCertificateSigningRequest; раніше приймався ресурс (resource) типу OpenSSL X.509 CSR. |
| | [openssl_csr_new](function.openssl-csr-new.md) | private_key тепер приймає екземпляр OpenSSLAsymmetricKey; раніше приймався ресурс (resource) типу OpenSSL key. |
| | [openssl_csr_new](function.openssl-csr-new.md) | csr тепер приймає екземпляр OpenSSLCertificateSigningRequest; раніше приймався ресурс (resource) типу OpenSSL X.509 CSR. |
| | [openssl_csr_sign](function.openssl-csr-sign.md) | private_key тепер приймає екземпляр OpenSSLAsymmetricKey; раніше приймався ресурс (resource) типу OpenSSL X.509 CSR. |
| | [openssl_csr_sign](function.openssl-csr-sign.md) | ca_certificate тепер приймає екземпляр OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL X.509 CSR. |
| | [openssl_csr_sign](function.openssl-csr-sign.md) | csr тепер приймає екземпляр OpenSSLCertificateSigningRequest; раніше приймався ресурс (resource) типу OpenSSL X.509 CSR. |
| | [openssl_csr_sign](function.openssl-csr-sign.md) | On success, this function returns an OpenSSLCertificate instance now; Попередньо, як джерело типу OpenSSL X.509 було відновлено. |
| | [openssl_dh_compute_key](function.openssl-dh-compute-key.md) | private_key тепер приймає екземпляр OpenSSLAsymmetricKey; раніше приймався ресурс (resource) типу OpenSSL X.509 CSR. |
| | [openssl_free_key](function.openssl-free-key.md) | Функція застаріла, оскільки більше немає сенсу. |
| | [openssl_free_key](function.openssl-free-key.md) | key тепер приймає OpenSSLAsymmetricKey; раніше брала ресурс (resource) типу OpenSSL key. |
| | [openssl_open](function.openssl-open.md) | private_key тепер приймає екземпляр OpenSSLAsymmetricKey або OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL key або OpenSSL X.509 CSR. |
| | [openssl_open](function.openssl-open.md) | cipher_algo більше не є необов'язковим параметром. |
| | [openssl_pkcs7_decrypt](function.openssl-pkcs7-decrypt.md) | private_key тепер приймає екземпляр OpenSSLAsymmetricKey або OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL key або OpenSSL X.509 CSR. |
| | [openssl_pkcs7_encrypt](function.openssl-pkcs7-encrypt.md) | certificate тепер приймає екземпляр OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL X.509 CSR. |
| | [openssl_pkcs7_sign](function.openssl-pkcs7-sign.md) | certificate тепер приймає екземпляр OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL X.509 CSR. |
| | [openssl_pkcs7_sign](function.openssl-pkcs7-sign.md) | private_key тепер приймає екземпляр OpenSSLAsymmetricKey або OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL key або OpenSSL X.509 CSR. |
| | [openssl_pkcs7_verify](function.openssl-pkcs7-verify.md) | signers_certificates_filename, untrusted_certificates_filename, content та output_filename тепер допускають значення null. |
| | [openssl_pkcs12_export](function.openssl-pkcs12-export.md) | certificate тепер приймає екземпляр OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL X.509 CSR. |
| | [openssl_pkcs12_export](function.openssl-pkcs12-export.md) | private_key тепер приймає екземпляр OpenSSLAsymmetricKey або OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL key або OpenSSL X.509. |
| | [openssl_pkcs12_export_to_file](function.openssl-pkcs12-export-to-file.md) | certificate тепер приймає екземпляр OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL X.509 CSR. |
| | [openssl_pkcs12_export_to_file](function.openssl-pkcs12-export-to-file.md) | private_key тепер приймає екземпляр OpenSSLAsymmetricKey або OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL key або OpenSSL X.509. |
| | [openssl_pkey_export](function.openssl-pkey-export.md) | key тепер приймає екземпляр OpenSSLAsymmetricKey або OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL key або OpenSSL X.509. |
| | [openssl_pkey_export_to_file](function.openssl-pkey-export-to-file.md) | key тепер приймає екземпляр OpenSSLAsymmetricKey або OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL key або OpenSSL X.509. |
| | [openssl_pkey_free](function.openssl-pkey-free.md) | key тепер приймає екземпляр OpenSSLAsymmetricKey; раніше приймався ресурс (resource) типу OpenSSL key. |
| | [openssl_pkey_free](function.openssl-pkey-free.md) | Функція застаріла, оскільки більше немає сенсу. |
| | [openssl_pkey_get_details](function.openssl-pkey-get-details.md) | key тепер приймає екземпляр OpenSSLAsymmetricKey; раніше приймався ресурс (resource) типу OpenSSL key. |
| | [openssl_pkey_get_private](function.openssl-pkey-get-private.md) | passphrase тепер допускає значення null. |
| | [openssl_pkey_get_private](function.openssl-pkey-get-private.md) | private_key тепер приймає екземпляр OpenSSLAsymmetricKey або OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL key або OpenSSL X.509. |
| | [openssl_pkey_get_private](function.openssl-pkey-get-private.md) | У разі успішного виконання функція повертає екземпляр OpenSSLAsymmetricKey; раніше повертався ресурс (resource) типу OpenSSL key. |
| | [openssl_pkey_get_public](function.openssl-pkey-get-public.md) | public_key тепер приймає екземпляр OpenSSLAsymmetricKey або OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL key або OpenSSL X.509. |
| | [openssl_pkey_get_public](function.openssl-pkey-get-public.md) | У разі успішного виконання функція повертає екземпляр OpenSSLAsymmetricKey; раніше повертався ресурс (resource) типу OpenSSL key. |
| | [openssl_pkey_new](function.openssl-pkey-new.md) | У разі успішного виконання функція повертає екземпляр OpenSSLAsymmetricKey; раніше повертався ресурс (resource) типу OpenSSL key. |
| | [openssl_private_decrypt](function.openssl-private-decrypt.md) | private_key тепер приймає екземпляр OpenSSLAsymmetricKey або OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL key або OpenSSL X.509. |
| | [openssl_private_encrypt](function.openssl-private-encrypt.md) | private_key тепер приймає екземпляр OpenSSLAsymmetricKey або OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL key або OpenSSL X.509. |
| | [openssl_public_decrypt](function.openssl-public-decrypt.md) | public_key тепер приймає екземпляр OpenSSLAsymmetricKey або OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL key або OpenSSL X.509. |
| | [openssl_public_encrypt](function.openssl-public-encrypt.md) | public_key тепер приймає екземпляр OpenSSLAsymmetricKey або OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL key або OpenSSL X.509. |
| | [openssl_random_pseudo_bytes](function.openssl-random-pseudo-bytes.md) | strong_result тепер припускає значення null. |
| | [openssl_seal](function.openssl-seal.md) | iv тепер допускає значення null. |
| | [openssl_seal](function.openssl-seal.md) | cipher_algo більше не є необов'язковим параметром. |
| | [openssl_seal](function.openssl-seal.md) | public_key тепер приймає масив (array) екземплярів OpenSSLAsymmetricKey; раніше приймався масив (array) ресурсів (resource) типу OpenSSL key. |
| | [openssl_sign](function.openssl-sign.md) | private_key тепер приймає екземпляр OpenSSLAsymmetricKey або OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL key або OpenSSL X.509. |
| | [openssl_spki_new](function.openssl-spki-new.md) | private_key тепер приймає екземпляр OpenSSLAsymmetricKey; раніше приймався ресурс (resource) типу OpenSSL key. |
| | [openssl_verify](function.openssl-verify.md) | public_key тепер приймає екземпляр OpenSSLAsymmetricKey або OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL key або OpenSSL X.509. |
| | [openssl_x509_check_private_key](function.openssl-x509-check-private-key.md) | private_key тепер приймає екземпляр OpenSSLAsymmetricKey або OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL key або OpenSSL X.509. |
| | [openssl_x509_check_private_key](function.openssl-x509-check-private-key.md) | certificate тепер приймає екземпляр OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL X.509. |
| | [openssl_x509_checkpurpose](function.openssl-x509-checkpurpose.md) | certificate тепер приймає екземпляр OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL X.509. |
| | [openssl_x509_checkpurpose](function.openssl-x509-checkpurpose.md) | untrusted_certificates_file тепер припускає значення null. |
| | [openssl_x509_export](function.openssl-x509-export.md) | certificate тепер приймає екземпляр OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL X.509. |
| | [openssl_x509_export_to_file](function.openssl-x509-export-to-file.md) | certificate тепер приймає екземпляр OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL X.509. |
| | [openssl_x509_fingerprint](function.openssl-x509-fingerprint.md) | certificate тепер приймає екземпляр OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL X.509. |
| | [openssl_x509_free](function.openssl-x509-free.md) | certificate тепер приймає екземпляр OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL X.509. |
| | [openssl_x509_free](function.openssl-x509-free.md) | Функція застаріла, оскільки більше немає сенсу. |
| | [openssl_x509_parse](function.openssl-x509-parse.md) | certificate тепер приймає екземпляр OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL X.509. |
| | [openssl_x509_read](function.openssl-x509-read.md) | certificate тепер приймає екземпляр OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL X.509. |
| | [openssl_x509_read](function.openssl-x509-read.md) | У разі успішного виконання повертає екземпляр OpenSSLCertificate; раніше повертався ресурс (resource) типу OpenSSL X.509. |
| | [openssl_x509_verify](function.openssl-x509-verify.md) | public_key тепер приймає екземпляр OpenSSLAsymmetricKey або OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL key або OpenSSL X.509. |
| | [openssl_x509_verify](function.openssl-x509-verify.md) | certificate тепер приймає екземпляр OpenSSLCertificate; раніше приймався ресурс (resource) типу OpenSSL X.509. |
| | [pack](function.pack.md) | Функція більше не повертає false у разі виникнення помилки. |
| | [parse_str](function.parse-str.md) | result більше не є необов'язковим. |
| | [parse_url](function.parse-url.md) | parse_url тепер розрізняє відсутні та порожні запити та фрагменти. |
| | [password_hash](function.password-hash.md) | password_hash більше не повертає false у разі виникнення помилки. |
| | [password_hash](function.password-hash.md) | Параметр algo тепер припускає значення null. |
| | [pcntl_async_signals](function.pcntl-async-signals.md) | enable тепер допускає значення null. |
| | [pcntl_getpriority](function.pcntl-getpriority.md) | process_id тепер припускає значення null. |
| | [pcntl_setpriority](function.pcntl-setpriority.md) | process_id тепер припускає значення null. |
| | [pfsockopen](function.pfsockopen.md) | timeout тепер допускає значення null. |
| | [pg_client_encoding](function.pg-client-encoding.md) | connection тепер допускає значення null. |
| | [pg_close](function.pg-close.md) | connection тепер допускає значення null. |
| | [pg_dbname](function.pg-dbname.md) | connection тепер допускає значення null. |
| | [pg_end_copy](function.pg-end-copy.md) | connection тепер допускає значення null. |
| | [pg_host](function.pg-host.md) | connection тепер допускає значення null. |
| | [pg_last_error](function.pg-last-error.md) | connection тепер допускає значення null. |
| | [pg_lo_write](function.pg-lo-write.md) | length тепер допускає значення null. |
| | [pg_options](function.pg-options.md) | connection тепер допускає значення null. |
| | [pg_ping](function.pg-ping.md) | connection тепер допускає значення null. |
| | [pg_port](function.pg-port.md) | connection тепер допускає значення null. |
| | [pg_trace](function.pg-trace.md) | connection тепер допускає значення null. |
| | [pg_tty](function.pg-tty.md) | connection тепер допускає значення null. |
| | [pg_untrace](function.pg-untrace.md) | connection тепер допускає значення null. |
| | [pg_version](function.pg-version.md) | connection тепер допускає значення null. |
| | [phpversion](function.phpversion.md) | extension тепер допускає значення null. |
| | [readdir](function.readdir.md) | dir_handle тепер припускає значення null. |
| | [readline_info](function.readline-info.md) | var_name та value тепер допускають значення null. |
| | [readline_read_history](function.readline-read-history.md) | filename тепер допускає значення null. |
| | [readline_write_history](function.readline-write-history.md) | filename тепер допускає значення null. |
| | [rewinddir](function.rewinddir.md) | dir_handle тепер припускає значення null. |
| | [Round](function.round.md) | num більше не приймає внутрішні об'єкти, що підтримують числове перетворення. |
| | [sapi_windows_vt100_support](function.sapi-windows-vt100-support.md) | enable тепер допускає значення null. |
| | [scandir](function.scandir.md) | context тепер припускає значення null. |
| | [sem_acquire](function.sem-acquire.md) | Параметр semaphore тепер чекає на екземпляр SysvSemaphore; раніше очікували ресурс (resource). |
| | [sem_get](function.sem-get.md) | У разі успішного виконання функція повертає екземпляр SysvSemaphore; раніше повертався ресурс (resource). |
| | [sem_get](function.sem-get.md) | Тип auto_release змінено з цілого числа (int) на логічне значення (bool). |
| | [sem_release](function.sem-release.md) | Параметр semaphore тепер чекає на екземпляр SysvSemaphore; раніше очікували ресурс (resource). |
| | [sem_remove](function.sem-remove.md) | Параметр semaphore тепер чекає на екземпляр SysvSemaphore; раніше очікували ресурс (resource). |
| | [session_cache_expire](function.session-cache-expire.md) | value може набувати значення null. |
| | [session_cache_limiter](function.session-cache-limiter.md) | value може набувати значення null. |
| | [session_id](function.session-id.md) | id тепер може бути null. |
| | [session_module_name](function.session-module-name.md) | module тепер може бути null. |
| | [session_name](function.session-name.md) | module тепер може бути null. |
| | [session_save_path](function.session-save-path.md) | path тепер може бути null. |
| | [session_set_cookie_params](function.session-set-cookie-params.md) | path, domain, secure та httponly тепер можуть бути null. |
| | [set_error_handler](function.set-error-handler.md) | Параметр errcontext був видалений і більше не передається в функцію обробки помилок користувача. |
| | [shm_attach](function.shm-attach.md) | У разі успішного виконання функція повертає екземпляр SysvSharedMemory; раніше повертався ресурс (resource). |
| | [shm_attach](function.shm-attach.md) | size тепер припускає значення null. |
| | [shm_detach](function.shm-detach.md) | shm очікує примірник SysvSharedMemory; раніше очікували ресурс (resource). |
| | [shm_get_var](function.shm-get-var.md) | shm тепер чекає екземпляр SysvSharedMemory; раніше очікували ресурс (resource). |
| | [shm_has_var](function.shm-has-var.md) | shm тепер чекає екземпляр SysvSharedMemory; раніше очікували ресурс (resource). |
| | [shm_put_var](function.shm-put-var.md) | shm тепер чекає екземпляр SysvSharedMemory; раніше очікували ресурс (resource). |
| | [shm_remove](function.shm-remove.md) | shm тепер чекає екземпляр SysvSharedMemory; раніше очікували ресурс (resource). |
| | [shm_remove_var](function.shm-remove-var.md) | shm тепер чекає екземпляр SysvSharedMemory; раніше очікували ресурс (resource). |
| | [shmop_close](function.shmop-close.md) | Параметр shmop очікує екземпляр Shmop; раніше очікували ресурс (resource). |
| | [shmop_delete](function.shmop-delete.md) | Параметр shmop очікує екземпляр Shmop; раніше очікували ресурс (resource). |
| | [shmop_open](function.shmop-open.md) | У разі успішного виконання повертається екземпляр Shmop; раніше повертався ресурс (resource). |
| | [shmop_read](function.shmop-read.md) | Параметр shmop очікує екземпляр Shmop; раніше очікували ресурс (resource). |
| | [shmop_size](function.shmop-size.md) | Параметр shmop очікує екземпляр Shmop; раніше очікували ресурс (resource). |
| | [shmop_write](function.shmop-write.md) | До PHP 8.0.0 у разі помилки поверталося false. |
| | [shmop_write](function.shmop-write.md) | Параметр shmop очікує екземпляр Shmop; раніше очікували ресурс (resource). |
| | [socket_accept](function.socket-accept.md) | У разі успішного виконання, функція повертає екземпляр Socket; раніше повертався ресурс (resource). |
| | [socket_addrinfo_bind](function.socket-addrinfo-bind.md) | У разі успішного виконання, функція повертає екземпляр Socket; раніше повертався ресурс (resource). |
| | [socket_addrinfo_bind](function.socket-addrinfo-bind.md) | address тепер екземпляр класу AddressInfo; раніше був ресурсом (resource). |
| | [socket_addrinfo_connect](function.socket-addrinfo-connect.md) | У разі успішного виконання, функція повертає екземпляр Socket; раніше повертався ресурс (resource). |
| | [socket_addrinfo_connect](function.socket-addrinfo-connect.md) | address тепер екземпляр класу AddressInfo; раніше був ресурсом (resource). |
| | [socket_addrinfo_explain](function.socket-addrinfo-explain.md) | address тепер екземпляр класу AddressInfo; раніше був ресурсом (resource). |
| | [socket_addrinfo_lookup](function.socket-addrinfo-lookup.md) | У разі успішного виконання функція повертає масив екземплярів AddressInfo; раніше повертався ресурс (resource). |
| | [socket_addrinfo_lookup](function.socket-addrinfo-lookup.md) | Service тепер допускає значення null. |
| | [socket_bind](function.socket-bind.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_clear_error](function.socket-clear-error.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_clear_error](function.socket-clear-error.md) | socket тепер допускає значення null. |
| | [socket_close](function.socket-close.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_connect](function.socket-connect.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_connect](function.socket-connect.md) | port тепер допускає значення null. |
| | [socket_create](function.socket-create.md) | У разі успішного виконання, функція повертає екземпляр Socket; раніше повертався ресурс (resource). |
| | [socket_create_listen](function.socket-create-listen.md) | У разі успішного виконання, функція повертає екземпляр Socket; раніше повертався ресурс (resource). |
| | [socket_create_pair](function.socket-create-pair.md) | pair є посиланням на масив екземплярів Socket; раніше був посиланням масив ресурсів (resource). |
| | [socket_export_stream](function.socket-export-stream.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_get_option](function.socket-get-option.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_getpeername](function.socket-getpeername.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_getsockname](function.socket-getsockname.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_import_stream](function.socket-import-stream.md) | У разі успішного виконання, функція повертає екземпляр Socket; раніше повертався ресурс (resource). |
| | [socket_last_error](function.socket-last-error.md) | socket тепер допускає значення null. |
| | [socket_last_error](function.socket-last-error.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_listen](function.socket-listen.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_read](function.socket-read.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_recv](function.socket-recv.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_recvfrom](function.socket-recvfrom.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_recvmsg](function.socket-recvmsg.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_send](function.socket-send.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_sendmsg](function.socket-sendmsg.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_sendto](function.socket-sendto.md) | port тепер допускає значення null. |
| | [socket_sendto](function.socket-sendto.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_set_block](function.socket-set-block.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_set_nonblock](function.socket-set-nonblock.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_set_option](function.socket-set-option.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_shutdown](function.socket-shutdown.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_write](function.socket-write.md) | length тепер допускає значення null. |
| | [socket_write](function.socket-write.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_wsaprotocol_info_export](function.socket-wsaprotocol-info-export.md) | socket тепер екземпляр класу Socket; раніше був ресурсом (resource). |
| | [socket_wsaprotocol_info_import](function.socket-wsaprotocol-info-import.md) | У разі успішного виконання, функція повертає екземпляр Socket; раніше повертався ресурс (resource). |
| | [soundex](function.soundex.md) | До цієї версії при виклику функції з порожнім рядком поверталося false без особливих причин. |
| | [spl_autoload](function.spl-autoload.md) | file_extensions тепер припускає значення null. |
| | [spl_autoload_extensions](function.spl-autoload-extensions.md) | file_extensions тепер припускає значення null. |
| | [spl_autoload_register](function.spl-autoload-register.md) | callback тепер допускає значення null. |
| | [sprintf](function.sprintf.md) | Функція більше не повертає false у разі виникнення помилки. |
| | [str_word_count](function.str-word-count.md) | characters тепер допускає значення null. |
| | [strcspn](function.strcspn.md) | length тепер допускає значення null. |
| | [stream_context_create](function.stream-context-create.md) | Параметри options і params тепер допускають значення null. |
| | [stream_context_get_default](function.stream-context-get-default.md) | Параметр options тепер припускає значення null. |
| | [stream_copy_to_stream](function.stream-copy-to-stream.md) | Параметр length тепер припускає значення null. |
| | [stream_get_contents](function.stream-get-contents.md) | length тепер допускає значення null. |
| | [stream_socket_accept](function.stream-socket-accept.md) | timeout тепер допускає значення null. |
| | [stream_socket_client](function.stream-socket-client.md) | timeout та context тепер допускають значення null. |
| | [stream_socket_enable_crypto](function.stream-socket-enable-crypto.md) | session_stream тепер припускає значення null. |
| | [stream_socket_server](function.stream-socket-server.md) | Параметр context тепер припускає значення null. |
| | [strftime](function.strftime.md) | timestamp тепер допускає значення null. |
| | [strip_tags](function.strip-tags.md) | allowed_tags тепер припускає значення null. |
| | [Stripos](function.stripos.md) | Передача цілого числа (int) у needle більше не підтримується. |
| | [Stristr](function.stristr.md) | Передача цілого числа (int) у needle більше не підтримується. |
| | [strpos](function.strpos.md) | Передача цілого числа (int) у needle більше не підтримується. |
| | [strrchr](function.strrchr.md) | Передача цілого числа (int) у needle більше не підтримується. |
| | [strripos](function.strripos.md) | Передача цілого числа (int) у needle більше не підтримується. |
| | [strrpos](function.strrpos.md) | Передача цілого числа (int) у needle більше не підтримується. |
| | [strspn](function.strspn.md) | length тепер допускає значення null. |
| | [strstr](function.strstr.md) | Передача цілого числа (int) у needle більше не підтримується. |
| | [strtotime](function.strtotime.md) | BaseTimestamp тепер допускає значення null. |
| | [substr](function.substr.md) | Параметр length тепер припускає значення null. Якщо значення параметра length явно встановлено як null, функція повертає підрядок, що закінчується в кінці рядка; раніше повертався порожній рядок. |
| | [substr](function.substr.md) | Функція повертає порожній рядок, де раніше повертала false. |
| | [substr_compare](function.substr-compare.md) | length тепер допускає значення null. |
| | [substr_count](function.substr-count.md) | length тепер допускає значення null. |
| | [substr_replace](function.substr-replace.md) | length тепер допускає значення null. |
| | [touch](function.touch.md) | Параметр mtime та atime тепер допускають значення null. |
| | [uasort](function.uasort.md) | Якщо параметр callback очікує, що буде передано значення посилання, функція тепер видасть помилку рівня E_WARNING. |
| | [uksort](function.uksort.md) | Якщо параметр callback очікує, що буде передано значення посилання, функція тепер видасть помилку рівня E_WARNING. |
| | [umask](function.umask.md) | Параметр mask тепер припускає значення null. |
| | [unixtojd](function.unixtojd.md) | timestamp тепер допускає значення null. |
| | [usort](function.usort.md) | Якщо параметр callback очікує, що буде передано значення посилання, функція тепер видасть помилку рівня E_WARNING. |
| | [vsprintf](function.vsprintf.md) | Функція більше не повертає false у разі виникнення помилки. |
| | [xml_get_current_byte_index](function.xml-get-current-byte-index.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_get_current_column_number](function.xml-get-current-column-number.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_get_current_line_number](function.xml-get-current-line-number.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_get_error_code](function.xml-get-error-code.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_parse](function.xml-parse.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_parse_into_struct](function.xml-parse-into-struct.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_parser_create](function.xml-parser-create.md) | encoding тепер допускає значення null. |
| | [xml_parser_create](function.xml-parser-create.md) | Функція повертає тепер екземпляр XMLParser; раніше повертався ресурс (resource) або false у разі виникнення помилки. |
| | [xml_parser_create_ns](function.xml-parser-create-ns.md) | encoding тепер допускає значення null. |
| | [xml_parser_create_ns](function.xml-parser-create-ns.md) | Функція повертає тепер екземпляр XMLParser; раніше повертався ресурс (resource) або false у разі виникнення помилки. |
| | [xml_parser_free](function.xml-parser-free.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_parser_get_option](function.xml-parser-get-option.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_parser_set_option](function.xml-parser-set-option.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_set_character_data_handler](function.xml-set-character-data-handler.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_set_default_handler](function.xml-set-default-handler.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_set_element_handler](function.xml-set-element-handler.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_set_end_namespace_decl_handler](function.xml-set-end-namespace-decl-handler.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_set_external_entity_ref_handler](function.xml-set-external-entity-ref-handler.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_set_notation_decl_handler](function.xml-set-notation-decl-handler.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_set_object](function.xml-set-object.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_set_processing_instruction_handler](function.xml-set-processing-instruction-handler.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_set_start_namespace_decl_handler](function.xml-set-start-namespace-decl-handler.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [xml_set_unparsed_entity_decl_handler](function.xml-set-unparsed-entity-decl-handler.md) | Параметр parser очікує на екземпляр XMLParser; раніше очікували ресурс (resource). |
| | [zip_close](function.zip-close.md) | Функція застаріла на користь Object API дивіться ZipArchive::close. |
| | [zip_entry_close](function.zip-entry-close.md) | Функція застаріла на користь Object API. |
| | [zip_entry_compressedsize](function.zip-entry-compressedsize.md) | Функція застаріла на користь Object API дивіться ZipArchive::statIndex. |
| | [zip_entry_compressionmethod](function.zip-entry-compressionmethod.md) | Функція застаріла на користь Object API дивіться ZipArchive::statIndex. |
| | [zip_entry_filesize](function.zip-entry-filesize.md) | Функція застаріла на користь Object API дивіться ZipArchive::statIndex. |
| | [zip_entry_name](function.zip-entry-name.md) | Функція застаріла на користь Object API дивіться ZipArchive::statIndex. |
| | [zip_entry_open](function.zip-entry-open.md) | Функція застаріла на користь Object API. |
| | [zip_entry_read](function.zip-entry-read.md) | Функція застаріла на користь Object API дивіться ZipArchive::getFromIndex. |
| | [zip_open](function.zip-open.md) | Функція застаріла на користь Object API дивіться ZipArchive::open. |
| | [zip_read](function.zip-read.md) | Функція застаріла на користь Object API дивіться ZipArchive::statIndex. |
| | [GlobIterator::\_\_construct](globiterator.construct.md) | Тепер викидає ValueError, якщо параметр directory містить порожній рядок. Раніше викидався виняток RuntimeException. |
| | [IntlTimeZone::getIDForWindowsID](intltimezone.getidforwindowsid.md) | Параметр region тепер допускає значення null. |
| | [LimitIterator::\_\_construct](limititerator.construct.md) | Тепер викидає виняток ValueError, якщо зміщення offset виявиться меншим за 0; Раніше викидався виняток RuntimeException. |
| | [LimitIterator::\_\_construct](limititerator.construct.md) | Тепер викидає виняток ValueError, якщо зсув limit виявиться меншим за -1; Раніше викидався виняток RuntimeException. |
| | [Locale::getDisplayLanguage](locale.getdisplaylanguage.md) | displayLocale тепер допускає значення null. |
| | [Locale::getDisplayName](locale.getdisplayname.md) | displayLocale тепер допускає значення null. |
| | [Locale::getDisplayRegion](locale.getdisplayregion.md) | displayLocale тепер допускає значення null. |
| | [Locale::getDisplayScript](locale.getdisplayscript.md) | displayLocale тепер допускає значення null. |
| | [Locale::getDisplayVariant](locale.getdisplayvariant.md) | displayLocale тепер допускає значення null. |
| | [mysqli_result::fetch_object](mysqli-result.fetch-object.md) | constructor_args тепер приймає для конструкторів без параметрів; раніше викидався виняток. |
| | [mysqli_stmt::\_\_construct](mysqli-stmt.construct.md) | query тепер припускає значення null. |
| | [mysqli::begin_transaction](mysqli.begin-transaction.md) | name тепер припускає значення null. |
| | [mysqli::commit](mysqli.commit.md) | name тепер припускає значення null. |
| | [mysqli::rollback](mysqli.rollback.md) | name тепер припускає значення null. |
| | [NumberFormatter::create](numberformatter.create.md) | pattern тепер допускає значення null. |
| | [PDOStatement::fetchAll](pdostatement.fetchall.md) | Метод тепер завжди повертає масив (array), раніше у разі помилки могло повертатися false. |
| | [Phar::addFile](phar.addfile.md) | localName тепер допускає значення null. |
| | [Phar::buildFromIterator](phar.buildfromiterator.md) | BaseDirectory тепер допускає значення null. |
| | [Phar::compress](phar.compress.md) | extension тепер допускає значення null. |
| | [Phar::convertToData](phar.converttodata.md) | format, compression і extension тепер допускають значення null. |
| | [Phar::convertToExecutable](phar.converttoexecutable.md) | format, compression і localName тепер допускають значення null. |
| | [Phar::createDefaultStub](phar.createdefaultstub.md) | index та webIndex тепер допускають значення null. |
| | [Phar::decompress](phar.decompress.md) | extension тепер допускає значення null. |
| | [Phar::getMetadata](phar.getmetadata.md) | Доданий параметр unserializeOptions. |
| | [Phar::setDefaultStub](phar.setdefaultstub.md) | webIndex тепер допускає значення null. |
| | [Phar::setSignatureAlgorithm](phar.setsignaturealgorithm.md) | privateKey тепер допускає значення null. |
| | [Phar::webPhar](phar.webphar.md) | fileNotFoundScript, mimeTypes і rewrite тепер допускають значення null. |
| | [PharData::addFile](phardata.addfile.md) | localName тепер допускає значення null. |
| | [PharData::buildFromIterator](phardata.buildfromiterator.md) | BaseDirectory тепер допускає значення null. |
| | [PharData::compress](phardata.compress.md) | extension тепер допускає значення null. |
| | [PharData::convertToData](phardata.converttodata.md) | format, compression і extension тепер допускають значення null. |
| | [PharData::convertToExecutable](phardata.converttoexecutable.md) | format, compression і localName тепер допускають значення null. |
| | [PharData::decompress](phardata.decompress.md) | extension тепер допускає значення null. |
| | [PharData::setDefaultStub](phardata.setdefaultstub.md) | webIndex тепер допускає значення null. |
| | [PharData::setSignatureAlgorithm](phardata.setsignaturealgorithm.md) | privateKey тепер допускає значення null. |
| | [PharFileInfo::getMetadata](pharfileinfo.getmetadata.md) | Доданий параметр unserializeOptions. |
| | [PharFileInfo::isCompressed](pharfileinfo.iscompressed.md) | compression тепер допускає значення null. |
| | [RecursiveDirectoryIterator::\_\_construct](recursivedirectoryiterator.construct.md) | Тепер викидає ValueError, якщо параметр directory містить порожній рядок. Раніше викидався виняток RuntimeException. |
| | [RecursiveIteratorIterator::getSubIterator](recursiveiteratoriterator.getsubiterator.md) | level тепер припускає значення null. |
| | [ReflectionClass::getConstants](reflectionclass.getconstants.md) | Доданий параметр filter. |
| | [ReflectionClass::getReflectionConstants](reflectionclass.getreflectionconstants.md) | Доданий параметр filter. |
| | [ReflectionMethod::getClosure](reflectionmethod.getclosure.md) | object тепер припускає значення null. |
| | [ReflectionParameter::getDefaultValue](reflectionparameter.getdefaultvalue.md) | Метод тепер дозволяє отримати значення за замовчуванням параметрів вбудованих функцій і вбудованих методів класу. Раніше викидалося ReflectionException. |
| | [ReflectionParameter::getDefaultValueConstantName](reflectionparameter.getdefaultvalueconstantname.md) | Метод дозволяє отримувати стандартні імена для вбудованих функцій та вбудованих методів класу. Раніше викидалося ReflectionException. |
| | [ReflectionProperty::getValue](reflectionproperty.getvalue.md) | object тепер припускає значення null. |
| | [ReflectionProperty::isInitialized](reflectionproperty.isinitialized.md) | object тепер припускає значення null. |
| | [SimpleXMLElement::asXML](simplexmlelement.asxml.md) | filename тепер допускає значення null. |
| | [SoapClient::\_\_doRequest](soapclient.dorequest.md) | Тип oneWay тепер bool; раніше він був цілим числом (int). |
| | [SoapClient::\_\_setCookie](soapclient.setcookie.md) | value тепер допускає значення null. |
| | [SoapServer::handle](soapserver.handle.md) | request тепер допускає значення null. |
| | [SplFileInfo::getFileInfo](splfileinfo.getfileinfo.md) | class тепер припускає значення null. |
| | [SplFileInfo::getPathInfo](splfileinfo.getpathinfo.md) | class тепер припускає значення null. |
| | [SplFileInfo::openFile](splfileinfo.openfile.md) | context тепер припускає значення null. |
| | [SplFixedArray::\_\_construct](splfixedarray.construct.md) | Тепер викидає виняток ValueError, якщо параметр size негативний; раніше викидався виняток InvalidArgumentException. |
| | [tidy::\_\_construct](tidy.construct.md) | filename, config, encoding і useIncludePath тепер допускають значення null. |
| | [tidy::parseFile](tidy.parsefile.md) | config та encoding тепер допускають значення null. |
| | [tidy::parseString](tidy.parsestring.md) | config та encoding тепер допускають значення null. |
| | [tidy::repairFile](tidy.repairfile.md) | config та encoding тепер допускають значення null. |
| | [tidy::repairFile](tidy.repairfile.md) | tidy::repairFile тепер статичний метод. |
| | [tidy::repairString](tidy.repairstring.md) | config та encoding тепер допускають значення null. |
| | [tidy::repairString](tidy.repairstring.md) | Функція більше не приймає useIncludePath. |
| | [tidy::repairString](tidy.repairstring.md) | tidy::repairString тепер статичний метод. |
| | [XMLReader::getAttribute](xmlreader.getattribute.md) | Функція не може повертати більше. |
| | [XMLReader::getAttributeNs](xmlreader.getattributens.md) | Функція не може повертати більше. |
| | [XMLReader::lookupNamespace](xmlreader.lookupnamespace.md) | Функція не може повертати більше. |
| | [XMLReader::next](xmlreader.next.md) | name тепер припускає значення null. |
| | [XMLReader::open](xmlreader.open.md) | XMLReader::open тепер оголошений як статичний метод, але може бути викликаний в екземплярі XMLReader. |
| | [XMLReader::XML](xmlreader.xml.md) | XMLReader::XML тепер оголошений як статичний метод, але може бути викликаний в екземплярі XMLReader. |
| | [XMLWriter::endAttribute](xmlwriter.endattribute.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::endCdata](xmlwriter.endcdata.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::endComment](xmlwriter.endcomment.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::endDocument](xmlwriter.enddocument.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::endDtd](xmlwriter.enddtd.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::endDtdAttlist](xmlwriter.enddtdattlist.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::endDtdElement](xmlwriter.enddtdelement.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::endDtdEntity](xmlwriter.enddtdentity.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::endElement](xmlwriter.endelement.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::endPi](xmlwriter.endpi.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::flush](xmlwriter.flush.md) | Функція не може повертати більше. |
| | [XMLWriter::flush](xmlwriter.flush.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::fullEndElement](xmlwriter.fullendelement.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::openMemory](xmlwriter.openmemory.md) | Функція тепер повертає екземпляр XMLWriter у разі успішного виконання. Раніше у разі повертався ресурс (resource). |
| | [XMLWriter::openUri](xmlwriter.openuri.md) | Функція тепер повертає екземпляр XMLWriter у разі успішного виконання. Раніше у разі повертався ресурс (resource). |
| | [XMLWriter::outputMemory](xmlwriter.outputmemory.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::setIndent](xmlwriter.setindent.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::setIndentString](xmlwriter.setindentstring.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::startAttribute](xmlwriter.startattribute.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::startAttributeNs](xmlwriter.startattributens.md) | prefix тепер припускає значення null. |
| | [XMLWriter::startAttributeNs](xmlwriter.startattributens.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::startCdata](xmlwriter.startcdata.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::startComment](xmlwriter.startcomment.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::startDocument](xmlwriter.startdocument.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::startDtd](xmlwriter.startdtd.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::startDtdAttlist](xmlwriter.startdtdattlist.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::startDtdElement](xmlwriter.startdtdelement.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::startDtdEntity](xmlwriter.startdtdentity.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::startElement](xmlwriter.startelement.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::startElementNs](xmlwriter.startelementns.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::startPi](xmlwriter.startpi.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::text](xmlwriter.text.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::writeAttribute](xmlwriter.writeattribute.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::writeAttributeNs](xmlwriter.writeattributens.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::writeCdata](xmlwriter.writecdata.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::writeComment](xmlwriter.writecomment.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::writeDtd](xmlwriter.writedtd.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::writeDtdAttlist](xmlwriter.writedtdattlist.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::writeDtdElement](xmlwriter.writedtdelement.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::writeDtdEntity](xmlwriter.writedtdentity.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::writeDtdEntity](xmlwriter.writedtdentity.md) | publicId, systemId і notationData тепер допускають значення null. |
| | [XMLWriter::writeElement](xmlwriter.writeelement.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::writeElementNs](xmlwriter.writeelementns.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::writePi](xmlwriter.writepi.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [XMLWriter::writeRaw](xmlwriter.writeraw.md) | У параметрі writer очікується екземпляр XMLWriter; раніше очікували ресурс (resource). |
| | [ZipArchive::setEncryptionIndex](ziparchive.setencryptionindex.md) | password тепер допускає значення null. |
| | [ZipArchive::setEncryptionName](ziparchive.setencryptionname.md) | password тепер допускає значення null. |
| 7.4.4 | [proc_open](function.proc-open.md) | Додана опція create_new_console до параметра options. |
| 7.4.0 | [array_merge](function.array-merge.md) | Функцію тепер можна викликати без будь-яких параметрів. Раніше був потрібен хоча б один параметр. |
| | [array_merge_recursive](function.array-merge-recursive.md) | Функцію тепер можна викликати без будь-яких параметрів. Раніше був потрібен хоча б один параметр. |
| | [base_convert](function.base-convert.md) | Передача некоректних символів видаватиме повідомлення про старіння. Результат буде обчислено так, якби некоректні символи не існували. |
| | [bindec](function.bindec.md) | Передача некоректних символів видаватиме повідомлення про старіння. Результат буде обчислено так, якби некоректні символи не існували. |
| | [chr](function.chr.md) | Функція більше не набуває непідтримуваних значень codepoint і перетворює їх на 0. |
| | [curl_version](function.curl-version.md) | Необов'язковий параметр age оголошений застарілим; якщо передано значення, то воно ігнорується. |
| | [fgetcsv](function.fgetcsv.md) | Тепер параметр escape може приймати порожній рядок для вимкнення пропрієтарного механізму екранування. |
| | [fputcsv](function.fputcsv.md) | Тепер параметр escape може приймати порожній рядок для вимкнення пропрієтарного механізму екранування. |
| | [get_declared_classes](function.get-declared-classes.md) | Раніше get_declared_classes завжди повертала батьківські класи перед дочірніми класами. Це не так. Для повертається get_declared_classes конкретний порядок не гарантується. |
| | [get_magic_quotes_gpc](function.get-magic-quotes-gpc.md) | Функція оголошена застарілою. |
| | [get_magic_quotes_runtime](function.get-magic-quotes-runtime.md) | Функція оголошена застарілою. |
| | [gzread](function.gzread.md) | У разі помилки повертається false; раніше, повертався 0. |
| | [gzwrite](function.gzwrite.md) | У разі помилки функція повертає false. раніше повертався 0. |
| | [hash_algos](function.hash-algos.md) | Додано підтримку для crc32c. |
| | [hexdec](function.hexdec.md) | Передача некоректних символів видаватиме повідомлення про старіння. Результат буде обчислено так, якби некоректні символи не існували. |
| | [idn_to_ascii](function.idn-to-ascii.md) | Тепер значення за замовчуванням variant змінено на INTL_IDNA_VARIANT_UTS46 замість застарілої константи INTL_IDNA_VARIANT_2003. |
| | [idn_to_utf8](function.idn-to-utf8.md) | Тепер значення за замовчуванням variant змінено на INTL_IDNA_VARIANT_UTS46 замість застарілої константи INTL_IDNA_VARIANT_2003. |
| | [imagecropauto](function.imagecropauto.md) | Поведінка imagecropauto() в комплекті libgd синхронізована із системним libgd: IMG_CROP_DEFAULT більше не використовує IMG_CROP_SIDES, і для обрізки порога тепер використовується той же алгоритм, що й системним libgd. |
| | [imagecropauto](function.imagecropauto.md) | Значення за промовчанням було змінено на IMG_CROP_AUTO. Раніше значення за промовчанням -1, що відповідає IMG_CROP_DEFAULT, але передача -1 тепер застаріла. |
| | [imagefilter](function.imagefilter.md) | Додано підтримку розсіювання (IMG_FILTER_SCATTER). |
| | [implode](function.implode.md) | Передача separator після array (тобто використання недокументованого порядку параметрів) застаріла. |
| | [ldap_control_paged_result](function.ldap-control-paged-result.md) | Функція оголошена застарілою. |
| | [ldap_control_paged_result_response](function.ldap-control-paged-result-response.md) | Функція оголошена застарілою. |
| | [money_format](function.money-format.md) | Функція застаріла. Замість неї використовуйте NumberFormatter::formatCurrency. |
| | [octdec](function.octdec.md) | Передача некоректних символів видаватиме повідомлення про старіння. Результат буде обчислено так, якби некоректні символи не існували. |
| | [password_hash](function.password-hash.md) | Модуль sodium забезпечує альтернативну реалізацію паролів Argon2. |
| | [password_hash](function.password-hash.md) | Параметр algo очікує рядок (string), але все ще приймає число (int) для зворотної сумісності. |
| | [password_needs_rehash](function.password-needs-rehash.md) | Параметр algo очікує рядок (string), але все ще приймає число (int) для зворотної сумісності. |
| | [preg_replace_callback](function.preg-replace-callback.md) | Доданий параметр flags. |
| | [preg_replace_callback_array](function.preg-replace-callback-array.md) | Доданий параметр flags. |
| | [proc_open](function.proc-open.md) | proc_open тепер приймає масив (array) в command. |
| | [proc_open](function.proc-open.md) | Додана опція create_process_group до параметра options. |
| | [stat](function.stat.md) | У Windows номер пристрою тепер є серійним номером тома, що містить файл та номер inode - це ідентифікатор, пов'язаний із файлом. |
| | [stat](function.stat.md) | Статистика символьних посилань size, atime, mtime та ctime завжди відповідає статистиці цільового об'єкта. Це було раніше не притаманно NTS-складання на Windows. |
| | [str_getcsv](function.str-getcsv.md) | Тепер порожній параметр escape інтерпретуватиметься як вимога відключення пропрієтарного механізму екранування. Раніше порожній рядок позначав використання символу екранування за промовчанням. |
| | [strip_tags](function.strip-tags.md) | allowed_tags тепер альтернативно сприймає масив (array). |
| | [Locale::lookup](locale.lookup.md) | defaultLocale тепер допускає значення null. |
| | [SplFileObject::fgetcsv](splfileobject.fgetcsv.md) | Тепер параметр escape може приймати порожній рядок для вимкнення пропрієтарного механізму екранування. |
| | [SplFileObject::fputcsv](splfileobject.fputcsv.md) | Тепер параметр escape може приймати порожній рядок для вимкнення пропрієтарного механізму екранування. |
| | [SplFileObject::fwrite](splfileobject.fwrite.md) | Функція тепер повертає false замість нуля у разі виникнення помилки. |
| | [SplFileObject::getCsvControl](splfileobject.getcsvcontrol.md) | Як символ екранування можна використовувати порожній рядок. |
| | [SplFileObject::setCsvControl](splfileobject.setcsvcontrol.md) | Тепер параметр escape може приймати порожній рядок для вимкнення пропрієтарного механізму екранування. |
| | [SQLite3Stmt::bindParam](sqlite3stmt.bindparam.md) | Параметр param тепер підтримує нотацію @param. |
| | [SQLite3Stmt::bindValue](sqlite3stmt.bindvalue.md) | Параметр param тепер підтримує нотацію @param. |
| 7.3.24, 7.4.12 | [jdtounix](function.jdtounix.md) | Збільшено верхню межу julian_day. Раніше він був 2465342 незалежно від архітектури. |
| | [tidyNode::isHtml](tidynode.ishtml.md) | Виправлено, тепер функція поводиться розумно. Раніше майже будь-який вузол вважався вузлом HTML. |
| 7.3.15, 7.4.3 | [curl_setopt](function.curl-setopt.md) | Додано CURLOPT_HTTP09_ALLOWED. |
| 7.3.14, 7.4.2 | [dba_open](function.dba-open.md) | Драйвер lmdb тепер підтримує додатковий параметр $mapsize. |
| 7.3.0 | [DateTimeImmutable::createFromFormat](datetimeimmutable.createfromformat.md) | Доданий специфікатор v параметрі format. |
| | [apache_request_headers](function.apache-request-headers.md) | Ця функція стала доступною у SAPI FPM. |
| | [array_push](function.array-push.md) | Тепер ця функція може бути викликана одним параметром. Раніше потрібно було мінімум два параметри. |
| | [array_unshift](function.array-unshift.md) | Тепер ця функція може бути викликана одним параметром. Раніше потрібно було мінімум два параметри. |
| | [assert](function.assert.md) | Оголошення функції з іменем assert() усередині простору імен оголошено застарілим. Таке оголошення видає помилку рівня E_DEPRECATED. |
| | [bcmul](function.bcmul.md) | Тепер bcmul повертає числа із заданою точністю. Раніше завершальні нулі в дробовій частині числа відкидалися. |
| | [bcpow](function.bcpow.md) | Тепер bcpow повертає числа із заданою точністю. Раніше завершальні нулі в дробовій частині числа відкидалися. |
| | [bcscale](function.bcscale.md) | bcscale тепер можна використовувати для отримання поточного масштабу; при встановленні нового значення поверне старе значення масштабу. Раніше scale був обов'язковим, і bcscale завжди повертав true. |
| | [Compact](function.compact.md) | compact тепер видає помилку рівня E_NOTICE, якщо цей рядок пов'язаний з віддаленою змінною. Раніше такі рядки пропускалися без жодного повідомлення. |
| | [curl_getinfo](function.curl-getinfo.md) | Добавлены CURLINFO_CONTENT_LENGTH_DOWNLOAD_T, CURLINFO_CONTENT_LENGTH_UPLOAD_T, CURLINFO_HTTP_VERSION, CURLINFO_PROTOCOL, CURLINFO_PROXY_SSL_VERIFYRESULT, CURLINFO_SCHEME, CURLINFO_SIZE_DOWNLOAD_T, CURLINFO_SIZE_UPLOAD_T, CURLINFO_SPEED_DOWNLOAD_T, CURLINFO_SPEED_UPLOAD_T, CURLINFO_APPCONNECT_TIME_T, CURLINFO_CONNECT_TIME_T, CURLINFO_FILETIME_T, CURLINFO_NAMELOOKUP_TIME_T, CURLINFO_PRETRANSFER_TIME_T, CURLINFO_REDIRECT_TIME_T, CURLINFO_STARTTRANSFER_TIME_T, CURLINFO_TOTAL_TIME_T. |
| | [curl_setopt](function.curl-setopt.md) | Введены CURLOPT_ABSTRACT_UNIX_SOCKET, CURLOPT_KEEP_SENDING_ON_ERROR, CURLOPT_PRE_PROXY, CURLOPT_PROXY_CAINFO, CURLOPT_PROXY_CAPATH, CURLOPT_PROXY_CRLFILE, CURLOPT_PROXY_KEYPASSWD, CURLOPT_PROXY_PINNEDPUBLICKEY, CURLOPT_PROXY_SSLCERT, CURLOPT_PROXY_SSLCERTTYPE, CURLOPT_PROXY_SSL_CIPHER_LIST, CURLOPT_PROXY_SSLKEY, CURLOPT_PROXY_SSLKEYTYPE, CURLOPT_PROXY_SSL_OPTIONS, CURLOPT_PROXY_SSL_VERIFYHOST, CURLOPT_PROXY_SSL_VERIFYPEER, CURLOPT_PROXY_SSLVERSION, CURLOPT_PROXY_TLSAUTH_PASSWORD, CURLOPT_PROXY_TLSAUTH_TYPE, CURLOPT_PROXY_TLSAUTH_USERNAME, CURLOPT_SOCKS5_AUTH, CURLOPT_SUPPRESS_CONNECT_HEADERS, CURLOPT_DISALLOW_USERNAME_IN_URL, CURLOPT_DNS_SHUFFLE_ADDRESSES, CURLOPT_HAPPY_EYEBALLS_TIMEOUT_MS , CURLOPT_HAPROXYPROTOCOL, CURLOPT_PROXY_TLS13_CIPHERS, CURLOPT_SSH_COMPRESSION, CURLOPT_TIMEVALUE_LARGE та CURLOPT_TLS13_CIPHERS. |
| | [define](function.define.md) | Параметр case_insensitive оголошений застарілим і буде видалено у версії 8.0.0. |
| | [ftp_fget](function.ftp-fget.md) | Тепер параметр mode є опціональним. Раніше він був обов'язковим. |
| | [ftp_fput](function.ftp-fput.md) | Тепер параметр mode є опціональним. Раніше він був обов'язковим. |
| | [ftp_get](function.ftp-get.md) | Тепер параметр mode є опціональним. Раніше він був обов'язковим. |
| | [ftp_nb_fget](function.ftp-nb-fget.md) | Тепер параметр mode є опціональним. Раніше він був обов'язковим. |
| | [ftp_nb_fput](function.ftp-nb-fput.md) | Тепер параметр mode є опціональним. Раніше він був обов'язковим. |
| | [ftp_nb_get](function.ftp-nb-get.md) | Тепер параметр mode є опціональним. Раніше він був обов'язковим. |
| | [ftp_nb_put](function.ftp-nb-put.md) | Тепер параметр mode є опціональним. Раніше він був обов'язковим. |
| | [ftp_put](function.ftp-put.md) | Тепер параметр mode є опціональним. Раніше він був обов'язковим. |
| | [getallheaders](function.getallheaders.md) | Ця функція стала доступною у SAPI FPM. |
| | [imagecreatefromstring](function.imagecreatefromstring.md) | Додана підтримка WEBP (якщо підтримується використовуваною libgd). |
| | [is_countable](function.is-countable.md) | Додано функцію is_countable. |
| | [json_decode](function.json-decode.md) | Додано константу JSON_THROW_ON_ERROR для параметра flags. |
| | [json_encode](function.json-encode.md) | Додано константу JSON_THROW_ON_ERROR для параметра flags. |
| | [list](function.list.md) | Додано підтримку присвоєння за посиланнями при деструктуруванні масиву. |
| | [mb_convert_case](function.mb-convert-case.md) | Додана підтримка MB_CASE_FOLD, MB_CASE_UPPER_SIMPLE, MB_CASE_LOWER_SIMPLE, MB_CASE_TITLE_SIMPLE та MB_CASE_FOLD_SIMPLE у параметрі mode. |
| | [password_hash](function.password-hash.md) | Додано підтримку алгоритму хешування паролів Argon2id за допомогою PASSWORD_ARGON2ID. |
| | [preg_quote](function.preg-quote.md) | Символ \# тепер екранується |
| | [session_get_cookie_params](function.session-get-cookie-params.md) | Доданий елемент "samesite" у масив, що повертається. |
| | [session_set_cookie_params](function.session-set-cookie-params.md) | Додано альтернативний підпис, який підтримує масив опцій lifetime_or_options. Цей підпис також підтримує налаштування cookie-атрибута SameSite. |
| | [setcookie](function.setcookie.md) | Доданий альтернативний підпис, що підтримує масив опцій options. Цей підпис також підтримує налаштування cookie-атрибута SameSite. |
| | [setrawcookie](function.setrawcookie.md) | Доданий альтернативний підпис, що підтримує масив опцій options. Цей підпис також підтримує налаштування cookie-атрибута SameSite. |
| | [Stripos](function.stripos.md) | Передача цілого числа (int) у needle оголошена застарілою. |
| | [Stristr](function.stristr.md) | Передача цілого числа (int) у needle оголошена застарілою. |
| | [strpos](function.strpos.md) | Передача цілого числа (int) у needle оголошена застарілою. |
| | [strrchr](function.strrchr.md) | Передача цілого числа (int) у needle оголошена застарілою. |
| | [strripos](function.strripos.md) | Передача цілого числа (int) у needle оголошена застарілою. |
| | [strrpos](function.strrpos.md) | Передача цілого числа (int) у needle оголошена застарілою. |
| | [strstr](function.strstr.md) | Передача цілого числа (int) у needle оголошена застарілою. |
| | [unlink](function.unlink.md) | У Windows тепер можна видалити файли функцією unlink за допомогою дескрипторів, хоча раніше це не вдавалося. Тим не менш, все ще неможливо створити віддалений файл, поки всі дескриптори до нього не будуть закриті. |
| | [var_export](function.var-export.md) | Тепер об'єкти stdClass експортуються як масиву, приведеного до об'єкта (масив (object) array( ... )), замість використання неіснуючого методу stdClass::\_\_setState. Практичний ефект полягає в тому, що тепер stdClass можна експортувати, і отриманий код буде працювати навіть у попередніх версіях PHP. |
| | [xml_set_external_entity_ref_handler](function.xml-set-external-entity-ref-handler.md) | Значення handler, що повертається, більше не ігнорується, якщо модуль був зібраний з бібліотекою libxml. Раніше значення, що повертається, ігнорувалося, а розбір ніколи не зупинявся. |
| 7.3 | [ldap_add](function.ldap-add.md) | Додано підтримку параметра controls |
| | [ldap_compare](function.ldap-compare.md) | Додано підтримку параметра controls |
| | [ldap_delete](function.ldap-delete.md) | Додано підтримку параметра controls |
| | [ldap_exop](function.ldap-exop.md) | Додана підтримка serverctrls |
| | [ldap_exop_passwd](function.ldap-exop-passwd.md) | Додано підтримку параметра controls |
| | [ldap_list](function.ldap-list.md) | Додано підтримку параметра controls |
| | [ldap_mod_add](function.ldap-mod-add.md) | Додано підтримку параметра controls |
| | [ldap_mod_del](function.ldap-mod-del.md) | Додано підтримку параметра controls |
| | [ldap_mod_replace](function.ldap-mod-replace.md) | Додано підтримку параметра controls |
| | [ldap_modify_batch](function.ldap-modify-batch.md) | Додано підтримку параметра controls |
| | [ldap_mod_add_ext](function.ldap-mod_add-ext.md) | Додано підтримку параметра controls |
| | [ldap_mod_del_ext](function.ldap-mod_del-ext.md) | Додано підтримку параметра controls |
| | [ldap_mod_replace_ext](function.ldap-mod_replace-ext.md) | Додано підтримку параметра controls |
| | [ldap_parse_result](function.ldap-parse-result.md) | Додано підтримку параметра controls |
| | [ldap_read](function.ldap-read.md) | Додано підтримку параметра controls |
| | [ldap_rename](function.ldap-rename.md) | Додано підтримку параметра controls |
| | [ldap_rename_ext](function.ldap-rename-ext.md) | Додано підтримку параметра controls |
| | [ldap_search](function.ldap-search.md) | Додано підтримку параметра controls |
| 7.2.19, 7.3.6, 7.4.0 | [DatePeriod::\_\_construct](dateperiod.construct.md) | recurrences має бути більше 0. |
| 7.2.19, 7.3.6 | [SplFileObject::\_\_toString](splfileobject.tostring.md) | Змінено псевдонім з SplFileObject::current на SplFileObject::fgets. |
| 7.2.18, 7.3.5 | [substr_compare](function.substr-compare.md) | offset тепер може бути рівним haystack. |
| 7.2.0 | [array_unique](function.array-unique.md) | Якщо flags дорівнює SORT_STRING, масив array раніше копіювався, а не унікальні елементи видалялися (зберігаючи значення цифрових індексів), але тепер створюється новий масив шляхом додавання унікальних елементів. Це може призвести до різних числових індексів. |
| | [assert](function.assert.md) | Використання рядків у параметрі assertion оголошено застарілим і призводитиме до помилок рівня E_DEPRECATED у випадку, коли і assert.active та zend.assertions встановлені у значення 1. |
| | [bcmod](function.bcmod.md) | num1 і num2 більше не обрізаються до цілого, тому тепер поведінка bcmod відповідає fmod, а не оператору %. |
| | [bcmod](function.bcmod.md) | Доданий параметр scale. |
| | [count](function.count.md) count тепер видаватиме попередження про неприпустимі обчислювані типи, передані в параметр value. |
| | [date_parse](function.date-parse.md) | Елемент масиву, що повертається, з ключем zone тепер містить секунди, а не хвилини. Крім того, знак інвертовано. Тобто. раніше був –120, а тепер 7200. |
| | [date_parse_from_format](function.date-parse-from-format.md) | Елемент zone масиву, що повертається, відображає тепер секунди замість хвилин, а його знак інвертується. Наприклад, -120 тепер буде 7200. |
| | [date_sun_info](function.date-sun-info.md) | Розрахунок був виправлений з урахуванням місцевої опівночі замість місцевого полудня, що дещо змінює результати. |
| | [exif_read_data](function.exif-read-data.md) | Додано підтримку наступних форматів EXIF: Samsung DJI Panasonic Sony Pentax Minolta Sigma/Foveon AGFA |
| | [exif_read_data](function.exif-read-data.md) | Параметр file перейменований на stream і може приймати як локальний шлях до файлу, так і потоковий ресурс. |
| | [exif_thumbnail](function.exif-thumbnail.md) | Параметр file перейменований на stream і може приймати як локальний шлях до файлу, так і потоковий ресурс. |
| | [get_class](function.get-class.md) | До цієї версії значенням за замовчуванням для object було null з тим самим ефектом, як і відсутність передачі значення. Тепер null було видалено як значення за замовчуванням для object і більше не є допустимим значенням. |
| | [gettype](function.gettype.md) | Для закритих ресурсів повертається 'resource (closed)'. Раніше для закритих ресурсів поверталося 'unknown type'. |
| | [hash_copy](function.hash-copy.md) | Приймає та повертає HashContext, а не ресурс. |
| | [hash_final](function.hash-final.md) | Приймає HashContext, а не ресурс. |
| | [hash_hmac](function.hash-hmac.md) | Заборонено використання некриптографічних хеш-функцій (adler32, crc32, crc32b, fnv132, fnv1a32, fnv164, fnv1a64, joaat). |
| | [hash_hmac_file](function.hash-hmac-file.md) | Заборонено використання некриптографічних хеш-функцій (adler32, crc32, crc32b, fnv132, fnv1a32, fnv164, fnv1a64, joaat). |
| | [hash_init](function.hash-init.md) | Заборонено використання некриптографічних хеш-функцій (adler32, crc32, crc32b, fnv132, fnv1a32, fnv164, fnv1a64, joaat) з константою HASH_HMAC. |
| | [hash_init](function.hash-init.md) | Повертає HashContext, а не ресурс. |
| | [hash_pbkdf2](function.hash-pbkdf2.md) | Заборонено використання некриптографічних функцій (adler32, crc32, crc32b, fnv132, fnv1a32, fnv164, fnv1a64, joaat). |
| | [hash_update](function.hash-update.md) | Приймає HashContext, а не ресурс. |
| | [hash_update_file](function.hash-update-file.md) | Приймає HashContext, а не ресурс. |
| | [hash_update_stream](function.hash-update-stream.md) | Приймає HashContext, а не ресурс. |
| | [idn_to_ascii](function.idn-to-ascii.md) | INTL_IDNA_VARIANT_2003 оголошена застарілою, замість неї використовуйте INTL_IDNA_VARIANT_UTS46. |
| | [idn_to_utf8](function.idn-to-utf8.md) | INTL_IDNA_VARIANT_2003 оголошена застарілою, замість неї використовуйте INTL_IDNA_VARIANT_UTS46. |
| | [imageantialias](function.imageantialias.md) | Функція imageantialias доступна без обмежень. Раніше вона була доступна тільки якщо PHP був зібраний з використанням бібліотеки GD, що йде з ним в комплекті. |
| | [imagegd](function.imagegd.md) | Тепер imagegd дозволяє зберігати зображення "truecolor". Раніше вони неявно перетворювалися на палітру. |
| | [imagelayereffect](function.imagelayereffect.md) | Додана IMG_EFFECT_MULTIPLY (вимагає системну бібліотеку libgd \>u003d 2.1.1 або libgd, що йде в комплекті з PHP). |
| | [imagetypes](function.imagetypes.md) | Додано константу IMG_BMP. |
| | [is_object](function.is-object.md) | Тепер is_object повертає true для десеріалізованих об'єктів, які не мають оголошення класу (клас \_\_PHP_Incomplete_Class). Раніше поверталося false. |
| | [json_decode](function.json-decode.md) | Додані константи JSON_INVALID_UTF8_IGNORE та JSON_INVALID_UTF8_SUBSTITUTE для параметра flags. |
| | [json_decode](function.json-decode.md) | associative тепер nullable. |
| | [json_encode](function.json-encode.md) | Додані константи JSON_INVALID_UTF8_IGNORE та JSON_INVALID_UTF8_SUBSTITUTE для параметра flags. |
| | [mail](function.mail.md) | Параметр additional_headers може набувати значень типу масив. |
| | [mb_check_encoding](function.mb-check-encoding.md) | Функція тепер приймає масив (array) в value. Раніше підтримувалися лише рядки (string). |
| | [mb_convert_encoding](function.mb-convert-encoding.md) | Функція тепер приймає масив (array) в string. Раніше підтримувалися лише рядки (string). |
| | [mb_parse_str](function.mb-parse-str.md) | Виклик функції mb_parse_str без другого параметра оголошено застарілим. |
| | [mb_send_mail](function.mb-send-mail.md) | Тепер у параметр additional_headers можна передавати масив. |
| | [mt_rand](function.mt-rand.md) | Для mt_rand здійснено виправлення бага зміщення за модулем. Це означає, що послідовності згенеровані з конкретним початковим значенням можуть відрізнятися від згенерованих PHP 7.1 для 64-бітних машин. |
| | [number_format](function.number-format.md) | number_format була змінена, щоб не повертати -0, раніше -0 могло бути повернено у випадках, коли num -0.01. |
| | [openssl_pkcs7_verify](function.openssl-pkcs7-verify.md) | Доданий параметр output_filename. |
| | [pack](function.pack.md) | Типи float і double підтримують як зворотний, і прямий порядок передачі байтів. |
| | [parse_str](function.parse-str.md) | Використання parse_str без другого параметра викликатиме помилку рівня E_DEPRECATED. |
| | [password_hash](function.password-hash.md) | Додано підтримку хешуючого алгоритму Argon2i за допомогою PASSWORD_ARGON2I. |
| | [preg_match](function.preg-match.md) | Тепер константа PREG_UNMATCHED_AS_NULL підтримується для параметра $flags. |
| | [preg_match_all](function.preg-match-all.md) | Тепер константа PREG_UNMATCHED_AS_NULL підтримується для параметра $flags. |
| | [preg_quote](function.preg-quote.md) | delimiter тепер допускає значення null. |
| | [proc_nice](function.proc-nice.md) | Ця функція стала доступною у Windows. |
| | [rand](function.rand.md) | Для rand здійснено виправлення бага зміщення за модулем. Це означає, що послідовності згенеровані з конкретним початковим значенням можуть відрізнятися від згенерованих PHP 7.1 для 64-бітних машин. |
| | [read_exif_data](function.read-exif-data.md) | Цей псевдонім було оголошено застарілим. |
| | [session_abort](function.session-abort.md) | Тепер тип цієї функції bool, що повертається. Раніше тип void. |
| | [session_module_name](function.session-module-name.md) | Заборонено встановлювати ім'я модуля на значення "user". Раніше це ігнорувалося. |
| | [session_name](function.session-name.md) | session_name перевіряє статус сесії, раніше вона перевіряла лише статус cookie. Тому стара версія session_name дозволяла викликати session_name після session_start, що могло призвести до збою PHP та неправильної поведінки. |
| | [session_reset](function.session-reset.md) | Тепер тип цієї функції bool, що повертається. Раніше тип void. |
| | [session_set_cookie_params](function.session-set-cookie-params.md) | Повертає true у разі успішного виконання або false у разі виникнення помилки. Раніше повертала тип void. |
| | [session_unset](function.session-unset.md) | Тепер тип цієї функції bool, що повертається. Раніше тип void. |
| | [session_write_close](function.session-write-close.md) | Тепер тип цієї функції bool, що повертається. Раніше тип void. |
| | [set_error_handler](function.set-error-handler.md) | Параметр errcontext оголошений застарілим. Тепер при його використанні буде викликатись помилка рівня E_DEPRECATED. |
| | [unpack](function.unpack.md) | Типи float і double підтримують як зворотний, і прямий порядок передачі байтів. |
| | [utf8_decode](function.utf8-decode.md) | Функцію було перенесено з модуля XML в ядро PHP. У попередніх версіях вона була доступна лише за встановленого модуля XML. |
| | [utf8_encode](function.utf8-encode.md) | Функцію було перенесено з модуля XML в ядро PHP. У попередніх версіях вона була доступна лише за встановленого модуля XML. |
| | [PDOStatement::debugDumpParams](pdostatement.debugdumpparams.md) | PDOStatement::debugDumpParams тепер повертає SQL, відправлений до бази даних, у тому числі повний необроблений запит (включаючи замінені параметри з їх пов'язаними значеннями). Зверніть увагу, що це буде працювати тільки при включеній емуляції запитів, що готуються. |
| | [ReflectionClass::getMethods](reflectionclass.getmethods.md) | filter тепер припускає значення null. |
| | [ReflectionClass::getProperties](reflectionclass.getproperties.md) | filter тепер припускає значення null. |
| | [SQLite3::openBlob](sqlite3.openblob.md) | Додано параметр flags, що дозволяє записати BLOB; раніше підтримувалося лише читання. |
| 7.1.24, 7.2.12, 7.3.0 | [xml_parser_get_option](function.xml-parser-get-option.md) | Тепер опція підтримує XML_OPTION_SKIP_TAGSTART і XML_OPTION_SKIP_WHITE. |
| 7.1.5 | [IntlDateFormatter::format](intldateformatter.format.md) | Додано підтримку надання загальних об'єктів DateTimeInterface для параметра datetime. Раніше підтримувалися лише об'єкти DateTime. |
| 7.1.4 | [PDO::sqliteCreateFunction](pdo.sqlitecreatefunction.md) | Доданий параметр flags. |
| | [SQLite3::createFunction](sqlite3.createfunction.md) | Доданий параметр flags. |
| 7.1.0 | [DateInterval::format](dateinterval.format.md) | Додані форматуючі символи F та f. |
| | [DateTimeImmutable::\_\_construct](datetimeimmutable.construct.md) | Відтепер мікросекунди заповнюються фактичним значенням. Чи не '00000'. |
| | [DateTimeImmutable::setTime](datetimeimmutable.settime.md) | Додано параметр microsecond. |
| | [DateTimeZone::listIdentifiers](datetimezone.listidentifiers.md) | countryCode тепер допускає значення null. |
| | [array_rand](function.array-rand.md) | Внутрішній алгоритм отримання випадкових чисел змінено з функції rand бібліотеки libc на генератор з урахуванням Вихря Мерсенна. |
| | [curl_multi_setopt](function.curl-multi-setopt.md) | Додано константу CURLMOPT_PUSHFUNCTION. |
| | [exif_imagetype](function.exif-imagetype.md) | Додано підтримку WebP. |
| | [file_get_contents](function.file-get-contents.md) | Додано підтримку негативних значень offset. |
| | [get_headers](function.get-headers.md) | Доданий параметр context. |
| | [getenv](function.getenv.md) | Параметр varname тепер може бути опущений для отримання асоціативного масиву всіх змінних оточення. |
| | [getimagesize](function.getimagesize.md) | Додано підтримку WebP. |
| | [getopt](function.getopt.md) Доданий параметр rest_index. |
| | [grapheme_extract](function.grapheme-extract.md) | Додано підтримку негативних значень offset. |
| | [grapheme_stripos](function.grapheme-stripos.md) | Додано підтримку негативних значень offset. |
| | [grapheme_strpos](function.grapheme-strpos.md) | Додано підтримку негативних значень offset. |
| | [hash_algos](function.hash-algos.md) | Додана підтримка для sha512/224, sha512/256, sha3-224, sha3-256, sha3-384 та sha3-512. |
| | [iconv_strpos](function.iconv-strpos.md) | Підтримка негативних значень offset. |
| | [json_decode](function.json-decode.md) | Порожній ключ JSON ("") буде перетворено на порожню властивість об'єкта, а не на властивість зі значенням \_empty\_. |
| | [json_encode](function.json-encode.md) | При кодуванні чисел із плаваючою точкою використовується serialize_precision замість precision. |
| | [json_encode](function.json-encode.md) | Додана константа JSON_UNESCAPED_LINE_TERMINATORS для параметра flags. |
| | [list](function.list.md) | Тепер можна задавати ключі в List. Це дозволяє розіменовувати асоціативні масиви та масиви з індексами не по порядку. |
| | [long2ip](function.long2ip.md) Тип параметра ip змінено з типу string тип int. |
| | [mb_ereg](function.mb-ereg.md) | Тепер mb_ereg встановлює matches рівним порожньому масиву (array), якщо нічого не знайдено. Раніше в цьому випадку матчі залишалися незмінними. |
| | [mb_ereg_replace](function.mb-ereg-replace.md) | Функція перевіряє, чи коректна string для поточного кодування. |
| | [mb_ereg_replace](function.mb-ereg-replace.md) | Модифікатор e оголошений застарілим. |
| | [mb_ereg_replace_callback](function.mb-ereg-replace-callback.md) | Функція перевіряє, чи коректна string для поточного кодування. |
| | [mb_ereg_search_setpos](function.mb-ereg-search-setpos.md) | Додано підтримку негативних значень offset. |
| | [mb_eregi](function.mb-eregi.md) | Функцію mb_eregi встановлює значення matches рівним порожньому масиву, якщо не знайдено. Раніше, у разі, матчі залишалися незмінним. |
| | [mb_eregi_replace](function.mb-eregi-replace.md) | Модифікатор e оголошений застарілим. |
| | [mb_eregi_replace](function.mb-eregi-replace.md) | Функція перевіряє, чи string є коректним рядком для поточного кодування. |
| | [mb_strimwidth](function.mb-strimwidth.md) | Додана підтримка негативних start та width. |
| | [mb_stripos](function.mb-stripos.md) | Додано підтримку негативних значень offset. |
| | [mb_strpos](function.mb-strpos.md) | Додано підтримку негативних значень offset. |
| | [mt_rand](function.mt-rand.md) | rand є псевдонімом для mt_rand. |
| | [mt_rand](function.mt-rand.md) | Функцію mt_rand було оновлено і тепер використовує коректну версію генератора випадкових чисел на основі Вихря Мерсенна. Для використання старої поведінки використовуйте mt_srand з другим параметром, встановленим у MT_RAND_PHP. |
| | [mt_srand](function.mt-srand.md) | srand є псевдонімом для mt_srand. |
| | [mt_srand](function.mt-srand.md) | mt_rand було змінено використання фіксованої, коректної версії алгоритму Вихря Мерсенна. Для відкату до старої поведінки використовуйте mt_srand з другим параметром MT_RAND_PHP. |
| | [openssl_csr_new](function.openssl-csr-new.md) | Параметр options тепер підтримує curve_name. |
| | [openssl_decrypt](function.openssl-decrypt.md) | Додані параметри tag та aad. |
| | [openssl_encrypt](function.openssl-encrypt.md) | Додані параметри tag, aad та tag_length. |
| | [openssl_pkey_new](function.openssl-pkey-new.md) | Доданий ключ curve_name до option для забезпечення можливості створення EC ключів. |
| | [output_add_rewrite_var](function.output-add-rewrite-var.md) | До PHP 7.1.0 змінні перезаписи, встановлені функцією output_add_rewrite_var, використовують той самий буфер модуля сесії "trans sid". Починаючи з PHP 7.1.0, використовується окремий буфер, url_rewriter.tags використовується лише для функцій виведення, доданий url_rewriter.hosts. |
| | [output_reset_rewrite_vars](function.output-reset-rewrite-vars.md) | До PHP 7.1.0, змінні перезаписи, встановлені функцією output_add_rewrite_var, використовують той же буфер модуля сесії "trans sid". З PHP 7.1.0 використовується окремий буфер і output_reset_rewrite_vars тільки видаляє змінні перезаписи певні output_add_rewrite_var. |
| | [pcntl_signal](function.pcntl-signal.md) | Починаючи з PHP 7.1.0 обробнику callback-функції передається другий аргумент, що містить структуру siginfo певного сигналу. Ці дані будуть передані лише у випадку, якщо операційна система підтримує структури siginfo_t. Якщо в операційній системі не реалізована підтримка структури siginfo_t, то як другий аргумент буде переданий NULL. |
| | [pcntl_signal_get_handler](function.pcntl-signal-get-handler.md) | Додано функцію pcntl_signal_get_handler. |
| | [pg_fetch_all](function.pg-fetch-all.md) | Доданий параметр mode. |
| | [pg_last_notice](function.pg-last-notice.md) | Доданий параметр mode. |
| | [pg_select](function.pg-select.md) | Доданий параметр mode. |
| | [rand](function.rand.md) | rand стала синонімом функції mt_rand. |
| | [session_start](function.session-start.md) | session_start тепер повертає false та більше не ініціалізує $\_SESSION, коли вона не змогла запустити сесію. |
| | [shuffle](function.shuffle.md) | Внутрішній алгоритм отримання випадкових чисел змінено з функції rand бібліотеки libc на генератор з урахуванням Вихря Мерсена. |
| | [srand](function.srand.md) | srand стала синонімом функції mt_srand. |
| | [str_shuffle](function.str-shuffle.md) | Внутрішній алгоритм отримання випадкових чисел змінено з функції rand бібліотеки libc на генератор з урахуванням Вихря Мерсена. |
| | [Stripos](function.stripos.md) | Додано підтримку негативних значень offset. |
| | [strpos](function.strpos.md) | Додано підтримку негативних значень offset. |
| | [substr_count](function.substr-count.md) | Додано підтримку негативних значень offset і length. length тепер також може бути 0. |
| | [tempnam](function.tempnam.md) | tempnam тепер видає повідомлення при поверненні до тимчасового каталогу системи. |
| | [unpack](function.unpack.md) | Доданий необов'язковий параметр offset. |
| | [unserialize](function.unserialize.md) | Тепер елемент allowed_classes параметра options строго типізований, тобто якщо щось передано, крім array і bool, unserialize поверне false і викличе помилку E_WARNING. |
| | [ReflectionType::\_\_toString](reflectiontype.tostring.md) | ReflectionType::\_\_toString оголошений застарілим. |
| | [SessionHandler::gc](sessionhandler.gc.md) | До цієї версії, у разі успішного виконання, ця функція повертала true. |
| | [SessionHandlerInterface::gc](sessionhandlerinterface.gc.md) | До цієї версії, функція повертала true у разі успішного виконання. |
| 7.0.16, 7.1.2 | [dns_get_record](function.dns-get-record.md) | Додано підтримку записів типу CAA. |
| | [fopen](function.fopen.md) | Додано опцію 'e'. |
| 7.0.15, 7.1.1 | [get_defined_functions](function.get-defined-functions.md) | Доданий параметр exclude_disabled. |
| 7.0.15,7.1.1 | [pack](function.pack.md) | Додані коди "e", "E", "g" та "G" для підтримки примусової вказівки порядку байт для float та double. |
| 7.0.11 | [iconv_substr](function.iconv-substr.md) | Якщо string має довжину рівну offset, буде повернуто порожній рядок. Раніше у таких випадках поверталося false. |
| 7.0.10 | [imagetypes](function.imagetypes.md) | Додано константу IMG_WEBP. |
| | [SplFileObject::getCsvControl](splfileobject.getcsvcontrol.md) | Доданий символ екранування до результуючого масиву. |
| | [SQLite3::\_\_construct](sqlite3.construct.md) | Параметр filename можна задавати порожнім рядком для створення на диску приватної бази даних. |
| 7.0.9 | [getenv](function.getenv.md) | Було додано параметр local_only. |
| 7.0.7 | [curl_multi_setopt](function.curl-multi-setopt.md) | Додані константи CURLMOPT_CHUNK_LENGTH_PENALTY_SIZE, CURLMOPT_CONTENT_LENGTH_PENALTY_SIZE, CURLMOPT_MAX_HOST_CONNECTIONS, CURLMOPT_MAX_PIPELINE_LENGTH та CURLMOPT_MAX_TOTAL_CONNECTIONS. |
| | [curl_setopt](function.curl-setopt.md) | Добавлены CURL_HTTP_VERSION_2, CURL_HTTP_VERSION_2\_PRIOR_KNOWLEDGE, CURL_HTTP_VERSION_2TLS, CURL_REDIR_POST_301, CURL_REDIR_POST_302, CURL_REDIR_POST_303, CURL_REDIR_POST_ALL, CURL_VERSION_KERBEROS5, CURL_VERSION_PSL, CURL_VERSION_UNIX_SOCKETS, CURLAUTH_NEGOTIATE, CURLAUTH_NTLM_WB, CURLFTP_CREATE_DIR, CURLFTP_CREATE_DIR_NONE, CURLFTP_CREATE_DIR_RETRY, CURLHEADER_SEPARATE, CURLHEADER_UNIFIED, CURLMOPT_CHUNK_LENGTH_PENALTY_SIZE, CURLMOPT_CONTENT_LENGTH_PENALTY_SIZE, CURLMOPT_MAX_HOST_CONNECTIONS, CURLMOPT_MAX_PIPELINE_LENGTH, CURLMOPT_MAX_TOTAL_CONNECTIONS, CURLOPT_CONNECT_TO, CURLOPT_DEFAULT_PROTOCOL , CURLOPT_DNS_INTERFACE, CURLOPT_DNS_LOCAL_IP4, CURLOPT_DNS_LOCAL_IP6, CURLOPT_EXPECT_100_TIMEOUT_MS, CURLOPT_HEADEROPT, CURLOPT_LOGIN_OPTIONS, CURLOPT_PATH_AS_IS, CURLOPT_PINNEDPUBLICKEY, CURLOPT_PIPEWAIT, CURLOPT_PROXY_SERVICE_NAME, CURLOPT_PROXYHEADER, CURLOPT_SASL_IR, CURLOPT_SERVICE_NAME, CURLOPT_SSL_ENABLE_ALPN, CURLOPT_SSL_ENABLE_NPN, CURLOPT_SSL_FALSESTART, CURLOPT_SSL_VERIFYSTATUS, CURLOPT_STREAM_WEIGHT, CURLOPT_TCP_FASTOPEN, CURLOPT_TFTP_NO_OPTIONS, CURLOPT_UNIX_SOCKET_PATH, CURLOPT_XOAUTH2_BEARER, CURLPROTO_SMB, CURLPROTO_SMBS, CURLPROXY_HT |
| 7.0.0 | [assert](function.assert.md) | assert тепер мовна конструкція, а не функція. Наявність тепер може бути виразом. Другий параметр тепер інтерпретується як виняток exception (якщо передано об'єкт Throwable), або як опис description, що підтримується з версії PHP 5.4.8 і далі. |
| | [define](function.define.md) | Допустимі значення типу array. |
| | [dirname](function.dirname.md) | Доданий необов'язковий параметр рівнів. |
| | [Getrusage](function.getrusage.md) | Додана підтримка цієї функції у Windows. |
| 5.5.0/PECL 3.0.0 | [IntlDateFormatter::create](intldateformatter.create.md) | Об'єкт IntlCalendar дозволяється в параметрі calendar. Об'єкти IntlTimeZone та DateTimeZone допускаються у параметрі timezone. Неприпустимі ідентифікатори часового поясу (включаючи порожні рядки) більше не допускаються у параметрі timezone. Якщо в параметрі timezone вказано значення null, ідентифікатор часового поясу, заданий date_default_timezone_get, буде використовуватись замість ICU за замовчуванням. |
| | [IntlDateFormatter::setCalendar](intldateformatter.setcalendar.md) | Додана можливість передати об'єкт IntlCalendar. |
