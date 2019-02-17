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
  info = "";
  bgColorBlue1 = true;
  bgColorBlue2 = true;
  bgColorBlue3 = true;
  bgColorBlue4 = true;
  bgColorBlue5 = true;
  bgColorBlue6 = true;
  bgColorBlue7 = true;
  bgColorBlue8 = true;
  bgColorBlue9 = true;
  stillPlaying = true;

  winner(): void {
    // if winner make an alert or change the BGcolor of winning block
    if (this.one == this.player && this.two == this.player && this.three == this.player)
      this.winner123();
    if (this.four == this.player && this.five == this.player && this.six == this.player)
      this.winner456();
    if (this.seven == this.player && this.eight == this.player && this.nine == this.player)
      this.winner789();
    if (this.one == this.player && this.four == this.player && this.seven == this.player)
      this.winner147();
    if (this.two == this.player && this.five == this.player && this.eight == this.player)
      this.winner258();
    if (this.three == this.player && this.six == this.player && this.nine == this.player)
      this.winner369();
    if (this.one == this.player && this.five == this.player && this.nine == this.player)
      this.winner159();
    if (this.three == this.player && this.five == this.player && this.seven == this.player)
      this.winner357();
  }

  winner123(): void {
    this.bgColorBlue1 = false;
    this.bgColorBlue2 = false;
    this.bgColorBlue3 = false;
    console.log("winner123");
    this.stillPlaying = false;
  }

  winner456(): void {
    this.bgColorBlue4 = false;
    this.bgColorBlue5 = false;
    this.bgColorBlue6 = false;
    console.log("winner456");
    this.stillPlaying = false;
  }

  winner789(): void {
    this.bgColorBlue7 = false;
    this.bgColorBlue8 = false;
    this.bgColorBlue9 = false;
    console.log("winner789");
    this.stillPlaying = false;
  }

  winner147(): void {
    this.bgColorBlue1 = false;
    this.bgColorBlue4 = false;
    this.bgColorBlue7 = false;
    console.log("winner147");
    this.stillPlaying = false;
  }

  winner258(): void {
    this.bgColorBlue2 = false;
    this.bgColorBlue5 = false;
    this.bgColorBlue8 = false;
    console.log("winner258");
    this.stillPlaying = false;
  }

  winner369(): void {
    this.bgColorBlue3 = false;
    this.bgColorBlue6 = false;
    this.bgColorBlue9 = false;
    console.log("winner369");
    this.stillPlaying = false;
  }


  winner159(): void {
    this.bgColorBlue1 = false;
    this.bgColorBlue5 = false;
    this.bgColorBlue9 = false;
    console.log("winner159");
    this.stillPlaying = false;
  }


  winner357(): void {
    this.bgColorBlue3 = false;
    this.bgColorBlue5 = false;
    this.bgColorBlue7 = false;
    console.log("winner357");
    this.stillPlaying = false;
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
    this.bgColorBlue1 = true;
    this.bgColorBlue2 = true;
    this.bgColorBlue3 = true;
    this.bgColorBlue4 = true;
    this.bgColorBlue5 = true;
    this.bgColorBlue6 = true;
    this.bgColorBlue7 = true;
    this.bgColorBlue8 = true;
    this.bgColorBlue9 = true;
    this.stillPlaying = true;
  }
}
