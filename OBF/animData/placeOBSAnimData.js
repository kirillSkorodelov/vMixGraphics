var placeOBSAnimData =
{"v":"5.7.13","fr":25,"ip":0,"op":70,"w":1920,"h":1080,"nm":"locatorOBS","ddd":0,"assets":[],"fonts":{"list":[{"origin":0,"fPath":"","fClass":"","fFamily":"Scada","fWeight":"","fStyle":"Regular","fName":"Scada-Regular","ascent":69.9996948242188},{"origin":0,"fPath":"","fClass":"","fFamily":"Scada","fWeight":"","fStyle":"Bold","fName":"Scada-Bold","ascent":69.9996948242188}]},"layers":[{"ddd":0,"ind":1,"ty":5,"nm":".region","cl":"region","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1449,150,0],"ix":2,"l":2,"x":"var $bm_rt;\nvar margin, x, y;\nmargin = 200;\nx = $bm_sub(1980, $bm_sum(thisComp.layer('.place').sourceRectAtTime().width, margin));\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2,"x":"var $bm_rt;\nvar x, y;\nx = $bm_sum(thisLayer.sourceRectAtTime().left, thisLayer.sourceRectAtTime().width);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":28,"nm":"Set Matte","np":8,"mn":"ADBE Set Matte3","ix":1,"en":1,"ef":[{"ty":10,"nm":"Take Matte From Layer","mn":"ADBE Set Matte3-0001","ix":1,"v":{"a":0,"k":3,"ix":1}},{"ty":7,"nm":"Use For Matte","mn":"ADBE Set Matte3-0002","ix":2,"v":{"a":0,"k":4,"ix":2}},{"ty":7,"nm":"Invert Matte","mn":"ADBE Set Matte3-0003","ix":3,"v":{"a":0,"k":0,"ix":3}},{"ty":7,"nm":"If Layer Sizes Differ","mn":"ADBE Set Matte3-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Composite Matte with Original","mn":"ADBE Set Matte3-0005","ix":5,"v":{"a":0,"k":1,"ix":5}},{"ty":7,"nm":"Premultiply Matte Layer","mn":"ADBE Set Matte3-0006","ix":6,"v":{"a":0,"k":1,"ix":6}}]}],"t":{"d":{"k":[{"s":{"s":60,"f":"Scada-Bold","t":"country","ca":0,"j":0,"tr":0,"lh":72,"ls":0,"fc":[0.282,0.282,0.282]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":0,"op":70,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":5,"nm":".place","cl":"place","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1428,282,0],"ix":2,"l":2,"x":"var $bm_rt;\nvar spacer, x, y;\nspacer = 20;\nx = $bm_sum(thisComp.layer('.region').transform.position[0], spacer);\ny = thisComp.layer('.region').transform.position[1];\n$bm_rt = [\n    x,\n    y\n];"},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2,"x":"var $bm_rt;\nvar x, y;\nx = thisLayer.sourceRectAtTime().left;\n;\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":28,"nm":"Set Matte","np":8,"mn":"ADBE Set Matte3","ix":1,"en":1,"ef":[{"ty":10,"nm":"Take Matte From Layer","mn":"ADBE Set Matte3-0001","ix":1,"v":{"a":0,"k":4,"ix":1}},{"ty":7,"nm":"Use For Matte","mn":"ADBE Set Matte3-0002","ix":2,"v":{"a":0,"k":4,"ix":2}},{"ty":7,"nm":"Invert Matte","mn":"ADBE Set Matte3-0003","ix":3,"v":{"a":0,"k":0,"ix":3}},{"ty":7,"nm":"If Layer Sizes Differ","mn":"ADBE Set Matte3-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Composite Matte with Original","mn":"ADBE Set Matte3-0005","ix":5,"v":{"a":0,"k":1,"ix":5}},{"ty":7,"nm":"Premultiply Matte Layer","mn":"ADBE Set Matte3-0006","ix":6,"v":{"a":0,"k":1,"ix":6}}]}],"t":{"d":{"k":[{"s":{"s":60,"f":"Scada-Bold","t":"City","ca":0,"j":0,"tr":0,"lh":72,"ls":0,"fc":[0.282,0.282,0.282]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":0,"op":70,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":".layerRegion","cl":"layerRegion","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.06,"y":0},"t":1,"s":[520,0,0],"to":[-86.667,0,0],"ti":[86.667,0,0]},{"i":{"x":0.749,"y":0.749},"o":{"x":0.333,"y":0.333},"t":14,"s":[0,0,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.926,"y":1},"o":{"x":1,"y":0},"t":55,"s":[0,0,0],"to":[86.667,0,0],"ti":[-86.667,0,0]},{"t":68,"s":[520,0,0]}],"ix":2,"l":2,"x":"var $bm_rt;\nvar time1, time2, time3, time4, start, x, x;\ntime1 = transform.position.key(1).time;\ntime2 = transform.position.key(2).time;\ntime3 = transform.position.key(3).time;\ntime4 = transform.position.key(4).time;\nstart = $bm_sum($bm_sum(content('Rectangle 1').content('Rectangle Path 1').size[0], thisComp.layer('.layerPlace').content('Rectangle 1').content('Rectangle Path 1').size[0]), 50);\nif ($bm_mul(time, 25) < 30) {\n    x = ease(time, time1, time2, start, 0);\n} else {\n    x = ease(time, time3, time4, 0, start);\n}\n$bm_rt = [\n    x,\n    value[1]\n];"},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[100,100],"ix":2,"x":"var $bm_rt;\nvar x, y;\nx = $bm_sum(thisComp.layer('.region').sourceRectAtTime().width, 20);\ny = 70;\n$bm_rt = [\n    x,\n    y\n];"},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.874509803922,0.6,0.070588235294,1],"ix":4,"x":"var $bm_rt;\nvar txt, myHex;\nfunction hexToColor(theHex) {\n    var r = theHex >> 16;\n    var g = (theHex & 65280) >> 8;\n    var b = theHex & 255;\n    return [\n        r / 255,\n        g / 255,\n        b / 255,\n        1\n    ];\n}\ntxt = thisComp.layer('#colors').text.sourceText.split(',')[1];\nmyHex = parseInt(txt, 16);\n$bm_rt = hexToColor(myHex);"},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1695,100],"ix":2,"x":"var $bm_rt;\nvar margin, x, y;\nmargin = 190;\nx = $bm_sub(1980, $bm_sum(thisComp.layer('.place').sourceRectAtTime().width, margin));\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"},"a":{"a":0,"k":[0,0],"ix":1,"x":"var $bm_rt;\nvar boxLength, boxHeight;\nboxLength = content('Rectangle 1').content('Rectangle Path 1').size[0];\nboxHeight = content('Rectangle 1').content('Rectangle Path 1').size[1];\n$bm_rt = [\n    boxLength / 2,\n    -boxHeight / 2\n];"},"s":{"a":1,"k":[{"i":{"x":[0,0.667],"y":[1,1]},"o":{"x":[0.039,0.333],"y":[0,0]},"t":3,"s":[0,100]},{"i":{"x":[0.706,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0]},"t":14,"s":[100,100]},{"i":{"x":[0.979,0.833],"y":[1,1]},"o":{"x":[1,0.167],"y":[0,0]},"t":55,"s":[100,100]},{"t":66,"s":[0,100]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":70,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":".layerPlace","cl":"layerPlace","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[100,100],"ix":2,"x":"var $bm_rt;\nvar x, y;\nx = $bm_sum(thisComp.layer('.place').sourceRectAtTime().width, 20);\ny = 70;\n$bm_rt = [\n    x,\n    y\n];"},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.337254901961,0.698039215686,0.866666666667,1],"ix":4,"x":"var $bm_rt;\nvar txt, myHex;\nfunction hexToColor(theHex) {\n    var r = theHex >> 16;\n    var g = (theHex & 65280) >> 8;\n    var b = theHex & 255;\n    return [\n        r / 255,\n        g / 255,\n        b / 255,\n        1\n    ];\n}\ntxt = thisComp.layer('#colors').text.sourceText.split(',')[0];\nmyHex = parseInt(txt, 16);\n$bm_rt = hexToColor(myHex);"},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,100],"ix":2,"x":"var $bm_rt;\nvar margin, x, y;\nmargin = 190;\nx = $bm_sub(1980, $bm_sum(thisComp.layer('.place').sourceRectAtTime().width, margin));\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"},"a":{"a":0,"k":[0,0],"ix":1,"x":"var $bm_rt;\nvar boxLength, boxHeight;\nboxLength = content('Rectangle 1').content('Rectangle Path 1').size[0];\nboxHeight = content('Rectangle 1').content('Rectangle Path 1').size[1];\n$bm_rt = [\n    -boxLength / 2,\n    -boxHeight / 2\n];"},"s":{"a":1,"k":[{"i":{"x":[0,0.667],"y":[1,1]},"o":{"x":[0.111,0.333],"y":[0,0]},"t":12,"s":[0,100]},{"i":{"x":[0.718,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0]},"t":22,"s":[100,100]},{"i":{"x":[0.977,0.833],"y":[1,1]},"o":{"x":[1,0.167],"y":[0,0]},"t":47,"s":[100,100]},{"t":57,"s":[0,100]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":70,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":5,"nm":"#colors","ln":"colors","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[907,-53,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"t":{"d":{"k":[{"s":{"s":40,"f":"Scada-Regular","t":"DF9912,56B2DD","ca":0,"j":0,"tr":0,"lh":48,"ls":0,"fc":[0.282,0.282,0.282]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":0,"op":70,"st":0,"bm":0}],"markers":[]}

//{"v":"5.7.13","fr":25,"ip":0,"op":70,"w":1920,"h":1080,"nm":"locatorOBS","ddd":0,"assets":[],"fonts":{"list":[{"origin":0,"fPath":"","fClass":"","fFamily":"Scada","fWeight":"","fStyle":"Regular","fName":"Scada-Regular","ascent":69.9996948242188}]},"layers":[{"ddd":0,"ind":1,"ty":5,"nm":".region","cl":"region","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1449,150,0],"ix":2,"l":2,"x":"var $bm_rt;\nvar margin, x, y;\nmargin = 200;\nx = $bm_sub(1980, $bm_sum(thisComp.layer('.place').sourceRectAtTime().width, margin));\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2,"x":"var $bm_rt;\nvar x, y;\nx = $bm_sum(thisLayer.sourceRectAtTime().left, thisLayer.sourceRectAtTime().width);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":28,"nm":"Set Matte","np":8,"mn":"ADBE Set Matte3","ix":1,"en":1,"ef":[{"ty":10,"nm":"Take Matte From Layer","mn":"ADBE Set Matte3-0001","ix":1,"v":{"a":0,"k":3,"ix":1}},{"ty":7,"nm":"Use For Matte","mn":"ADBE Set Matte3-0002","ix":2,"v":{"a":0,"k":4,"ix":2}},{"ty":7,"nm":"Invert Matte","mn":"ADBE Set Matte3-0003","ix":3,"v":{"a":0,"k":0,"ix":3}},{"ty":7,"nm":"If Layer Sizes Differ","mn":"ADBE Set Matte3-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Composite Matte with Original","mn":"ADBE Set Matte3-0005","ix":5,"v":{"a":0,"k":1,"ix":5}},{"ty":7,"nm":"Premultiply Matte Layer","mn":"ADBE Set Matte3-0006","ix":6,"v":{"a":0,"k":1,"ix":6}}]}],"t":{"d":{"k":[{"s":{"s":50,"f":"Scada-Regular","t":"country","ca":0,"j":0,"tr":0,"lh":60,"ls":0,"fc":[0.282,0.282,0.282]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":0,"op":70,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":5,"nm":".place","cl":"place","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1428,282,0],"ix":2,"l":2,"x":"var $bm_rt;\nvar spacer, x, y;\nspacer = 20;\nx = $bm_sum(thisComp.layer('.region').transform.position[0], spacer);\ny = thisComp.layer('.region').transform.position[1];\n$bm_rt = [\n    x,\n    y\n];"},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2,"x":"var $bm_rt;\nvar x, y;\nx = thisLayer.sourceRectAtTime().left;\n;\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":28,"nm":"Set Matte","np":8,"mn":"ADBE Set Matte3","ix":1,"en":1,"ef":[{"ty":10,"nm":"Take Matte From Layer","mn":"ADBE Set Matte3-0001","ix":1,"v":{"a":0,"k":4,"ix":1}},{"ty":7,"nm":"Use For Matte","mn":"ADBE Set Matte3-0002","ix":2,"v":{"a":0,"k":4,"ix":2}},{"ty":7,"nm":"Invert Matte","mn":"ADBE Set Matte3-0003","ix":3,"v":{"a":0,"k":0,"ix":3}},{"ty":7,"nm":"If Layer Sizes Differ","mn":"ADBE Set Matte3-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Composite Matte with Original","mn":"ADBE Set Matte3-0005","ix":5,"v":{"a":0,"k":1,"ix":5}},{"ty":7,"nm":"Premultiply Matte Layer","mn":"ADBE Set Matte3-0006","ix":6,"v":{"a":0,"k":1,"ix":6}}]}],"t":{"d":{"k":[{"s":{"s":50,"f":"Scada-Regular","t":"City  long name vbnvbnvbnb1234565","ca":0,"j":0,"tr":0,"lh":60,"ls":0,"fc":[0.282,0.282,0.282]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":0,"op":70,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"layerRegion","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.06,"y":0},"t":1,"s":[520,0,0],"to":[-86.667,0,0],"ti":[86.667,0,0]},{"i":{"x":0.749,"y":0.749},"o":{"x":0.333,"y":0.333},"t":14,"s":[0,0,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.926,"y":1},"o":{"x":1,"y":0},"t":55,"s":[0,0,0],"to":[86.667,0,0],"ti":[-86.667,0,0]},{"t":68,"s":[520,0,0]}],"ix":2,"l":2,"x":"var $bm_rt;\nvar time1, time2, time3, time4, start, x, x;\ntime1 = transform.position.key(1).time;\ntime2 = transform.position.key(2).time;\ntime3 = transform.position.key(3).time;\ntime4 = transform.position.key(4).time;\nstart = $bm_sum($bm_sum(content('Rectangle 1').content('Rectangle Path 1').size[0], thisComp.layer('layerPlace').content('Rectangle 1').content('Rectangle Path 1').size[0]), 50);\nif ($bm_mul(time, 25) < 30) {\n    x = ease(time, time1, time2, start, 0);\n} else {\n    x = ease(time, time3, time4, 0, start);\n}\n$bm_rt = [\n    x,\n    value[1]\n];"},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[100,100],"ix":2,"x":"var $bm_rt;\nvar x, y;\nx = $bm_sum(thisComp.layer('.region').sourceRectAtTime().width, 20);\ny = 70;\n$bm_rt = [\n    x,\n    y\n];"},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.874509803922,0.6,0.070588235294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1695,100],"ix":2,"x":"var $bm_rt;\nvar margin, x, y;\nmargin = 190;\nx = $bm_sub(1980, $bm_sum(thisComp.layer('.place').sourceRectAtTime().width, margin));\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"},"a":{"a":0,"k":[0,0],"ix":1,"x":"var $bm_rt;\nvar boxLength, boxHeight;\nboxLength = content('Rectangle 1').content('Rectangle Path 1').size[0];\nboxHeight = content('Rectangle 1').content('Rectangle Path 1').size[1];\n$bm_rt = [\n    boxLength / 2,\n    -boxHeight / 2\n];"},"s":{"a":1,"k":[{"i":{"x":[0,0.667],"y":[1,1]},"o":{"x":[0.039,0.333],"y":[0,0]},"t":3,"s":[0,100]},{"i":{"x":[0.706,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0]},"t":14,"s":[100,100]},{"i":{"x":[0.979,0.833],"y":[1,1]},"o":{"x":[1,0.167],"y":[0,0]},"t":55,"s":[100,100]},{"t":66,"s":[0,100]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":70,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"layerPlace","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[100,100],"ix":2,"x":"var $bm_rt;\nvar x, y;\nx = $bm_sum(thisComp.layer('.place').sourceRectAtTime().width, 20);\ny = 70;\n$bm_rt = [\n    x,\n    y\n];"},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.337254901961,0.698039215686,0.866666666667,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,100],"ix":2,"x":"var $bm_rt;\nvar margin, x, y;\nmargin = 190;\nx = $bm_sub(1980, $bm_sum(thisComp.layer('.place').sourceRectAtTime().width, margin));\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"},"a":{"a":0,"k":[0,0],"ix":1,"x":"var $bm_rt;\nvar boxLength, boxHeight;\nboxLength = content('Rectangle 1').content('Rectangle Path 1').size[0];\nboxHeight = content('Rectangle 1').content('Rectangle Path 1').size[1];\n$bm_rt = [\n    -boxLength / 2,\n    -boxHeight / 2\n];"},"s":{"a":1,"k":[{"i":{"x":[0,0.667],"y":[1,1]},"o":{"x":[0.111,0.333],"y":[0,0]},"t":12,"s":[0,100]},{"i":{"x":[0.718,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0]},"t":22,"s":[100,100]},{"i":{"x":[0.977,0.833],"y":[1,1]},"o":{"x":[1,0.167],"y":[0,0]},"t":47,"s":[100,100]},{"t":57,"s":[0,100]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":70,"st":0,"bm":0}],"markers":[]}