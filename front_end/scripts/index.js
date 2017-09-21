import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(
  <App />,
  document.getElementById('root')
);

// function checkFadeOut(elem){
// 	if($(elem).scrollTop() + 1 + $(elem).innerHeight() >= $(elem)[0].scrollHeight) {
//            $(elem).find('.fade-out:first').fadeOut();
//         }else{
//         	$(elem).find('.fade-out:first').fadeIn();
//         }
// }

// $(document).ready(function(){
// 	$(".scroll-box").scroll(function(){
// 		checkFadeOut(this);
// 	})
// })
