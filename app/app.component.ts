import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic';
  blank = '-';
  x = 'X';
  o = "O";
  one = this.blank;
  two = this.blank;
  three = this.blank;
  four = this.blank;
  five = this.blank;
  six = this.blank;
  seven = this.blank;
  eight = this.blank;
  nine = this.blank;
  player = this.x;

  currentPlayer() : void {
    if (this.player == this.x)
    this.player = this.o;
    else 
    this.player = this.x;
  }

  changeOne(): void {
    if (this.one == this.blank) {
      this.one = this.player;
      this.currentPlayer();
      // console.log('num ', this.one);
    // } else if (this.one == this.x) {
      // this.one = this.o;
      // console.log('num ', this.one);
    // } else if (this.one == this.o) {
      // this.one = this.blank;
      // console.log('num ', this.one);
    // };
    // console.log('num ', this.one);
  }
}

  changeTwo(): void {
    if (this.two == this.blank) {
      this.two = this.player;
      this.currentPlayer();
    // } else if (this.two == this.x) {
    //   this.two = this.o;
    //   console.log('num ', this.two);
    // } else if (this.two == this.o) {
    //   this.two = this.blank;
    //   console.log('num ', this.two);
    };
    // console.log('num ', this.two);
  }

  changeThree(): void {
    if (this.three == this.blank) {
      this.three = this.player;
      this.currentPlayer();
    // } else if (this.three == this.x) {
    //   this.three = this.o;
    //   console.log('three ', this.three);
    // } else if (this.three == this.o) {
    //   this.three = this.blank;
    //   console.log('three ', this.three);
    };
    // console.log('three ', this.three);
  }

  changeFour(): void {
    if (this.four == this.blank) {
      this.four = this.player;
      this.currentPlayer();
    // } else if (this.four == this.x) {
    //   this.four = this.o;
    //   console.log('four ', this.four);
    // } else if (this.four == this.o) {
    //   this.four = this.blank;
    //   console.log('four ', this.four);
    };
    // console.log('four ', this.four);
  }

  changeFive(): void {
    if (this.five == this.blank) {
      this.five = this.player;
      this.currentPlayer();
    // } else if (this.five == this.x) {
    //   this.five = this.o;
    //   console.log('five ', this.five);
    // } else if (this.five == this.o) {
    //   this.five = this.blank;
    //   console.log('five ', this.five);
    };
    // console.log('five ', this.five);
  }

  changeSix(): void {
    if (this.six == this.blank) {
      this.six = this.player;
      this.currentPlayer();
    // } else if (this.six == this.x) {
    //   this.six = this.o;
    //   console.log('six ', this.six);
    // } else if (this.six == this.o) {
    //   this.six = this.blank;
    //   console.log('six ', this.six);
    };
    // console.log('six ', this.six);
  }

  changeSeven(): void {
    if (this.seven == this.blank) {
      this.seven = this.player;
      this.currentPlayer();
    // } else if (this.seven == this.x) {
    //   this.seven = this.o;
    //   console.log('seven ', this.seven);
    // } else if (this.seven == this.o) {
    //   this.seven = this.blank;
    //   console.log('seven ', this.seven);
    };
    // console.log('seven ', this.seven);
  }

  changeEight(): void {
    if (this.eight == this.blank) {
      this.eight = this.player;
      this.currentPlayer();
    // } else if (this.eight == this.x) {
    //   this.eight = this.o;
    //   console.log('eight ', this.eight);
    // } else if (this.eight == this.o) {
    //   this.eight = this.blank;
    //   console.log('eight ', this.eight);
    };
    // console.log('eight ', this.eight);
  }

  changeNine(): void {
    if (this.nine == this.blank) {
      this.nine = this.player;
      this.currentPlayer();
    // } else if (this.nine == this.x) {
    //   this.nine = this.o;
    //   console.log('nine ', this.nine);
    // } else if (this.nine == this.o) {
    //   this.nine = this.blank;
    //   console.log('nine ', this.nine);
    };
    // console.log('nine ', this.nine);
  }

  resetGame() {
    this.one = this.blank;
    this.two = this.blank;
    this.three = this.blank;
    this.four = this.blank;
    this.five = this.blank;
    this.six = this.blank;
    this.seven = this.blank;
    this.eight = this.blank;
    this.nine = this.blank;
    this.player = this.x;
  }

}
