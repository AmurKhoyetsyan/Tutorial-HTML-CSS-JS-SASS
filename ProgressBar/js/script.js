;(function(){
    var circle = document.getElementsByClassName('circle');

    var options = {
        type: 'circle',
        text: true,
        fontColor: '#333333',
        fontSize: 32,
        fontWeight: 900,
        fillParent: '#FFFFFF',
        fillChild: 'transparent',
        interval: 1000,
        animated: true,
        strokeWidthParent: 10,
        strokeWidthChild: 10,
        progressColor: '#00AAFF',
        progressParentColor: '#CECECE'
    };
    
    new Progress(circle, options).inPercent();
})();