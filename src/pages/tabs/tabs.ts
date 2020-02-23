import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { FindPage } from '../find/find';
import { MessagePage } from '../message/message';
import { MyPage } from '../my/my';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FindPage;
  tab3Root = MessagePage;
  tab4Root = MyPage;

  constructor() {

  }
}
