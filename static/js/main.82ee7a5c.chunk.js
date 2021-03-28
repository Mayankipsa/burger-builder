(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__1cIPj",BreadTop:"BurgerIngredient_BreadTop__27NOV",Seeds1:"BurgerIngredient_Seeds1__3FD3k",Seeds2:"BurgerIngredient_Seeds2__2uqmR",Meat:"BurgerIngredient_Meat__2x4P-",Cheese:"BurgerIngredient_Cheese__syvPQ",Salad:"BurgerIngredient_Salad__1Mqiw",Bacon:"BurgerIngredient_Bacon__39sQy"}},,,,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__Btvqk",Label:"BuildControl_Label__KxCq6",Less:"BuildControl_Less__1LtLZ",More:"BuildControl_More__YMw86"}},,,,function(e,t,n){e.exports={Content:"Layout_Content__dJYR-"}},function(e,t,n){e.exports={Burger:"Burger_Burger__k81JW"}},function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__umpRG"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(10),i=n.n(s),c=(n(19),n(3)),d=n(4),o=n(6),l=n(5),u=function(e){return e.children},b=n(11),j=n.n(b),g=n(0),O=function(e){return Object(g.jsxs)(u,{children:[Object(g.jsx)("div",{children:"Toolbar, SideDrawer, BackDrop"}),Object(g.jsx)("main",{className:j.a.Content,children:e.children})]})},_=n(8),h=n(14),p=n(12),m=n.n(p),v=n(2),B=n.n(v),f=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(g.jsx)("div",{className:B.a.BreadBottom});break;case"bread-top":e=Object(g.jsxs)("div",{className:B.a.BreadTop,children:[Object(g.jsx)("div",{className:B.a.Seeds1}),Object(g.jsx)("div",{className:B.a.Seeds2})]});break;case"meat":e=Object(g.jsx)("div",{className:B.a.Meat});break;case"cheese":e=Object(g.jsx)("div",{className:B.a.Cheese});break;case"bacon":e=Object(g.jsx)("div",{className:B.a.Bacon});break;case"salad":e=Object(g.jsx)("div",{className:B.a.Salad});break;default:e=null}return e}}]),n}(r.Component),x=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(h.a)(Array(e.ingredients[t])).map((function(e,n){return Object(g.jsx)(f,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return console.log(t),0===t.length&&(t=Object(g.jsx)("p",{children:"Please start adding Ingredients."})),Object(g.jsxs)("div",{className:m.a.Burger,children:[Object(g.jsx)(f,{type:"bread-top"}),t,Object(g.jsx)(f,{type:"bread-bottom"})]})},C=n(13),y=n.n(C),k=n(7),I=n.n(k),N=function(e){return Object(g.jsxs)("div",{className:I.a.BuildControl,children:[Object(g.jsx)("div",{className:I.a.Label,children:e.label}),Object(g.jsx)("button",{className:I.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(g.jsx)("button",{className:I.a.More,onClick:e.added,children:"More"})]})},S=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],L=function(e){return Object(g.jsx)("div",{className:y.a.BuildControls,children:S.map((function(t){return Object(g.jsx)(N,{label:t.label,removed:function(){return e.ingredientRemoved(t.type)},added:function(){return e.ingredientAdded(t.type)},disabled:e.disabled[t.type]},t.label)}))})},M={salad:.5,cheese:.4,meat:1.3,bacon:.7},P=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4},e.addIngredientHandler=function(t){var n=e.state.ingredients[t]+1,r=Object(_.a)({},e.state.ingredients);r[t]=n;var a=M[t],s=e.state.totalPrice+a;e.setState({totalPrice:s,ingredients:r})},e.removeIngredientHandler=function(t){var n=e.state.ingredients[t];if(!(n<=0)){var r=n-1,a=Object(_.a)({},e.state.ingredients);a[t]=r;var s=M[t],i=e.state.totalPrice-s;e.setState({totalPrice:i,ingredients:a})}},e}return Object(d.a)(n,[{key:"render",value:function(){var e=Object(_.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return Object(g.jsxs)(u,{children:[Object(g.jsx)(x,{ingredients:this.state.ingredients}),Object(g.jsx)(L,{ingredientRemoved:this.removeIngredientHandler,ingredientAdded:this.addIngredientHandler,disabled:e})]})}}]),n}(r.Component),w=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(g.jsx)(O,{children:Object(g.jsx)(P,{})})}}]),n}(r.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))};i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root")),T()}],[[21,1,2]]]);
//# sourceMappingURL=main.82ee7a5c.chunk.js.map