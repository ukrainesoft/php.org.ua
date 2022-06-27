- [«SolrQuery::setTimeAllowed](solrquery.settimeallowed.md)
- [SolrDisMaxQuery::addBigramPhraseField
»](solrdismaxquery.addbigramphrasefield.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Клас SolrDisMaxQuery

# Клас SolrDisMaxQuery

(No version information available, might only be in Git)

## Вступ

## Огляд класів

class **SolrDisMaxQuery** extends [SolrQuery](class.solrquery.md)
implements [Serializable](class.serializable.md) {

/\* Наслідувані властивості \*/

const int `SolrQuery::ORDER_ASC` u003d 0;

const int `SolrQuery::ORDER_DESC` u003d 1;

const int `SolrQuery::FACET_SORT_INDEX` u003d 0;

const int `SolrQuery::FACET_SORT_COUNT` u003d 1;

const int `SolrQuery::TERMS_SORT_INDEX` u003d 0;

const int `SolrQuery::TERMS_SORT_COUNT` u003d 1;

/\* Методи \*/

public [\_\_construct](solrdismaxquery.construct.md)(string `$q` u003d ?)

public
[addBigramPhraseField](solrdismaxquery.addbigramphrasefield.md)(string
`$field`, string `$boost`, string `$slop` u003d ?):
[SolrDisMaxQuery](class.solrdismaxquery.md)

public [addBoostQuery](solrdismaxquery.addboostquery.md)(string
`$field`, string `$value`, string `$boost` u003d ?):
[SolrDisMaxQuery](class.solrdismaxquery.md)

public [addPhraseField](solrdismaxquery.addphrasefield.md)(string
`$field`, string `$boost`, string `$slop` u003d ?):
[SolrDisMaxQuery](class.solrdismaxquery.md)

public [addQueryField](solrdismaxquery.addqueryfield.md)(string
`$field`, string `$boost` u003d ?):
[SolrDisMaxQuery](class.solrdismaxquery.md)

public
[addTrigramPhraseField](solrdismaxquery.addtrigramphrasefield.md)(string
`$field`, string `$boost`, string `$slop` u003d ?):
[SolrDisMaxQuery](class.solrdismaxquery.md)

public [addUserField](solrdismaxquery.adduserfield.md)(string
`$field`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public
[removeBigramPhraseField](solrdismaxquery.removebigramphrasefield.md)(string
`$field`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public [removeBoostQuery](solrdismaxquery.removeboostquery.md)(string
`$field`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public
[removePhraseField](solrdismaxquery.removephrasefield.md)(string
`$field`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public [removeQueryField](solrdismaxquery.removequeryfield.md)(string
`$field`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public
[removeTrigramPhraseField](solrdismaxquery.removetrigramphrasefield.md)(string
`$field`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public [removeUserField](solrdismaxquery.removeuserfield.md)(string
`$field`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public
[setBigramPhraseFields](solrdismaxquery.setbigramphrasefields.md)(string
`$fields`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public
[setBigramPhraseSlop](solrdismaxquery.setbigramphraseslop.md)(string
`$slop`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public [setBoostFunction](solrdismaxquery.setboostfunction.md)(string
`$function`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public [setBoostQuery](solrdismaxquery.setboostquery.md)(string `$q`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

public [setMinimumMatch](solrdismaxquery.setminimummatch.md)(string
`$value`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public [setPhraseFields](solrdismaxquery.setphrasefields.md)(string
`$fields`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public [setPhraseSlop](solrdismaxquery.setphraseslop.md)(string
`$slop`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public [setQueryAlt](solrdismaxquery.setqueryalt.md)(string `$q`):
[SolrDisMaxQuery](class.solrdismaxquery.md)

public
[setQueryPhraseSlop](solrdismaxquery.setqueryphraseslop.md)(string
`$slop`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public [setTieBreaker](solrdismaxquery.settiebreaker.md)(string
`$tieBreaker`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public
[setTrigramPhraseFields](solrdismaxquery.settrigramphrasefields.md)(string
`$fields`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public
[setTrigramPhraseSlop](solrdismaxquery.settrigramphraseslop.md)(string
`$slop`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public [setUserFields](solrdismaxquery.setuserfields.md)(string
`$fields`): [SolrDisMaxQuery](class.solrdismaxquery.md)

public
[useDisMaxQueryParser](solrdismaxquery.usedismaxqueryparser.md)():
[SolrDisMaxQuery](class.solrdismaxquery.md)

public
[useEDisMaxQueryParser](solrdismaxquery.useedismaxqueryparser.md)():
[SolrDisMaxQuery](class.solrdismaxquery.md)

/\* Наслідувані методи \*/

public
[SolrQuery::addExpandFilterQuery](solrquery.addexpandfilterquery.md)(string
`$fq`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::addExpandSortField](solrquery.addexpandsortfield.md)(string
`$field`, string `$order` u003d ?): [SolrQuery](class.solrquery.md)

public
[SolrQuery::addFacetDateField](solrquery.addfacetdatefield.md)(string
`$dateField`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::addFacetDateOther](solrquery.addfacetdateother.md)(string
`$value`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public [SolrQuery::addFacetField](solrquery.addfacetfield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public [SolrQuery::addFacetQuery](solrquery.addfacetquery.md)(string
`$facetQuery`): [SolrQuery](class.solrquery.md)

public [SolrQuery::addField](solrquery.addfield.md)(string `$field`):
[SolrQuery](class.solrquery.md)

public [SolrQuery::addFilterQuery](solrquery.addfilterquery.md)(string
`$fq`): [SolrQuery](class.solrquery.md)

public [SolrQuery::addGroupField](solrquery.addgroupfield.md)(string
`$value`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::addGroupFunction](solrquery.addgroupfunction.md)(string
`$value`): [SolrQuery](class.solrquery.md)

public [SolrQuery::addGroupQuery](solrquery.addgroupquery.md)(string
`$value`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::addGroupSortField](solrquery.addgroupsortfield.md)(string
`$field`, int `$order` u003d ?): [SolrQuery](class.solrquery.md)

public
[SolrQuery::addHighlightField](solrquery.addhighlightfield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public [SolrQuery::addMltField](solrquery.addmltfield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::addMltQueryField](solrquery.addmltqueryfield.md)(string
`$field`, float `$boost`): [SolrQuery](class.solrquery.md)

public [SolrQuery::addSortField](solrquery.addsortfield.md)(string
`$field`, int `$order` u003d SolrQuery::ORDER_DESC):
[SolrQuery](class.solrquery.md)

public [SolrQuery::addStatsFacet](solrquery.addstatsfacet.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public [SolrQuery::addStatsField](solrquery.addstatsfield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::collapse](solrquery.collapse.md)([SolrCollapseFunction](class.solrcollapsefunction.md)
`$collapseFunction`): [SolrQuery](class.solrquery.md)

public [SolrQuery::getExpand](solrquery.getexpand.md)(): bool

public
[SolrQuery::getExpandFilterQueries](solrquery.getexpandfilterqueries.md)():
array

public [SolrQuery::getExpandQuery](solrquery.getexpandquery.md)():
array

public [SolrQuery::getExpandRows](solrquery.getexpandrows.md)(): int

public
[SolrQuery::getExpandSortFields](solrquery.getexpandsortfields.md)():
array

public [SolrQuery::getFacet](solrquery.getfacet.md)(): bool

public
[SolrQuery::getFacetDateEnd](solrquery.getfacetdateend.md)(string
`$field_override` u003d ?): string

public
[SolrQuery::getFacetDateFields](solrquery.getfacetdatefields.md)():
array

public
[SolrQuery::getFacetDateGap](solrquery.getfacetdategap.md)(string
`$field_override` u003d ?): string

public
[SolrQuery::getFacetDateHardEnd](solrquery.getfacetdatehardend.md)(string
`$field_override` u003d ?): string

public
[SolrQuery::getFacetDateOther](solrquery.getfacetdateother.md)(string
`$field_override` u003d ?): array

public
[SolrQuery::getFacetDateStart](solrquery.getfacetdatestart.md)(string
`$field_override` u003d ?): string

public [SolrQuery::getFacetFields](solrquery.getfacetfields.md)():
array

public [SolrQuery::getFacetLimit](solrquery.getfacetlimit.md)(string
`$field_override` u003d ?): int

public [SolrQuery::getFacetMethod](solrquery.getfacetmethod.md)(string
`$field_override` u003d ?): string

public
[SolrQuery::getFacetMinCount](solrquery.getfacetmincount.md)(string
`$field_override` u003d ?): int

public
[SolrQuery::getFacetMissing](solrquery.getfacetmissing.md)(string
`$field_override` u003d ?): bool

public [SolrQuery::getFacetOffset](solrquery.getfacetoffset.md)(string
`$field_override` u003d ?): int

public [SolrQuery::getFacetPrefix](solrquery.getfacetprefix.md)(string
`$field_override` u003d ?): string

public [SolrQuery::getFacetQueries](solrquery.getfacetqueries.md)():
array

public [SolrQuery::getFacetSort](solrquery.getfacetsort.md)(string
`$field_override` u003d ?): int

public [SolrQuery::getFields](solrquery.getfields.md)(): array

public [SolrQuery::getFilterQueries](solrquery.getfilterqueries.md)():
array

public [SolrQuery::getGroup](solrquery.getgroup.md)(): bool

public
[SolrQuery::getGroupCachePercent](solrquery.getgroupcachepercent.md)():
int

public [SolrQuery::getGroupFacet](solrquery.getgroupfacet.md)(): bool

public [SolrQuery::getGroupFields](solrquery.getgroupfields.md)():
array

public [SolrQuery::getGroupFormat](solrquery.getgroupformat.md)():
string

public
[SolrQuery::getGroupFunctions](solrquery.getgroupfunctions.md)():
array

public [SolrQuery::getGroupLimit](solrquery.getgrouplimit.md)(): int

public [SolrQuery::getGroupMain](solrquery.getgroupmain.md)(): bool

public [SolrQuery::getGroupNGroups](solrquery.getgroupngroups.md)():
bool

public [SolrQuery::getGroupOffset](solrquery.getgroupoffset.md)(): int

public [SolrQuery::getGroupQueries](solrquery.getgroupqueries.md)():
array

public
[SolrQuery::getGroupSortFields](solrquery.getgroupsortfields.md)():
array

public [SolrQuery::getGroupTruncate](solrquery.getgrouptruncate.md)():
bool

public [SolrQuery::getHighlight](solrquery.gethighlight.md)(): bool

public
[SolrQuery::getHighlightAlternateField](solrquery.gethighlightalternatefield.md)(string
`$field_override` u003d ?): string

public
[SolrQuery::getHighlightFields](solrquery.gethighlightfields.md)():
array

public
[SolrQuery::getHighlightFormatter](solrquery.gethighlightformatter.md)(string
`$field_override` u003d ?): string

public
[SolrQuery::getHighlightFragmenter](solrquery.gethighlightfragmenter.md)(string
`$field_override` u003d ?): string

public
[SolrQuery::getHighlightFragsize](solrquery.gethighlightfragsize.md)(string
`$field_override` u003d ?): int

public
[SolrQuery::getHighlightHighlightMultiTerm](solrquery.gethighlighthighlightmultiterm.md)():
bool

public
[SolrQuery::getHighlightMaxAlternateFieldLength](solrquery.gethighlightmaxalternatefieldlength.md)(string
`$field_override` u003d ?): int

public
[SolrQuery::getHighlightMaxAnalyzedChars](solrquery.gethighlightmaxanalyzedchars.md)():
int

public
[SolrQuery::getHighlightMergeContiguous](solrquery.gethighlightmergecontiguous.md)(string
`$field_override` u003d ?): bool

public
[SolrQuery::getHighlightRegexMaxAnalyzedChars](solrquery.gethighlightregexmaxanalyzedchars.md)():
int

public
[SolrQuery::getHighlightRegexPattern](solrquery.gethighlightregexpattern.md)():
string

public
[SolrQuery::getHighlightRegexSlop](solrquery.gethighlightregexslop.md)():
float

public
[SolrQuery::getHighlightRequireFieldMatch](solrquery.gethighlightrequirefieldmatch.md)():
bool

public
[SolrQuery::getHighlightSimplePost](solrquery.gethighlightsimplepost.md)(string
`$field_override` u003d ?): string

public
[SolrQuery::getHighlightSimplePre](solrquery.gethighlightsimplepre.md)(string
`$field_override` u003d ?): string

public
[SolrQuery::getHighlightSnippets](solrquery.gethighlightsnippets.md)(string
`$field_override` u003d ?): int

public
[SolrQuery::getHighlightUsePhraseHighlighter](solrquery.gethighlightusephrasehighlighter.md)():
bool

public [SolrQuery::getMlt](solrquery.getmlt.md)(): bool

public [SolrQuery::getMltBoost](solrquery.getmltboost.md)(): bool

public [SolrQuery::getMltCount](solrquery.getmltcount.md)(): int

public [SolrQuery::getMltFields](solrquery.getmltfields.md)(): array

public
[SolrQuery::getMltMaxNumQueryTerms](solrquery.getmltmaxnumqueryterms.md)():
int

public
[SolrQuery::getMltMaxNumTokens](solrquery.getmltmaxnumtokens.md)():
int

public
[SolrQuery::getMltMaxWordLength](solrquery.getmltmaxwordlength.md)():
int

public
[SolrQuery::getMltMinDocFrequency](solrquery.getmltmindocfrequency.md)():
int

public
[SolrQuery::getMltMinTermFrequency](solrquery.getmltmintermfrequency.md)():
int

public
[SolrQuery::getMltMinWordLength](solrquery.getmltminwordlength.md)():
int

public
[SolrQuery::getMltQueryFields](solrquery.getmltqueryfields.md)():
array

public [SolrQuery::getQuery](solrquery.getquery.md)(): string

public [SolrQuery::getRows](solrquery.getrows.md)(): int

public [SolrQuery::getSortFields](solrquery.getsortfields.md)(): array

public [SolrQuery::getStart](solrquery.getstart.md)(): int

public [SolrQuery::getStats](solrquery.getstats.md)(): bool

public [SolrQuery::getStatsFacets](solrquery.getstatsfacets.md)():
array

public [SolrQuery::getStatsFields](solrquery.getstatsfields.md)():
array

public [SolrQuery::getTerms](solrquery.getterms.md)(): bool

public [SolrQuery::getTermsField](solrquery.gettermsfield.md)():
string

public
[SolrQuery::getTermsIncludeLowerBound](solrquery.gettermsincludelowerbound.md)():
bool

public
[SolrQuery::getTermsIncludeUpperBound](solrquery.gettermsincludeupperbound.md)():
bool

public [SolrQuery::getTermsLimit](solrquery.gettermslimit.md)(): int

public
[SolrQuery::getTermsLowerBound](solrquery.gettermslowerbound.md)():
string

public [SolrQuery::getTermsMaxCount](solrquery.gettermsmaxcount.md)():
int

public [SolrQuery::getTermsMinCount](solrquery.gettermsmincount.md)():
int

public [SolrQuery::getTermsPrefix](solrquery.gettermsprefix.md)():
string

public
[SolrQuery::getTermsReturnRaw](solrquery.gettermsreturnraw.md)(): bool

public [SolrQuery::getTermsSort](solrquery.gettermssort.md)(): int

public
[SolrQuery::getTermsUpperBound](solrquery.gettermsupperbound.md)():
string

public [SolrQuery::getTimeAllowed](solrquery.gettimeallowed.md)(): int

public
[SolrQuery::removeExpandFilterQuery](solrquery.removeexpandfilterquery.md)(string
`$fq`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::removeExpandSortField](solrquery.removeexpandsortfield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::removeFacetDateField](solrquery.removefacetdatefield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::removeFacetDateOther](solrquery.removefacetdateother.md)(string
`$value`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::removeFacetField](solrquery.removefacetfield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::removeFacetQuery](solrquery.removefacetquery.md)(string
`$value`): [SolrQuery](class.solrquery.md)

public [SolrQuery::removeField](solrquery.removefield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::removeFilterQuery](solrquery.removefilterquery.md)(string
`$fq`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::removeHighlightField](solrquery.removehighlightfield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public [SolrQuery::removeMltField](solrquery.removemltfield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::removeMltQueryField](solrquery.removemltqueryfield.md)(string
`$queryField`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::removeSortField](solrquery.removesortfield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::removeStatsFacet](solrquery.removestatsfacet.md)(string
`$value`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::removeStatsField](solrquery.removestatsfield.md)(string
`$field`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setEchoHandler](solrquery.setechohandler.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setEchoParams](solrquery.setechoparams.md)(string
`$type`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setExpand](solrquery.setexpand.md)(bool `$value`):
[SolrQuery](class.solrquery.md)

public [SolrQuery::setExpandQuery](solrquery.setexpandquery.md)(string
`$q`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setExpandRows](solrquery.setexpandrows.md)(int
`$value`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setExplainOther](solrquery.setexplainother.md)(string
`$query`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setFacet](solrquery.setfacet.md)(bool `$flag`):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::setFacetDateEnd](solrquery.setfacetdateend.md)(string
`$value`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::setFacetDateGap](solrquery.setfacetdategap.md)(string
`$value`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::setFacetDateHardEnd](solrquery.setfacetdatehardend.md)(bool
`$value`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::setFacetDateStart](solrquery.setfacetdatestart.md)(string
`$value`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::setFacetEnumCacheMinDefaultFrequency](solrquery.setfacetenumcachemindefaultfrequency.md)(int
`$frequency`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public [SolrQuery::setFacetLimit](solrquery.setfacetlimit.md)(int
`$limit`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public [SolrQuery::setFacetMethod](solrquery.setfacetmethod.md)(string
`$method`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::setFacetMinCount](solrquery.setfacetmincount.md)(int
`$mincount`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public [SolrQuery::setFacetMissing](solrquery.setfacetmissing.md)(bool
`$flag`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public [SolrQuery::setFacetOffset](solrquery.setfacetoffset.md)(int
`$offset`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public [SolrQuery::setFacetPrefix](solrquery.setfacetprefix.md)(string
`$prefix`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public [SolrQuery::setFacetSort](solrquery.setfacetsort.md)(int
`$facetSort`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public [SolrQuery::setGroup](solrquery.setgroup.md)(bool `$value`):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::setGroupCachePercent](solrquery.setgroupcachepercent.md)(int
`$percent`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setGroupFacet](solrquery.setgroupfacet.md)(bool
`$value`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setGroupFormat](solrquery.setgroupformat.md)(string
`$value`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setGroupLimit](solrquery.setgrouplimit.md)(int
`$value`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setGroupMain](solrquery.setgroupmain.md)(string
`$value`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setGroupNGroups](solrquery.setgroupngroups.md)(bool
`$value`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setGroupOffset](solrquery.setgroupoffset.md)(int
`$value`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setGroupTruncate](solrquery.setgrouptruncate.md)(bool
`$value`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setHighlight](solrquery.sethighlight.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setHighlightAlternateField](solrquery.sethighlightalternatefield.md)(string
`$field`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::setHighlightFormatter](solrquery.sethighlightformatter.md)(string
`$formatter`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::setHighlightFragmenter](solrquery.sethighlightfragmenter.md)(string
`$fragmenter`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::setHighlightFragsize](solrquery.sethighlightfragsize.md)(int
`$size`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::setHighlightHighlightMultiTerm](solrquery.sethighlighthighlightmultiterm.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setHighlightMaxAlternateFieldLength](solrquery.sethighlightmaxalternatefieldlength.md)(int
`$fieldLength`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::setHighlightMaxAnalyzedChars](solrquery.sethighlightmaxanalyzedchars.md)(int
`$value`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setHighlightMergeContiguous](solrquery.sethighlightmergecontiguous.md)(bool
`$flag`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::setHighlightRegexMaxAnalyzedChars](solrquery.sethighlightregexmaxanalyzedchars.md)(int
`$maxAnalyzedChars`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setHighlightRegexPattern](solrquery.sethighlightregexpattern.md)(string
`$value`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setHighlightRegexSlop](solrquery.sethighlightregexslop.md)(float
`$factor`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setHighlightRequireFieldMatch](solrquery.sethighlightrequirefieldmatch.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setHighlightSimplePost](solrquery.sethighlightsimplepost.md)(string
`$simplePost`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::setHighlightSimplePre](solrquery.sethighlightsimplepre.md)(string
`$simplePre`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::setHighlightSnippets](solrquery.sethighlightsnippets.md)(int
`$value`, string `$field_override` u003d ?):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::setHighlightUsePhraseHighlighter](solrquery.sethighlightusephrasehighlighter.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setMlt](solrquery.setmlt.md)(bool `$flag`):
[SolrQuery](class.solrquery.md)

public [SolrQuery::setMltBoost](solrquery.setmltboost.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setMltCount](solrquery.setmltcount.md)(int
`$count`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setMltMaxNumQueryTerms](solrquery.setmltmaxnumqueryterms.md)(int
`$value`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setMltMaxNumTokens](solrquery.setmltmaxnumtokens.md)(int
`$value`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setMltMaxWordLength](solrquery.setmltmaxwordlength.md)(int
`$maxWordLength`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setMltMinDocFrequency](solrquery.setmltmindocfrequency.md)(int
`$minDocFrequency`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setMltMinTermFrequency](solrquery.setmltmintermfrequency.md)(int
`$minTermFrequency`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setMltMinWordLength](solrquery.setmltminwordlength.md)(int
`$minWordLength`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setOmitHeader](solrquery.setomitheader.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setQuery](solrquery.setquery.md)(string `$query`):
[SolrQuery](class.solrquery.md)

public [SolrQuery::setRows](solrquery.setrows.md)(int `$rows`):
[SolrQuery](class.solrquery.md)

public
[SolrQuery::setShowDebugInfo](solrquery.setshowdebuginfo.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setStart](solrquery.setstart.md)(int `$start`):
[SolrQuery](class.solrquery.md)

public [SolrQuery::setStats](solrquery.setstats.md)(bool `$flag`):
[SolrQuery](class.solrquery.md)

public [SolrQuery::setTerms](solrquery.setterms.md)(bool `$flag`):
[SolrQuery](class.solrquery.md)

public [SolrQuery::setTermsField](solrquery.settermsfield.md)(string
`$fieldname`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setTermsIncludeLowerBound](solrquery.settermsincludelowerbound.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setTermsIncludeUpperBound](solrquery.settermsincludeupperbound.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setTermsLimit](solrquery.settermslimit.md)(int
`$limit`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setTermsLowerBound](solrquery.settermslowerbound.md)(string
`$lowerBound`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setTermsMaxCount](solrquery.settermsmaxcount.md)(int
`$frequency`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setTermsMinCount](solrquery.settermsmincount.md)(int
`$frequency`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setTermsPrefix](solrquery.settermsprefix.md)(string
`$prefix`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setTermsReturnRaw](solrquery.settermsreturnraw.md)(bool
`$flag`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setTermsSort](solrquery.settermssort.md)(int
`$sortType`): [SolrQuery](class.solrquery.md)

public
[SolrQuery::setTermsUpperBound](solrquery.settermsupperbound.md)(string
`$upperBound`): [SolrQuery](class.solrquery.md)

public [SolrQuery::setTimeAllowed](solrquery.settimeallowed.md)(int
`$timeAllowed`): [SolrQuery](class.solrquery.md)

}

## Зумовлені константи

**`SolrDisMaxQuery::ORDER_ASC`**
Використовується для вказівки того, що сортування має бути в
зростаючому порядку (дублювати для спрощення міграції)

**`SolrDisMaxQuery::ORDER_DESC`**
Використовується для вказівки, що сортування має бути в порядку зменшення
(дублюється для спрощення міграції)

**`SolrDisMaxQuery::FACET_SORT_INDEX`**
Використовується для вказівки сортування фасету за індексом (дублюється для
спрощення міграції)

**`SolrDisMaxQuery::FACET_SORT_COUNT`**
Використовується для сортування фасету за кількістю (дублюється
для спрощення міграції)

**`SolrDisMaxQuery::TERMS_SORT_INDEX`**
Використовується в TermsComponent (дублюється для спрощення міграції)

**`SolrDisMaxQuery::TERMS_SORT_COUNT`**
Використовується в TermsComponent (дублюється для спрощення міграції)

## Зміст

- [SolrDisMaxQuery::addBigramPhraseField](solrdismaxquery.addbigramphrasefield.md)
- Додає поле фразової біграми (параметр pf2)
- [SolrDisMaxQuery::addBoostQuery](solrdismaxquery.addboostquery.md)
— Додає поле підвищення запиту зі значенням та необов'язковим
посиленням (параметр bq)
- [SolrDisMaxQuery::addPhraseField](solrdismaxquery.addphrasefield.md)
- Додає поле фрази (параметр pf)
- [SolrDisMaxQuery::addQueryField](solrdismaxquery.addqueryfield.md)
— Додає поле запиту з необов'язковим збільшенням (параметр qf)
- [SolrDisMaxQuery::addTrigramPhraseField](solrdismaxquery.addtrigramphrasefield.md)
- Додає поле триграми (параметр pf3)
- [SolrDisMaxQuery::addUserField](solrdismaxquery.adduserfield.md) -
Додає поле до параметра полів користувача (uf)
- [SolrDisMaxQuery::\_\_construct](solrdismaxquery.construct.md) -
Конструктор класу
- [SolrDisMaxQuery::removeBigramPhraseField](solrdismaxquery.removebigramphrasefield.md)
- Видаляє поле біграми фрази (параметр pf2)
- [SolrDisMaxQuery::removeBoostQuery](solrdismaxquery.removeboostquery.md)
— Видаляє часткове підвищення запиту на ім'я поля (bq)
- [SolrDisMaxQuery::removePhraseField](solrdismaxquery.removephrasefield.md)
- Видаляє поле фрази (параметра)
- [SolrDisMaxQuery::removeQueryField](solrdismaxquery.removequeryfield.md)
— Видаляє поле запиту (параметр qf)
- [SolrDisMaxQuery::removeTrigramPhraseField](solrdismaxquery.removetrigramphrasefield.md)
— Видаляє поле триграми (параметр pf3)
- [SolrDisMaxQuery::removeUserField](solrdismaxquery.removeuserfield.md)
— Видаляє поле з параметра користувацьких полів (uf)
- [SolrDisMaxQuery::setBigramPhraseFields](solrdismaxquery.setbigramphrasefields.md)
- Встановлює поля біграми фрази та їх посилення (і відхилення) з
за допомогою параметра pf2
- [SolrDisMaxQuery::setBigramPhraseSlop](solrdismaxquery.setbigramphraseslop.md)
- Встановлює коефіцієнт відхилення біграми фрази (параметр ps2)
- [SolrDisMaxQuery::setBoostFunction](solrdismaxquery.setboostfunction.md)
- Встановлює функцію посилення (параметр bf)
- [SolrDisMaxQuery::setBoostQuery](solrdismaxquery.setboostquery.md)
— Безпосередньо встановлює параметр запиту на посилення (bq)
- [SolrDisMaxQuery::setMinimumMatch](solrdismaxquery.setminimummatch.md)
- Встановлює мінімальну відповідність "Should" (mm)
- [SolrDisMaxQuery::setPhraseFields](solrdismaxquery.setphrasefields.md)
- Встановлює поля фрази та їх посилення (і відхилення) за допомогою
параметра pf2
- [SolrDisMaxQuery::setPhraseSlop](solrdismaxquery.setphraseslop.md)
— Встановлює коефіцієнт відхилення за промовчанням для запитів
фраз (параметр ps)
- [SolrDisMaxQuery::setQueryAlt](solrdismaxquery.setqueryalt.md) -
Встановлює альтернативний запит (параметр q.alt)
- [SolrDisMaxQuery::setQueryPhraseSlop](solrdismaxquery.setqueryphraseslop.md)
- Визначає коефіцієнт відхилення, дозволений для фразових
запитів, явно включених до рядка запиту користувача (параметр
qf)
- [SolrDisMaxQuery::setTieBreaker](solrdismaxquery.settiebreaker.md)
— Встановлює параметр Tie Breaker (параметр tie)
- [SolrDisMaxQuery::setTrigramPhraseFields](solrdismaxquery.settrigramphrasefields.md)
- Безпосередньо встановлює поля триграми фрази (параметр pf3)
- [SolrDisMaxQuery::setTrigramPhraseSlop](solrdismaxquery.settrigramphraseslop.md)
- Встановлює коефіцієнт відхилення триграми фрази (параметр
ps3)
- [SolrDisMaxQuery::setUserFields](solrdismaxquery.setuserfields.md)
— Встановлює параметр полів користувача (uf)
- [SolrDisMaxQuery::useDisMaxQueryParser](solrdismaxquery.usedismaxqueryparser.md)
- Перемикає QueryParser на DisMax Query Parser
- [SolrDisMaxQuery::useEDisMaxQueryParser](solrdismaxquery.useedismaxqueryparser.md)
- Перемикає QueryParser на EDisMax
