(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./portoInfoBox/cssMixins/color.pcss":function(e,o){e.exports="@if $iconColor != false {\r\n\t.porto-icon-color-$selector {\r\n\t\tcolor: $iconColor\r\n\t}\r\n\t.porto-icon-color-$selector svg {\r\n\t\tfill: $iconColor\r\n\t}\r\n}"},"./node_modules/raw-loader/index.js!./portoInfoBox/cssMixins/iconBgColor.pcss":function(e,o){e.exports="@if $iconBgColor != false {\r\n\t.porto-icon-bgcolor-$selector .porto-sicon-img.porto-u-circle-img:before {\r\n\t\tborder-color: $iconBgColor\r\n\t}\r\n\t.porto-icon-bgcolor-$selector .porto-sicon-img, .porto-icon-bgcolor-$selector .porto-icon {\r\n\t\tbackground: $iconBgColor\r\n\t}\r\n}\r\n"},"./node_modules/raw-loader/index.js!./portoInfoBox/cssMixins/infoBox.pcss":function(e,o){e.exports="@if $imgWidth != false {\r\n\t.porto-sicon-img.porto-width-$imgWidth {\r\n\t\tfont-size: $(imgWidth)px;\r\n\t}\r\n}\r\n\r\n@if $iconSize != false {\r\n\t.porto-icon.porto-icon-$iconSize, .porto-icon.none.porto-icon-$iconSize {\r\n\t\tfont-size: $(iconSize)px;\r\n\t}\r\n}\r\n\r\n@if $iconBorderSpacing != false {\r\n\t.porto-icon-padding-$iconBorderSpacing .porto-sicon-img.porto-u-circle-img:before {\r\n\t\tborder-width: calc($(iconBorderSpacing)px + 1px);\r\n\t}\r\n\t.porto-icon-padding-$iconBorderSpacing .porto-sicon-img {\r\n\t\tpadding: $(iconBorderSpacing)px;\r\n\t}\r\n\t.porto-icon-padding-$iconBorderSpacing .porto-icon.advanced {\r\n\t\twidth: $(iconBorderSpacing)px;\r\n\t\theight: $(iconBorderSpacing)px;\r\n\t\tline-height: $(iconBorderSpacing)px;\r\n\t}\r\n}"},"./portoInfoBox/index.js":function(e,o,t){"use strict";t.r(o);var i=t("./node_modules/vc-cake/index.js"),l=t.n(i),n=t("./node_modules/@babel/runtime/helpers/extends.js"),a=t.n(n),c=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),s=t.n(c),r=t("./node_modules/@babel/runtime/helpers/createClass.js"),_=t.n(r),p=t("./node_modules/@babel/runtime/helpers/inherits.js"),u=t.n(p),g=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),d=t.n(g),b=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),m=t.n(b),f=t("./node_modules/react/index.js"),v=t.n(f);function h(e){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=m()(e);if(o){var l=m()(this).constructor;t=Reflect.construct(i,arguments,l)}else t=i.apply(this,arguments);return d()(this,t)}}var y=function(e){u()(t,e);var o=h(t);function t(e){return s()(this,t),o.call(this,e)}return _()(t,[{key:"render",value:function(){var e=this.props,o=e.id,t=e.editor,l=e.atts,n=this.applyDO("all"),c=(l.icon_type,l.icon_cl),s=l.icon_img,r=l.icon_img_url,_=(l.img_width,s?this.getImageUrl(s):r),p="porto-sicon-box";"top"==l.pos&&"center"!=l.h_align&&(p+=" text-".concat(l.h_align)),l.hover_effect&&(p+=" ".concat(l.hover_effect)),l.pos&&(p+=" ".concat(l.pos,"-icon"),"default"==l.pos&&l.content.props&&l.content.props["data-vcvs-html"]&&(p+=" flex-wrap"));var u={},g={},d={};(l.el_class&&(p+=" ".concat(l.el_class)),l.title_use_theme_fonts&&l.title_google_font&&l.title_google_font.fontFamily&&(u.fontFamily=l.title_google_font.fontFamily,l.title_google_font.fontStyle&&("italic"===l.title_google_font.fontStyle.style&&(u.fontStyle="italic"),l.title_google_font.fontStyle.weight&&(u.fontWeight=l.title_google_font.fontStyle.weight))),l.title_font_style&&(u.fontWeight=Number(l.title_font_style)),l.title_font_size)&&(l.title_font_size.replace(/[0-9.]/g,"")||(l.title_font_size+="px"),u.fontSize=l.title_font_size);l.title_font_line_height&&(!l.title_font_line_height.replace(/[0-9.]/g,"")&&l.title_font_line_height>3&&(l.title_font_line_height+="px"),u.lineHeight=l.title_font_line_height);(l.title_font_letter_spacing&&(u.letterSpacing=l.title_font_letter_spacing),l.title_font_color&&(u.color=l.title_font_color),l.title_margin_bottom)&&(l.title_margin_bottom.replace(/[0-9.]/g,"")||(l.title_margin_bottom+="px"),u.marginBottom=l.title_margin_bottom);(l.subtitle_font_style&&(g.fontWeight=Number(l.subtitle_font_style)),l.subtitle_font_size)&&(l.subtitle_font_size.replace(/[0-9.]/g,"")||(l.subtitle_font_size+="px"),g.fontSize=l.subtitle_font_size);l.subtitle_font_line_height&&(!l.subtitle_font_line_height.replace(/[0-9.]/g,"")&&l.subtitle_font_line_height>3&&(l.subtitle_font_line_height+="px"),g.lineHeight=l.subtitle_font_line_height);(l.subtitle_font_letter_spacing&&(g.letterSpacing=l.subtitle_font_letter_spacing),l.subtitle_font_color&&(g.color=l.subtitle_font_color),l.sub_title_margin_bottom)&&(l.sub_title_margin_bottom.replace(/[0-9.]/g,"")||(l.sub_title_margin_bottom+="px"),g.marginBottom=l.sub_title_margin_bottom);(l.desc_use_theme_fonts&&l.desc_google_font&&l.desc_google_font.fontFamily&&(d.fontFamily=l.desc_google_font.fontFamily,l.desc_google_font.fontStyle&&("italic"===l.desc_google_font.fontStyle.style&&(d.fontStyle="italic"),l.desc_google_font.fontStyle.weight&&(d.fontWeight=l.desc_google_font.fontStyle.weight))),l.desc_font_style&&(d.fontWeight=l.desc_font_style),l.desc_font_size)&&(l.desc_font_size.replace(/[0-9.]/g,"")||(l.desc_font_size+="px"),d.fontSize=l.desc_font_size);l.desc_font_line_height&&(!l.desc_font_line_height.replace(/[0-9.]/g,"")&&l.desc_font_line_height>3&&(l.desc_font_line_height+="px"),d.lineHeight=l.desc_font_line_height);l.desc_font_color&&(d.color=l.desc_font_color);var b,m=null,f={},h=l.link,y=h.url,x=h.title,S=h.targetBlank,B=h.relNofollow,C={};if(l.link&&y&&(C={href:y,title:x,target:S?"_blank":void 0,rel:B?"nofollow":void 0}),l.icon_margin_right){var w=Object(i.getService)("utils");l.icon_margin_right.replace(/[0-9.]/g,"")||(l.icon_margin_right+="px"),w.isRTL()?f.marginLeft=l.icon_margin_right:f.marginRight=l.icon_margin_right}if("custom"==l.icon_type){var I="porto-sicon-img";if("circle"==l.icon_style?I+=" porto-u-circle":"circle_img"==l.icon_style?I+=" porto-u-circle-img":"square"==l.icon_style&&(I+=" porto-u-square"),l.img_width&&(I+=" porto-width-"+Number(l.img_width)),"advanced"!=l.icon_style&&"circle_img"!=l.icon_style||!l.icon_border_style||(f.borderStyle=l.icon_border_style,l.icon_color_border&&(f.borderColor=l.icon_color_border),l.icon_border_size&&(f.borderWidth=l.icon_border_size+"px"),l.icon_border_radius&&(f.borderRadius=l.icon_border_radius+"px")),_){f.display="inline-block";var z={};z.alt=s&&s.alt?s.alt:"",b=v.a.createElement("div",{className:I,style:f},v.a.createElement("img",a()({className:"img-icon",src:_},z)))}}else if(c&&c.icon){var N="porto-icon";l.icon_style&&(N+=" ".concat(l.icon_style)),l.icon_size&&(N+=" porto-icon-"+Number(l.icon_size));var k=this.getMixinData("color");k&&(N+=" porto-icon-color-".concat(k.selector)),"none"!==l.icon_style&&""!==l.icon_color_bg&&(f.backgroundColor=l.icon_color_bg),"advanced"===l.icon_style&&(l.icon_border_style&&(f.borderStyle=l.icon_border_style,l.icon_color_border&&(f.borderColor=l.icon_color_border),l.icon_border_size&&(f.borderWidth=l.icon_border_size+"px")),f.borderRadius=l.icon_border_radius+"px"),f.display="inline-block",b=v.a.createElement("div",{className:N,style:f},v.a.createElement("i",{className:c.icon}))}if(b){var E="porto-just-icon-wrapper";if("advanced"!=l.icon_style&&"circle_img"!=l.icon_style||!l.icon_border_spacing||(E+=" porto-icon-padding-".concat(l.icon_border_spacing)),l.icon_color_bg){var $=this.getMixinData("iconBgColor");E+=" porto-icon-bgcolor-".concat($.selector)}var F={textAlign:"center"};if(l.icon_margin_bottom)l.icon_margin_bottom.replace(/[0-9.]/g,"")||(l.icon_margin_bottom+="px"),F.marginBottom=l.icon_margin_bottom;b=v.a.createElement("div",{className:E,style:F},b)}var T="";l.pos&&(T="porto-sicon-".concat(l.pos));var M={};if(y&&"box"===l.read_more||(M=Object.assign(M,t,{id:"el-"+o},n)),"heading-right"===l.pos||"right"===l.pos){if(l.title){var j=v.a.createElement(l.heading_tag,{className:"porto-sicon-title",style:u,dangerouslySetInnerHTML:{__html:l.title.replace(/<script.*?\/script>/g,"")}});m=v.a.createElement("div",{className:"porto-sicon-header"},y&&"title"==l.read_more&&v.a.createElement("a",a()({className:"porto-sicon-box-link"},C),j),(!y||"title"!=l.read_more)&&j,l.subtitle&&v.a.createElement("p",{style:g,dangerouslySetInnerHTML:{__html:l.subtitle.replace(/<script.*?\/script>/g,"")}}))}var D={};"right"!==l.pos&&(D=M),m=v.a.createElement("div",a()({className:"right"===l.pos?"porto-sicon-body":p},D),m,"right"!=l.pos&&(l.icon||l.icon_img_url)&&v.a.createElement("div",{className:T},b),l.content.props&&l.content.props["data-vcvs-html"]&&v.a.createElement("div",{className:"porto-sicon-description",style:d},l.content,y&&"more"==l.read_more&&v.a.createElement("a",a()({className:"porto-sicon-read"},C),l.read_text))),"right"===l.pos&&(m=v.a.createElement("div",a()({className:p},M),m,v.a.createElement("div",{className:T},b)))}else{var R="",V="";l.title&&(R=v.a.createElement(l.heading_tag,{className:"porto-sicon-title",style:u,dangerouslySetInnerHTML:{__html:l.title.replace(/<script.*?\/script>/g,"")}}),R=v.a.createElement("div",{className:"porto-sicon-header"},y&&"title"==l.read_more&&v.a.createElement("a",a()({className:"porto-sicon-box-link"},C),R),(!y||"title"!=l.read_more)&&R,l.subtitle&&v.a.createElement("p",{style:g},l.subtitle))),l.content.props&&l.content.props["data-vcvs-html"]&&(V=v.a.createElement("div",{className:"porto-sicon-description",style:d},l.content,y&&"more"==l.read_more&&v.a.createElement("a",a()({className:"porto-sicon-read xx"},C),l.read_text))),m="left"==l.pos?v.a.createElement("div",a()({className:p},M),(l.icon||l.icon_img_url)&&v.a.createElement("div",{className:T},b),v.a.createElement("div",{className:"porto-sicon-body"},R,V)):v.a.createElement("div",a()({className:p},M),(l.icon||l.icon_img_url)&&v.a.createElement("div",{className:T},b),R,V)}return y&&"box"==l.read_more&&(m=v.a.createElement("a",a()({className:"porto-sicon-box-link"},C,t,{id:"el-"+o},n),m)),m}}]),t}(Object(i.getService)("portoComponent").shortcodeComponent);(0,l.a.getService("cook").add)(t("./portoInfoBox/settings.json"),(function(e){e.add(y)}),{css:!1,editorCss:!1,mixins:{infoBox:{mixin:t("./node_modules/raw-loader/index.js!./portoInfoBox/cssMixins/infoBox.pcss")},color:{mixin:t("./node_modules/raw-loader/index.js!./portoInfoBox/cssMixins/color.pcss")},iconBgColor:{mixin:t("./node_modules/raw-loader/index.js!./portoInfoBox/cssMixins/iconBgColor.pcss")}}})},"./portoInfoBox/settings.json":function(e){e.exports=JSON.parse('{"icon_type":{"type":"dropdown","access":"public","value":"icon","options":{"label":"Icon to display","description":"Use an existing font icon or upload a custom image.","values":[{"label":"Icon Fonts","value":"icon"},{"label":"Custom Image Icon","value":"custom"}]}},"icon_cl":{"type":"iconpicker","access":"public","value":{"icon":"porto-icon-user","iconSet":"porto"},"options":{"label":"Icon","onChange":{"rules":{"icon_type":{"rule":"value","options":{"value":"icon"}}},"actions":[{"action":"toggleVisibility"}]}}},"icon_img":{"type":"attachimage","access":"public","value":"","options":{"label":"Upload Image Icon:","description":"Upload the custom image icon.","onChange":{"rules":{"icon_type":{"rule":"value","options":{"value":"custom"}}},"actions":[{"action":"toggleVisibility"}]}}},"icon_img_url":{"type":"url","access":"public","value":{"url":"","title":"","targetBlank":false,"relNofollow":false},"options":{"label":"External Image Url","onChange":{"rules":{"icon_type":{"rule":"value","options":{"value":"custom"}}},"actions":[{"action":"toggleVisibility"}]}}},"img_width":{"type":"number","access":"public","value":48,"options":{"label":"Image Width (px)","min":16,"max":512,"cssMixin":{"mixin":"infoBox","property":"imgWidth","namePattern":"[\\\\da-f]+"},"onChange":{"rules":{"icon_type":{"rule":"value","options":{"value":"custom"}}},"actions":[{"action":"toggleVisibility"}]}}},"icon_size":{"type":"number","access":"public","value":32,"options":{"label":"Icon Size (px)","min":12,"max":72,"cssMixin":{"mixin":"infoBox","property":"iconSize","namePattern":"[\\\\da-f]+"},"onChange":{"rules":{"icon_type":{"rule":"value","options":{"value":"icon"}}},"actions":[{"action":"toggleVisibility"}]}}},"icon_color":{"type":"color","access":"public","value":"#333333","options":{"label":"Icon color","cssMixin":{"mixin":"color","property":"iconColor","namePattern":"[\\\\da-f]+"},"onChange":{"rules":{"icon_type":{"rule":"value","options":{"value":"icon"}}},"actions":[{"action":"toggleVisibility"}]}}},"icon_style":{"type":"dropdown","access":"public","value":"none","options":{"label":"Icon Style","description":"Use an existing font icon or upload a custom image.","values":[{"label":"Simple","value":"none"},{"label":"Circle Background","value":"circle"},{"label":"Circle Image","value":"circle_img"},{"label":"Square Background","value":"square"},{"label":"Design your own","value":"advanced"}]}},"icon_color_bg":{"type":"color","access":"public","value":"","options":{"label":"Background Color","description":"Select background color for icon.","cssMixin":{"mixin":"iconBgColor","property":"iconBgColor","namePattern":"[\\\\da-f]+"},"onChange":{"rules":{"icon_style":{"rule":"valueIn","options":{"values":["circle_img","advanced","square","circle"]}}},"actions":[{"action":"toggleVisibility"}]}}},"icon_border_style":{"type":"dropdown","access":"public","value":"none","options":{"label":"Icon Border Style","description":"Select the border style for icon.","values":[{"label":"None","value":""},{"label":"Solid","value":"solid"},{"label":"Dashed","value":"dashed"},{"label":"Dotted","value":"dotted"},{"label":"Double","value":"double"},{"label":"Inset","value":"inset"},{"label":"Outset","value":"outset"}],"onChange":{"rules":{"icon_style":{"rule":"valueIn","options":{"values":["circle_img","advanced"]}}},"actions":[{"action":"toggleVisibility"}]}}},"icon_color_border":{"type":"color","access":"public","value":"","options":{"label":"Border Color","description":"Select border color for icon.","onChange":{"rules":{"icon_style":{"rule":"valueIn","options":{"values":["circle_img","advanced"]}},"icon_border_style":{"rule":"required"}},"actions":[{"action":"toggleVisibility"}]}}},"icon_border_size":{"type":"number","access":"public","value":1,"options":{"label":"Border Width","description":"Thickness of the border.","min":1,"max":10,"onChange":{"rules":{"icon_style":{"rule":"valueIn","options":{"values":["circle_img","advanced"]}},"icon_border_style":{"rule":"required"}},"actions":[{"action":"toggleVisibility"}]}}},"icon_border_radius":{"type":"number","access":"public","value":500,"options":{"label":"Border Radius","min":1,"max":500}},"icon_border_spacing":{"type":"number","access":"public","value":50,"options":{"label":"Background Size","description":"Spacing from center of the icon till the boundary of border / background","min":0,"max":500,"cssMixin":{"mixin":"infoBox","property":"iconBorderSpacing","namePattern":"[\\\\d]+"},"onChange":{"rules":{"icon_style":{"rule":"valueIn","options":{"values":["circle_img","advanced"]}}},"actions":[{"action":"toggleVisibility"}]}}},"title":{"type":"string","access":"public","value":"","options":{"label":"Title","description":"Provide the title for this icon box."}},"subtitle":{"type":"string","access":"public","value":"","options":{"label":"Sub title","description":"Provide the sub title for this icon box."}},"content":{"type":"htmleditor","access":"public","value":"","options":{"label":"Description","description":"Provide the description for this icon box."}},"read_more":{"type":"dropdown","access":"public","value":"none","options":{"label":"Apply link to:","values":[{"label":"No Link","value":"none"},{"label":"Complete Box","value":"box"},{"label":"Box Title","value":"title"},{"label":"Display Read More","value":"more"}]}},"link":{"type":"url","access":"public","value":"","options":{"label":"Add Link","description":"Add a custom link or select existing page.","onChange":{"rules":{"read_more":{"rule":"valueIn","options":{"values":["box","title","more"]}}},"actions":[{"action":"toggleVisibility"}]}}},"read_text":{"type":"string","access":"public","value":"Read More","options":{"label":"Read More Text","description":"Customize the read more text.","onChange":{"rules":{"read_more":{"rule":"value","options":{"value":"more"}}},"actions":[{"action":"toggleVisibility"}]}}},"hover_effect":{"type":"dropdown","access":"public","value":"style_1","options":{"label":"Select Hover Effect type","description":"Select the type of effct you want on hover","values":[{"label":"No Effect","value":"style_1"},{"label":"Icon Zoom","value":"style_2"},{"label":"Icon Bounce Up","value":"style_3"}]}},"pos":{"type":"dropdown","access":"public","value":"default","options":{"label":"Box Style","description":"Select icon position. Icon box style will be changed according to the icon position.","values":[{"label":"Icon at Left with heading","value":"default"},{"label":"Icon at Right with heading","value":"heading-right"},{"label":"Icon at Left","value":"left"},{"label":"Icon at Right","value":"right"},{"label":"Icon at Top","value":"top"}]}},"h_align":{"type":"dropdown","access":"public","value":"center","options":{"label":"Horizontal Align","values":[{"label":"Left","value":"left"},{"label":"Right","value":"right"},{"label":"Center","value":"center"}],"onChange":{"rules":{"pos":{"rule":"value","options":{"value":"top"}}},"actions":[{"action":"toggleVisibility"}]}}},"heading_tag":{"type":"dropdown","access":"public","value":"h3","options":{"label":"Title Tag","values":[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"}]}},"title_use_theme_fonts":{"type":"toggle","access":"public","value":false,"options":{"label":"Use Custom Font for Title"}},"title_google_font":{"type":"googleFonts","access":"public","value":{"fontFamily":"","fontStyle":{"weight":"","style":""},"status":"active"},"options":{"label":"Title Font family","onChange":{"rules":{"title_use_theme_fonts":{"rule":"toggle"}},"actions":[{"action":"toggleVisibility"}]}}},"title_font_size":{"type":"string","access":"public","value":"","options":{"label":"Title Font size"}},"title_font_style":{"type":"dropdown","access":"public","value":"","options":{"label":"Title Font weight","values":[{"label":"Default","value":""},{"label":"200","value":"200"},{"label":"300","value":"300"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"800","value":"800"},{"label":"900","value":"900"}]}},"title_font_line_height":{"type":"string","access":"public","value":"","options":{"label":"Title Line height"}},"title_font_letter_spacing":{"type":"string","access":"public","value":"","options":{"label":"Title Letter spacing"}},"title_font_color":{"type":"color","access":"public","value":"","options":{"label":"Title Color"}},"subtitle_font_size":{"type":"string","access":"public","value":"","options":{"label":"Sub title Font size"}},"subtitle_font_style":{"type":"dropdown","access":"public","value":"","options":{"label":"Sub title Font weight","values":[{"label":"Default","value":""},{"label":"200","value":"200"},{"label":"300","value":"300"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"800","value":"800"},{"label":"900","value":"900"}]}},"subtitle_font_line_height":{"type":"string","access":"public","value":"","options":{"label":"Sub title Line height"}},"subtitle_font_letter_spacing":{"type":"string","access":"public","value":"","options":{"label":"Sub title Letter spacing"}},"subtitle_font_color":{"type":"color","access":"public","value":"","options":{"label":"Sub title Color"}},"desc_use_theme_fonts":{"type":"toggle","access":"public","value":false,"options":{"label":"Use Custom Font for Description"}},"desc_google_font":{"type":"googleFonts","access":"public","value":{"fontFamily":"","fontStyle":{"weight":"","style":""},"status":"active"},"options":{"label":"Description Font family","onChange":{"rules":{"desc_use_theme_fonts":{"rule":"toggle"}},"actions":[{"action":"toggleVisibility"}]}}},"desc_font_size":{"type":"string","access":"public","value":"","options":{"label":"Description Font size"}},"desc_font_style":{"type":"dropdown","access":"public","value":"","options":{"label":"Description Font weight","values":[{"label":"Default","value":""},{"label":"200","value":"200"},{"label":"300","value":"300"},{"label":"400","value":"400"},{"label":"500","value":"500"},{"label":"600","value":"600"},{"label":"700","value":"700"},{"label":"800","value":"800"},{"label":"900","value":"900"}]}},"desc_font_line_height":{"type":"string","access":"public","value":"","options":{"label":"Description Line height"}},"desc_font_color":{"type":"color","access":"public","value":"","options":{"label":"Description Color"}},"icon_margin_bottom":{"type":"string","access":"public","value":"","options":{"label":"Icon Margin Bottom"}},"icon_margin_right":{"type":"string","access":"public","value":"","options":{"label":"Icon Margin Right"}},"title_margin_bottom":{"type":"string","access":"public","value":"","options":{"label":"Title Margin Bottom"}},"sub_title_margin_bottom":{"type":"string","access":"public","value":"","options":{"label":"Header Margin Bottom"}},"designOptions":{"type":"designOptions","access":"public","value":{},"options":{"label":"Design Options"}},"editFormTab1":{"type":"group","access":"protected","value":["icon_type","icon_cl","icon_img","icon_img_url","img_width","icon_size","icon_color","icon_style","icon_color_bg","icon_border_style","icon_color_border","icon_border_size","icon_border_radius","icon_border_spacing","title","subtitle","content","read_more","link","read_text","hover_effect","pos","h_align","el_class"],"options":{"label":"Info Box"}},"editFormTab2":{"type":"group","access":"protected","value":["heading_tag","title_use_theme_fonts","title_google_font","title_font_size","title_font_style","title_font_line_height","title_font_letter_spacing","title_font_color","subtitle_font_size","subtitle_font_style","subtitle_font_line_height","subtitle_font_letter_spacing","subtitle_font_color","desc_use_theme_fonts","desc_google_font","desc_font_size","desc_font_style","desc_font_line_height","desc_font_letter_spacing","desc_font_color","icon_margin_bottom","icon_margin_right","title_margin_bottom","sub_title_margin_bottom"],"options":{"label":"Style"}},"metaEditFormTabs":{"type":"group","access":"protected","value":["editFormTab1","editFormTab2","designOptions"]},"relatedTo":{"type":"group","access":"protected","value":["General"]},"el_class":{"type":"string","access":"public","value":"","options":{"label":"Extra class name","description":"Add an extra class name to the element and refer to it from Custom CSS option."}},"tag":{"access":"protected","type":"string","value":"portoInfoBox"}}')}},[["./portoInfoBox/index.js"]]]);