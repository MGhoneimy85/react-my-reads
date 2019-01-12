(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(15),r=a.n(s),l=a(5),c=a(6),i=a(8),u=a(7),h=a(9),m=a(33),p=a(32),d=a(13),k="https://reactnd-books-api.udacity.com",b=localStorage.token;b||(b=localStorage.token=Math.random().toString(36).substr(-8));var f={Accept:"application/json",Authorization:b},v=function(){return fetch("".concat(k,"/books"),{headers:f}).then(function(e){return e.json()}).then(function(e){return e.books})},E=function(e,t){return fetch("".concat(k,"/books/").concat(e.id),{method:"PUT",headers:Object(d.a)({},f,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},g=function(e){return fetch("".concat(k,"/search"),{method:"POST",headers:Object(d.a)({},f,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},y=(a(22),a(30)),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={value:a.props.book.shelf},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"updateVal",value:function(e){this.props.onUpdateBook(this.props.book,e),this.setState({value:e})}},{key:"render",value:function(){var e=this;return n.a.createElement("li",{key:this.props.book.id},n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"book-top"},this.props.book.imageLinks?n.a.createElement("div",{className:"book-cover",style:{backgroundImage:"url("+this.props.book.imageLinks.smallThumbnail+")"}}):null,n.a.createElement("div",{className:"book-shelf-changer"},n.a.createElement("select",{value:this.state.value?this.state.value:"none",onChange:function(t){return e.updateVal(t.target.value)}},n.a.createElement("option",{value:"move",disabled:!0},"Move to..."),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read"),n.a.createElement("option",{value:"none"},"None")))),n.a.createElement("div",{className:"book-title"},this.props.book.title),n.a.createElement("div",{className:"book-authors"},this.props.book.authors)))}}]),t}(o.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"loading-div"},"Loading...")}}]),t}(o.Component),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={query:"",loading:!1,books:[],noResults:!1},a.SearchforBooks=function(e){a.setState({query:e}),e&&""!==e?a.setState({loading:!0},function(){g(e).then(function(e){e.error?a.setState({books:[],loading:!1,noResults:!0}):(a.props.books.forEach(function(t){e.forEach(function(e){t.id===e.id&&(e.shelf=t.shelf,t.shelf=e.shelf)})}),a.setState({books:e,loading:!1,noResults:!1}))}).catch(function(e){console.log(e)})}):a.setState({books:[]})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"search-books"},this.state.loading?n.a.createElement(j,null):null,n.a.createElement("div",{className:"search-books-bar"},n.a.createElement(y.a,{className:"close-search",to:"/ListBooks"},"Back"),n.a.createElement("div",{className:"search-books-input-wrapper"},n.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:this.state.query,onChange:function(t){return e.SearchforBooks(t.target.value)}}))),n.a.createElement("div",{className:"search-books-results"},this.state.noResults?n.a.createElement("div",null," No results found "):null,n.a.createElement("ol",{className:"books-grid"},this.state.books.map(function(t,a){return n.a.createElement(N,{book:t,key:a,onUpdateBook:e.props.onUpdate})}))))}}]),t}(o.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"list-books"},n.a.createElement("div",{className:"list-books-title"},n.a.createElement("h1",null,"my books shelfs")),n.a.createElement("div",{className:"list-books-content"},n.a.createElement("div",null,n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Currently Reading"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},this.props.books.filter(function(e){return"currentlyReading"===e.shelf}).map(function(t,a){return n.a.createElement(N,{book:t,key:a,onUpdateBook:e.props.onUpdate})})))),n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Want to Read"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},this.props.books.filter(function(e){return"wantToRead"===e.shelf}).map(function(t,a){return n.a.createElement(N,{book:t,key:a,onUpdateBook:e.props.onUpdate})})))),n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Read"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},this.props.books.filter(function(e){return"read"===e.shelf}).map(function(t,a){return n.a.createElement(N,{book:t,key:a,onUpdateBook:e.props.onUpdate})})))))),n.a.createElement("div",{className:"open-search"},n.a.createElement(y.a,{to:"/SearchBook"},"Search book")))}}]),t}(o.Component),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={allBooks:[],loading:!1},a.getAllBooks=function(){a.setState({loading:!0},function(){v().then(function(e){a.setState({allBooks:e}),a.setState({loading:!1})})})},a.UpdateBookShelf=function(e,t){a.setState({loading:!0},function(){E(e,t).then(function(){a.getAllBooks()})})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getAllBooks()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"app"},this.state.loading?n.a.createElement(j,null):null,n.a.createElement(m.a,null,n.a.createElement(p.a,{path:"/",render:function(){return n.a.createElement(S,{books:e.state.allBooks,onUpdate:e.UpdateBookShelf})}}),n.a.createElement(p.a,{path:"/SearchBook",render:function(t){t.history;return n.a.createElement(O,{books:e.state.allBooks,onUpdate:e.UpdateBookShelf})}})))}}]),t}(n.a.Component),U=(a(27),a(31));r.a.render(n.a.createElement(U.a,null,n.a.createElement(B,null)),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.ebf49acf.chunk.js.map