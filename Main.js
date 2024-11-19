import App from './App.js'; // 전체를 묶은 컴포넌트 import함
import AppHeader from './components/AppHeader.js'; // AppHeader 컴포넌트 import함
import AppNav from './components/AppNav.js'; // AppNav 컴포넌트 import함
import AppView from './components/AppView.js'; // AppView 컴포넌트 import함
import BookComponent from './components/BookComponent.js'; // BookComponent 컴포넌트 import함

//  // 하나의 컴포넌트 안에 모든 컴포넌트 요소들을 넣을 수 있다.
//  const App = {
//     template : `
//         <app-header></app-header>
//         <app-nav></app-nav>
//         <app-view></app-view>
//     `
// }

// // 문자열 템플릿 예시
// const AppNav = {
//     template : `
//         <h2>nav</h2>
//         <ul>
//             <li><a href="#">메뉴1</a></li>
//             <li><a href="#">메뉴2</a></li>
//             <li><a href="#">메뉴3</a></li>
//             <li><a href="#">메뉴4</a></li>
//         </ul>
//     `
// }

// const AppHeader = {
//     template: `
//         <header>
//         <h1>Header</h1>
//         </header>
//     `
// }

// const BookComponent = {
//     template: `
//         <article class="book">
//         <div class="book__subtitle">{{ subtitle }}</div>
//         <div class="book__title">
//             HTML 강좌
//         </div>
//         </article>
//     `
// }

// const AppView = {
//     template : `
//         <main>
//         <section>
//             <book-component></book-component>
//             <book-component></book-component>
//             <book-component></book-component>
//         </section>
//         </main>
//     `
// } 


// 하나로 전부 묶은 컴포넌트 App을 createApp메소드 안에 전달한다. 
// craeteApp : Vue 애플리케이션 인스턴스를 생성
// const app = Vue.createApp({App}); createApp에는 옵션 객체를 전달해야 한다. {App}은 잘못된 문법
const app = Vue.createApp(App);

// 전역 컴포넌트 함수 선언
// 이름이 서로 달라도 태그로 사용할 수 있는 이유
// kebab-case원리에 따라서 사용할 수 있다.
app.component("AppNav", AppNav);
app.component("AppHeader", AppHeader);
// 이중 컴포넌트도 사용할 수 있다.
app.component("AppView", AppView);
app.component("BookComponent", BookComponent);
app.mount("#app");

// 컴포넌트를 설정할 땐 PascalCase 또는 kebab-case 둘 다 사용할 수 있다.
// html태그로서 컴포넌트를 설정할 땐 kebab-case를 추천한다.
