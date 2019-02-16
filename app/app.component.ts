import { Component, ModuleWithComponentFactories } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic';
  blank = ` `;
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
  oneortwo = 2;
  info = ""

  winner(): void {
    // if winner make an alert or change the BGcolor of winning block
    if (this.one == this.player && this.two == this.player && this.three == this.player)
      console.log("123winner");
    else if (this.four == this.player && this.five == this.player && this.six == this.player)
      console.log("456winner");
    else if (this.seven == this.player && this.eight == this.player && this.nine == this.player)
      console.log("789winner");
    else if (this.one == this.player && this.four == this.player && this.seven == this.player)
      console.log("147winner");
      else if (this.two == this.player && this.five == this.player && this.eight == this.player)
      console.log("258winner");
      else if (this.three == this.player && this.six == this.player && this.nine == this.player)
      console.log("369winner");
      else if (this.one == this.player && this.five == this.player && this.nine == this.player)
      console.log("159winner");
      else if (this.three == this.player && this.five == this.player && this.seven == this.player)
      console.log("357winner");
else 
console.log("NO WINNER");
  }

  gameOver(): void {
    console.log("WINNER");
    //lock game???
  }

  currentPlayer(): void {
    if (this.player == this.x)
      this.player = this.o;
    else
      this.player = this.x;
  }

  numOfPlayers(): void {
    if (this.oneortwo == 1)
      this.oneortwo = 2;
    else
      this.oneortwo = 1;
    this.playcomputer();
  }

  playcomputer(): void {
    console.log("play the computer")
    this.info = "Playing the computer, make your first move, then the computer will go"
  }

  changeOne(): void {
    if (this.one == this.blank) {
      this.one = this.player;
      this.winner();
      this.currentPlayer();
    }
  }

  changeTwo(): void {
    if (this.two == this.blank) {
      this.two = this.player;
      this.winner();
      this.currentPlayer();
    };
  }

  changeThree(): void {
    if (this.three == this.blank) {
      this.three = this.player;
      this.winner();
      this.currentPlayer();
    };
  }

  changeFour(): void {
    if (this.four == this.blank) {
      this.four = this.player;
      this.winner();
      this.currentPlayer();
    };
  }

  changeFive(): void {
    if (this.five == this.blank) {
      this.five = this.player;
      this.winner();
      this.currentPlayer();
    };
  }

  changeSix(): void {
    if (this.six == this.blank) {
      this.six = this.player;
      this.winner();
      this.currentPlayer();
    };
  }

  changeSeven(): void {
    if (this.seven == this.blank) {
      this.seven = this.player;
      this.winner();
      this.currentPlayer();
    };
  }

  changeEight(): void {
    if (this.eight == this.blank) {
      this.eight = this.player;
      this.winner();
      this.currentPlayer();
    };
  }

  changeNine(): void {
    if (this.nine == this.blank) {
      this.nine = this.player;
      this.winner();
      this.currentPlayer();
    };
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
    this.oneortwo = 2;
    this.info = '';
  }
}
