(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{MN1z:function(e,a,t){"use strict";t.r(a);var l=t("JX7q"),n=t("dI71"),r=t("q1tI"),c=t.n(r),s=t("TJpk"),o=t("ktc5"),m=t.n(o),i=t("9eSz"),d=t.n(i),g=t("Wbzz"),u=t("1eu9"),p=t.n(u),E=t("DVxW"),v=t("DjNx"),h=t("VUD3"),N=t("i89v"),b=t("1oc3"),f=t("gp0s"),y=t("l34r"),k=t("YWSr"),P=t.n(k),I=t("sPdm"),C=t.n(I),w=t("zU7u"),H=t.n(w),S=t("rJJV"),x=t.n(S),T=t("Oj1X"),M=t.n(T),L=(t("dI+G"),t("WZq3")),D=t.n(L),_=t("2Yz5"),W=t.n(_),R={pageType:"theStudyPagination",strapline:"Resources",title:[c.a.createElement("span",null,"The")," Study"],content:"Providing news and education on all things regarding Practice Management and Digital Marketing to help jumpstart your Practice."},G=function(e){return c.a.createElement("div",{className:D.a.responsiveTabTrigger+" col-sm-12 d-lg-none responsive-tab-trigger"},c.a.createElement("span",{onClick:e.onClick,onKeyPress:e.onClick,"data-column":"latest",role:"button",tabIndex:"0",className:("latest"===e.currentColumn?D.a.active+" active ":"")+D.a.blogHeading+" blog-heading"},"Latest Posts"),c.a.createElement("span",{onClick:e.onClick,onKeyPress:e.onClick,"data-column":"popular",role:"button",tabIndex:"0",className:("popular"===e.currentColumn?D.a.active+" active ":"")+D.a.blogHeading+" blog-heading"},"Popular Posts"),c.a.createElement("div",{className:D.a.spacer+" "+D.a.small+" "+D.a.solid}))},V=function(e){return c.a.createElement("div",{className:("latest"===e.currentColumn?D.a.active+" active":D.a.hidden+" hidden")+" col-sm-12 col-lg-8 latest-posts"},e.children)},J=function(e){return c.a.createElement("div",{className:("popular"===e.currentColumn?D.a.active+" active":D.a.hidden+" hidden")+" col-sm-12 col-md-12 col-lg-4 sidebar"},e.children)},j=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={currentColumn:"latest"},t.onClick=t.onClick.bind(Object(l.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.setState({currentColumn:e.currentTarget.dataset.column})},t.render=function(){var e=this,a=c.a.Children.map(this.props.children,(function(a){return c.a.cloneElement(a,{currentColumn:e.state.currentColumn})}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(G,{onClick:this.onClick,currentColumn:this.state.currentColumn}),a)},a}(r.Component);a.default=function(e){var a,t=e.data,l=e.pageContext,n=t,r=[{name:"Digital Marketing",slug:"digital-marketing",image:n.marketingCategoryImage.childImageSharp.fluid.src},{name:"Practice Management",slug:"practice-management",image:n.practiceManagementImage.childImageSharp.fluid.src},{name:"Genius Lab",slug:"genius-lab",image:n.geniusLabImage.childImageSharp.fluid.src}],o=1===l.currentPage,i=l.currentPage===l.numPages,u=l.currentPage-1==1?"/blog/"+l.slug:"/blog/"+l.slug+"/"+(l.currentPage-1).toString(),k="/blog/"+l.slug+"/"+(l.currentPage+1).toString(),I=l.currentPage,w=l.numPages;w>5?I-2>=1&&I+2<=w?a=I-2:I-2<1?a=1:I+2>w&&(a=w-(l.numPaginationLinks-1)):a=1;var S=function(e){for(var a=t.popular.edges.length,l=0;a<4;l++)e.push(t.latest.edges[l]),a++;return e}(t.popular.edges);return c.a.createElement("div",{className:D.a.tagsPage+" "+W.a.rowStyling},c.a.createElement(E.a,null,c.a.createElement(s.Helmet,null,c.a.createElement("title",null,""+l.name," - Doctor Genius | Doctor Genius"),c.a.createElement("meta",{name:"description",content:""}),c.a.createElement("meta",{name:"robots",content:"noindex,nofollow"})),c.a.createElement("div",{className:"the-study"},c.a.createElement(p.a,{fluid:t.heroBg.childImageSharp.fluid},c.a.createElement(b.a,{pageType:R.pageType,strapline:R.strapline,title:R.title,content:R.content})),c.a.createElement(v.a,null,c.a.createElement(h.a,null,c.a.createElement("div",{className:W.a.row+" "+W.a.padded+" "+D.a.category+" category"},r.map((function(e){return c.a.createElement("div",{className:"col-sm-4",key:e.name},c.a.createElement("a",{href:"/blog/"+e.slug},c.a.createElement("div",{className:D.a.categoryImage+" category-image"},c.a.createElement("img",{src:e.image,alt:e.name,className:D.a.imgResponsive}),c.a.createElement("div",{className:D.a.label+" "+D.a.primary},c.a.createElement("p",null,e.name)))))}))),c.a.createElement("div",{className:W.a.row+" "+W.a.padded+" align-items-start short-top"},c.a.createElement(j,null,c.a.createElement(V,null,c.a.createElement("h3",{className:D.a.blogHeading+" blog-heading d-sm-none d-lg-block"},l.name," Posts"),c.a.createElement("div",{className:D.a.spacer+" "+D.a.small+" "+D.a.solid+" d-sm-none"}),t.tagPosts.edges.map((function(e){var a=e.node,t=a.categories.find((function(e){return r.find((function(a){return a.name===e.name}))}));return c.a.createElement("div",{className:D.a.latestPost+" latest-post",key:a.title},c.a.createElement("div",{className:D.a.featuredImageHolder+" featured-image-holder"},c.a.createElement("a",{href:"/blog/"+a.slug},c.a.createElement(d.a,{fluid:a.featured_media.localFile.childImageSharp.fluid}))),c.a.createElement("div",{className:D.a.contentHolder+" content-holder"},c.a.createElement("div",{className:D.a.details+" details"},c.a.createElement("p",{className:D.a.date+" date"},a.date),c.a.createElement("p",{className:D.a.label+" "+D.a.mute},c.a.createElement("a",{href:"/blog/"+r.find((function(e){return e.name===t.name})).slug},t.name))),c.a.createElement("h4",{className:D.a.title+" title"},c.a.createElement("a",{className:D.a.notALink,href:"/blog/"+a.slug},m.a.decode(a.title))),c.a.createElement("p",{className:D.a.excerpt+" excerpt",dangerouslySetInnerHTML:{__html:a.excerpt.replace(/<a.*?moretag.*?<\/a>/,'... <a href="/blog/'+a.slug+'" target="_blank">[ Read More ]</a>')}})))})),c.a.createElement("div",{className:D.a.pagination+" pagination"},!o&&c.a.createElement(g.a,{to:u,rel:"prev"},c.a.createElement("img",{src:x.a,alt:"Navigate to Previous"})),l.numPaginationLinks>1&&Array.from({length:l.numPaginationLinks},(function(e,t){return c.a.createElement(g.a,{key:"pagination-number"+(t+a),to:"/blog/"+l.slug+"/"+(t+a-1==0?"":"/"+(t+a))},c.a.createElement("p",{className:l.currentPage===t+a?D.a.active+" active":""},t+a))})),!i&&c.a.createElement(g.a,{to:k,rel:"next"},c.a.createElement("img",{src:M.a,alt:"Navigate to Next"})))),c.a.createElement(J,null,c.a.createElement("div",{className:D.a.stayConnected+" stay-connected"},c.a.createElement("div",{className:W.a.row},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("h3",{className:D.a.blogHeading+" blog-heading "},"Stay Connected"),c.a.createElement("div",{className:D.a.spacer+" "+D.a.small+" "+D.a.solid}))),c.a.createElement("div",{className:W.a.row},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:D.a.socialIconsWrapper+" social-icons-wrapper"},c.a.createElement("div",{className:D.a.socialIconDetail+" social-icon-detail"},c.a.createElement("img",{src:C.a,className:"social-icon",alt:"Facebook"}),c.a.createElement("p",null,"25k"),c.a.createElement("p",{className:D.a.socialUnit+" social-unit"},"Likes")),c.a.createElement("div",{className:D.a.socialIconDetail+" social-icon-detail"},c.a.createElement("img",{src:P.a,className:"social-icon",alt:"Twitter"}),c.a.createElement("p",null,"231k"),c.a.createElement("p",{className:D.a.socialUnit+" social-unit"},"Followers")),c.a.createElement("div",{className:D.a.socialIconDetail+" social-icon-detail"},c.a.createElement("img",{src:H.a,className:"social-icon",alt:"Instagram"}),c.a.createElement("p",null,"80k"),c.a.createElement("p",{className:D.a.socialUnit+" social-unit"},"Followers"))))),c.a.createElement(N.a,null)),c.a.createElement("div",{className:"most-popular"},c.a.createElement("div",{className:W.a.row+" "+W.a.padded+" "+W.a.shortTop+" "+W.a.shortBottom+" d-sm-none d-lg-block"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("h4",{className:D.a.blogHeading+" blog-heading "},"Most Popular"),c.a.createElement("div",{className:D.a.spacer+" "+D.a.small+" "+D.a.solid+" d-md-none"}))),c.a.createElement("div",{className:W.a.row},c.a.createElement("div",{className:"col-sm-12"},S.map((function(e){var a=e.node;return c.a.createElement("a",{href:"/blog/"+a.slug,key:a.title},c.a.createElement("div",{className:D.a.popularPost+" popular-post"},c.a.createElement("div",{className:D.a.featuredImageHolder+" featured-image-holder"},a.featured_media&&c.a.createElement(d.a,{fluid:a.featured_media.localFile.childImageSharp.fluid})),c.a.createElement("div",{className:D.a.contentHolder+" content-holder"},c.a.createElement("p",{className:D.a.details+" "+D.a.date+" d-md-block d-lg-none details date"},a.date),c.a.createElement("h5",{className:D.a.title+" title"},m.a.decode(a.title)),c.a.createElement("p",{className:D.a.details+" "+D.a.date+" d-none d-lg-block details date"},a.date),c.a.createElement("p",{className:D.a.excerpt+" excerpt d-md-block d-lg-none",dangerouslySetInnerHTML:{__html:a.excerpt.replace(/<a.*?moretag.*?<\/a>/,'... <a href="/blog/'+a.slug+'" target="_blank">[ Read More ]</a>')}}))))}))))),c.a.createElement("div",{className:D.a.categorySection+" category-section"},c.a.createElement("div",{className:W.a.row},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("h4",{className:D.a.blogHeading+" blog-heading "},"Category"),c.a.createElement("div",{className:D.a.spacer+" "+D.a.small+" "+D.a.solid}),r.map((function(e){return c.a.createElement("a",{href:"/blog/"+e.slug,key:e.name},c.a.createElement("span",{className:D.a.label+" "+D.a.primary},c.a.createElement("p",null,e.name)))})))))))),c.a.createElement("div",{className:D.a.eventsSection},c.a.createElement("div",{className:W.a.row+" "+W.a.padded+" "+W.a.tallTop},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"title-holder"},c.a.createElement("h4",{className:D.a.blogHeading+" blog-heading"},"Webinars & Events"),c.a.createElement("div",{className:"more-events"},c.a.createElement("a",{href:"/intentional-404/MoreEvents"},"View More",c.a.createElement("img",{src:M.a,alt:"View More Events"})))),c.a.createElement("div",{className:D.a.spacer+" "+D.a.solid+" "+D.a.small})),t.events.edges.map((function(e){var a=e.node;return c.a.createElement("div",{className:"col-sm-3",key:a.title},c.a.createElement("div",{className:"event-wrapper"},c.a.createElement(d.a,{fluid:t.eventsPlaceholder.childImageSharp.fluid,alt:"Recent Event"})),c.a.createElement("a",{href:a.link},c.a.createElement("p",null,m.a.decode(a.title))))})))),c.a.createElement(y.a,null),c.a.createElement(f.a,{smWidth:"11",sThin:!0}))))))}},WZq3:function(e,a,t){e.exports={tagsPage:"tags-module--tagsPage--g4cr4",hidden:"tags-module--hidden--MB1jY",blogHeading:"tags-module--blogHeading--1njJr",m2:"tags-module--m-2--273HN",categoryImage:"tags-module--categoryImage--DFWRv",label:"tags-module--label--2mhK5",latestPost:"tags-module--latestPost--1r7f_",popularPost:"tags-module--popularPost--M_Bxi",contentHolder:"tags-module--contentHolder--3ZK0r",responsiveTabTrigger:"tags-module--responsiveTabTrigger--3amfv",active:"tags-module--active--1Vyb7",featuredImageHolder:"tags-module--featuredImageHolder--28Qpr",details:"tags-module--details--1Ytv1",date:"tags-module--date--3e_AK",excerpt:"tags-module--excerpt--1t-v2",title:"tags-module--title--hozvx",pagination:"tags-module--pagination--2yG-d",stayConnected:"tags-module--stayConnected--3hYdf",socialIconsWrapper:"tags-module--socialIconsWrapper--2VB8Y",socialIconDetail:"tags-module--socialIconDetail--3AbcG",socialUnit:"tags-module--socialUnit--1lTf4",category:"tags-module--category--3NXcw",categorySection:"tags-module--categorySection--1V1dr",button:"tags-module--button--WdCio",eventsSection:"tags-module--eventsSection--QLrCN",titleHolder:"tags-module--title-holder--ZiuZQ",moreEvents:"tags-module--more-events--1HwoV",mute:"tags-module--mute--2dJRR",primary:"tags-module--primary--33IOG",spacer:"tags-module--spacer--3PH25",solid:"tags-module--solid--1rd2R",small:"tags-module--small--LGGu_",notALink:"tags-module--notALink--1gPig",imgResponsive:"tags-module--imgResponsive--10Kdw"}}}]);
//# sourceMappingURL=component---src-templates-tags-js-6bfa991f58c445d8ef9b.js.map