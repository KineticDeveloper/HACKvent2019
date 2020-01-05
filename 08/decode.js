var cc_encoded = [
     ':)QVXSZUVY\\ZYYZ[a'
     ,':)QOUW[VT^VY]bZ_'
    ,':)SPPVSSYVV\\YY_\\\\]'
    ,':)RPQRSTUVWXYZ[\\]^'
    ,':)QTVWRSVUXW[_Z`\\b'
    ,':)SlQRUPXWVo\\Vuv_n_\\ajjce'
]

cc_encoded.forEach(cc => {
    cc = cc.split(":)")[1]  // get rid of smile
    console.log(`CC=${cc} (length ${cc.length})`)
    var str = ""
    let offset = 30
    for(i=0; i<cc.length;i++) {
        let char_code = cc.charCodeAt(i)
        str += String.fromCharCode(char_code-offset-i)
        // console.log(i, cc[i],char_code,char_code-offset-i) 
    }
    console.log(cc,str)
});
