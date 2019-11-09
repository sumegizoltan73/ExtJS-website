Ext.define('Web.model.MenuItem', {
    extend: 'Web.model.AbstractLocalized',
    fields: ['text', 'action', 'url', 'urlTarget', 'urlHasLangParam', 'iconCls']
});