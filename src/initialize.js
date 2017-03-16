import '!!style-loader!css-loader?camelCase&localIdentName=[local]-[hash:base64:3]!coding-ui-kit'
window.i18n = (template = [], ...values) => {
    return template.reduce((p, v, i) => `${p}${v.split(':=')[1] || ''}${values[i] || ''}`, '');
};
